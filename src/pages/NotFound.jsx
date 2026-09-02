import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="That page isn't here"
        subline="The link may be old or mistyped. Head back to the home page or the capability list."
      />
      <section className="section">
        <div className="container" style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Button as={Link} to="/" variant="primary">
            Home
          </Button>
          <Button as={Link} to="/capabilities" variant="outline">
            Capabilities
          </Button>
          <Button as={Link} to="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </section>
    </>
  );
}
