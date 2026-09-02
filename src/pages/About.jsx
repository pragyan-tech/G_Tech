import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/ui/Reveal.jsx";
import { COMPANY, STATEMENTS, TEAM } from "../data/site.js";
import "./About.css";

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
            {COMPANY.contacts.map((person) => (
              <RevealItem as="article" className="leader" key={person.name}>
                {/* PLACEHOLDER photo — replace with a real headshot. */}
                <div className="leader__photo" aria-hidden="true">
                  {person.name
                    .replace(/^(Dr\.|Mr\.|Ms\.)\s*/, "")
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="leader__name">{person.name}</h3>
                  <p className="leader__role">{person.role}</p>
                  <p className="leader__bio">{person.bio}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--on-dark">Team strength</span>
            <h2>{TEAM.total} people on the floor and behind it</h2>
          </Reveal>
          <RevealGroup className="team">
            {TEAM.groups.map((group) => (
              <RevealItem as="article" className="team__group" key={group.label}>
                <div className="team__count">
                  {group.count}
                  <span>{group.label}</span>
                </div>
                <ul className="team__roles" role="list">
                  {group.roles.map(([role, n]) => (
                    <li key={role}>
                      <span>{role}</span>
                      <span className="team__n">{n}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
