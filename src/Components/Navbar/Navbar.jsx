import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Cart_Logo from "../../assets/cart.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // Used for active tab underline
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className={`navbar-right ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div>
          <ul
            className={`navbar-menu ${isMobileMenuOpen ? "mobile-menu" : ""}`}
          >
            <li
              className={menu === "home" ? "active" : ""}
              onClick={() => setMenu("home")}
            >
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li
              className={menu === "menu" ? "active" : ""}
              onClick={() => setMenu("menu")}
            >
              <Link className="link" to="/menu">
                MENU
              </Link>
            </li>
            <li
              className={menu === "gallery" ? "active" : ""}
              onClick={() => setMenu("gallery")}
            >
              <Link className="link" to="/gallery">
                GALLERY
              </Link>
            </li>
            <li
              className={menu === "about-us" ? "active" : ""}
              onClick={() => setMenu("about-us")}
            >
              <Link className="link" to="/about-us">
                ABOUT US
              </Link>
            </li>
            <li
              className={menu === "contact-us" ? "active" : ""}
              onClick={() => setMenu("contact-us")}
            >
              <Link className="link" to="/contact-us">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/shopping-cart">
            <button className="btn1">
              View Cart <img src={Cart_Logo} alt="Cart Icon" className="icon" />
              <span className="count"> 2</span>
            </button>
          </Link>
        </div>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </button>
    </div>
  );
};

export default Navbar;
