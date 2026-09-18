import { Link } from "react-router-dom";
import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import { ArrowRight } from "./Icons.jsx";
import "./QualityBand.css";

const CHECKS = [
  "In-process inspection at every operation, not just final",
  "Dedicated quality engineers on staff",
  "First-article and dimensional reports on request",
  "Material and process traceability by job",
];

/**
 * Home-page quality section — navy band with a short quality pitch and a
 * checklist of QMS highlights, linking through to the full `/quality` page.
 * `CHECKS` is local (not in site.js) since it's a condensed, page-specific
 * summary rather than reused content.
 *
 * @returns {JSX.Element}
 */
export default function QualityBand() {
  return (
    <section className="section section--navy quality">
      <div className="container quality__grid">
        <Reveal className="quality__intro">
          <span className="eyebrow eyebrow--on-dark">Quality</span>
          <h2>Quality built into the process, not bolted on</h2>
          <p>
            GTech runs a documented quality management system with checks at each
            machining and fabrication step. Parts are measured against the
            customer drawing before they move to the next operation, and again
            before dispatch.
          </p>
          <Button as={Link} to="/quality" variant="secondary" className="quality__link">
            Our quality approach <ArrowRight />
          </Button>
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
  );
}
