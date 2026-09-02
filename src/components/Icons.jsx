/* eslint-disable react-refresh/only-export-components -- icon barrel + name→component map */
/* In-house line icons — 24px grid, 1.5 stroke, currentColor.
   Kept simple and mechanical per .claude/skills/gtech-brand (no decorative clip-art). */

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconMachining(props) {
  /* lathe chuck / turned part */
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="9" cy="12" r="1.5" />
      <path d="M9 6.5V4M9 20v-2.5M3.5 12H1M14.5 12H17" />
      <path d="M17 9.5h4v5h-4z" />
    </svg>
  );
}

export function IconFabrication(props) {
  /* plasma / cutting torch spark */
  return (
    <svg {...base} {...props}>
      <path d="M7 3h6l-1.5 8H8.5z" />
      <path d="M9.5 11 9 15" />
      <path d="M8 18c0-1.5 3-1.5 3 0s-3 1.5-3 3" />
      <path d="M14 8h6M16 12h5M15 16h4" />
    </svg>
  );
}

export function IconAssembly(props) {
  /* wrench + bolt */
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5a3.5 3.5 0 0 1-4.6 4.6L4 17l3 3 5.9-5.9a3.5 3.5 0 0 0 4.6-4.6l-2.2 2.2-2-2 2.2-2.2Z" />
      <circle cx="18" cy="6" r="2.5" />
    </svg>
  );
}

export function IconConstruction(props) {
  /* excavator arm */
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18" />
      <circle cx="7" cy="16.5" r="2.5" />
      <path d="M9.5 16.5H15l1-4H8z" />
      <path d="m10 12 3-6 4 1.5" />
      <path d="M17 7.5 20 11l-2 2.5" />
    </svg>
  );
}

export function IconAutomotive(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 13 6.8 8h10.4L19 13" />
      <path d="M3 13h18v4h-2M5 17H3v-4M8 17h8" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

export function IconEnergy(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3 5 13h6l-1 8 8-10h-6z" />
    </svg>
  );
}

export function IconHeavyMachinery(props) {
  /* gear + gear */
  return (
    <svg {...base} {...props}>
      <path d="M9 3.5v2M9 12.5v2M3.5 8h2M12.5 8h2M5.2 4.2l1.4 1.4M11.4 10.4l1.4 1.4M12.8 4.2l-1.4 1.4M6.6 10.4l-1.4 1.4" />
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="16.5" cy="16" r="3.4" />
      <path d="M16.5 11.5v1.6M16.5 18.9v1.6M11.6 16h1.6M19.8 16h1.6" />
    </svg>
  );
}

export function IconTooling(props) {
  /* caliper / measuring */
  return (
    <svg {...base} {...props}>
      <path d="M4 4h4v12H4zM4 8h4M4 12h4" />
      <path d="M8 6h9v3H8z" />
      <path d="M17 6v10M14 16h6" />
    </svg>
  );
}

export const ICONS = {
  machining: IconMachining,
  fabrication: IconFabrication,
  assembly: IconAssembly,
  construction: IconConstruction,
  automotive: IconAutomotive,
  energy: IconEnergy,
  heavyMachinery: IconHeavyMachinery,
  tooling: IconTooling,
};
