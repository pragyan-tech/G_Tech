import { motion, useReducedMotion } from "motion/react";

/* Fade-and-rise per .claude/skills/ui-ux-pro-max §5:
   opacity + 12–24px y, ~320ms, ease-out, once only, reduced-motion safe. */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 16,
  amount = 0.3,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1], delay },
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

/* Staggered list: children get 60–90ms offsets, capped near 400ms total. */
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

export function RevealItem({ children, as = "div", y = 16, className, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <MotionTag className={className} variants={variants} {...rest}>
      {children}
    </MotionTag>
  );
}
