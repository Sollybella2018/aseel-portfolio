import React from 'react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-teal-900 p-4">
      <div className="navbar-start">
        <h1 className="text-xl">Aseel Khalid</h1>
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="navbar-end lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Menu for Desktop and Mobile */}
      <div className={`navbar-center ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
        <ul className="menu menu-horizontal px-1">
          <li><a onClick={() => scrollToSection('about-me')}>About Me</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

