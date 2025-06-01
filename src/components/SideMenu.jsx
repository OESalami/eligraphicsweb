import { IoMdClose } from 'react-icons/io'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useRef } from 'react'
import useActiveTab from '../hooks/useActiveTab'

const SideMenu = ({toggleMenu, menuOpen}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const targetSectionRef = useRef(null);
  const { activeTab, handleSetActiveTab } = useActiveTab();

  // Checking if we're on the main page
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    if (targetSectionRef.current) {
      const sectionId = targetSectionRef.current;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        targetSectionRef.current = null;
        toggleMenu();
      }
    }
  }, [location.pathname]);

  // Handle navigation for non-main pages
  const handleNavigation = (section) => {
    targetSectionRef.current = section;
    navigate('/');
  }

  const menuItemStyles = (section) => `
    w-full text-center cursor-pointer
    ${activeTab === section ? 'text-blue-400 font-bold' : 'text-gray-200 hover:text-blue-400'}
    transition-colors duration-300
  `;

  const handleClick = (section) => {
    handleSetActiveTab(section);
    if (!isMainPage) {
      handleNavigation(section);
    }
  };

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] text-gray-200 h-full 
    bg-black/95 backdrop-blur-md transform transition-transform duration-300 
    flex flex-col z-[60] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
            <button 
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-300"
            >
                <IoMdClose className='h-6 w-6'/>
            </button>
        </div>
      
        {/* Menu Items */}
        <div className='flex flex-col p-6'>
            <div className='flex flex-col items-center w-full space-y-6'>
                {isMainPage ? (
                    <>
                        <ScrollLink 
                            to='home' 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={`${menuItemStyles('home')} py-2`}
                            onClick={() => {
                                handleSetActiveTab('home');
                                toggleMenu();
                            }}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink 
                            to='about' 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={`${menuItemStyles('about')} py-2`}
                            onClick={() => {
                                handleSetActiveTab('about');
                                toggleMenu();
                            }}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink 
                            to='service' 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={`${menuItemStyles('service')} py-2`}
                            onClick={() => {
                                handleSetActiveTab('service');
                                toggleMenu();
                            }}
                        >
                            Service
                        </ScrollLink>
                        <ScrollLink 
                            to='testimonial' 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={`${menuItemStyles('testimonial')} py-2`}
                            onClick={() => {
                                handleSetActiveTab('testimonial');
                                toggleMenu();
                            }}
                        >
                            Testimonial
                        </ScrollLink>
                    </>
                ) : (
                    <>
                        <button 
                            onClick={() => {
                                handleClick('home');
                                toggleMenu();
                            }} 
                            className={`${menuItemStyles('home')} py-2`}
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => {
                                handleClick('about');
                                toggleMenu();
                            }} 
                            className={`${menuItemStyles('about')} py-2`}
                        >
                            About
                        </button>
                        <button 
                            onClick={() => {
                                handleClick('service');
                                toggleMenu();
                            }} 
                            className={`${menuItemStyles('service')} py-2`}
                        >
                            Service
                        </button>
                        <button 
                            onClick={() => {
                                handleClick('testimonial');
                                toggleMenu();
                            }} 
                            className={`${menuItemStyles('testimonial')} py-2`}
                        >
                            Testimonial
                        </button>
                    </>
                )}
                
                <RouterLink 
                    to='/sellwithus' 
                    className={`${menuItemStyles('sellwithus')} py-2`}
                    onClick={() => {
                        handleSetActiveTab('sellwithus');
                        toggleMenu();
                    }}
                >
                    Sell with us
                </RouterLink>

                {/* Contact Button */}
                {isMainPage ? (
                    <ScrollLink 
                        to='contact' 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='w-full'
                        onClick={() => {
                            handleSetActiveTab('contact');
                            toggleMenu();
                        }}
                    >
                        <button className='py-3 px-6 bg-blue-500 hover:bg-purple-500 text-white font-semibold rounded-full w-full text-center transition-colors duration-300'>
                            Contact
                        </button>
                    </ScrollLink>
                ) : (
                    <button 
                        onClick={() => {
                            handleClick('contact');
                            toggleMenu();
                        }} 
                        className='py-3 px-6 bg-blue-500 hover:bg-purple-500 text-white font-semibold rounded-full w-full text-center transition-colors duration-300'
                    >
                        Contact
                    </button>
                )}
            </div>
        </div>

        {/* Company Name */}
        <div className='mt-auto pb-6 px-6'>
            <p className='text-sm text-gray-400 text-center'>EliGraphics & Web @2025</p>
        </div>
    </div>
  )
}

export default SideMenu
