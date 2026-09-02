/* eslint-disable react-refresh/only-export-components -- logo id→component map */
/* PLACEHOLDER client logos — generic wordmark SVGs, not the real marks.
   Do not ship real customer logos without written permission (gtech-brand §6).
   Each returns a self-contained <svg> sized to a 160 × 40 box. */

const box = {
  viewBox: "0 0 160 40",
  role: "img",
  width: "160",
  height: "40",
  focusable: false,
};

const word = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fill: "currentColor",
  dominantBaseline: "central",
};

function HdHyundai() {
  return (
    <svg {...box} aria-label="HD Hyundai Construction Equipment (placeholder logo)">
      <path d="M8 8h6v24H8zM20 8h6v24h-6zM14 18h6v4h-6z" fill="currentColor" />
      <text x="34" y="16" fontSize="10" {...word}>HD HYUNDAI</text>
      <text x="34" y="28" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="500" fill="currentColor">
        CONSTRUCTION EQUIP.
      </text>
    </svg>
  );
}

function Zoomlion() {
  return (
    <svg {...box} aria-label="Zoomlion (placeholder logo)">
      <rect x="6" y="12" width="16" height="16" rx="2" fill="currentColor" />
      <text x="28" y="21" fontSize="13" {...word}>ZOOMLION</text>
    </svg>
  );
}

function GlobalTooling() {
  return (
    <svg {...box} aria-label="Global Tooling (placeholder logo)">
      <circle cx="16" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 9v22M5 20h22" stroke="currentColor" strokeWidth="2" />
      <text x="32" y="16" fontSize="10" {...word}>GLOBAL</text>
      <text x="32" y="28" fontSize="10" {...word}>TOOLING</text>
    </svg>
  );
}

function ShanEngineering() {
  return (
    <svg {...box} aria-label="Shan Engineering Works (placeholder logo)">
      <path d="M6 26c6-14 14-14 20 0" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="16" cy="18" r="3" fill="currentColor" />
      <text x="34" y="16" fontSize="9.5" {...word}>SHAN</text>
      <text x="34" y="28" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500" fill="currentColor">
        ENGINEERING WORKS
      </text>
    </svg>
  );
}

function Matchwell() {
  return (
    <svg {...box} aria-label="Matchwell Engineering (placeholder logo)">
      <path d="M6 30V12l8 10 8-10v18" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="30" y="16" fontSize="10" {...word}>MATCHWELL</text>
      <text x="30" y="28" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500" fill="currentColor">
        ENGINEERING
      </text>
    </svg>
  );
}

function Protech() {
  return (
    <svg {...box} aria-label="Protech Stampings (placeholder logo)">
      <path d="M7 8h10a7 7 0 0 1 0 14H7z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M7 8v24" stroke="currentColor" strokeWidth="3" />
      <text x="34" y="16" fontSize="10" {...word}>PROTECH</text>
      <text x="34" y="28" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500" fill="currentColor">
        STAMPINGS
      </text>
    </svg>
  );
}

export const CLIENT_LOGOS = {
  "hd-hyundai": HdHyundai,
  zoomlion: Zoomlion,
  "global-tooling": GlobalTooling,
  shan: ShanEngineering,
  matchwell: Matchwell,
  protech: Protech,
};
