import React from "react";
import Logo from "./Logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Suggestion</span>
          <span>Help</span>
          <span>Share</span>
        </div>

        <div className="footer-section-columns">
          <span>+91-234567890</span>
          <span>madhurbajpai@google.com</span>
          <span>shantanuAswal@google.com</span>
          <span>abhijeetSaxena@google.com</span>
        </div>

        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
