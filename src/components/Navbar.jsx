import { Link } from 'react-scroll';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';
import SideMenu from './SideMenu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <header className='sticky bg-black text-gray-200 top-0 z-50'>
       <nav className="container h-20 mx-auto flex items-center justify-between py-4 px-6">
      {/* Left - Logo */}
      <div className=''>
        <Link to="/" className='text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold uppercase cursor-pointer'>EliGWeb</Link>
      </div>

      {/* Middle - Links */}
      <div className='text-xl items-center'>
        <div className='hidden md:flex space-x-4 justify-center items-center'>
        <Link to='home' smooth={true}  duration={500} className='hover:text-blue-400 cursor-pointer'>Home</Link>
        <Link to='about' smooth={true}  duration={500} className='hover:text-blue-400 cursor-pointer'>About</Link>
        <Link to='service' smooth={true}  duration={500} className='hover:text-blue-400 cursor-pointer'>Service</Link>
        <Link to='testimonial' smooth={true}  duration={500} className='hover:text-blue-400 cursor-pointer'>Testimonial</Link>
        <Link to='contact' smooth={true} duration={500}>
        <button className='py-1 px-4 bg-blue-500 text-[#BEC9C3] font-semibold rounded-full hover:bg-purple-500'>Contact</button>       
        </Link>
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
  )
}

export default Navbar;
