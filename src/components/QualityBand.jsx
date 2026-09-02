import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import "./QualityBand.css";

const CHECKS = [
  "In-process inspection at every operation, not just final",
  "Dedicated quality engineers on staff",
  "First-article and dimensional reports on request",
  "Material and process traceability by job",
];

export default function QualityBand() {
  return (
    <>
      <span className="anchor-offset" id="about" aria-hidden="true" />
      <section className="section section--navy quality" id="quality">
        <div className="container quality__grid">
          <Reveal className="quality__intro">
            <span className="eyebrow eyebrow--on-dark">Quality</span>
            <h2>Quality built into the process, not bolted on</h2>
            <p>
              GTech runs a documented quality management system with checks at
              each machining and fabrication step. Parts are measured against the
              customer drawing before they move to the next operation, and again
              before dispatch. Two quality engineers own the process day to day.
            </p>
            {/* TODO — confirm ISO 9001 certification status with client before
                displaying any badge, certificate number, or "certified" claim.
                Until confirmed: describe the QMS and inspection practice only. */}
          </Reveal>

          <RevealGroup className="quality__checks" as="ul" step={0.07}>
            {CHECKS.map((check) => (
              <RevealItem as="li" className="quality__check" key={check}>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="m5 13 4 4L19 7"
                    fill="none"
                    stroke="var(--color-orange)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{check}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
