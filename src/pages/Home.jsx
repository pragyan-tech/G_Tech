import Hero from "../components/Hero.jsx";
import ProofBar from "../components/ProofBar.jsx";
import CapabilitiesTeaser from "../components/CapabilitiesTeaser.jsx";
import ClientStrip from "../components/ClientStrip.jsx";
import IndustriesTeaser from "../components/IndustriesTeaser.jsx";
import QualityBand from "../components/QualityBand.jsx";
import CTASection from "../components/CTASection.jsx";
import SplitFeature from "../components/SplitFeature.jsx";
import PlantTourVideo from "../components/PlantTourVideo.jsx";
import Seo from "../components/Seo.jsx";
import SectionReveal from "../components/ui/SectionReveal.jsx";
import { WHY_GTECH_PHOTO, unsplash } from "../data/site.js";

/* schema.org structured data for the Home page (rendered as JSON-LD). */
const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  name: "GTech Enterprises",
  url: "https://gtechent.com",
  logo: "https://gtechent.com/favicon.svg",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gat No. 1652, Patil Nagar, Behind MNGL Pump, Dehu-Alandi Road, Chikhali",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411062",
    addressCountry: "IN",
  },
  telephone: "+91-9021774809",
  email: "development@gtechent.com",
  openingHours: "Mo-Sa 09:00-18:00",
  description:
    "Precision CNC machining, structural fabrication and assembly under one roof for construction-equipment and industrial OEMs.",
  sameAs: [],
};

/**
 * Home page (`/`) — assembles the full landing-page section sequence: hero,
 * client strip, "Who we are" split feature, proof stats, capabilities teaser,
 * "Why GTech" split feature, industries teaser, quality band, and the closing
 * CTA. Every section but the hero (which has its own fade-and-rise entrance)
 * is wrapped in `SectionReveal` for the Trinity-style section-boundary fade.
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <>
      <Seo
        title="GTech Enterprises — Precision Machining & Fabrication for OEMs, Pune"
        description="GTech Enterprises: precision CNC machining, structural fabrication and assembly for construction-equipment and industrial OEMs. Chikhali, Pune. Since 2016."
        path="/"
      >
        <script type="application/ld+json">
          {JSON.stringify(ORGANIZATION_LD)}
        </script>
      </Seo>
      <Hero />

      <SectionReveal as="div">
        <ClientStrip />
      </SectionReveal>

      <SectionReveal as="div">
        <SplitFeature
          id="who-we-are"
          tone="light"
          eyebrow="Who we are"
          heading={[
            { text: "Precision manufacturing for" },
            { text: "India's OEM leaders", accent: true },
          ]}
          body="Since 2016, GTech Enterprises has served construction-equipment and industrial OEMs from our Chikhali plant in Pune. Precision machining, fabrication, and assembly under one roof — with 42 people, a 5-ton crane, and a Koike 300A plasma line."
          cta={{ label: "Who We Are", to: "/about", variant: "primary" }}
          media={<PlantTourVideo />}
        />
      </SectionReveal>

      <SectionReveal as="div">
        <ProofBar />
      </SectionReveal>
      <SectionReveal as="div">
        <CapabilitiesTeaser />
      </SectionReveal>

      <SectionReveal as="div">
        <SplitFeature
          id="why-gtech"
          tone="navy"
          reversed
          eyebrow="Why GTech"
          stackHeading
          heading={[
            { text: "Built to print." },
            { text: "Tighter tolerances.", accent: true },
            { text: "Faster turnaround." },
          ]}
          body="From single-part prototypes to full production runs, GTech delivers the precision and pace that construction-equipment and industrial OEMs demand. Nine years in, three ISO certifications, and a client list that reads like the top of Indian OEM manufacturing."
          cta={{ label: "See Our Work", to: "/clients", variant: "secondary" }}
          media={
            <div className="split__frame">
              {/* PLACEHOLDER — replace with a first-party GTech CNC lathe photo. */}
              <img
                src={unsplash(WHY_GTECH_PHOTO, 900, 1100)}
                alt=""
                loading="lazy"
                decoding="async"
                width="900"
                height="1100"
              />
            </div>
          }
        />
      </SectionReveal>

      <SectionReveal as="div">
        <IndustriesTeaser />
      </SectionReveal>
      <SectionReveal as="div">
        <QualityBand />
      </SectionReveal>
      <SectionReveal as="div">
        <CTASection />
      </SectionReveal>
    </>
  );
}
