import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      style={{
        display: "inline-block",
        height: "20px", // Equivalent to h-5 in Tailwind CSS
        width: "1px",
        transform: "translateY(0.25rem)", // Adjust based on your design needs
      }}
      className="coloured-cursor"
    />
  );
}

export default function TextAnim({ children }) {

  const baseText = children.props.children;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className={children.props.className}>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}
