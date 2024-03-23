import React, { useState } from 'react';
import './header.css';



function Header({scroll}) {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
  
  
      return (
      <header className={`${scroll > 100 ? 'scrolled' : undefined}`} >
          <a href="/" className="logo">
              Stella Belessi
          </a>
          <ul className={active}>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Movie Posters
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
            About
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
     );
  }
  
  export default Header;