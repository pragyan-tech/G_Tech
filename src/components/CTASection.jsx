import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="section cta">
      <div className="container">
        <Reveal className="cta__panel">
          <div className="cta__text">
            <h2>Have a drawing? We&apos;ll quote it.</h2>
            <p>
              Send your drawings and we&apos;ll come back with a price and a lead
              time — prototype or production, machining or fabrication.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Request a Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
