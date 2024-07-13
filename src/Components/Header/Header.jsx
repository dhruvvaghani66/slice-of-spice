import React from "react";
import "./Header.css";
import HAbout from "../Home/HAbout/HAbout";
import Delivery from "../Home/Delivery/Delivery";
import BestFor from "../Home/BestFor/BestFor";
import Serve from "../Home/Serve/Serve";
import Taste from "../Home/Taste/Taste";
import Hemail from "../Home/HEmail/Hemail";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="header11">
        <Navbar />
        <div className="header">
          <div className="header-contents">
            <div className="header-text">
              YES WE HAVE <br />{" "}
              <span className="golden-text">BEST TASTE </span>
              FOR <br /> YOU!
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              <br /> dignissim, metus nec fringilla accumsan, risus sem
              <br /> sollicitudin lacus, ut interdum tellus elit sed risus.
            </p>
            <button className="btn">See Our Menu</button>
          </div>
        </div>
        {/* <div> */}
        <HAbout />
        {/* </div> */}
        {/* <div> */}
        <Delivery />
        {/* </div> */}
        {/* <div> */}
        <BestFor />
        {/* </div> */}
        {/* <div> */}
        <Serve />
        {/* </div> */}
        {/* <div> */}
        <Taste />
        <Hemail />
        <div className="home-footer">
          <Footer />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
