import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import Button from "./ui/Button.jsx";
import { ArrowRight } from "./Icons.jsx";
import { CAPABILITY_DECK_URL, HERO_VIDEO, HERO_VIDEO_POSTER } from "../data/site.js";
import "./Hero.css";

export default function Hero() {
  const reduce = useReducedMotion();
  const [videoOk, setVideoOk] = useState(true);

  /* Play the plant-tour video only when motion is allowed and the file loads.
     Otherwise the poster still frame stands in as a static background. */
  const showVideo = !reduce && videoOk;

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
      <div className="hero__media" aria-hidden="true">
        {/* Poster is the base layer: it covers the video load, a load failure,
            and the prefers-reduced-motion path. */}
        <img
          className="hero__poster"
          src={HERO_VIDEO_POSTER}
          alt=""
          fetchPriority="high"
        />
        {showVideo && (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_VIDEO_POSTER}
            onError={() => setVideoOk(false)}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}
      </div>
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
            <Button as={Link} to="/contact" variant="primary" size="lg">
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
