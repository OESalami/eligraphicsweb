import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-[#0A0A0A] text-white border-t border-white/10 py-10 px-6 overflow-hidden"
    >
      {/* Soft Top Glow Line */}
      {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-200 via-white/50 to-green-200 " /> */}

      {/* Decorative Glow Circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
            Eligraphics & Web
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Crafting modern web experiences, creative designs, and digital growth solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          {[
            { icon: <FaFacebook />, color: "hover:text-green-400", href: "https://www.facebook.com/share/1DSu8aHKiJ/?mibextid=wwXIfr" },
            { icon: <FaWhatsapp />, color: "hover:text-green-400", href: "https://wa.me/233532518124?text=Hello%20Eligraphics%20and%20Web" },
            { icon: <FaInstagram />, color: "hover:text-green-400", href: "https://www.instagram.com/elidevelopers?igsh=MWdoOThxcWYxZTdnNQ%3D%3D&utm_source=qr" },
            { icon: <FaLinkedin />, color: "hover:text-green-400", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`text-gray-400 ${item.color} transition-transform text-2xl`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700/40 mt-6 pt-4 text-center">
        <p className="text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} <span className="text-green-400 font-semibold">Eligraphics & Web</span> — All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
