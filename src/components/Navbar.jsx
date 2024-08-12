import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-gray-950 md:sticky top-0 z-10 border-b border-b-gray-900 ">
      <div className="container mx-auto p-5 flex flex-col md:flex-row items-center">
        <div className="w-full flex justify-between items-center mb-4 md:mb-0">
          <a href="#about" className="title-font font-medium text-green-50 text-xl">
             jelimo~charity
          </a>
          <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav className={`w-full md:flex md:flex-row md:justify-center md:space-x-10 items-center text-base ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#projects" className="text-green-500  hover:text-white mb-2 md:mb-0">
            Projects
          </a>
          <a href="#skills" className="text-green-500 ml-5  hover:text-white mb-2 md:mb-0">
            Skills
          </a>
          <a
            href="https://drive.google.com/file/d/15sJCjIXCeFNyvYfuvjxMUEjSbwTwQ4Jh/view?usp=sharing"
            className="text-green-500 hover:text-white ml-5 mb-2 md:mb-0 "
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
