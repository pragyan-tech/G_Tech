import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight } from "./Icons.jsx";
import "./PageHero.css";

/**
 * Interior-page hero: navy band, eyebrow, h1, optional subline + back link.
 * Used at the top of every route page except Home.
 *
 * The section's own background is a static navy-to-white gradient (see
 * PageHero.css) so it dissolves into the page's next section without an
 * overlay layer.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Small uppercase label above the title.
 * @param {string} props.title - Page heading (rendered as `<h1>`).
 * @param {string} [props.subline] - Supporting paragraph below the title.
 * @param {{ to: string, label: string }} [props.back] - When set, renders a "back to X" link above the eyebrow.
 * @returns {JSX.Element}
 */
export default function PageHero({ eyebrow, title, subline, back }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          {back && (
            <Link className="page-hero__back" to={back.to}>
              <ArrowRight style={{ transform: "rotate(180deg)" }} />
              {back.label}
            </Link>
          )}
          {eyebrow && <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>}
          <h1>{title}</h1>
          {subline && <p className="page-hero__subline">{subline}</p>}
        </Reveal>
      </div>
    </section>
  );
}
