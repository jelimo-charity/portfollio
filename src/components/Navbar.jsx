const Navbar = () => {
  return (
    <header className="bg-slate-950 md:sticky top-0 z-10">
      <div className="container mx-auto p-5 flex flex-col md:flex-row items-center">
        <div className="w-full flex justify-between items-center mb-4 md:mb-0">
          <a href="#about" className="title-font font-medium text-white text-4xl">
            Charity Jelimo
          </a>
        </div>
        <nav className="w-full flex flex-row md:flex-row md:justify-center md:space-x-10 items-center text-base">
          <a href="#projects" className="text-orange-600  text-2xl  hover:text-white mb-2 md:mb-0">
            Projects
          </a>
          <a href="#skills" className="text-orange-600 ml-5  text-2xl hover:text-white mb-2 md:mb-0">
            Skills
          </a>
          {/* <a href="#contact" className="text-orange-600 hover:text-white mb-2 md:mb-0">
            Contact
          </a> */}
          <a
            href="https://drive.google.com/file/d/15sJCjIXCeFNyvYfuvjxMUEjSbwTwQ4Jh/view?usp=sharing"
            className="text-orange-600 hover:text-white ml-5 mb-2 md:mb-0 text-2xl"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
