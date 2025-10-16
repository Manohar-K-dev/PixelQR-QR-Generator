import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// CSS
import "./index.css";
// Components
import App from "./App.jsx";
// FOR: Multi Language
import "./i18n.js";
// Context
import ValueProvider from "./context/ValueContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ValueProvider>
      <App />
    </ValueProvider>
  </StrictMode>
);
