import { Link } from "react-router-dom";
import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import PhotoCard from "./ui/PhotoCard.jsx";
import { ArrowRight } from "./Icons.jsx";
import { CAPABILITIES } from "../data/site.js";
import "./CapabilitiesTeaser.css";

/**
 * Home-page teaser for the three capability areas (machining, fabrication,
 * assembly & finishing) — portrait photo cards linking to their capability
 * detail pages. Distinct from `pages/Capabilities.jsx`, the full standalone
 * `/capabilities` route.
 *
 * @returns {JSX.Element}
 */
export default function CapabilitiesTeaser() {
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

        <RevealGroup className="cap__grid" step={0.12}>
          {CAPABILITIES.map((cap) => (
            <RevealItem key={cap.id} y={24} duration={0.5}>
              <PhotoCard photo={cap.photo} title={cap.title} to={cap.to} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="cap__more">
          <Button as={Link} to="/capabilities" variant="primary">
            See all capabilities <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
