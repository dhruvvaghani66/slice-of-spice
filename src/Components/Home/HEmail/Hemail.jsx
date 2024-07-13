import React from "react";
import "./Hemail.css";
import email_img from "../../../assets/email.png";
const Hemail = () => {
  return (
    <div className="conta">
      <div className="text-container">
        Sign up with your name and email to get fresh updates.
      </div>
      <div className="subscribe-container">
        <img src={email_img} alt="" />
        {/* <input className="email" type="email" placeholder="Email Address" />
        <button className="subscribe-button">Subscribe</button> */}
      </div>
    </div>
  );
};

export default Hemail;
