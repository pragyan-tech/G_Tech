import { useParams, Navigate } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Seo from "../components/Seo.jsx";
import SpecTable from "../components/SpecTable.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionReveal from "../components/ui/SectionReveal.jsx";
import { CAPABILITY_PAGES } from "../data/site.js";

/* Per-capability <head> metadata, keyed by the same slug as CAPABILITY_PAGES. */
const SEO_BY_SLUG = {
  "cnc-machining": {
    title: "Machining — GTech Enterprises",
    description:
      "CNC turning up to Ø300 × 800L, VMC milling. LMW and BFW machines. Precision machined components for OEM production runs.",
  },
  fabrication: {
    title: "Fabrication — GTech Enterprises",
    description:
      "Plasma cutting on 3×8m bed, press-brake forming, MIG/TIG/arc welding. Structural weldments and fabrication for heavy industry.",
  },
  "assembly-and-finishing": {
    title: "Assembly & Finishing — GTech Enterprises",
    description:
      "Fixtured sub-assembly and welded structures with 5-ton crane. Prototype through mid-volume production runs.",
  },
};

/**
 * Capability detail page (`/capabilities/:slug`) — intro copy, a spec table,
 * and typical parts/materials lists, all sourced from `CAPABILITY_PAGES[slug]`
 * in site.js. Redirects to `/capabilities` if the slug doesn't match a known
 * capability.
 *
 * @returns {JSX.Element}
 */
export default function CapabilityDetail() {
  const { slug } = useParams();
  const page = CAPABILITY_PAGES[slug];
  const seo = SEO_BY_SLUG[slug];

  if (!page) return <Navigate to="/capabilities" replace />;

  return (
    <>
      {seo && (
        <Seo
          title={seo.title}
          description={seo.description}
          path={`/capabilities/${slug}`}
        />
      )}
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subline={page.subline}
        back={{ to: "/capabilities", label: "All capabilities" }}
      />

      <SectionReveal className="section">
        <div className="container container--narrow">
          <Reveal className="prose">
            {page.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>
        </div>
      </SectionReveal>

      <SectionReveal className="section section--paper">
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
      </SectionReveal>

      <SectionReveal className="section">
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
      </SectionReveal>

      <SectionReveal as="div">
        <CTASection />
      </SectionReveal>
    </>
  );
}
