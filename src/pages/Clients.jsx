import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import LogoMarquee from "../components/LogoMarquee.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/ui/Reveal.jsx";
import { CLIENTS, PROJECTS } from "../data/site.js";
import "./Clients.css";

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients & work"
        title="Who we build for"
        subline="Build-to-print parts running in construction equipment and industrial machinery, for OEMs and Tier-1 / Tier-2 suppliers."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Selected customers</span>
            <h2>OEMs and suppliers we work with</h2>
            <p className="lead">
              HD Hyundai Construction Equipment India and Zoomlion anchor the
              construction-equipment work.
            </p>
          </Reveal>

          <LogoMarquee className="clients-page__marquee" />

          <RevealGroup className="clients-page__logos" step={0.05}>
            {CLIENTS.map((client) => (
              <RevealItem className="clients-page__cell" key={client.id} title={client.name}>
                {/* Logos supplied by the client (round-1 feedback). */}
                <img
                  className="clients-page__logo"
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Project work</span>
            <h2>Parts we deliver</h2>
            <p className="lead">
              Representative components and assemblies. Customer drawings and
              tolerances are not shown.
            </p>
          </Reveal>
          <RevealGroup className="card-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} showMaterial />
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
