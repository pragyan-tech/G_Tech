import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { ICONS } from "../components/Icons.jsx";
import { INDUSTRIES } from "../data/site.js";
import "./Industries.css";

/**
 * Industries page (`/industries`) — one full section per entry in
 * `INDUSTRIES` (site.js), each with its own anchor id so the home-page
 * teaser cards can deep-link here (e.g. `/industries#construction`).
 * Distinct from `components/IndustriesTeaser.jsx`, the home-page card grid.
 *
 * @returns {JSX.Element}
 */
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Where our parts run"
        subline="Construction and earth-moving equipment is the core of GTech's work, with regular runs for adjacent heavy industries."
      />

      {INDUSTRIES.map((industry, i) => {
        const Icon = ICONS[industry.icon];
        return (
          <section
            className={`section ${i % 2 === 1 ? "section--paper" : ""}`}
            id={industry.id}
            key={industry.id}
          >
            <div className="container">
              <div className="ind__row">
                <Reveal className="ind__lead">
                  <span className="ind__icon">
                    <Icon />
                  </span>
                  <h2>
                    {industry.label}
                    {industry.lead && <span className="ind__flag">Primary</span>}
                  </h2>
                  <p className="ind__blurb">{industry.blurb}</p>
                </Reveal>
                <Reveal className="ind__parts">
                  <p className="subhead">Typical parts</p>
                  <ul className="check-list">
                    {industry.parts.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
