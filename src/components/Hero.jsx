import { motion, useReducedMotion } from "motion/react";
import Button from "./ui/Button.jsx";
import { ArrowRight } from "./Icons.jsx";
import { CAPABILITY_DECK_URL, HERO_PHOTO, unsplash } from "../data/site.js";
import "./Hero.css";

export default function Hero() {
  const reduce = useReducedMotion();

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
    <section className="hero" id="home">
      {/* PLACEHOLDER background — swap for a real GTech shop-floor / plant photo.
          gtech-brand §7: first-party photography only, no stock, no CGI. */}
      <img
        className="hero__bg"
        src={unsplash(HERO_PHOTO, 1920, 1280)}
        alt=""
        aria-hidden="true"
        loading="eager"
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

          <motion.h1 variants={item}>
            Precision machining &amp; heavy fabrication for construction-equipment
            and industrial OEMs
          </motion.h1>

          <motion.p className="hero__subline" variants={item}>
            Pune-based build-to-print partner. Turning, milling, plasma cutting,
            welding and assembly under one roof — since 2016.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <Button as="a" href="#contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              as="a"
              href={CAPABILITY_DECK_URL}
              variant="outline"
              size="lg"
              onDark
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
