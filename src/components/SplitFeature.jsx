import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import "./SplitFeature.css";

/* Trinity-style two-column feature band: text on one side, media on the other,
   alternating dark / light backgrounds down the page.

   Props:
   - tone: "light" (paper bg, navy text) | "navy" (navy bg, white text)
   - reversed: media on the LEFT on desktop, media FIRST when stacked on mobile
   - eyebrow: short uppercase label (rendered orange)
   - heading: array of { text, accent? } — accent segments render in orange,
     everything else in the tone's primary text colour, all the same weight
   - stackHeading: render each heading segment on its own line
   - body: paragraph string
   - cta: { label, to, variant, onDark }
   - media: node rendered in the media column
*/
export default function SplitFeature({
  id,
  tone = "light",
  reversed = false,
  eyebrow,
  heading = [],
  stackHeading = false,
  body,
  cta,
  media,
}) {
  const reduce = useReducedMotion();

  const mediaVariants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.98 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <section
      className={`section split split--${tone}${reversed ? " split--reversed" : ""}`}
      id={id}
    >
      <div className="container split__grid">
        <RevealGroup className="split__text" as="div" step={0.08} amount={0.4}>
          {eyebrow && (
            <RevealItem as="span" className="eyebrow split__eyebrow" duration={0.5}>
              {eyebrow}
            </RevealItem>
          )}
          <RevealItem
            as="h2"
            className={`split__heading${stackHeading ? " split__heading--stack" : ""}`}
            duration={0.5}
          >
            {heading.map((seg, i) => (
              <span
                key={i}
                className={seg.accent ? "split__accent" : undefined}
              >
                {seg.text}
                {i < heading.length - 1 ? " " : ""}
              </span>
            ))}
          </RevealItem>
          {body && (
            <RevealItem as="p" className="split__body" duration={0.5}>
              {body}
            </RevealItem>
          )}
          {cta && (
            <RevealItem duration={0.5}>
              <Button
                as={Link}
                to={cta.to}
                variant={cta.variant || "primary"}
                size="lg"
                onDark={cta.onDark}
                className="split__cta"
              >
                {cta.label}
              </Button>
            </RevealItem>
          )}
        </RevealGroup>

        <motion.div
          className="split__media"
          variants={mediaVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {media}
        </motion.div>
      </div>
    </section>
  );
}
