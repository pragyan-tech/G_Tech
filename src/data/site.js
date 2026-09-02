/* Site content for the GTech Enterprises home page.
   Copy follows .claude/skills/gtech-brand: proof-led, no "solutions/world-class". */

export const COMPANY = {
  name: "GTech Enterprises",
  since: 2016,
  location: "Chikhali, Pune",
  address: [
    "Gat No. 1652, Patil Nagar",
    "Behind MNGL Pump, Dehu–Alandi Road",
    "Chikhali, Pune – 411062, Maharashtra, India",
  ],
  email: "development@gtechent.com",
  contacts: [
    { name: "Dr. Ganesh Jadhav", phone: "+91 80875 10160", tel: "+918087510160" },
    { name: "Mr. Parag Patil", phone: "+91 90217 74809", tel: "+919021774809" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Equipment", href: "#equipment" },
  { label: "Industries", href: "#industries" },
  { label: "Quality", href: "#quality" },
  { label: "Clients", href: "#clients" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* PLACEHOLDER copy deck link — swap for the real hosted PDF before launch. */
export const CAPABILITY_DECK_URL = "#capability-deck";

export const PROOF_STATS = [
  { value: "Since 2016", label: "One plant, Chikhali — Pune" },
  { value: "~42 people", label: "Engineering + shop floor" },
  { value: "5-ton crane", label: "Heavy weldment handling" },
  { value: "Koike 300 A plasma", label: "HD, 3 × 8 m cutting bed" },
  { value: "BFW VMC", label: "850 × 600 × 600 mm envelope" },
];

export const CAPABILITIES = [
  {
    id: "cnc-machining",
    icon: "machining",
    title: "CNC Machining",
    body: "Turning up to Ø300 × 800 L on LMW centres with an 8-station hydraulic turret, plus VMC milling to an 850 × 600 × 600 mm envelope.",
    href: "#capabilities",
  },
  {
    id: "fabrication",
    icon: "fabrication",
    title: "Structural Fabrication",
    body: "Koike HD plasma profiling on a 3 × 8 m bed, press-brake forming in the 200-ton class, and MIG / TIG / arc welding.",
    href: "#capabilities",
  },
  {
    id: "assembly",
    icon: "assembly",
    title: "Assembly & Weldments",
    body: "Fixtured sub-assembly and welded structures with a 5-ton crane — prototype through mid-volume production runs.",
    href: "#capabilities",
  },
];

/* PLACEHOLDER client marks — see components/ClientLogos.jsx.
   Display real logos only with written permission; otherwise list names as text. */
export const CLIENTS = [
  { id: "hd-hyundai", name: "HD Hyundai Construction Equipment" },
  { id: "zoomlion", name: "Zoomlion" },
  { id: "global-tooling", name: "Global Tooling" },
  { id: "shan", name: "Shan Engineering Works" },
  { id: "matchwell", name: "Matchwell Engineering" },
  { id: "protech", name: "Protech Stampings" },
];

export const FEATURED_WORK = [
  {
    id: "hydraulic-clamps",
    title: "Forged Hydraulic Clamps",
    /* PLACEHOLDER image (Unsplash) — replace with a first-party photo of the delivered part. */
    photo: "photo-1504917595217-d4dc5ebe6122",
    industry: "Construction & earth-moving equipment",
    route: "Forging → CNC turning → milling → final inspection",
  },
  {
    id: "rings-flanges",
    title: "Machined Rings & Flanges",
    /* PLACEHOLDER image (Unsplash) — replace with a first-party photo of the delivered part. */
    photo: "photo-1581092160562-40aa08e78837",
    industry: "Heavy machinery",
    route: "Bar / plate → CNC turning → drilling → first-article",
  },
  {
    id: "weldments",
    title: "Structural Weldments & Brackets",
    /* PLACEHOLDER image (Unsplash) — replace with a first-party photo of the delivered part. */
    photo: "photo-1504328345606-18bbc8c9d7d1",
    industry: "Construction & industrial",
    route: "Plasma cut → press-brake form → MIG weld → assembly",
  },
];

export const INDUSTRIES = [
  { id: "construction", icon: "construction", label: "Construction & Earth-moving", lead: true },
  { id: "automotive", icon: "automotive", label: "Automotive" },
  { id: "energy", icon: "energy", label: "Energy" },
  { id: "heavy-machinery", icon: "heavyMachinery", label: "Heavy Machinery" },
  { id: "tooling", icon: "tooling", label: "Industrial Tooling" },
];

/* PLACEHOLDER hero image (Unsplash) — industrial assembly line.
   Replace with a real GTech shop-floor / plant photo before launch. */
export const HERO_PHOTO = "photo-1567789884554-0b844b597180";

/* Builds a fixed Unsplash CDN URL from a photo id.
   NOTE: source.unsplash.com (keyword search) is discontinued — fixed ids only.
   gtech-brand §7: production must use real shop-floor photography only —
   no stock, no CGI, no vendor product photos. Every use here is a PLACEHOLDER. */
export function unsplash(photoId, w = 1200, h = 900) {
  return `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&crop=entropy&q=80&auto=format`;
}
