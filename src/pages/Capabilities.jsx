import PageHero from "../components/PageHero.jsx";
import ProcessMap from "../components/ProcessMap.jsx";
import CapabilityGrid from "../components/CapabilityGrid.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal from "../components/ui/Reveal.jsx";

export default function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Machining and fabrication under one roof"
        subline="GTech takes a build-to-print job from cut plate or bar stock to a finished, inspected part — CNC turning and milling, structural fabrication, and assembly on one floor in Chikhali, Pune."
      />

      <ProcessMap />

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Three areas</span>
            <h2>Where to go next</h2>
            <p className="lead">
              Each area has its own machine list, typical parts and materials.
            </p>
          </Reveal>
          <CapabilityGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
