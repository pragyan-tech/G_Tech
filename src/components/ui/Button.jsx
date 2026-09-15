import "./Button.css";

/**
 * Design-system button primitive. Renders as whichever tag/component `as`
 * is set to (defaults to a plain `<a>`), so it can be used as a link
 * (`as={Link}` from react-router-dom, or `as="a"` with `href`) or a real
 * `<button>` (`as="button"`).
 *
 * Variants per .claude/skills/ui-ux-pro-max §6: primary (accent fill),
 * secondary (navy fill), outline, ghost. One primary per section; never two
 * accent fills side by side.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as="a"] - Tag or component to render (e.g. "a", "button", react-router-dom's `Link`).
 * @param {"primary"|"secondary"|"outline"|"ghost"} [props.variant="primary"] - Visual style.
 * @param {"sm"|"md"|"lg"} [props.size="md"] - Height/padding preset.
 * @param {boolean} [props.onDark=false] - Set when the button sits on a dark/navy background.
 * @param {string} [props.className=""] - Extra class names appended to the generated ones.
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export default function Button({
  as = "a",
  variant = "primary",
  size = "md",
  onDark = false,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${onDark ? "btn--on-dark" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
