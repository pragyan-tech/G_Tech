import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { ArrowRight, ICONS } from "./Icons.jsx";
import { CAPABILITIES } from "../data/site.js";
import "./Capabilities.css";

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">What we do</span>
          <h2>Two capability halves, one plant</h2>
          <p className="lead">
            Machining and fabrication run on the same floor in Chikhali — so a
            build-to-print job moves from cut plate to finished, inspected part
            without leaving the building.
          </p>
        </Reveal>

        <RevealGroup className="cap__grid">
          {CAPABILITIES.map((cap) => {
            const Icon = ICONS[cap.icon];
            return (
              <RevealItem as="article" className="cap-card" key={cap.id}>
                <span className="cap-card__icon">
                  <Icon />
                </span>
                <h3 className="cap-card__title">{cap.title}</h3>
                <p className="cap-card__body">{cap.body}</p>
                <a className="cap-card__link" href={cap.href}>
                  Learn more <ArrowRight />
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
