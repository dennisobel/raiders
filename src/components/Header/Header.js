import React, { useState, useEffect } from "react";
import "./Header.css";

import { HeaderItem, MobileNavbar, Logo } from "../../components";
import { navbar } from "../../constants";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGooglePlusG,
  FaRegUser,
  FaCartArrowDown,
  FaBars,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const { cart } = props;

  const [click, setClick] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const { pathname } = useLocation();

  // Handle click on menu button
  const handleClick = () => {
    setClick(true);
    setOpen(true);
  };

  // Close mobile navbar
  const closeMenuBar = () => {
    setClick(false);
    setOpen(false);
  };

  // Close the Navbar between navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Manage On Scroll Functionality
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Manage Sticky Header
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  });

  // Add active class to header on scroll
  const stickyHeader = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("active")
      : header.classList.remove("active");
  };

  // Handle scroll event
  const handleScroll = (e) => {
    /* Close Menubar On Scroll */
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("active");
    setClick(false);
    setOpen(false);
  };

  return (
    <nav className="header">
      {/* 1st Header Container */}
      
      <div className="header-1">
        {/* Social contacts */}
        <div className="header-contacts">

          <a href="https://wa.me/254795901120" rel="noreferrer" target="_blank">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://www.facebook.com/AwasiRoversFootballAcademy?_rdc=2&_rdr" rel="noreferrer" target="_blank">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://twitter.com/awasirovers/status/1677024942250946563" rel="noreferrer" target="_blank">
            <FaTwitter className="icon" />
          </a>
          {/* <a href="/#"><FaInstagram className='icon' /></a> */}
          <a href="https://www.linkedin.com/groups/12905461/" rel="noreferrer" target="_blank">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>

      {/* 2nd Header Container */}
      <div className="header-2">
        {/* Logo */}
        <Logo />

        {/* Mobile Navbar */}
        {click && isOpen && <MobileNavbar close={closeMenuBar} />}

        {/* <h1>AWASI ROVERS</h1> */}

        {/* Desktop Navbar */}
        <div className="navbar">          
          {navbar.map((item) => {
            return <HeaderItem key={item.id} {...item} />;
          })}
        </div>

        {/* Header Icons Container */}
        <div className="icon-container">
          {/* <Link to='/Login'><FaRegUser className='icon' /></Link> */}
          {/* <Link to='/Cart' className='cart-icon'><FaCartArrowDown className='icon' /><span className='badge'>{cart.length}</span></Link> */}
          <div className="icon menu-btn" onClick={handleClick}>
            <FaBars />
          </div>{" "}
          {/* Menu Button */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
