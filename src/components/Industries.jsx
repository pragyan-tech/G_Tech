import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import PhotoCard from "./ui/PhotoCard.jsx";
import { INDUSTRIES } from "../data/site.js";
import "./Industries.css";

export default function Industries() {
  return (
    <section className="section section--paper" id="industries">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Where our parts run</span>
          <h2>Industries we serve</h2>
          <p className="lead">
            The bulk of our work supplies construction and earth-moving equipment
            OEMs, with regular runs for adjacent heavy industries.
          </p>
        </Reveal>

        <RevealGroup className="industries__row" step={0.07}>
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.id}>
              <PhotoCard
                photo={industry.photo}
                title={industry.label}
                to={`/industries#${industry.id}`}
                badge={industry.lead ? "Primary" : undefined}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
