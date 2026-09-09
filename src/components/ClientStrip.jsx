import Reveal from "./ui/Reveal.jsx";
import { CLIENTS } from "../data/site.js";
import "./ClientStrip.css";

/* Continuously scrolling client-logo marquee (round-1 feedback, ref:
   abhijeetengineers.com "Our Valuable Clients"). The list is rendered twice and
   the track is translated by -50%, so one full set scrolls off exactly as its
   copy scrolls in — no visible seam. Motion is pure CSS transform (GPU); the
   whole strip pauses on hover and falls back to a scrollable row under
   prefers-reduced-motion. */
export default function ClientStrip() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="section section--paper" id="clients">
      <div className="container">
        <Reveal className="clients__head">
          <span className="eyebrow eyebrow--muted">Trusted by OEMs and Tier-1 suppliers</span>
          <h2 className="clients__title">
            Parts running in construction equipment across India — and beyond
          </h2>
        </Reveal>
      </div>

      <div className="marquee" role="group" aria-label="Client and partner logos">
        <ul className="marquee__track" role="list">
          {loop.map((client, i) => {
            const dup = i >= CLIENTS.length;
            return (
              <li className="marquee__item" key={`${client.id}-${i}`} aria-hidden={dup}>
                <img
                  className="marquee__logo"
                  src={client.logo}
                  alt={dup ? "" : client.name}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
