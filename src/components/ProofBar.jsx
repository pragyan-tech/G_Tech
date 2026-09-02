import { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { PROOF_STATS } from "../data/site.js";
import "./ProofBar.css";

export default function ProofBar() {
  return (
    <section className="proof" aria-label="Plant and equipment at a glance">
      <div className="container">
        <RevealGroup className="proof__row" step={0.07}>
          {PROOF_STATS.map((stat) => (
            <RevealItem className="proof__item" key={stat.value}>
              <span className="proof__value">{stat.value}</span>
              <span className="proof__label">{stat.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
