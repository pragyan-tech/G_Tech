import { Link } from "react-router-dom";
import { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { ArrowRight, ICONS } from "./Icons.jsx";
import { CAPABILITIES } from "../data/site.js";
import "./CapabilityGrid.css";

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
            <Link className="capgrid__link" to={cap.to}>
              Explore {cap.title} <ArrowRight />
            </Link>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
