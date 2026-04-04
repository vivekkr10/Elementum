import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center">
      <div className="flex max-w-[85%] w-full justify-between px-2.5 py-4 items-center">
        <a href="/" className="text-lg md:text-xl gerbil tracking-tighter ">
          Elementum
        </a>

        <nav className="hidden md:block">
          <ul className="flex inter text-sm gap-6 lg:gap-10 pr-25 tracking-tighter mt-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex flex-col gap-1.5 mt-1">
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-8 bg-black"></span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-1.5 cursor-pointer"
        >
          <span className={`block h-0.5 w-8 bg-black ${menuOpen ? "rotate-45 translate-y-2" : ""} transition-transform duration-300`}></span>
          <span className={`block h-0.5 w-8 bg-black ${menuOpen ? "opacity-0" : ""} transition-opacity duration-300`}></span>
          <span className={`block h-0.5 w-8 bg-black ${menuOpen ? "-rotate-45 -translate-y-2" : ""} transition-transform duration-300`}></span>
        </button>
      </div>

      {/* menu box */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white z-50 shadow-md">
          <ul className="flex flex-col inter text-sm px-8 py-6 gap-6">
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Studio
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                FAQs
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
