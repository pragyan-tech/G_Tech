import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import "./SplitFeature.css";

/* Trinity-style two-column feature band: text on one side, media on the other,
   alternating dark / light backgrounds down the page.

   Props:
   - tone: "light" (paper bg, navy text) | "navy" (navy bg, white text)
   - reversed: media on the LEFT on desktop, media FIRST when stacked on mobile
   - eyebrow: short uppercase label (rendered orange)
   - heading: array of { text, accent? } — accent segments render in orange,
     everything else in the tone's primary text colour, all the same weight
   - stackHeading: render each heading segment on its own line
   - body: paragraph string
   - cta: { label, to, variant, onDark }
   - media: node rendered in the media column
*/
export default function SplitFeature({
  id,
  tone = "light",
  reversed = false,
  eyebrow,
  heading = [],
  stackHeading = false,
  body,
  cta,
  media,
}) {
  return (
    <section
      className={`section split split--${tone}${reversed ? " split--reversed" : ""}`}
      id={id}
    >
      <div className="container split__grid">
        <Reveal className="split__text">
          {eyebrow && <span className="eyebrow split__eyebrow">{eyebrow}</span>}
          <h2 className={`split__heading${stackHeading ? " split__heading--stack" : ""}`}>
            {heading.map((seg, i) => (
              <span
                key={i}
                className={seg.accent ? "split__accent" : undefined}
              >
                {seg.text}
                {i < heading.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
          {body && <p className="split__body">{body}</p>}
          {cta && (
            <Button
              as={Link}
              to={cta.to}
              variant={cta.variant || "primary"}
              size="lg"
              onDark={cta.onDark}
              className="split__cta"
            >
              {cta.label}
            </Button>
          )}
        </Reveal>

        <Reveal className="split__media">{media}</Reveal>
      </div>
    </section>
  );
}
