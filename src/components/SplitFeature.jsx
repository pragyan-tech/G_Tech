import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import WordReveal from "./ui/WordReveal.jsx";
import Button from "./ui/Button.jsx";
import "./SplitFeature.css";

/**
 * Two-column feature band: text on one side, media on the other, used twice
 * on the home page ("Who we are" and "Why GTech") with alternating dark /
 * light backgrounds.
 *
 * @param {Object} props
 * @param {string} [props.id] - Anchor id for the section (e.g. for in-page nav links).
 * @param {"light"|"navy"} [props.tone="light"] - "light" = paper bg, navy text; "navy" = navy bg, white text.
 * @param {boolean} [props.reversed=false] - Media on the LEFT on desktop; media FIRST when stacked on mobile.
 * @param {string} [props.eyebrow] - Short uppercase label (rendered orange).
 * @param {Array<{text: string, accent?: boolean}>} [props.heading=[]] - Heading segments; `accent` segments render in orange, the rest in the tone's primary text color, all the same weight.
 * @param {boolean} [props.stackHeading=false] - Render each heading segment on its own line.
 * @param {string} [props.body] - Paragraph copy below the heading.
 * @param {{label: string, to: string, variant?: string, onDark?: boolean}} [props.cta] - Button config rendered below the body.
 * @param {React.ReactNode} [props.media] - Node rendered in the media column (photo, video, etc.).
 * @returns {JSX.Element}
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
          <WordReveal as="h2" className="split__heading" stack={stackHeading}>
            {heading}
          </WordReveal>
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
