import Reveal from "./Reveal.jsx";

/**
 * Trinity-style section-boundary reveal: the whole section fades up
 * (opacity 0→1, translateY 40px→0) as it crosses 15% into the viewport, so
 * background-alternated sections feel like they arrive rather than cut in.
 * Thin wrapper around `Reveal` — `whileInView` is backed by an
 * IntersectionObserver internally, fires once, and collapses to a plain
 * opacity fade under `prefers-reduced-motion` (inherited from `Reveal`).
 *
 * Wrap either a section component from the outside
 * (`<SectionReveal><ProofBar /></SectionReveal>`) or use it in place of the
 * `<section>` tag itself via `as="section"` (the default) so ids/classNames
 * carry straight through with no extra DOM wrapper.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {keyof typeof import("motion/react").motion} [props.as="section"] - Motion tag to render.
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export default function SectionReveal({ children, as = "section", className, ...rest }) {
  return (
    <Reveal as={as} className={className} y={40} duration={0.8} amount={0.15} {...rest}>
      {children}
    </Reveal>
  );
}
