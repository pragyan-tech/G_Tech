import Reveal, { RevealGroup, RevealItem } from "./ui/Reveal.jsx";
import { ArrowRight } from "./Icons.jsx";
import { FEATURED_WORK, unsplash } from "../data/site.js";
import "./FeaturedWork.css";

export default function FeaturedWork() {
  return (
    <section className="section" id="work">
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
          {FEATURED_WORK.map((item) => (
            <RevealItem as="article" className="work-card" key={item.id}>
              <a className="work-card__link" href="#work">
                <div className="work-card__media">
                  {/* PLACEHOLDER image — replace with first-party photo of the delivered part. */}
                  <img
                    src={unsplash(item.photo, 900, 640)}
                    alt={`${item.title} — placeholder`}
                    loading="lazy"
                    width="900"
                    height="640"
                  />
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">{item.title}</h3>
                  <dl className="work-card__meta">
                    <div>
                      <dt>Industry</dt>
                      <dd>{item.industry}</dd>
                    </div>
                    <div>
                      <dt>Process route</dt>
                      <dd>{item.route}</dd>
                    </div>
                  </dl>
                  <span className="work-card__cta">
                    View part <ArrowRight />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
