import React from "react"
import { useRef } from "react"
import "./ClickyButton.scss"
const ClickyButton = ({ content, height = "auto", onClick }) => {
  const buttonRef = useRef(null)
  const rippleRef = useRef(null)

  const handleClick = (e) => {
    const button = buttonRef.current
    const ripple = rippleRef.current
    // provides size of element and position
    const buttonRect = button.getBoundingClientRect()
    const { left, top } = buttonRect
    const leftPosition = e.clientX - left
    const topPosition = e.clientY - top

    ripple.style.left = leftPosition + "px"
    ripple.style.top = topPosition + "px"
    ripple.classList.add("active")

    setTimeout(() => {
      ripple.classList.remove("active")
    }, 600)

    // call external onClick

    if (onClick) {
      onClick()
    }
  }
  return (
    <div
      ref={buttonRef}
      onClick={handleClick}
      className="clicky-button"
      style={{ height: height }}
    >
      {content}
      <span ref={rippleRef} className="rippleEffect"></span>
    </div>
  )
}

export default ClickyButton
