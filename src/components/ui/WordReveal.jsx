import { motion, useReducedMotion } from "motion/react";

const WORD_DURATION = 0.5;
const WORD_STAGGER = 0.08;

/* Accepts a plain string (Hero headline) or the `{text, accent}` segment
   array SplitFeature uses for its split-color headings — both normalize to
   the same segment list so the two call sites share one code path. */
function normalize(children) {
  return typeof children === "string" ? [{ text: children, accent: false }] : children;
}

/**
 * Word-by-word entrance reveal, reserved for the three Trinity-style major
 * headings (Hero headline, "Who We Are", "Why GTech" — see
 * .claude/skills/ui-ux-pro-max §5). Each word fades and rises in on its own
 * as the heading crosses 30% into the viewport (`whileInView`, backed by an
 * IntersectionObserver, fires once). Preserves per-segment accent color so
 * it composes with SplitFeature's split-color headings, and can render each
 * segment on its own line (`stack`) the way `.split__heading--stack` did.
 * Collapses to an instant, unanimated render under `prefers-reduced-motion`.
 *
 * @param {Object} props
 * @param {string|Array<{text: string, accent?: boolean}>} props.children - Heading text, or split-color segments.
 * @param {keyof typeof import("motion/react").motion} [props.as="h1"] - Motion tag to render.
 * @param {boolean} [props.stack=false] - Render each segment as its own block line.
 * @param {string} [props.accentClassName="split__accent"] - Class applied to words from an `accent` segment.
 * @param {string} [props.className]
 * @param {number} [props.amount=0.3] - Fraction of the element that must be in view to trigger.
 * @returns {JSX.Element}
 */
export default function WordReveal({
  children,
  as = "h1",
  stack = false,
  accentClassName = "split__accent",
  className,
  amount = 0.3,
  ...rest
}) {
  const reduce = useReducedMotion();
  const segments = normalize(children);
  const MotionTag = motion[as] ?? motion.h1;

  const container = {
    hidden: {},
    show: { transition: reduce ? {} : { staggerChildren: WORD_STAGGER } },
  };
  const word = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: WORD_DURATION, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {segments.map((seg, si) => {
        const words = seg.text.split(" ");
        return (
          <span
            key={si}
            className={seg.accent ? accentClassName : undefined}
            style={stack ? { display: "block" } : undefined}
          >
            {/* The separator space must sit BETWEEN the inline-block word
                spans, not inside one — a trailing space at the end of an
                inline-block's own content collapses away (CSS line-end
                whitespace trimming), which silently glues words together. */}
            {words.flatMap((w, wi) => {
              const span = (
                <motion.span key={wi} variants={word} style={{ display: "inline-block" }}>
                  {w}
                </motion.span>
              );
              return wi < words.length - 1 ? [span, " "] : [span];
            })}
            {!stack && si < segments.length - 1 ? " " : ""}
          </span>
        );
      })}
    </MotionTag>
  );
}
