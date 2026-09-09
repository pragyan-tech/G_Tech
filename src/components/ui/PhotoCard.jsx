import { Link } from "react-router-dom";
import { unsplash } from "../../data/site.js";
import "./PhotoCard.css";

/* Portrait photo card with a bottom-gradient title overlay.
   Round-1 feedback, ref: abhijeetengineers.com capability / industry cards.

   - Tall 3:4 photo fills the card, no padding.
   - Dark gradient over the lower half; white centred title on it.
   - Flat bottom edge (no wavy divider).
   - Whole card is the link. Hover zooms the photo to 1.05 over 500ms ease-out
     and deepens the gradient a touch.
   - `photo` is an Unsplash id (PLACEHOLDER — swap for a real GTech shop photo). */
export default function PhotoCard({ photo, title, to, badge, className = "" }) {
  const body = (
    <>
      <img
        className="photocard__photo"
        src={unsplash(photo, 600, 800)}
        alt=""
        loading="lazy"
        decoding="async"
        width="600"
        height="800"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="photocard__overlay" aria-hidden="true" />
      <span className="photocard__scrim" aria-hidden="true" />
      {badge && <span className="photocard__badge">{badge}</span>}
      <span className="photocard__title">{title}</span>
    </>
  );

  const cls = `photocard ${className}`.trim();

  if (to) {
    return (
      <Link className={cls} to={to}>
        {body}
      </Link>
    );
  }
  return <div className={cls}>{body}</div>;
}
