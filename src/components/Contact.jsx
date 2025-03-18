import { motion } from "framer-motion";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");

    emailjs
      .sendForm('service_exbc9vf', 'template_ywxfhul', form.current, {
        publicKey: 'rA50yi1vXYOZtFfKl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
  };

  

  return (
    <div className="contact flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] px-4">
      {/* Page Title Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Get in Touch
        </h1>
      </motion.div>

      {/* Outer Glow Beam Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, boxShadow: "0px 0px 50px rgba(0, 150, 255, 0.6)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between shadow-xl"
      >
        {/* Left Side - Intro Message */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left text-white"
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Let's Connect</h2>
          <p className="text-gray-300 mt-2">
            Have a project in mind? Fill out the form, and let's discuss how I can help bring your ideas to life.
          </p>
          <div className="mt-6">
            <p className="text-gray-400">📍 Location: Accra, Ghana</p>
            <p className="text-gray-400">📧 Email: eligraphicsweb@email.com</p>
            <p className="text-gray-400">📞 Phone: +233 53 251 8124</p>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full mt-6 md:mt-0 space-y-4"
          onSubmit={handleSubmit}
          ref={form}
        >
          <motion.div whileFocus={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 mt-1 bg-white/20 backdrop-blur-lg border border-gray-400/40 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 mt-1 bg-white/20 backdrop-blur-lg border border-gray-400/40 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 mt-1 bg-white/20 backdrop-blur-lg border border-gray-400/40 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 h-28 resize-none"
              placeholder="Your Message"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-md mt-4 hover:bg-blue-600 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
