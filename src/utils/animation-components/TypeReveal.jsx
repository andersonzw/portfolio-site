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
      className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
    />
  );
}

export default function TextAnim({children}) {
    console.log(children.props.children);
  const baseText = children.props.children;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 2.5,
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
