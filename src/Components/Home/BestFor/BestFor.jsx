import React from "react";
import "./BestFor.css";
import Bday_img from "../../../assets/bday.png";
import Meet_img from "../../../assets/meeting.png";
import Wedd_img from "../../../assets/weeding.png";

const BestFor = () => {
  return (
    <div className="best">
      <h1>BEST FOR</h1>
      <div className="content">
        <div className="bday">
          <img src={Bday_img} alt="" />
          <h4>BIRTHDAYS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan
          </p>
        </div>
        <div className="meet">
          <img src={Meet_img} alt="" />
          <h4>MEETINGS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan
          </p>
        </div>
        <div className="wedd">
          <img src={Wedd_img} alt="" />
          <h4>WEDDINGS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestFor;
