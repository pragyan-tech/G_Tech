import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

/**
 * Route shell rendered around every page via `<Route element={<Layout />}>`
 * in App.jsx — skip link, scroll reset, navbar, the routed page (`<Outlet>`),
 * and footer.
 *
 * @returns {JSX.Element}
 */
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
