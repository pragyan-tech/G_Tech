import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/ui/Reveal.jsx";
import { STATEMENTS, QMS_POINTS, MEASURING_EQUIPMENT } from "../data/site.js";
import "./Quality.css";

const INSPECTION_STEPS = [
  ["Incoming", "Material grade and size checked against the job before it enters the floor."],
  ["In-process", "Dimensions verified at each turning, milling, drilling and welding operation."],
  ["First-article", "First part of a new lot fully measured and recorded before the run continues."],
  ["Final", "Complete dimensional check and visual / weld inspection before packing."],
  ["Records", "Results logged against the job for traceability and monthly review."],
];

export default function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality built into the process"
        subline="A documented quality management system with inspection at every step — not a final-check afterthought."
      />

      <section className="section">
        <div className="container container--narrow">
          <Reveal>
            <p className="subhead">Quality policy</p>
            <p className="q-policy">{STATEMENTS.quality}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">How the QMS works</span>
            <h2>Five things we hold to</h2>
          </Reveal>
          <RevealGroup className="card-grid">
            {QMS_POINTS.map((point) => (
              <RevealItem as="article" className="q-card" key={point.title}>
                <h3 className="q-card__title">{point.title}</h3>
                <p className="q-card__body">{point.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Reveal>
              <p className="subhead">Inspection process</p>
              <ol className="q-steps">
                {INSPECTION_STEPS.map(([label, body]) => (
                  <li key={label}>
                    <span className="q-steps__label">{label}</span>
                    <span className="q-steps__body">{body}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <p className="subhead">Measuring equipment</p>
              <ul className="check-list">
                {MEASURING_EQUIPMENT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="q-note">
                {/* PLACEHOLDER — no calibration certificates were transcribed
                    from the source PDF; confirm the calibration register with the client. */}
                Calibration register — TODO CONFIRM WITH CLIENT.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Certifications</span>
            <h2>Certification status</h2>
          </Reveal>
          <Reveal className="q-cert">
            {/* PLACEHOLDER — the source PDF describes a QMS but shows no certificate.
                Do NOT publish an ISO claim until the client confirms it. */}
            <p className="q-cert__flag">ISO 9001 — TODO CONFIRM WITH CLIENT</p>
            <p className="q-cert__note">
              GTech operates a quality management system with in-process and final
              inspection. Any certification badge or certificate number must be
              confirmed with the client before it appears on this page.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
