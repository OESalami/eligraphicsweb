import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

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
    emailjs
      .sendForm("service_exbc9vf", "template_ywxfhul", form.current, {
        publicKey: "rA50yi1vXYOZtFfKl",
      })
      .then(
        () => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#111] text-white px-6 py-20 overflow-hidden"
    >
      {/* Soft glowing circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />

      {/* Section Title */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Get In <span className="text-green-400">Touch</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Let’s build something extraordinary together. Reach out, and I’ll get back to you soon.
        </p>
      </motion.div>

      {/* Contact Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10"
      >
        {/* Animated Connection Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute hidden md:block left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-green-500 via-white/60 to-green-400 animate-pulse"
          style={{ transformOrigin: "top" }}
        />

        {/* Left - Info */}
        <div className="md:w-1/2 space-y-6">
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold text-green-400"
          >
            Let’s Connect
          </motion.h3>

          <p className="text-gray-300 leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi —
            I’m always open to new opportunities and collaborations.
          </p>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-3">
              <FiMapPin className="text-green-400" /> Accra, Ghana
            </p>
            <p className="flex items-center gap-3">
              <FiMail className="text-green-400" /> eligraphicsweb@email.com
            </p>
            <p className="flex items-center gap-3">
              <FiPhone className="text-green-400" /> +233 53 251 8124
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-4"
        >
          {["name", "email", "message"].map((field) => (
            <motion.div key={field} whileFocus={{ scale: 1.02 }} className="flex flex-col">
              <label className="text-sm text-gray-300 capitalize mb-1">
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  required
                  className="p-3 bg-white/10 border border-gray-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 h-32 resize-none placeholder-gray-400"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  required
                  className="p-3 bg-white/10 border border-gray-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 placeholder-gray-400"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 mt-2 bg-green-400 text-white rounded-lg font-bold shadow-lg hover:opacity-90 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
