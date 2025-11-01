import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { HiBars3BottomRight } from 'react-icons/hi2';
import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Logo from '../assets/images/logo.png';
import useActiveTab from '../hooks/useActiveTab';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { activeTab, handleSetActiveTab } = useActiveTab();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isMainPage = location.pathname === '/';

  const handleNavigation = (section) => {
    handleSetActiveTab(section);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navItemStyles = (section) => `
    cursor-pointer font-medium tracking-wide
    ${activeTab === section ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-100 hover:text-green-400'}
    transition-all duration-300
  `;

  return (
    <header
      className={`sticky top-0 z-50 bg-[#0b0b0d] backdrop-blur-sm text-white transition-all duration-300`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 h-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <h3 className="hidden sm:block text-xl sm:text-2xl bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent font-extrabold uppercase">
              ELIGWEB
            </h3>
          </ScrollLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {isMainPage ? (
            <>
              <ScrollLink
                to="home"
                spy
                smooth
                duration={500}
                className={navItemStyles('home')}
                onClick={() => handleSetActiveTab('home')}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                spy
                smooth
                duration={500}
                className={navItemStyles('about')}
                onClick={() => handleSetActiveTab('about')}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="service"
                spy
                smooth
                duration={500}
                className={navItemStyles('service')}
                onClick={() => handleSetActiveTab('service')}
              >
                Service
              </ScrollLink>
              <ScrollLink
                to="testimonial"
                spy
                smooth
                duration={500}
                className={navItemStyles('testimonial')}
                onClick={() => handleSetActiveTab('testimonial')}
              >
                Testimonial
              </ScrollLink>
            </>
          ) : (
            <>
              {['home', 'about', 'service', 'testimonial'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={navItemStyles(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </>
          )}

          {/* <RouterLink
            to="/partnership"
            className={navItemStyles('partnership')}
            onClick={() => handleSetActiveTab('partnership')}
          >
            Partnership
          </RouterLink>

          <RouterLink
            to="/booster"
            className={navItemStyles('booster')}
            onClick={() => handleSetActiveTab('booster')}
          >
            Booster
          </RouterLink> */}

          {/* Contact Button */}
          {isMainPage ? (
            <ScrollLink
              to="contact"
              spy
              smooth
              duration={500}
              onClick={() => handleSetActiveTab('contact')}
            >
              <button className="py-2 px-5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-sm">
                Contact
              </button>
            </ScrollLink>
          ) : (
            <button
              onClick={() => handleNavigation('contact')}
              className="py-2 px-5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-sm"
            >
              Contact
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle Menu"
        >
          <HiBars3BottomRight className="h-7 w-7 text-green-400" />
        </button>

        {/* Side Menu (Mobile only) */}
{menuOpen && (
  <div className="md:hidden">
    <SideMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
  </div>
)}

      </nav>
    </header>
  );
};

export default Navbar;
