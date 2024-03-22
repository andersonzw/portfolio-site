import React from "react";
import Reveal from "../../utils/animation-components/Reveal";
import "./Contact.scss";
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="innerWidth paddings flexColCenter contact-container">
        <div className="flexColCenter header-section">
          <Reveal>
            <h1 className="section-title">
              Contact
              <div className="separator" />
            </h1>
          </Reveal>
        </div>
        <div className="email-container">
            <img src="/assets/mail-send-svgrepo-com.svg" alt="" />
            <p>anderson.zw.yang@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
