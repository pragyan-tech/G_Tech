import Logo from "./Logo.jsx";
import { COMPANY, NAV_LINKS } from "../data/site.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo onDark />
          <p className="footer__blurb">
            Build-to-print machining and fabrication for construction-equipment
            and industrial OEMs. One plant, Chikhali, Pune — since {COMPANY.since}.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Visit</h3>
          <address className="footer__address">
            {COMPANY.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list" role="list">
            {COMPANY.contacts.map((c) => (
              <li key={c.tel}>
                <span className="footer__name">{c.name}</span>
                <a href={`tel:${c.tel}`}>{c.phone}</a>
              </li>
            ))}
            <li>
              <span className="footer__name">Email</span>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Site map</h3>
          <ul className="footer__list footer__list--links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} {COMPANY.name}. All rights reserved.</p>
        <p className="footer__fineprint">
          GTech Enterprises, Gat No. 1652, Chikhali, Pune – 411062, India
        </p>
      </div>
    </footer>
  );
}
