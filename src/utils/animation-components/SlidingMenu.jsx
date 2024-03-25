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
      transition={{duration: 0.2, type: "linear" }}
      style={{ zIndex: 1000, position: "relative" }}
    >
      {children}
    </motion.div>
  );
};
