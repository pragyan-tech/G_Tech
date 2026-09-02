import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { CLIENTS } from "../data/site.js";
import { CLIENT_LOGOS } from "./ClientLogos.jsx";
import "./ClientStrip.css";

export default function ClientStrip() {
  return (
    <section className="section section--paper" id="clients">
      <div className="container">
        <Reveal className="clients__head">
          <span className="eyebrow eyebrow--muted">Trusted by OEMs and Tier-1 suppliers</span>
          <h2 className="clients__title">
            Parts running in construction equipment across India — and beyond
          </h2>
        </Reveal>

        <RevealGroup className="clients__grid" step={0.06}>
          {CLIENTS.map((client) => {
            const LogoMark = CLIENT_LOGOS[client.id];
            return (
              <RevealItem className="clients__cell" key={client.id} title={client.name}>
                {/* PLACEHOLDER logo — generic mark, not the customer's real logo. */}
                <LogoMark />
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
