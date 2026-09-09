import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { PROOF_STATS } from "../data/site.js";
import "./ProofBar.css";

/* First run of digits in a stat string ("2016", "42", "5", "300"). */
const NUM_RE = /\d+/;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const COUNT_MS = 1200;

/* Counts the numeric part of a stat up from zero once the proof bar is in view.
   Non-numeric stats ("BFW VMC") render unchanged. Reduced motion => final value
   immediately, no animation. Fires once. */
function StatValue({ value, active, reduce }) {
  const match = String(value).match(NUM_RE);
  const hasNumber = match !== null;
  const target = hasNumber ? parseInt(match[0], 10) : 0;
  const animate = hasNumber && !reduce;

  const [current, setCurrent] = useState(animate ? 0 : target);

  useEffect(() => {
    if (!animate || !active) return;

    let raf;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / COUNT_MS, 1);
      setCurrent(Math.round(easeOutCubic(p) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [animate, active, target]);

  if (!hasNumber) return value;
  return value.replace(NUM_RE, String(animate ? current : target));
}

export default function ProofBar() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="proof" aria-label="Plant and equipment at a glance" ref={ref}>
      <div className="container">
        <RevealGroup className="proof__row" step={0.07}>
          {PROOF_STATS.map((stat) => (
            <RevealItem className="proof__item" key={stat.value}>
              <span className="proof__value">
                <StatValue value={stat.value} active={inView} reduce={reduce} />
              </span>
              <span className="proof__label">{stat.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
