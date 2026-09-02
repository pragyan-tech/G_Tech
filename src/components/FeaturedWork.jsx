import { Link } from "react-router-dom";
import Reveal, { RevealGroup } from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { ArrowRight } from "./Icons.jsx";
import { PROJECTS } from "../data/site.js";
import "./FeaturedWork.css";

export default function FeaturedWork() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Featured work</span>
          <h2>Parts we deliver</h2>
          <p className="lead">
            A sample of build-to-print components and weldments in current or
            recent production. Drawings and tolerances stay with the customer.
          </p>
        </Reveal>

        <RevealGroup className="work__grid">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </RevealGroup>

        <Reveal className="work__more">
          <Button as={Link} to="/clients" variant="outline">
            See clients &amp; work <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
