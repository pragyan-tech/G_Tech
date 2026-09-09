import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { PLANT_TOUR_VIDEO, PLANT_TOUR_POSTER } from "../data/site.js";
import "./PlantTourVideo.css";

/* Background-style plant-tour clip: autoplay, muted, looped, no controls.
   The poster still is the base layer and stands in whenever the video can't or
   shouldn't play — a load error, or prefers-reduced-motion. */
export default function PlantTourVideo({ className = "" }) {
  const reduce = useReducedMotion();
  const [videoOk, setVideoOk] = useState(true);
  const showVideo = !reduce && videoOk;

  return (
    <div className={`plant-tour ${className}`.trim()} aria-hidden="true">
      <img
        className="plant-tour__poster"
        src={PLANT_TOUR_POSTER}
        alt=""
        loading="lazy"
        decoding="async"
      />
      {showVideo && (
        <video
          className="plant-tour__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={PLANT_TOUR_POSTER}
          onError={() => setVideoOk(false)}
        >
          <source src={PLANT_TOUR_VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
