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

    const isSellWithUsPage = location.pathname === '/sellwithus';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Checking if we're on the main page
    const isMainPage = location.pathname === '/';

    // Handle navigation for non-main pages
    const handleNavigation = (section) => {
      handleSetActiveTab(section);
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth'});
      }, 100);
    };

    const navItemStyles = (section) => `
      cursor-pointer
      ${activeTab === section ? 'text-blue-400 font-bold' : 'text-gray-200 hover:text-blue-400'}
      transition-colors duration-300
    `;

    // Example: adjust these paths to match your routes
    const activeNav = 
      location.pathname === '/sell-with-us' ? 'sell-with-us'
      : location.pathname === '/' ? 'home'
      : '';

    return (
        <header className={`sticky ${isSellWithUsPage ? 'bg-[#111111]' : 'bg-[#111111]'} 
text-gray-200 top-0 z-50 transition-colors duration-300`}>
            <nav className="container h-20 mx-auto flex items-center justify-between py-4 px-6">
                {/* Left - Logo */}
                <div className="flex items-center">
                    <ScrollLink to="/" className="flex items-center text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold uppercase cursor-pointer">
                        <img src={Logo} alt="Logo" className="h-12 w-12 mr-2 text-blue" />
                        <h3 className="text-white m-0 p-0 sm:text-2">ELIGWEB</h3>
                    </ScrollLink>
                </div>

                {/* Middle - Links */}
                <div className='text-x items-center'>
                    <div className='hidden md:flex space-x-4 justify-center items-center'>
                        {isMainPage ? (
                            <>
                                <ScrollLink to='home' spy={true} smooth={true} duration={500} 
                                    className={navItemStyles('home')}
                                    onClick={() => handleSetActiveTab('home')} > Home </ScrollLink>
                                <ScrollLink 
                                    to='about' 
                                    spy={true}
                                    smooth={true} 
                                    duration={500} 
                                    className={navItemStyles('about')}
                                    onClick={() => handleSetActiveTab('about')}
                                >
                                    About
                                </ScrollLink>
                                <ScrollLink 
                                    to='service' 
                                    spy={true}
                                    smooth={true} 
                                    duration={500} 
                                    className={navItemStyles('service')}
                                    onClick={() => handleSetActiveTab('service')}
                                >
                                    Service
                                </ScrollLink>
                                <ScrollLink 
                                    to='testimonial' 
                                    spy={true}
                                    smooth={true} 
                                    duration={500} 
                                    className={navItemStyles('testimonial')}
                                    onClick={() => handleSetActiveTab('testimonial')}
                                >
                                    Testimonial
                                </ScrollLink>
                            </>
                        ) : (
                            <>
                                <button onClick={() => handleNavigation('home')} className={navItemStyles('home')}>Home</button>
                                <button onClick={() => handleNavigation('about')} className={navItemStyles('about')}>About</button>
                                <button onClick={() => handleNavigation('service')} className={navItemStyles('service')}>Service</button>
                                <button onClick={() => handleNavigation('testimonial')} className={navItemStyles('testimonial')}>Testimonial</button>
                            </>
                        )}
                        <RouterLink 
                            to='/sellwithus' 
                            className={navItemStyles('sellwithus')}
                            onClick={() => handleSetActiveTab('sellwithus')}
                        >
                            Sell with us
                        </RouterLink>
                        <RouterLink 
                            to='/applicants'
                        >
                            Applicants
                        </RouterLink>
                        {isMainPage ? (
                            <ScrollLink 
                                to='contact' 
                                spy={true}
                                smooth={true} 
                                duration={500}
                                onClick={() => handleSetActiveTab('contact')}
                            >
                                <button className={`py-1 px-4 ${activeTab === 'contact' ? 'bg-purple-500' : 'bg-blue-500 hover:bg-purple-500'} text-[#BEC9C3]  rounded-full transition-colors duration-300`}>Contact</button>       
                            </ScrollLink>
                        ) : (
                            <button 
                                onClick={() => handleNavigation('contact')} 
                                className={`py-1 px-4 ${activeTab === 'contact' ? 'bg-purple-500' : 'bg-blue-500 hover:bg-purple-500'} text-[#BEC9C3] font-semibold rounded-full transition-colors duration-300`}
                            >
                                Contact
                            </button>
                        )}
                    </div>

                    {/* Hamburger Menu */}
                    <button onClick={toggleMenu} className='flex md:hidden'>
                        <HiBars3BottomRight className='h-7 w-7 text-white' />
                    </button>
                </div>  

                {/* Side Menu */}
                <SideMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
            </nav>
        </header>
    );
};

export default Navbar;
