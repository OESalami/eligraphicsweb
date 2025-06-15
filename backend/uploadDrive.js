/**
 * Google Drive Upload Backend (Node.js/Express)
 * - Accepts files and seller info from frontend
 * - Creates a folder per seller in Google Drive
 * - Uploads files to that folder
 * - Returns the folder URL
 */

const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Google Drive Auth Setup
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/drive'],
});
const drive = google.drive({ version: 'v3', auth });

// Helper: Create folder in Drive
async function createSellerFolder(sellerName, sellerEmail) {
  const folderMetadata = {
    name: `${sellerName} - ${sellerEmail}`,
    mimeType: 'application/vnd.google-apps.folder',
    parents: [process.env.GDRIVE_PARENT_FOLDER_ID], // Set this in your .env
  };
  const folder = await drive.files.create({
    resource: folderMetadata,
    fields: 'id',
  });
  return folder.data.id;
}

// Helper: Upload file to Drive folder
async function uploadFileToFolder(file, folderId) {
  const fileMetadata = {
    name: file.originalname,
    parents: [folderId],
  };
  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.path),
  };
  const res = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id',
  });
  // Optionally: Make file public (not required for folder link)
  return res.data.id;
}

// Helper: Make folder public
async function makeFolderPublic(folderId) {
  await drive.permissions.create({
    fileId: folderId,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });
}

// Helper: Get folder URL
function getFolderUrl(folderId) {
  return `https://drive.google.com/drive/folders/${folderId}`;
}

// Main Upload Route
router.post('/upload-drive', upload.array('files', 30), async (req, res) => {
  try {
    const { sellerName, sellerEmail } = req.body;
    const files = req.files;

    if (!sellerName || !sellerEmail || !files || files.length === 0) {
      return res.status(400).json({ error: 'Missing seller info or files' });
    }

    // 1. Create folder
    const folderId = await createSellerFolder(sellerName, sellerEmail);

    // 2. Upload files
    for (const file of files) {
      await uploadFileToFolder(file, folderId);
      fs.unlinkSync(file.path); // Clean up local file
    }

    // 3. Make folder public
    await makeFolderPublic(folderId);

    // 4. Return folder URL
    const folderUrl = getFolderUrl(folderId);
    res.json({ folderUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload to Google Drive' });
  }
});

module.exports = router;