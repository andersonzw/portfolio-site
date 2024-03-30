import { motion } from "framer-motion";
import { useContext } from "react";
import { MenuContext } from "../context/menu-context";

export const SlidingMenu = ({ children }) => {
  const { openMenu } = useContext(MenuContext);
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: openMenu ? "0%" : "-100%" }}
      exit={{ x: "-100%" }}
      transition={{duration: 0.2, type: "linear"}}
            style={{
        zIndex: 1000,
        position: "fixed", // Changed from relative to fixed
        top: 0,           // Ensure it covers the full screen vertically
        left: 0,          // Align it to the left edge of the viewport
        height: "100vh",  // 100% of the viewport height
        width: "100%",   // 100% of the viewport width
        overflowY: "auto" // In case your menu is taller than the screen
      }}
    >
      {children}
    </motion.div>
  );
};
