import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/ui/Reveal.jsx";
import { STATEMENTS, LEADERSHIP, ORG } from "../data/site.js";
import "./About.css";

function Avatar({ name, initials, photo, size = "md" }) {
  if (photo) {
    return (
      <img
        className={`avatar avatar--${size}`}
        src={photo}
        alt={name}
        loading="lazy"
        decoding="async"
        width="160"
        height="160"
      />
    );
  }
  return (
    <span className={`avatar avatar--${size} avatar--initials`} aria-hidden="true">
      {initials}
    </span>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Pune machine shop, built to print"
        subline="GTech Enterprises was founded in 2016 in Chikhali, Pune. It has grown into a ~42-person shop machining and fabricating parts for construction-equipment and industrial OEMs."
      />

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="prose">
            <p>
              GTech Enterprises started in 2016 with a small set of machines and a
              simple idea: take a customer&apos;s drawing and return a part that
              matches it, on the date agreed. From one plant on Dehu–Alandi Road
              in Chikhali, the shop added CNC turning centres, a vertical
              machining centre, plasma cutting and press-brake forming as the
              work grew.
            </p>
            <p>
              Today the floor runs machining and fabrication side by side, with a
              dedicated quality function and a 5-ton crane for heavy weldments.
              Revenue has grown roughly 3× between 2021 and 2025, driven by
              repeat build-to-print work for construction-equipment OEMs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="grid-2">
            <Reveal className="about__vm">
              <p className="subhead">Vision</p>
              <p>{STATEMENTS.vision}</p>
            </Reveal>
            <Reveal className="about__vm">
              <p className="subhead">Mission</p>
              <p>{STATEMENTS.mission}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Leadership</span>
            <h2>Who runs it</h2>
          </Reveal>
          <RevealGroup className="about__leaders">
            {LEADERSHIP.map((person) => (
              <RevealItem as="article" className="leader" key={person.name}>
                {/* PLACEHOLDER — Mrs. Aaditi Jadhav's photo is awaited from the
                    client; initials avatar shown until it arrives. */}
                <Avatar
                  name={person.name}
                  initials={person.initials}
                  photo={person.photo}
                  size="md"
                />
                <div>
                  <h3 className="leader__name">{person.name}</h3>
                  <p className="leader__role">{person.role}</p>
                  {/* PLACEHOLDER BIO — confirm with client. */}
                  <p className="leader__bio">{person.bio}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Organization</span>
            <h2>How the plant is organised</h2>
          </Reveal>

          <RevealGroup className="org" step={0.07}>
            {ORG.tiers.map((tier) => (
              <RevealItem className="org__tier" key={tier.id}>
                <span className="org__level">{tier.label}</span>

                {tier.person && (
                  <div className="org__lead">
                    <Avatar
                      name={tier.person.name}
                      initials={tier.person.initials}
                      photo={tier.person.photo}
                      size="sm"
                    />
                    <div>
                      <span className="org__name">{tier.person.name}</span>
                      <span className="org__role">{tier.person.role}</span>
                    </div>
                  </div>
                )}

                {tier.heads && (
                  <ul className="org__heads" role="list">
                    {tier.heads.map((head) => (
                      <li key={head.name}>
                        <span className="org__name">{head.name}</span>
                        <span className="org__role">{head.role}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </RevealItem>
            ))}

            <RevealItem className="org__tier org__tier--floor">
              <span className="org__level">Shop floor</span>
              <p className="org__floor">{ORG.shopFloor}</p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
