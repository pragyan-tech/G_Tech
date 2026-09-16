import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import PhotoCard from "./ui/PhotoCard.jsx";
import { INDUSTRIES } from "../data/site.js";
import "./IndustriesTeaser.css";

/**
 * Home-page teaser for the industries GTech serves — portrait photo cards
 * that deep-link to the matching anchor on the full `/industries` page.
 * Distinct from `pages/Industries.jsx`, the standalone route with full blurbs.
 *
 * @returns {JSX.Element}
 */
export default function IndustriesTeaser() {
  return (
    <section className="section section--lg section--navy" id="industries">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Where our parts run</span>
          <h2>Industries we serve</h2>
          <p className="lead">
            The bulk of our work supplies construction and earth-moving equipment
            OEMs, with regular runs for adjacent heavy industries.
          </p>
        </Reveal>

        <RevealGroup className="industries__row" step={0.1}>
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.id} y={24} duration={0.5}>
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
