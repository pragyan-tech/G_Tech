import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Logo from "./Logo.jsx";
import Button from "./ui/Button.jsx";
import { NAV_LINKS } from "../data/site.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setMenuOpen(false)}>
          <Logo onDark={!scrolled} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <Button as="a" href="#contact" variant="primary" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="nav__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`nav__burger-box ${menuOpen ? "is-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="nav__scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="nav__drawer"
              role="dialog"
              aria-label="Site menu"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="nav__drawer-links" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav__drawer-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                className="nav__drawer-cta"
                onClick={() => setMenuOpen(false)}
              >
                Request a Quote
              </Button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
