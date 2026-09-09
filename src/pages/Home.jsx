import Hero from "../components/Hero.jsx";
import ProofBar from "../components/ProofBar.jsx";
import Capabilities from "../components/Capabilities.jsx";
import ClientStrip from "../components/ClientStrip.jsx";
import FeaturedWork from "../components/FeaturedWork.jsx";
import Industries from "../components/Industries.jsx";
import QualityBand from "../components/QualityBand.jsx";
import CTASection from "../components/CTASection.jsx";
import SplitFeature from "../components/SplitFeature.jsx";
import PlantTourVideo from "../components/PlantTourVideo.jsx";
import { WHY_GTECH_PHOTO, unsplash } from "../data/site.js";

export default function Home() {
  return (
    <>
      <Hero />

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

      <ProofBar />
      <Capabilities />
      <ClientStrip />

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
        cta={{ label: "See Our Work", to: "/clients", variant: "outline", onDark: true }}
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

      <FeaturedWork />
      <Industries />
      <QualityBand />
      <CTASection />
    </>
  );
}
