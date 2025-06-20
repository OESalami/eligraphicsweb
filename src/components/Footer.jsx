import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-black/90 backdrop-blur-sm py-6 px-6 text-center text-white border-t border-white/20"
    >
      {/* Top Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Eligraphics & Web</h2>
          <p className="text-gray-300 text-sm mt-1">
            Building digital experiences with innovation & creativity.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.facebook.com/share/1DSu8aHKiJ/?mibextid=wwXIfr"
            className="text-gray-300 hover:text-blue-400 text-2xl transition"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://wa.me/233532518124?text=Hello%20Eligraphics%20and%20Web"
            className="text-gray-300 hover:text-blue-400 text-2xl transition hover:text-green-400"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.instagram.com/elidevelopers?igsh=MWdoOThxcWYxZTdnNQ%3D%3D&utm_source=qr"
            className="text-gray-300 hover:text-blue-400 text-2xl transition hover:text-pink-400"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-gray-300 hover:text-blue-400 text-2xl transition"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400/30 mt-4 pt-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Eligraphics & Web. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
