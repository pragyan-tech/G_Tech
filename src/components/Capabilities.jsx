import { Link } from "react-router-dom";
import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import PhotoCard from "./ui/PhotoCard.jsx";
import { ArrowRight } from "./Icons.jsx";
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
          {CAPABILITIES.map((cap) => (
            <RevealItem key={cap.id}>
              <PhotoCard photo={cap.photo} title={cap.title} to={cap.to} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="cap__more">
          <Button as={Link} to="/capabilities" variant="outline">
            See all capabilities <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
