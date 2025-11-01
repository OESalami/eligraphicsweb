import { IoMdClose } from 'react-icons/io';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import useActiveTab from '../hooks/useActiveTab';
import Logo from '../assets/images/logo.png';

const SideMenu = ({ toggleMenu, menuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeTab, handleSetActiveTab } = useActiveTab();
  const isMainPage = location.pathname === '/';

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 600,
      smooth: 'easeInOutQuart',
      offset: -60,
    });
  };

  const handleClick = async (section) => {
    handleSetActiveTab(section);

    if (!isMainPage) {
      // Navigate home first, then scroll
      await navigate('/');
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }

    toggleMenu();
  };

  const menuItems = ['home', 'about', 'service', 'testimonial'];

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Dim Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black z-[50] md:hidden"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="fixed top-0 right-0 w-4/5 sm:w-2/3 md:w-[24rem] h-[100vh] bg-white z-[60] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <img src={Logo} alt="logo" className="w-10 h-10" />
                <h3 className="text-xl font-extrabold text-green-600 tracking-wide">
                  ELIGWEB
                </h3>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoMdClose className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-center items-center flex-1 space-y-6 mt-2">
              {menuItems.map((section, i) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleClick(section)}
                    className={`block w-full py-3 text-lg font-semibold uppercase tracking-wide transition-colors ${
                      activeTab === section
                        ? 'text-green-600 border-b-2 border-green-500'
                        : 'text-gray-800 hover:text-green-600'
                    }`}
                  >
                    {section}
                  </button>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="w-1/2 border-t border-gray-200 my-4"></div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-3/4"
              >
                <button
                  onClick={() => handleClick('contact')}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-md"
                >
                  Contact Us
                </button>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="pb-6 bg-white text-center border-t border-gray-100">
              <p className="text-sm text-gray-400 mt-3">
                © 2025 EliGraphics & Web
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
