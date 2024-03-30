import React, { useContext } from "react";
import "./Contact.scss";
import ScrollReveal from "../../utils/animation-components/ScrollReveal";
import { ScrollContext } from "../../utils/context/scroll-context";
import HeaderLine from "../../components/header-line/HeaderLine";
import { MdEmail } from "react-icons/md";

const Contact = ({ lightMode }) => {
  const { contactRef } = useContext(ScrollContext);
  return (
    <section ref={contactRef} className="contact-section">
      <div className="innerWidth paddings flexColCenter contact-container">
        <div className=" header-section">
          <HeaderLine />
          <ScrollReveal y={200} duration = {0.4}>
            <h1 className={`section-title ${lightMode ? "light-theme" : null}`}>
              Contact
              <div className="separator" />
            </h1>
          </ScrollReveal>
          <HeaderLine />
        </div>
        <ScrollReveal y={200} duration = {0.4}>
          <div
            className={`email-container ${lightMode ? "light-theme" : null}`}
          >
            <MdEmail className="react-icon" />

            <p>anderson.zw.yang@gmail.com</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
