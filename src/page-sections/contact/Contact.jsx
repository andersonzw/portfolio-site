import React, { useContext } from "react";
import "./Contact.scss";
import ScrollReveal from "../../utils/animation-components/ScrollReveal";
import { ScrollContext } from "../../utils/context/scroll-context";
import HeaderLine from "../../components/header-line/HeaderLine";
const Contact = ({ lightMode }) => {
  const { contactRef } = useContext(ScrollContext);
  return (
    <section ref={contactRef} className="contact-section">
      <div className="innerWidth paddings flexColCenter contact-container">
        <div className=" header-section">
          <HeaderLine />
          <ScrollReveal>
            <h1 className={`section-title ${lightMode ? "light-theme" : null}`}>
              Contact
              <div className="separator" />
            </h1>
          </ScrollReveal>
          <HeaderLine />
        </div>
        <ScrollReveal>
          <div
            className={`email-container ${lightMode ? "light-theme" : null}`}
          >
            {!lightMode ? (
              <img src="/assets/mail-send-svgrepo-com.svg" alt="" />
            ) : (
              <img src="/assets/mail-send-svgrepo-light.svg" alt="" />
            )}
            <p>anderson.zw.yang@gmail.com</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
