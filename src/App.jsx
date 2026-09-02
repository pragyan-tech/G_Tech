import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProofBar from "./components/ProofBar.jsx";
import Capabilities from "./components/Capabilities.jsx";
import ClientStrip from "./components/ClientStrip.jsx";
import FeaturedWork from "./components/FeaturedWork.jsx";
import Industries from "./components/Industries.jsx";
import QualityBand from "./components/QualityBand.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProofBar />
        <Capabilities />
        <ClientStrip />
        <FeaturedWork />
        <Industries />
        <QualityBand />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
