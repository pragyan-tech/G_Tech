/**
 * PLACEHOLDER logo lockup — solid orange gear with a "GE" cutout, an
 * "EST. 2016" tag over the gear's top-right corner, and a stacked
 * "GTECH / ENTERPRISES" wordmark (Anton display + wide-tracked Inter), drawn
 * as inline SVG + text. Replace with the final supplied brand asset (SVG)
 * before launch.
 *
 * @param {Object} props
 * @param {boolean} [props.onDark=false] - Set when the logo sits on a dark/navy background, to switch the wordmark to white.
 * @returns {JSX.Element}
 */
export default function Logo({ onDark = false }) {
  return (
    <span className={`logo ${onDark ? "logo--on-dark" : ""}`} aria-label="GTech Enterprises — home">
      <span className="logo__mark-wrap">
        <svg
          className="logo__mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
          focusable="false"
        >
          {/* chunky 8-tooth gear */}
          <path
            fill="var(--color-orange)"
            d="M16.38 4.93L16.95 0.74L23.05 0.74L23.62 4.93A15.5 15.5 0 0 1 28.1 6.78L31.46 4.22L35.78 8.54L33.22 11.9A15.5 15.5 0 0 1 35.07 16.38L39.26 16.95L39.26 23.05L35.07 23.62A15.5 15.5 0 0 1 33.22 28.1L35.78 31.46L31.46 35.78L28.1 33.22A15.5 15.5 0 0 1 23.62 35.07L23.05 39.26L16.95 39.26L16.38 35.07A15.5 15.5 0 0 1 11.9 33.22L8.54 35.78L4.22 31.46L6.78 28.1A15.5 15.5 0 0 1 4.93 23.62L0.74 23.05L0.74 16.95L4.93 16.38A15.5 15.5 0 0 1 6.78 11.9L4.22 8.54L8.54 4.22L11.9 6.78A15.5 15.5 0 0 1 16.38 4.93Z"
          />
          {/* hub ring for depth */}
          <circle cx="20" cy="20" r="12" fill="none" stroke="var(--color-orange-600)" strokeWidth="1.25" />
          {/* GE monogram */}
          <text
            x="20"
            y="20.6"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Anton, Oswald, Impact, sans-serif"
            fontWeight="400"
            fontSize="14"
            letterSpacing="0.3"
            fill="var(--color-white)"
          >
            GE
          </text>
        </svg>
        <span className="logo__est">Est. 2016</span>
      </span>
      <span className="logo__word">
        <span className="logo__name">GTech</span>
        <span className="logo__sub">Enterprises</span>
      </span>
    </span>
  );
}
