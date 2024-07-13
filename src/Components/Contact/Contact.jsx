import React from "react";
import "./Contact.css";
// import loc_img from "../../assets/loc1.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="conatct1">
      <div className="cn">
        <Navbar />
      </div>
      <div className="contact">
        <div className="contact-head"></div>
        <div className="text1">CONTACT US</div>
        {/* <div className="contact-form-container">
          <div className="contact-text">
            <h1>Get in Touch with Us</h1>
            <p>
              Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo
              ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat
              vestibulum lectus mauris.
            </p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Enter your phone" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div> */}
        {/* <div className="image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586608885!2d72.73989448226327!3d21.159180203496195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715934472526!5m2!1sen!2sin"
            width="98%"
            height="450"
          ></iframe>
        </div>
        <div className="contact-footer">
          <Footer />
        </div> */}
      </div>
      <div className="contact-form-container">
        <div className="contact-text">
          <h1>GET IN TOUCH WITH US</h1>
          <p>
            Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo
            ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat
            vestibulum lectus mauris.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Enter your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Enter your Phonr" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Enter your Message" required></textarea>
            </div>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
      <div className="image">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586608885!2d72.73989448226327!3d21.159180203496195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715934472526!5m2!1sen!2sin"
          width="98%"
          height="450"
        ></iframe>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
