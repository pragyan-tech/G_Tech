import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { ICONS } from "./Icons.jsx";
import { INDUSTRIES } from "../data/site.js";
import "./Industries.css";

export default function Industries() {
  return (
    <section className="section section--paper" id="industries">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Where our parts run</span>
          <h2>Industries we serve</h2>
          <p className="lead">
            The bulk of our work supplies construction and earth-moving equipment
            OEMs, with regular runs for adjacent heavy industries.
          </p>
        </Reveal>

        <RevealGroup className="industries__row" step={0.07}>
          {INDUSTRIES.map((industry) => {
            const Icon = ICONS[industry.icon];
            return (
              <RevealItem
                className={`industry ${industry.lead ? "industry--lead" : ""}`}
                key={industry.id}
              >
                <span className="industry__icon">
                  <Icon />
                </span>
                <span className="industry__label">{industry.label}</span>
                {industry.lead && <span className="industry__tag">Primary</span>}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
