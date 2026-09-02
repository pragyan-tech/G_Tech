import "./Button.css";

/* Variants per .claude/skills/ui-ux-pro-max §6:
   primary (accent fill), secondary (navy fill), outline, ghost.
   One primary per section; never two accent fills side by side. */
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
