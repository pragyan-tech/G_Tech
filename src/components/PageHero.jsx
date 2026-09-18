import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight } from "./Icons.jsx";
import "./PageHero.css";

/* Fraction of PageHero's own (much shorter) height the user has to scroll
   through before the bottom fade reaches full opacity — smaller than Hero's
   share so the fade catches up over the shorter band (see
   .claude/skills/ui-ux-pro-max §5). */
const FADE_SCROLL_FRACTION = 0.6;

/**
 * Interior-page hero: navy band, eyebrow, h1, optional subline + back link.
 * Used at the top of every route page except Home.
 *
 * The bottom `.page-hero__fade` starts invisible at scrollY=0 (no haze on
 * first paint) and ramps to full opacity as the section scrolls through
 * `FADE_SCROLL_FRACTION` of its own height, via a rAF-throttled scroll
 * listener gated by an IntersectionObserver (only runs while the section is
 * on screen). Skipped under `prefers-reduced-motion`, where the fade instead
 * sits at full opacity from the start, matching the previous static
 * behavior.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Small uppercase label above the title.
 * @param {string} props.title - Page heading (rendered as `<h1>`).
 * @param {string} [props.subline] - Supporting paragraph below the title.
 * @param {{ to: string, label: string }} [props.back] - When set, renders a "back to X" link above the eyebrow.
 * @returns {JSX.Element}
 */
export default function PageHero({ eyebrow, title, subline, back }) {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const fadeOpacity = useMotionValue(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    let active = false;
    let ticking = false;
    let sectionHeight = section.offsetHeight;

    const update = () => {
      ticking = false;
      if (!active) return;
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      fadeOpacity.set(Math.min(1, scrolled / (sectionHeight * FADE_SCROLL_FRACTION)));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const onResize = () => {
      sectionHeight = section.offsetHeight;
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
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce, fadeOpacity]);

  return (
    <section className="page-hero" ref={sectionRef}>
      <motion.div className="page-hero__fade" aria-hidden="true" style={{ opacity: fadeOpacity }} />
      <div className="container">
        <Reveal>
          {back && (
            <Link className="page-hero__back" to={back.to}>
              <ArrowRight style={{ transform: "rotate(180deg)" }} />
              {back.label}
            </Link>
          )}
          {eyebrow && <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>}
          <h1>{title}</h1>
          {subline && <p className="page-hero__subline">{subline}</p>}
        </Reveal>
      </div>
    </section>
  );
}
