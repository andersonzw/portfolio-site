import React, { useContext, useEffect, useState } from "react"
import "./Contact.scss"
import ScrollReveal from "../../utils/animation-components/ScrollReveal"
import { ScrollContext } from "../../utils/context/scroll-context"
import HeaderLine from "../../components/header-line/HeaderLine"
import { CiMail } from "react-icons/ci"
import ClickyButton from "../../components/interactive-btn/ClickyButton"
import Clipboard from "react-clipboard-animation"
const Contact = () => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])
  const { contactRef } = useContext(ScrollContext)
  return (
    <section ref={contactRef} className="contact-section">
      <div className="innerWidth paddings flexColCenter contact-container">
        <div className=" header-section">
          <HeaderLine />
          <ScrollReveal y={200} duration={0.4}>
            <h1 className="section-title">
              Contact
              <div className="separator" />
            </h1>
          </ScrollReveal>
          <HeaderLine />
        </div>
        <ScrollReveal y={200} duration={0.4}>
          <div
            onClick={() => {
              navigator.clipboard.writeText("anderson.zw.yang@gmail.com")
              setCopied(true)
            }}
          >
            <ClickyButton
              content={
                <>
                  <Clipboard
                    copied={copied}
                    setCopied={setCopied}
                    color="white"
                  />
                  <p>anderson.zw.yang@gmail.com</p>
                </>
              }
              height={100}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
