import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading1">Have Questions?</h1>
      <h1 className="primary-heading1">Let Us Help You</h1>

      <div className="contact-form-container">
        <input type="email" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
