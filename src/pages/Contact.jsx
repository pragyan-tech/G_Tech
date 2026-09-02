import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { COMPANY } from "../data/site.js";
import "./Contact.css";

const PART_TYPES = [
  "Machined component (turned)",
  "Machined component (milled / VMC)",
  "Fabricated weldment / structure",
  "Sheet-metal / formed part",
  "Sub-assembly",
  "Other / not sure",
];

const PROCESSES = [
  "CNC turning",
  "VMC milling",
  "Plasma cutting",
  "Press-brake forming",
  "Welding (MIG / TIG / arc)",
  "Assembly & finishing",
  "Full route (multiple)",
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=GTech+Enterprises+Chikhali+Pune+411062";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // PLACEHOLDER handler — wire to a real endpoint / email service before launch.
    console.log("[RFQ] submission", data);
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send us a drawing"
        subline="Share your part details and drawings — we'll come back with a price and a lead time. Or call the directors directly."
      />

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__info">
            <Reveal>
              {/* PLACEHOLDER map — static image / embed to be added; link opens Google Maps. */}
              <a
                className="contact__map"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__map-pin" aria-hidden="true">
                  ◉
                </span>
                <span className="contact__map-text">
                  Chikhali, Pune – 411062
                  <span>Open in Google Maps →</span>
                </span>
              </a>
            </Reveal>

            <Reveal className="contact__block">
              <p className="subhead">Address</p>
              <address className="contact__address">
                {COMPANY.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </Reveal>

            <Reveal className="contact__block">
              <p className="subhead">Phone &amp; WhatsApp</p>
              <ul className="contact__list" role="list">
                {COMPANY.contacts.map((c) => (
                  <li key={c.tel}>
                    <span className="contact__name">
                      {c.name} — {c.role}
                    </span>
                    <span className="contact__links">
                      <a href={`tel:${c.tel}`}>{c.phone}</a>
                      <a
                        href={`https://wa.me/${c.wa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="contact__block">
              <p className="subhead">Email</p>
              <ul className="contact__list" role="list">
                {COMPANY.emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="contact__block">
              <p className="subhead">Business hours</p>
              {/* PLACEHOLDER hours — confirm with client. */}
              <ul className="contact__list" role="list">
                {COMPANY.hours.map((h) => (
                  <li key={h.days}>
                    <span className="contact__name">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal as="div" className="contact__form-wrap">
            {sent ? (
              <div className="contact__thanks" role="status">
                <h2>Thanks — we&apos;ve got it.</h2>
                <p>
                  This is a demo form: the submission was logged to the browser
                  console, not sent. We&apos;ll wire it to a real inbox before
                  launch.
                </p>
                <Button as="button" type="button" variant="outline" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form className="rfq" onSubmit={handleSubmit}>
                <h2 className="rfq__title">Request a quote</h2>

                <div className="rfq__row">
                  <label className="field">
                    <span className="field__label">Name<em>*</em></span>
                    <input name="name" type="text" required autoComplete="name" />
                  </label>
                  <label className="field">
                    <span className="field__label">Company<em>*</em></span>
                    <input name="company" type="text" required autoComplete="organization" />
                  </label>
                </div>

                <div className="rfq__row">
                  <label className="field">
                    <span className="field__label">Email<em>*</em></span>
                    <input name="email" type="email" required autoComplete="email" />
                  </label>
                  <label className="field">
                    <span className="field__label">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" />
                  </label>
                </div>

                <div className="rfq__row">
                  <label className="field">
                    <span className="field__label">Part type<em>*</em></span>
                    <select name="partType" required defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      {PART_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span className="field__label">Process needed</span>
                    <select name="process" defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      {PROCESSES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span className="field__label">Quantity / EAU</span>
                  <input
                    name="quantity"
                    type="text"
                    placeholder="e.g. 50 prototype, 2,000 / year"
                  />
                </label>

                <label className="field">
                  <span className="field__label">Drawing upload</span>
                  <input name="drawing" type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.iges,.zip" />
                  <span className="field__help">PDF, DWG, DXF, STEP or a zip. Not sent in this demo.</span>
                </label>

                <label className="field">
                  <span className="field__label">Notes</span>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Material, tolerances, finish, target date…"
                  />
                </label>

                <Button as="button" type="submit" variant="primary" size="lg" className="rfq__submit">
                  Send request
                </Button>
                <p className="rfq__disclaimer">
                  Demo form — submissions are logged to the console, not sent.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
