import React from "react";
import "./Taste.css";
import Coln_img from "../../../assets/coln.png";
import Profile_img from "../../../assets/tatste_profile.png";

const Taste = () => {
  return (
    <div className="taste">
      <h4>A TASTE YOU'LL REMEMBER</h4>
      <img src={Coln_img} alt="" />
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent
        </p>
      </div>
      <div className="pro-img">
        <img src={Profile_img} alt="" />
      </div>
      <div className="name">JAMES DE FRANCO</div>
    </div>
  );
};

export default Taste;
