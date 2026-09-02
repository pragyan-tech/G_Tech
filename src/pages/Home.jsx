import Hero from "../components/Hero.jsx";
import ProofBar from "../components/ProofBar.jsx";
import Capabilities from "../components/Capabilities.jsx";
import ClientStrip from "../components/ClientStrip.jsx";
import FeaturedWork from "../components/FeaturedWork.jsx";
import Industries from "../components/Industries.jsx";
import QualityBand from "../components/QualityBand.jsx";
import CTASection from "../components/CTASection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Capabilities />
      <ClientStrip />
      <FeaturedWork />
      <Industries />
      <QualityBand />
      <CTASection />
    </>
  );
}
