import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

// Drop the head tags baked in by scripts/prerender.mjs (for social scrapers);
// the Seo component re-adds them, and would otherwise duplicate them.
document.querySelectorAll("head [data-prerender]").forEach((el) => el.remove());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
