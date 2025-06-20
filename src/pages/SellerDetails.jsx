import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// Terms & Conditions Modal
const TermsModal = ({ open, onClose }) => (
  open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-lg font-semibold mb-4">Seller Terms &amp; Conditions</h3>
        <div className="text-gray-700 text-sm max-h-96 overflow-y-auto space-y-3">
          <p><strong>1. Overview</strong><br />
            By partnering with us, you agree to allow our team to advertise and promote your products on your behalf in exchange for an agreed commission per sale. You retain ownership of your products and are responsible for their delivery to customers.
          </p>
          <p><strong>2. How It Works</strong><br />
            You submit your product information and images.<br />
            We promote your products using our strategies — you don’t pay for ads.<br />
            When a customer orders, payment is made to us.<br />
            We deduct our agreed commission and transfer your balance via Mobile Money or Bank, based on your preference.<br />
            You are then notified to deliver the product to the customer.
          </p>
          <p><strong>3. Payments</strong><br />
            Payments are processed within 24–48 hours after successful delivery confirmation.<br />
            Sellers can choose to be paid via Mobile Money or Bank Transfer.<br />
            A record of all sales and payouts will be made available to you upon request.
          </p>
          <p><strong>4. Seller Responsibilities</strong><br />
            Provide accurate product descriptions and pricing.<br />
            Ensure timely and professional delivery of all products.<br />
            Communicate promptly in case of any delivery delays or changes.
          </p>
          <p><strong>5. Our Responsibilities</strong><br />
            Promote your products across platforms using proven marketing strategies.<br />
            Manage customer inquiries and order processing.<br />
            Handle payment processing and keep transparent records.<br />
            Provide support for seller and customer questions.
          </p>
          <p><strong>6. Commission</strong><br />
            Commission rates are discussed and agreed before your products are listed.<br />
            No upfront fees — we only earn when you earn.
          </p>
          <p><strong>7. Termination</strong><br />
            You can opt out at any time by notifying us. We reserve the right to remove any seller who does not meet delivery standards or misrepresents their products.
          </p>
          <p><strong>8. Agreement</strong><br />
            By submitting your application, you confirm that you’ve read and agreed to these terms.
          </p>
        </div>
      </div>
    </div>
  ) : null
);

// Product Media Preview Grid
const MediaPreviewGrid = ({ previewImages, files }) => (
  <div className="grid grid-cols-4 gap-4 mt-4">
    {previewImages.map((src, index) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        key={index}
      >
        {files[index] && files[index].type.startsWith('video') ? (
          <video
            src={src}
            controls
            className="w-full h-24 object-cover rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300"
          />
        ) : (
          <img
            src={src}
            alt={`preview-${index}`}
            className="w-full h-24 object-cover rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300"
          />
        )}
      </motion.div>
    ))}
  </div>
);

// WhatsApp Alternative Section
const WhatsAppSection = () => (
  <span className="w-full lg:w-auto text-center flex flex-col items-center lg:items-start">
    <span className="text-gray-500 mb-1">Having trouble with the form?</span>
    <a
      href="https://wa.me/233532518124?text=Hi!%20I'm%20interested%20in%20becoming%20a%20seller.%20Here%20are%20my%20details%3A%0A%0AFull%20Name%3A%20%0AWhatsApp%20Number%3A%20%0AEmail%3A%20%0AAccount%20Name%3A%20%0AProduct%20Category%3A%20%0ALocation%3A%20%0APayment%20Method%3A%20%0AMoMo/Bank%20Details%3A%20%0A%0A(Please%20attach%20up%20to%204%20product%20images)"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
    >
      <FaWhatsapp className="text-xl" /> Apply via WhatsApp
    </a>
  </span>
);

// Seller Application Form
const SellerForm = ({
  formData,
  handleInputChange,
  handleImageChange,
  previewImages,
  agreed,
  setAgreed,
  showModal,
  setShowModal,
  handleSubmit,
  isLoading,
  isSubmitted,
  setPreviewImages,
  setFormData
}) => (
  
  <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
    {/* Input Fields */}
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="you@example.com"
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
      <input
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleInputChange}
        placeholder="+233xxxxxxxxx"
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        className="mt-1 w-full px-4 pr-6 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
        required
      >
        <option value="">Select a category</option>
        <option value="fashion">Fashion</option>
        <option value="drinks">Drinks</option>
        <option value="accessories">Accessories</option>
        <option value="electronics">Electronics</option>
        <option value="beauty">Beauty</option>
        <option value="home">Home & Living</option>
        <option value="food">Food</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Accra, Kumasi"
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleInputChange}
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
        required
      >
        <option>Mobile Money</option>
        <option>Bank Transfer</option>
      </select>
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">MoMo/Bank Details</label>
      <input
        type="text"
        name="account"
        value={formData.account}
        onChange={handleInputChange}
        placeholder="055XXXXXXX or UBA 0123456789"
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    </div>
    <div className="group transition-all duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">Account Name</label>
      <input
        type="text"
        name="accountName"
        value={formData.accountName}
        onChange={handleInputChange}
        placeholder="Enter account holder's name"
        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    </div>
    {/* Image Upload Section */}
    <div className="lg:col-span-2 space-y-3">
      <label className="block text-sm font-medium text-gray-700">Upload Product Images or Videos</label>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors duration-300">
        <input
          name="media"
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="space-y-2">
            <div className="text-blue-500">Click to upload or drag and drop</div>
            <p className="text-sm text-gray-400">You can upload up to 30 images or videos per product</p>
          </div>
        </label>
      </div>
      <MediaPreviewGrid previewImages={previewImages} files={formData.files} />
    </div>
    {/* Terms and Conditions Checkbox */}
    <div className="lg:col-span-2 flex items-center mt-2">
      <input
        type="checkbox"
        id="terms"
        checked={agreed}
        onChange={e => setAgreed(e.target.checked)}
        className="mr-2 accent-blue-600"
        required
      />
      <label htmlFor="terms" className="text-sm text-gray-700">
        I agree to the{' '}
        <button
          type="button"
          className="text-blue-600 underline focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          Terms and Conditions
        </button>
      </label>
    </div>
    {/* Buttons Section */}
    <div className="pt-6 lg:col-span-2">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <button
          type="submit"
          className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-10 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center"
          disabled={!agreed || isLoading}
          style={{ opacity: agreed ? 1 : 0.6, cursor: agreed ? 'pointer' : 'not-allowed' }}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            "Submit Application"
          )}
        </button>
        {isSubmitted && (
          <p className="text-green-600 font-medium text-sm mt-4">✅ Application submitted successfully! We'll contact you soon.</p>
        )}
        <span className="text-center text-gray-400 font-semibold lg:mx-4">OR</span>
        <WhatsAppSection />
      </div>
    </div>
  </form>
);

// Main SellerDetails Page
const SellerDetails = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    category: '',
    location: '',
    paymentMethod: 'Mobile Money',
    account: '',
    accountName: '',
    files: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 30);
    setPreviewImages(files.map(file => URL.createObjectURL(file)));
    setFormData(prev => ({ ...prev, files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    setIsLoading(true);

    let driveFolderUrl = '';

    try {
      // 1. Upload files to Google Drive via backend
      if (formData.files.length > 0) {
        const uploadData = new FormData();
        formData.files.forEach((file) => uploadData.append('files', file));
        uploadData.append('sellerName', formData.name);
        uploadData.append('sellerEmail', formData.email);

        // const res = await fetch('/api/upload-drive', {
        //   method: 'POST',
        //   body: uploadData,
        // });

        // Backend URL for Google Drive upload (Render.com)
        const API_BASE_URL = "https://eligweb-backend.onrender.com";

        const res = await fetch(`${API_BASE_URL}/api/upload-drive`, {
        method: 'POST',
        body: uploadData,
      });


        if (!res.ok) throw new Error('Failed to upload files to Google Drive');
        const { folderUrl } = await res.json();
        driveFolderUrl = folderUrl;
      }

      // 2. Send seller data + folder URL to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbzj53jOBMviC_t7OecVyzeMdDZMQJ_kksT3vFQA0gV3VqTvE8aSdreZihJRI9fmdNUO/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          images: [], // Optionally, you can send file names or links
          folder: driveFolderUrl,
        }),
      });

      // 3. Send to EmailJS (include folder URL)
      await emailjs.send(
        'service_71gkp3l',
        'template_6ffbjg9',
        {
          ...formData,
          images: '',
          folder: driveFolderUrl,
        },
        'RARgA_cwPenH2Zs2r'
      );

      setIsSubmitted(true);
      setPreviewImages([]);
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        category: '',
        location: '',
        paymentMethod: 'Mobile Money',
        account: '',
        accountName: '',
        files: [],
      });
      setTimeout(() => setIsSubmitted(false), 60000);
    } catch (err) {
      alert('Submission failed: ' + (err.message || err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6 flex items-center justify-center font-['Poppins']">
      <TermsModal open={showModal} onClose={() => setShowModal(false)} />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full max-w-2xl lg:max-w-4xl 
          p-0 sm:p-8
          bg-transparent sm:bg-white
          border-0 sm:border border-gray-100
          shadow-none sm:shadow-2xl
          rounded-none sm:rounded-2xl
          backdrop-blur-0 sm:backdrop-blur-sm
          bg-opacity-100 sm:bg-opacity-95
        "
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              You're One Step Away
            </span>
            <br />
            <span className="text-xl md:text-2xl lg:text-4xl">
              from Selling Without Spending on Ads
            </span>
          </h2>
          <p className="text-gray-600 mt-4 font-['Inter'] text-lg">Fill out the form below to become a seller. We'll review your info and reach out within 24–48 hours.</p>
          <p className="text-xs text-gray-400 mt-2 italic font-['Inter']">We'll never share your information. Your success is our priority.</p>

          {/* Form Maintenance Message */}
          <div className="mt-4 bg-red-100 text-red-700 px-4 py-3 rounded-lg text-sm text-center">
            <strong>❗ Form Notice:</strong> Our application form is currently under maintenance.
            Please{' '}
            <a
              href="https://wa.me/233532518124?text=Hi!%20I'm%20interested%20in%20becoming%20a%20seller.%20Here%20are%20my%20details%3A%0A%0AFull%20Name%3A%20%0AWhatsApp%20Number%3A%20%0AEmail%3A%20%0AAccount%20Name%3A%20%0AProduct%20Category%3A%20%0ALocation%3A%20%0APayment%20Method%3A%20%0AMoMo/Bank%20Details%3A%20%0A%0A(Please%20attach%20images%2Fvideo%20of%20your%20products)"
              className="underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              apply via WhatsApp
            </a>{' '}
            while we resolve the issue.
          </div>
        </div>
        <SellerForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          previewImages={previewImages}
          agreed={agreed}
          setAgreed={setAgreed}
          showModal={showModal}
          setShowModal={setShowModal}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          isSubmitted={isSubmitted}
          setPreviewImages={setPreviewImages}
          setFormData={setFormData}
        />
      </motion.div>
    </div>
  );
};

export default SellerDetails;