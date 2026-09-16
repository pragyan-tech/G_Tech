import Hero from "../components/Hero.jsx";
import ProofBar from "../components/ProofBar.jsx";
import CapabilitiesTeaser from "../components/CapabilitiesTeaser.jsx";
import ClientStrip from "../components/ClientStrip.jsx";
import FeaturedWork from "../components/FeaturedWork.jsx";
import IndustriesTeaser from "../components/IndustriesTeaser.jsx";
import QualityBand from "../components/QualityBand.jsx";
import CTASection from "../components/CTASection.jsx";
import SplitFeature from "../components/SplitFeature.jsx";
import PlantTourVideo from "../components/PlantTourVideo.jsx";
import SectionReveal from "../components/ui/SectionReveal.jsx";
import { WHY_GTECH_PHOTO, unsplash } from "../data/site.js";

/**
 * Home page (`/`) — assembles the full landing-page section sequence: hero,
 * "Who we are" split feature, proof stats, capabilities teaser, client strip,
 * "Why GTech" split feature, featured work, industries teaser, quality band,
 * and the closing CTA. Every section but the hero (which has its own
 * fade-and-rise entrance) is wrapped in `SectionReveal` for the Trinity-style
 * section-boundary fade.
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <>
      <Hero />

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
        <ClientStrip />
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
        <FeaturedWork />
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
