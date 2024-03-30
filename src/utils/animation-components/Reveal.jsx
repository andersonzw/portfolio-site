import React, { useContext, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import colors from "../_theme.module.scss"
import { ThemeContext } from "../context/theme-context";
export const Reveal = ({ children, width = "fit-content", className}) => {
  const {lightMode} = useContext(ThemeContext)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible")
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{duration:0.5, ease: "easeIn"}}
        style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            backgroundColor:`${!lightMode? colors.scroll : colors.scrollLight}`,
            zIndex:20
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
