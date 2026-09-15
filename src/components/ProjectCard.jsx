import { RevealItem } from "./ui/Reveal.jsx";
import { unsplash } from "../data/site.js";
import "./ProjectCard.css";

/**
 * Shared project / part card — used on the home page (`FeaturedWork`) and
 * `/clients`. PLACEHOLDER image (Unsplash) — replace with a first-party
 * photo of the part.
 *
 * @param {Object} props
 * @param {Object} props.project - One entry from `PROJECTS` in site.js (`title`, `photo`, `industry`, `route`, `material`).
 * @param {boolean} [props.showMaterial=false] - Show the "Material" row (used on /clients, hidden in the home-page teaser).
 * @returns {JSX.Element}
 */
export default function ProjectCard({ project, showMaterial = false }) {
  return (
    <RevealItem as="article" className="pcard" y={24} duration={0.5}>
      <div className="pcard__media">
        <img
          src={unsplash(project.photo, 900, 640)}
          alt={`${project.title} — placeholder`}
          loading="lazy"
          width="900"
          height="640"
        />
      </div>
      <div className="pcard__body">
        <h3 className="pcard__title">{project.title}</h3>
        <dl className="pcard__meta">
          <div>
            <dt>Industry</dt>
            <dd>{project.industry}</dd>
          </div>
          <div>
            <dt>Process route</dt>
            <dd>{project.route}</dd>
          </div>
          {showMaterial && (
            <div>
              <dt>Material</dt>
              <dd>{project.material}</dd>
            </div>
          )}
        </dl>
      </div>
    </RevealItem>
  );
}
