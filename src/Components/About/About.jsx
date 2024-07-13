import React from "react";
import "./About.css";
import not1 from "../../assets/not1.png";

import card1_img from "../../assets/about1.png";
import card2_img from "../../assets/about2.png";
import card3_img from "../../assets/about3.png";
import card4_img from "../../assets/about4.png";
import team_img from "../../assets/team_img.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div className="about1">
      <Navbar />
      <div className="about">
        <div className="about-head"></div>

        <div className="about-text">ABOUT US</div>
        <div className="additional-info">
          <div className="info-row">
            <h1>NOTHING TO WORRY ABOUT WITH SLICE OF SPICE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit lacinia. Aliquam in elementum tellus.
            </p>
          </div>
          <div className="info-row">
            <img src={not1} alt="Descriptive Alt Text" />
          </div>
        </div>
        {/* </div> */}

        <div className="card-row">
          <div className="card2">
            <img src={card1_img} alt="Image 1" />
            <h3>Free Delivery</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis.
            </p>
          </div>
          <div className="card2">
            <img src={card2_img} alt="Image 2" />
            <h3>Save Your Time</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis.
            </p>
          </div>
          <div className="card2">
            <img src={card3_img} alt="Image 3" />
            <h3>Regular Discounts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis.{" "}
            </p>
          </div>
          <div className="card2">
            <img src={card4_img} alt="Image 4" />
            <h3>Variety of Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis.
            </p>
          </div>
        </div>
        <div className="team">
          <h1>OUR TEAM</h1>
          <p>
            Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo
            ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat
            vestibulum lectus mauris.
          </p>
          <img src={team_img} alt="" />
        </div>
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
