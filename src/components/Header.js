import React from 'react';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      
       
        <a className=" text-xl ">Aseel Khalid</a>
      </div>
      <div className="navbar-center hidden lg:flex">
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
