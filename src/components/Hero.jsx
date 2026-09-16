import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import Button from "./ui/Button.jsx";
import WordReveal from "./ui/WordReveal.jsx";
import { ArrowRight } from "./Icons.jsx";
import { CAPABILITY_DECK_URL, HERO_PHOTO, unsplash } from "../data/site.js";
import "./Hero.css";

/* How much the background lags a normal 1:1 scroll — 0.3 means it moves at
   ~70% of scroll speed (see .claude/skills/ui-ux-pro-max §5 parallax rule). */
const PARALLAX_LAG = 0.3;

/**
 * Home-page hero — full-bleed background photo, headline, subline, and two
 * CTAs. Content staggers in on mount (not scroll-triggered, since it's
 * already in view on load); the stagger collapses to a plain fade under
 * `prefers-reduced-motion`. The headline animates in word-by-word
 * (`WordReveal`) instead of joining that mount stagger.
 *
 * The background photo also gets a subtle scroll parallax: it translates
 * down (lagging the page by `PARALLAX_LAG`) while the hero is in view, via a
 * rAF-throttled scroll listener that's only attached while an
 * IntersectionObserver reports the hero on screen — never a page-wide
 * scroll listener. Skipped entirely under `prefers-reduced-motion`, and also
 * on touch/coarse-pointer devices (phones/tablets) to avoid fighting
 * momentum scrolling on low-end hardware.
 *
 * @returns {JSX.Element}
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (reduce) return;
    // Touch devices (phones/tablets) skip the parallax outright — a
    // scroll-driven transform fights momentum scrolling on low-end hardware
    // and is the biggest source of mobile scroll jank (ui-ux-pro-max §5).
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    let active = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      if (!active) return;
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      bg.style.transform = `translate3d(0, ${scrolled * PARALLAX_LAG}px, 0)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();
        } else {
          window.removeEventListener("scroll", onScroll);
        }
      },
      { threshold: 0 }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  const container = {
    hidden: {},
    show: { transition: reduce ? {} : { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* PLACEHOLDER background — swap for a real GTech shop-floor / plant photo.
          gtech-brand §7: first-party photography only, no stock, no CGI. */}
      <img
        className="hero__bg"
        ref={bgRef}
        src={unsplash(HERO_PHOTO, 1920, 1280)}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow eyebrow--on-dark" variants={item}>
            Build-to-print manufacturing · Pune, India
          </motion.span>

          <WordReveal as="h1">
            Precision machining & heavy fabrication for construction-equipment
            and industrial OEMs
          </WordReveal>

          <motion.p className="hero__subline" variants={item}>
            Pune-based build-to-print partner. Turning, milling, plasma cutting,
            welding and assembly under one roof — since 2016.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              as="a"
              href={CAPABILITY_DECK_URL}
              variant="secondary"
              size="lg"
            >
              Download Capability Deck
              <ArrowRight />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
