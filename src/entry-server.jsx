import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

/**
 * Build-time render of one route, used only by scripts/prerender.mjs to pull
 * each page's Seo tags into static HTML for social-preview scrapers. Never
 * shipped to the browser.
 *
 * @param {string} url
 * @returns {string} rendered markup (React 19 emits Helmet's head tags inline)
 */
export function render(url) {
  return renderToString(
    <HelmetProvider context={{}}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
}
