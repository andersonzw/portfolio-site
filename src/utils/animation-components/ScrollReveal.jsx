import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeOut } from "framer-motion";
export const ScrollReveal = ({ children, width = "fit-content" }) => {
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
          hidden: { opacity: 0, y: 500 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease:"easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
