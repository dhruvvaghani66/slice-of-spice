import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import logo from "../../../src/assets/logo.png"; // Import your logo image
// import { FaHome, FaUtensils, FaImage, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import required icons from react-icons library
import arrow_img from "../../../src/assets/arr_img.png";

import { Link } from "react-router-dom";

import loc_img from "../../../src/assets/location.png";
import contact_img from "../../../src/assets/phone.png";
import mail_img from "../../../src/assets/fmail.png";
import social_img from "../../../src/assets/socialicon.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footerlogo">
          {/* Add your logo here */}
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-row">
          <div className="footer-column">
            <h2>WHY SLICE OF SPICE?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <div className="footer-column3">
            <h2>QUICK LINKS</h2>
            <ul>
              <li>
                <img src={arrow_img} alt="Arrow" />
                <Link to={"/"} className="link">
                  HOME
                </Link>
              </li>
              <li>
                <img src={arrow_img} alt="Arrow" />
                <Link to={"/menu"} className="link">
                  MENU
                </Link>
              </li>
              <li>
                <img src={arrow_img} alt="Arrow" />
                <Link to={"/gallery"} className="link">
                  GALLERY
                </Link>
              </li>
              <li>
                <img src={arrow_img} alt="Arrow" />
                <Link to="/about-us" className="link">
                  ABOUT US
                </Link>
              </li>
              <li>
                <img src={arrow_img} alt="Arrow" />
                <Link to={"/contact-us"} className="link">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* </div> */}
          {/* <div className="footer-row"> */}
          <div className="footer-column2">
            <h2>OPENING HOURS</h2>
            <div className="opening-hours">
              <p>
                Monday - Saturday
                <br />
                <span className="golden">12:00PM - 10:30PM</span>
              </p>
              <p>
                Sunday
                <br />
                <span className="golden">12:00PM - 11:30PM</span>
              </p>
            </div>
          </div>

          {/* </div> */}
          {/* <div className="footer-row"> */}
          <div className="footer-column1">
            <h2>GET IN TOUCH </h2>
            <p>Restaurant, to consequat ipsum nec</p>
            <div className="fc1">
              <p>
                <img src={loc_img} className="loc" alt="Location" />
                Restaurant, Manhattan 1258, New York, USA
              </p>
              <p>
                <img src={contact_img} className="loc" alt="Contact" /> (+1) 234
                567 8901
              </p>
              <p>
                <img src={mail_img} className="loc" alt="Email" />
                hello@website.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container1">
        <div className="footer-content">
          <p>Copyright © 2016 Slice of Spice. All Rights Reserved</p>
          <div className="social-icons">
            <img src={social_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// import React from "react";
// import "./Footer.css";
// // import { assets } from "../../assets/assets";

// const Footer = () => {
//   return (
//     <div className="footer" id="footer">
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <h2>why slice of spice?</h2>
//           {/* <img src={assets.logo} alt="" /> */}
//           Lorem Ipsum has been the industry's standard dummy text ever since the
//           1500s, when an unknown printer took a galley of type and scrambled it
//           to make a type Lorem Ipsum has been the industry's standard dummy text
//           ever since the 1500s, when an unknown printer took a galley of type
//           and scrambled it to make a type
//           {/* <div className="footer-social-icons"> */}
//           {/* <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.linkedin_icon} alt="" /> */}
//           {/* </div> */}
//         </div>
//         <div className="footer-content-center">
//           <h2>QUICK LINKS</h2>
//           <ul>
//             <li>HOME</li>
//             <li>MENU</li>
//             <li>GALLERY</li>
//             <li>ABOUT US</li>
//             <li>CONTACT US</li>
//           </ul>
//         </div>
//         <div className="opening-hours">
//           <h3>Opening Hours</h3>
//           <p>Monday - Saturday: 12:00PM - 10:30PM</p>
//           <p>
//             Sunday: <br />
//             12:00PM - 10:30PM
//           </p>
//         </div>
//         <div className="get-in-touch">
//           <h3>GET IN TOUCH</h3>
//           <p>
//             Restaurant, consectetur adipiscing elit. Duis tristique ullamcorper
//             magna, eget viverra sem.
//           </p>
//           <div className="address">
//             <p>Restaurant, Manhattan 1258,New York, USA Lahore</p>
//           </div>
//           <div className="phone">
//             <p>(+1) 234 567 8901</p>
//           </div>
//           <div className="email">
//             <p>hello@website.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="logo">Your Logo</div>
//       <div className="navigation">
//         <h3>Navigation</h3>
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Menu</a></li>
//           <li><a href="#">Gallery</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </div>
// <div className="opening-hours">
//   <h3>Opening Hours</h3>
//   <p>Monday - Saturday: 12:00PM - 10:30PM</p>
//   <p>Sunday: 12:00PM - 10:30PM</p>
// </div>
{
  /* <div className="get-in-touch">
  <h3>GET IN TOUCH</h3>
  <p>
    Restaurant, consectetur adipiscing elit. Duis tristique ullamcorper magna,
    eget viverra sem.
  </p>
  <div className="address">
    <p>Restaurant, Manhattan 1258,New York, USA Lahore</p>
  </div>
  <div className="phone">
    <p>(+1) 234 567 8901</p>
  </div>
  <div className="email">
    <p>hello@website.com</p>
  </div>
</div>; */
}
// </div>
// );
// }

// export default Footer;
