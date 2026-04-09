import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo gerbil">
          Elementum
        </a>

        <nav className="navbar__desktop-nav">
          <ul className="navbar__list inter">
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

        <div className="navbar__desktop-menu-icon">
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar__hamburger"
        >
          <span className={`navbar__hamburger-line ${menuOpen ? "navbar__hamburger-line--top-open" : ""}`}></span>
          <span className={`navbar__hamburger-line ${menuOpen ? "navbar__hamburger-line--middle-open" : ""}`}></span>
          <span className={`navbar__hamburger-line ${menuOpen ? "navbar__hamburger-line--bottom-open" : ""}`}></span>
        </button>
      </div>

      {/* menu box */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul className="navbar__mobile-list inter">
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
