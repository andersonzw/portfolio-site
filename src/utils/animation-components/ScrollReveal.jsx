import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeOut } from "framer-motion";
export const ScrollReveal = ({ children, width = "fit-content", y= 500, duration = 0.65}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, ease:"easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
