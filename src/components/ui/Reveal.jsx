import { motion, useReducedMotion } from "motion/react";

/**
 * Fade-and-rise scroll-entrance wrapper, per .claude/skills/ui-ux-pro-max §5:
 * opacity + 12–24px y, ~320ms, ease-out, fires once, and collapses to a plain
 * opacity fade under `prefers-reduced-motion` (via `useReducedMotion`).
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {keyof typeof import("motion/react").motion} [props.as="div"] - Motion tag to render (e.g. "div", "span", "li").
 * @param {number} [props.delay=0] - Animation delay in seconds.
 * @param {number} [props.y=16] - Vertical offset (px) animated from on entrance.
 * @param {number} [props.x=0] - Horizontal offset (px) animated from on entrance.
 * @param {number} [props.duration=0.32] - Animation duration in seconds.
 * @param {number} [props.amount=0.3] - Fraction of the element that must be in view to trigger (viewport `amount`).
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 16,
  x = 0,
  duration = 0.32,
  amount = 0.3,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, x },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration, ease: [0.16, 1, 0.3, 1], delay },
        },
      };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggers its children's entrance animation: each `RevealItem` child gets a
 * `step` offset (60–90ms per ui-ux-pro-max §5), capped near 400ms total by
 * keeping `step` small relative to the number of children.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Typically one or more `RevealItem` elements.
 * @param {keyof typeof import("motion/react").motion} [props.as="div"] - Motion tag to render.
 * @param {string} [props.className]
 * @param {number} [props.step=0.08] - Stagger delay between children, in seconds.
 * @param {number} [props.amount=0.25] - Fraction of the element that must be in view to trigger.
 * @returns {JSX.Element}
 */
export function RevealGroup({ children, as = "div", className, step = 0.08, amount = 0.25, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: reduce ? {} : { staggerChildren: step, delayChildren: 0.04 },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * A single staggered child of `RevealGroup`. Inherits its entrance timing
 * from the parent's `variants`/`staggerChildren`; the `duration`/`y`/`x`
 * props here only shape its own animation curve, not the stagger offset.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {keyof typeof import("motion/react").motion} [props.as="div"] - Motion tag to render.
 * @param {number} [props.y=16] - Vertical offset (px) animated from on entrance.
 * @param {number} [props.x=0] - Horizontal offset (px) animated from on entrance.
 * @param {number} [props.duration=0.32] - Animation duration in seconds.
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export function RevealItem({
  children,
  as = "div",
  y = 16,
  x = 0,
  duration = 0.32,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, x },
        show: { opacity: 1, y: 0, x: 0, transition: { duration, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <MotionTag className={className} variants={variants} {...rest}>
      {children}
    </MotionTag>
  );
}
