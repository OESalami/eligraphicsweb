import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-scroll'

const SideMenu = ({toggleMenu, menuOpen}) => {
  return (
    <div  className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] text-gray-200 h-full bg-gradient-to-b from-blue-900 to-gray-900 transform transition-transform duration-300 flex flex-col z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       {/* Close Button */}
       <div className="flex justify-end p-4">
            <button>
                <IoMdClose onClick={toggleMenu} className='h-6 w-6 hover:text-gray-400'/>
            </button>
        </div>
      

        {/* Menu Items */}
        <div className='flex flex-col space-y-4 p-4 text-xl font-bold'>
        <Link to='home' smooth={true}  duration={500} className='hover:text-gray-400 cursor-pointer'>Home</Link>
        <Link to='about' smooth={true}  duration={500} className='hover:text-gray-400 cursor-pointer'>About</Link>
        <Link to='menu' smooth={true}  duration={500} className='hover:text-gray-400 cursor-pointer'>Service</Link>
        <Link to='gallery' smooth={true}  duration={500} className='hover:text-gray-400 cursor-pointer'>Testimonial</Link>
        <Link to='reserve' smooth={true} duration={500}>
            <button className='py-2 px-6 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-600'>Contact</button>
        </Link>
        </div>

        {/* Checkout Button */}
        <div className='sticky bottom-0'>
            <p className='text-sm text-white text-center mt-2 tracking-tighter'>EliGraphics & Web @2025</p>
        </div>

    </div>
  )
}

export default SideMenu
