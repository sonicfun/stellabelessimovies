import React, { useState } from 'react';
import './header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';



      // This is the function of the navigation system, hamburger menu and when you scroll or moving your finger. The navigational menu is following the user!
function Header({scroll}) {
 const [navList, setNavList] = useState(navListData);


 const handleNavOnClick = id => {
  const newNavList = navList.map(nav => {
    nav.active = false;
    if (nav._id === id) nav.active =true;
    return nav;
  });

   setNavList(newNavList);
 };


    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    // Navigation Toggle
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

    const closeMenu = () => {
      navToggle(false);
     
  };
  

  
      return (
      <header className={`${scroll > 100 ? 'scrolled' : undefined}`} >
          <a href="/" className="logo">
              Stella Belessi
          </a>
          <ul className={active}>
          <li className="nav__item"></li>
       
          {navList.map(nav  => (
            <NavListItem key={nav._id} nav={nav} onClick={closeMenu} navOnClick = {handleNavOnClick} />
          ))}
    
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