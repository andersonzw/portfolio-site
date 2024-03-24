import React from "react";
import Reveal from "../../utils/animation-components/Reveal";
import "./Contact.scss";
import ScrollReveal from "../../utils/animation-components/ScrollReveal"
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="innerWidth paddings flexColCenter contact-container">
        <div className="flexColCenter header-section">
          <ScrollReveal>
            <h1 className="section-title">
              Contact
              <div className="separator" />
            </h1>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="email-container">
            <img src="/assets/mail-send-svgrepo-com.svg" alt="" />
            <p>anderson.zw.yang@gmail.com</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
