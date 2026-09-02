import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { PROCESS_STEPS } from "../data/site.js";
import "./ProcessMap.css";

/* Horizontal step diagram: raw material → … → dispatch.
   Scrolls inside its own container on narrow screens. */
export default function ProcessMap() {
  return (
    <section className="section section--paper">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">How a job flows</span>
          <h2>From raw material to dispatch</h2>
          <p className="lead">
            Cutting, forming, welding, machining, inspection and assembly all
            happen on one floor — so parts move through the route without
            leaving the building.
          </p>
        </Reveal>

        <div className="pmap__scroll">
          <RevealGroup className="pmap" step={0.05}>
            {PROCESS_STEPS.map((step, i) => (
              <RevealItem className="pmap__step" key={step.id}>
                <span className="pmap__num">{i + 1}</span>
                <span className="pmap__label">{step.label}</span>
                <span className="pmap__note">{step.note}</span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="pmap__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
