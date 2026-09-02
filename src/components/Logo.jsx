/* PLACEHOLDER logo — orange gear + "GTech Enterprises" wordmark.
   Replace with the final supplied brand asset (SVG) before launch. */
export default function Logo({ onDark = false }) {
  const wordColor = onDark ? "#ffffff" : "var(--color-navy)";
  return (
    <span className="logo" aria-label="GTech Enterprises — home">
      <svg
        className="logo__mark"
        width="34"
        height="34"
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
      >
        {/* gear */}
        <path
          fill="var(--color-orange)"
          d="M20 3.2l2.6 3.1 3.9-1.3 1 4 4 .9-1.2 3.9 3.1 2.6-3.1 2.6 1.2 3.9-4 .9-1 4-3.9-1.3L20 36.8l-2.6-3.1-3.9 1.3-1-4-4-.9 1.2-3.9L6.6 20l3.1-2.6-1.2-3.9 4-.9 1-4 3.9 1.3L20 3.2z"
        />
        <circle cx="20" cy="20" r="9.5" fill="#ffffff" />
        {/* GE monogram */}
        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="12"
          fill="var(--color-navy)"
        >
          GE
        </text>
      </svg>
      <span className="logo__word" style={{ color: wordColor }}>
        <strong>GTech</strong> Enterprises
      </span>
    </span>
  );
}
