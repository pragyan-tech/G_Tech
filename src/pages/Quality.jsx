import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/ui/Reveal.jsx";
import {
  STATEMENTS,
  QMS_POINTS,
  MEASURING_EQUIPMENT,
  CERTIFICATIONS,
  AWARDS,
  CERT_SECTION_BG,
  unsplash,
} from "../data/site.js";
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

      <section className="section cert-section">
        {/* PLACEHOLDER background (Unsplash, gtech-brand §7) — swap for
            /assets/client-assets/certifications/section-background.jpg when the
            client supplies a real shop-floor photo. */}
        <img
          className="cert-section__bg"
          src={unsplash(CERT_SECTION_BG, 1600, 900)}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="cert-section__scrim" aria-hidden="true" />

        <div className="container cert-section__inner">
          <Reveal className="section__head">
            <h2 className="cert-section__title">
              <span>Our</span> <span className="cert-section__accent">Certifications</span>
            </h2>
          </Reveal>

          <RevealGroup className="cert-grid" step={0.07}>
            {CERTIFICATIONS.map((cert) => (
              <RevealItem as="article" className="cert-card" key={cert.id}>
                <span className="cert-card__preview">
                  {/* Certificate scans supplied as PDF — first page previewed here,
                      full document opens in a new tab via the link below. */}
                  <object
                    data={`${cert.file}#toolbar=0&navpanes=0&view=FitH`}
                    type="application/pdf"
                    aria-label={`${cert.name} certificate preview`}
                  >
                    <span className="cert-card__fallback">{cert.name}</span>
                  </object>
                </span>
                <span className="cert-card__caption">
                  <span className="cert-card__name">{cert.name}</span>
                  <span className="cert-card__sub">{cert.caption}</span>
                  <span className="cert-card__meta">
                    {cert.issuer} · {cert.number}
                  </span>
                  <a
                    className="cert-card__link"
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate (PDF) →
                  </a>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section cert-section">
        <img
          className="cert-section__bg"
          src={unsplash(CERT_SECTION_BG, 1600, 900)}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="cert-section__scrim" aria-hidden="true" />

        <div className="container cert-section__inner">
          <Reveal className="section__head">
            <h2 className="cert-section__title">
              <span>Awards</span>{" "}
              <span className="cert-section__accent">&amp; Recognition</span>
            </h2>
          </Reveal>

          <RevealGroup
            className={`cert-grid ${AWARDS.length === 1 ? "cert-grid--single" : ""}`}
            step={0.07}
          >
            {AWARDS.map((award) => (
              <RevealItem
                as="a"
                className="cert-card"
                key={award.id}
                href={award.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cert-card__preview cert-card__preview--photo">
                  <img src={award.image} alt={award.name} loading="lazy" decoding="async" />
                </span>
                <span className="cert-card__caption">
                  <span className="cert-card__name">{award.name}</span>
                  <span className="cert-card__sub">{award.caption}</span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
