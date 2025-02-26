import React from 'react';
import "../Styles/components/ContactBox.css";

const ContactBox = () => {
  return (
    <div className="contactbox">
      <h2 className="contactboxheading">Contact Us</h2>
      <p className="contactboxsubheading">Don't hesitate to ask anything about us</p>
      <div className="contactinnerbox">
        <div className="subBox">
          <div className="subBoxLeft">🌏</div>
          <div className="subBoxRight">
            <a href="https://www.wastewise.live" target="_blank" rel="noopener noreferrer">
              www.wastewise.live
            </a>
          </div>
        </div>
        <div className="subBox">
          <div className="subBoxLeft">📞</div>
          <div className="subBoxRight">
            <a href="tel:+919667714412">+91 9667714412</a>
          </div>
        </div>
        <div className="subBox">
          <div className="subBoxLeft">📧</div>
          <div className="subBoxRight">
            <a href="mailto:kotiajignesh8@gmail.com">kotiajignesh8@gmail.com</a>
          </div>
        </div>
        <div className="subBox">
          <div className="subBoxLeft">🏢</div>
          <div className="subBoxRight">P and T Colony, Civil Lines</div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;