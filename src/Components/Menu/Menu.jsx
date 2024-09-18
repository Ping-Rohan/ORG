import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className='bg-primary mt-4 flex flex-col md:flex-row p-2 relative z-10'>
      {/* Toggle Icon */}
      <div className='flex items-center justify-end font-extrabold text-lg text-right md:hidden z-30 pr-4'>
        {isOpen ? (
          <AiOutlineClose
            size={24}
            className='text-white cursor-pointer'
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            size={20}
            className='text-white cursor-pointer'
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Menu Items */}
      <ul
        className={`bg-primary text-white flex flex-col md:flex-row gap-6 py-2 text-lg absolute md:static top-10 left-0 right-0 w-screen md:w-auto md:h-auto md:py-0 transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        } md:container md:flex md:justify-start md:items-center md:w-screen md:text-xl md:gap-12`}
      >
        <NavLink
          to='/'
          className='cursor-pointer py-2 md:py-0 text-center md:flex md:items-center'
        >
          गृह पृष्ठ
        </NavLink>
        <NavLink
          to='/aboutus'
          className='cursor-pointer py-2 md:py-0 text-center md:flex md:items-center'
        >
          हाम्रो बारेमा
        </NavLink>
        <NavLink
          to='/ourteams'
          className='cursor-pointer py-2 md:py-0 text-center md:flex md:items-center'
        >
          कार्य समिति
        </NavLink>
        <NavLink
          to='/gallery'
          className='cursor-pointer py-2 md:py-0 text-center md:flex md:items-center'
        >
          फोटो ग्यालेरी
        </NavLink>
      </ul>
    </div>
  );
}

export default Menu;
