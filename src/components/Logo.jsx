/**
 * Logo lockup — the supplied GTech gear mark with an "EST. 2016" overlay set
 * inside its horizontal shaft, plus a stacked "GTECH / ENTERPRISES" wordmark
 * (Anton display + wide-tracked Inter).
 *
 * @param {Object} props
 * @param {boolean} [props.onDark=false] - Set when the logo sits on a dark/navy background, to switch the wordmark to white.
 * @returns {JSX.Element}
 */
export default function Logo({ onDark = false }) {
  return (
    <span className={`logo ${onDark ? "logo--on-dark" : ""}`} aria-label="GTech Enterprises — home">
      <span className="logo__mark-wrapper">
        <img
          src="/assets/client-assets/logos/gtech-logo.png"
          alt="GTech Enterprises"
          className="logo__mark"
          width="493"
          height="314"
        />
        <span className="logo__est" aria-hidden="true">Est. 2016</span>
      </span>
      <span className="logo__word">
        <span className="logo__name">GTech</span>
        <span className="logo__sub">Enterprises</span>
      </span>
    </span>
  );
}
