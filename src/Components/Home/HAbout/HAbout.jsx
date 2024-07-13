import React from "react";
import "./HAbout.css";
import HAbout_Img from "../../../assets/habout_bg.png";

const HAbout = () => {
  return (
    <div className="box-container">
      <div className="content-wrapper">
        <h2>ABOUT US</h2>
        <img src={HAbout_Img} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, , ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna tempor. Curabitur vel
          bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default HAbout;
