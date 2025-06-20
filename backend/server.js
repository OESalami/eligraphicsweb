/**
 * Minimal Express server to use the Google Drive upload route
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load .env variables

const driveUploadRouter = require('./uploadDrive'); // Make sure this matches your file name

const app = express();

// ✅ CORS setup - allow localhost and production frontend
app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route
app.use('/api', driveUploadRouter); // ✅ Now route is: /api/upload-drive

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
