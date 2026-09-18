import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { ICONS } from "./Icons.jsx";
import { PROCESS_STEPS } from "../data/site.js";
import "./ProcessMap.css";

/**
 * "How the job flows" section on /capabilities — one card per process step
 * (from `PROCESS_STEPS` in site.js), cascading in left to right as the
 * section enters view. Desktop: 4-up grid that wraps to two rows. Mobile:
 * single column.
 *
 * @returns {JSX.Element}
 */
export default function ProcessMap() {
  return (
    <section className="section">
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

        <RevealGroup className="pmap" step={0.1} amount={0.15}>
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <RevealItem as="article" className="pmap__card" key={step.id} x={-20} y={0} duration={0.4}>
                <span className="pmap__num">{String(i + 1).padStart(2, "0")}</span>
                {Icon && (
                  <span className="pmap__icon">
                    <Icon />
                  </span>
                )}
                <h3 className="pmap__label">{step.label}</h3>
                <p className="pmap__desc">{step.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
