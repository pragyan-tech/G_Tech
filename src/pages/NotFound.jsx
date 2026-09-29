import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero.jsx";
import Button from "../components/ui/Button.jsx";

/**
 * 404 page — matched by App.jsx's catch-all `<Route path="*">`.
 *
 * @returns {JSX.Element}
 */
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — GTech Enterprises</title>
        <meta name="robots" content="noindex" />
      </Helmet>
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
