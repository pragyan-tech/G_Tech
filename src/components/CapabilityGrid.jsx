import { Link } from "react-router-dom";
import { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import { ArrowRight, ICONS } from "./Icons.jsx";
import { CAPABILITIES } from "../data/site.js";
import "./CapabilityGrid.css";

/**
 * "Where to go next" grid on /capabilities — one card per capability area
 * (`CAPABILITIES` in site.js) linking to its detail page.
 *
 * @returns {JSX.Element}
 */
export default function CapabilityGrid() {
  return (
    <RevealGroup className="capgrid">
      {CAPABILITIES.map((cap) => {
        const Icon = ICONS[cap.icon];
        return (
          <RevealItem as="article" className="capgrid__card" key={cap.id}>
            <span className="capgrid__icon">
              <Icon />
            </span>
            <h3 className="capgrid__title">{cap.title}</h3>
            <p className="capgrid__body">{cap.body}</p>
            <Button as={Link} to={cap.to} variant="primary" size="sm" className="capgrid__link">
              <span className="capgrid__link-line">Explore</span>
              <span className="capgrid__link-line capgrid__link-line--cta">
                {cap.title} <ArrowRight />
              </span>
            </Button>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
