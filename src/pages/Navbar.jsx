import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li className="dropdown" onClick={toggleDropdown}>
          <a href="/">Services <i className={`fas fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i></a>
          <ul className={`dropdown-content ${isOpen ? 'active' : ''}`}>
            <li><a href="/">Service 1</a></li>
            <li><a href="/">Service 2</a></li>
            <li><a href="/">Service 3</a></li>
          </ul>
        </li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleDropdown}>
        <i className={`fas fa-bars ${isOpen ? 'rotate' : ''}`}></i>
      </div>
    </nav>
  );
}

export default Navbar;