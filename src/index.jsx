import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { MenuProvider } from "./utils/context/menu-context";
import { ScrollProvider } from "./utils/context/scroll-context";
import { ThemeProvider } from "./utils/context/theme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>
);
