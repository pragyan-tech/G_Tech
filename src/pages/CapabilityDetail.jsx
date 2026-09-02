import { useParams, Navigate } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SpecTable from "../components/SpecTable.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { CAPABILITY_PAGES } from "../data/site.js";

export default function CapabilityDetail() {
  const { slug } = useParams();
  const page = CAPABILITY_PAGES[slug];

  if (!page) return <Navigate to="/capabilities" replace />;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subline={page.subline}
        back={{ to: "/capabilities", label: "All capabilities" }}
      />

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="prose">
            {page.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <Reveal className="section__head">
            <h2>{page.specTitle}</h2>
            <p className="lead">Transcribed from the GTech company profile.</p>
          </Reveal>
          <Reveal>
            <SpecTable
              caption={`${page.title} — ${page.specTitle}`}
              columns={page.specColumns}
              rows={page.specRows}
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Reveal>
              <p className="subhead">Typical parts</p>
              <ul className="check-list">
                {page.parts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <p className="subhead">Materials</p>
              <ul className="check-list">
                {page.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
