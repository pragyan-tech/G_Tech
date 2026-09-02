import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight } from "./Icons.jsx";
import "./PageHero.css";

/* Simple interior-page hero: navy band, eyebrow, h1, optional subline + back link. */
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
