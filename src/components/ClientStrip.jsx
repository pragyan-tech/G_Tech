import Reveal from "./ui/Reveal.jsx";
import LogoMarquee from "./LogoMarquee.jsx";
import "./ClientStrip.css";

/* Home-page client band: heading + the shared sliding logo marquee. */
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
      </div>

      <LogoMarquee />
    </section>
  );
}
