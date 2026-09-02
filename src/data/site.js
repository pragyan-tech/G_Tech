/* Site content for GTech Enterprises.
   Copy follows .claude/skills/gtech-brand: proof-led, no "solutions / world-class".
   Machine specs and figures are transcribed from the source company profile PDF. */

export const COMPANY = {
  name: "GTech Enterprises",
  since: 2016,
  location: "Chikhali, Pune",
  addressLines: [
    "Gat No. 1652, Patil Nagar",
    "Behind MNGL Pump, Dehu–Alandi Road",
    "Chikhali, Pune – 411062",
    "Maharashtra, India",
  ],
  emails: ["development@gtechent.com", "gtechenterprises21@gmail.com"],
  contacts: [
    {
      name: "Dr. Ganesh Jadhav",
      role: "Co-founder & Director",
      phone: "+91 80875 10160",
      tel: "+918087510160",
      wa: "918087510160",
      bio: "Runs operations and customer programs; first point of contact for new build-to-print enquiries.",
    },
    {
      name: "Mr. Parag Patil",
      role: "Co-founder & Director",
      phone: "+91 90217 74809",
      tel: "+919021774809",
      wa: "919021774809",
      bio: "Leads the shop floor, production planning, and quality.",
    },
  ],
  /* PLACEHOLDER — confirm actual hours with client. */
  hours: [
    { days: "Monday – Saturday", time: "9:00 – 18:00 IST" },
    { days: "Sunday", time: "Closed" },
  ],
};

/* Primary navigation — real routes. */
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Equipment", to: "/equipment" },
  { label: "Industries", to: "/industries" },
  { label: "Quality", to: "/quality" },
  { label: "Clients", to: "/clients" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
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

/* Capability overview cards — link to the sub-capability pages. */
export const CAPABILITIES = [
  {
    id: "cnc-machining",
    icon: "machining",
    title: "CNC Machining",
    body: "Turning up to Ø300 × 800 L on LMW centres with an 8-station hydraulic turret, plus VMC milling to an 850 × 600 × 600 mm envelope.",
    to: "/capabilities/cnc-machining",
  },
  {
    id: "fabrication",
    icon: "fabrication",
    title: "Structural Fabrication",
    body: "Koike HD plasma profiling on a 3 × 8 m bed, press-brake forming in the 200-ton class, and MIG / TIG / arc welding.",
    to: "/capabilities/fabrication",
  },
  {
    id: "assembly",
    icon: "assembly",
    title: "Assembly & Finishing",
    body: "Fixtured sub-assembly and welded structures with a 5-ton crane — prototype through mid-volume production runs.",
    to: "/capabilities/assembly-and-finishing",
  },
];

/* Raw material → dispatch process map. */
export const PROCESS_STEPS = [
  { id: "material", label: "Raw material", note: "Bar, plate, sections — cut to size" },
  { id: "cutting", label: "Cutting", note: "Koike plasma, band saw" },
  { id: "forming", label: "Forming", note: "Press brake, rolling, bending" },
  { id: "welding", label: "Welding", note: "MIG / TIG / arc, fixtured" },
  { id: "machining", label: "Machining", note: "CNC turning, VMC milling, drilling" },
  { id: "inspection", label: "Inspection", note: "In-process + final, against drawing" },
  { id: "assembly", label: "Assembly", note: "Sub-assembly, fitting, hardware" },
  { id: "dispatch", label: "Dispatch", note: "Protection, documentation, delivery" },
];

/* --- Sub-capability page content --- */
export const CAPABILITY_PAGES = {
  "cnc-machining": {
    slug: "cnc-machining",
    title: "CNC Machining",
    eyebrow: "Capabilities",
    subline:
      "Turning and milling to the customer drawing — from single prototypes to repeat production lots.",
    intro: [
      "GTech runs three LMW CNC turning centres and a BFW vertical machining centre on the Chikhali floor. Turning covers work up to Ø300 × 800 L with an 8-station hydraulic turret and chuck sizes of 165, 200 and 300 mm; the smallest centre (LMW Smart Plus) handles fine work down to Ø165 × 300 L.",
      "Milling is done on the BFW BMV 50 TC24, an 850 × 600 × 600 mm work envelope with 510 mm of head-stock (Z-axis) travel. Prismatic parts, flange faces, bores and drilled / tapped patterns are cut in one setup where the geometry allows. Programming is done from customer models and drawings, with first-article measurement before a lot is released.",
    ],
    specTitle: "Machining envelope",
    specColumns: ["Machine", "Make", "Capacity"],
    specRows: [
      ["CNC turning centre", "LMW", "Ø300 × 800 L"],
      ["CNC turning centre", "LMW", "Ø200 × 500 L"],
      ["CNC turning centre", "LMW Smart Plus", "Ø165 × 300 L"],
      ["Turret", "LMW", "8 stations, hydraulic indexing"],
      ["Chuck sizes", "LMW", "165 / 200 / 300 mm"],
      ["Max boring bar", "LMW", "Ø32 mm"],
      ["Vertical machining centre", "BFW BMV 50 TC24", "850 × 600 × 600 mm envelope"],
      ["VMC head-stock travel (Z)", "BFW", "510 mm"],
      ["VMC spindle nose to table", "BFW", "100 – 610 mm (to 810 mm with column riser)"],
      ["Radial drilling", "Rajkot SP", "Ø1.25 in"],
      ["Smart tapping", "ITCO", "M25"],
    ],
    parts: [
      "Machined rings, flanges and spacers",
      "Turned shafts, pins and bushes",
      "Hydraulic clamp bodies (post-forging machining)",
      "Housings and end caps",
      "Milled brackets and mounting plates",
    ],
    materials: [
      "Carbon and alloy steel (EN8, EN19, EN24)",
      "Mild steel (IS 2062)",
      "Cast iron",
      "Aluminium",
      "Free-cutting and stainless grades on request",
    ],
  },
  fabrication: {
    slug: "fabrication",
    title: "Structural Fabrication",
    eyebrow: "Capabilities",
    subline:
      "Profile cutting, forming and welding of steel structures and weldments, up to 5-ton crane handling.",
    intro: [
      "Plate and section work starts on the Koike HD plasma cutter — a 3 × 8 m bed at 300 A — and a Laxmi band saw for bar stock. Formed parts are bent on a press brake in the 200-ton class (ADH), with rolling and bending for cylindrical and curved work.",
      "Welding is done to MIG, TIG and arc processes on fixtures, with a 600 A machine for heavy sections and a 5-ton crane for handling large weldments. Structures are checked for dimension and fit against the drawing before they move to machining or assembly. Sheet-metal forming and structural steel fabrication are both in scope, prototype through production.",
    ],
    specTitle: "Fabrication equipment",
    specColumns: ["Machine", "Make", "Capacity"],
    specRows: [
      ["Plasma cutting machine", "Koike", "300 A, HD, 3 × 8 m bed"],
      ["Press brake", "ADH", "200 ton"],
      ["Press brake (heavy)", "—", "220 ton"],
      ["Welding machine", "—", "600 A (MIG / TIG / arc)"],
      ["Overhead crane", "—", "5 ton"],
      ["Band saw", "Laxmi Industries", "Ø140 mm cutting"],
    ],
    parts: [
      "Structural weldments and frames",
      "Brackets, mounts and gussets",
      "Guards, covers and enclosures",
      "Base plates and skid frames",
      "Material-handling trolley structures",
    ],
    materials: [
      "Structural mild steel (IS 2062 E250 / E350)",
      "Hot-rolled plate and sheet",
      "Structural sections — angle, channel, RHS / SHS",
      "Abrasion-resistant plate on request",
    ],
  },
  "assembly-and-finishing": {
    slug: "assembly-and-finishing",
    title: "Assembly & Finishing",
    eyebrow: "Capabilities",
    subline:
      "Bringing machined and fabricated parts together into finished, inspected sub-assemblies.",
    intro: [
      "Machined and fabricated parts are built up into sub-assemblies on the same floor — fitting, bolting, pinning and hardware installation, with in-process checks at each stage. Keeping machining, fabrication and assembly under one roof shortens the loop when a fit needs adjusting.",
      "Finishing and protection — deburring, cleaning, priming and paint — are handled in-house or through vetted partners to the customer's specification. Assemblies are measured, documented and packed for transport before dispatch. Typical volumes run from prototype builds to mid-volume production.",
    ],
    specTitle: "Assembly & support equipment",
    specColumns: ["Machine", "Make", "Capacity"],
    specRows: [
      ["Overhead crane", "—", "5 ton"],
      ["Milling machine", "Vernier", "FN 3"],
      ["Lathe", "Sagar", "6 ft bed"],
      ["Micromill", "M1TR", "1210 × 460 × 460 mm"],
      ["Column drilling", "WMW", "Ø1.5 in"],
      ["Pillar drilling", "Premier", "Ø1 in (× 2)"],
      ["Air compressors", "—", "10 / 7.5 / 5 HP"],
    ],
    parts: [
      "Bolted and welded sub-assemblies",
      "Hydraulic clamp assemblies",
      "Rubber & plastic saddle assemblies",
      "Material-handling trolleys and carts",
      "Fitted and finish-painted structures",
    ],
    materials: [
      "Fasteners to IS / ISO grades",
      "Bought-out hydraulic and rubber components",
      "Primer and enamel / PU paint systems",
      "Customer-specified finishes",
    ],
  },
};

/* --- Full machine list (source PDF, slides 6–8) --- */
export const MACHINES = [
  { name: "CNC turning centre", make: "LMW", capacity: "Ø300 × 800 L", category: "Machining" },
  { name: "CNC turning centre", make: "LMW", capacity: "Ø200 × 500 L", category: "Machining" },
  { name: "CNC turning centre", make: "LMW Smart Plus", capacity: "Ø165 × 300 L", category: "Machining" },
  { name: "Vertical machining centre (VMC)", make: "BFW BMV 50 TC24", capacity: "850 × 600 × 600 mm", category: "Machining" },
  { name: "Radial drilling machine", make: "Rajkot SP", capacity: "Ø1.25 in", category: "Machining" },
  { name: "Column drilling machine", make: "WMW", capacity: "Ø1.5 in", category: "Machining" },
  { name: "Pillar drilling machine (× 2)", make: "Premier", capacity: "Ø1 in", category: "Machining" },
  { name: "Milling machine", make: "Vernier", capacity: "FN 3", category: "Machining" },
  { name: "Lathe", make: "Sagar", capacity: "6 ft bed", category: "Machining" },
  { name: "Micromill", make: "M1TR", capacity: "1210 × 460 × 460 mm", category: "Machining" },
  { name: "Smart tapping machine", make: "ITCO", capacity: "M25", category: "Machining" },
  { name: "Plasma cutting machine", make: "Koike", capacity: "300 A, HD, 3 × 8 m bed", category: "Fabrication" },
  { name: "Press brake", make: "ADH", capacity: "200 ton", category: "Fabrication" },
  { name: "Press brake (heavy)", make: "—", capacity: "220 ton", category: "Fabrication" },
  { name: "Welding machine", make: "—", capacity: "600 A (MIG / TIG / arc)", category: "Fabrication" },
  { name: "Band saw cutting machine", make: "Laxmi Industries", capacity: "Ø140 mm cutting", category: "Fabrication" },
  { name: "Overhead crane", make: "—", capacity: "5 ton", category: "Support" },
  { name: "Air compressors", make: "—", capacity: "10 / 7.5 / 5 HP", category: "Support" },
];

export const MACHINE_CATEGORIES = ["All", "Machining", "Fabrication", "Support"];

/* --- Clients --- */
export const CLIENTS = [
  { id: "hd-hyundai", name: "HD Hyundai Construction Equipment" },
  { id: "zoomlion", name: "Zoomlion" },
  { id: "global-tooling", name: "Global Tooling" },
  { id: "shan", name: "Shan Engineering Works" },
  { id: "matchwell", name: "Matchwell Engineering" },
  { id: "protech", name: "Protech Stampings" },
];

/* --- Featured / project work (source PDF products) ---
   PLACEHOLDER images (Unsplash) — replace every one with a first-party photo
   of the actual delivered part (gtech-brand §7). */
export const PROJECTS = [
  {
    id: "hydraulic-clamps",
    title: "Forged Hydraulic Clamps",
    photo: "photo-1504917595217-d4dc5ebe6122",
    industry: "Construction & earth-moving equipment",
    route: "Forging → CNC turning → milling → final inspection",
    material: "Alloy steel forging (EN19 / EN24 class)",
  },
  {
    id: "rings-flanges",
    title: "Machined Rings & Flanges",
    photo: "photo-1581092160562-40aa08e78837",
    industry: "Heavy machinery",
    route: "Bar / plate → CNC turning → drilling → first-article",
    material: "Carbon & alloy steel, cast iron",
  },
  {
    id: "weldments",
    title: "Structural Weldments & Brackets",
    photo: "photo-1504328345606-18bbc8c9d7d1",
    industry: "Construction & industrial",
    route: "Plasma cut → press-brake form → MIG weld → assembly",
    material: "Structural mild steel (IS 2062)",
  },
  {
    id: "saddles",
    title: "Rubber & Plastic Saddles",
    photo: "photo-1565043666747-69f6646db940",
    industry: "Heavy machinery / material handling",
    route: "Machined metal core → bonded rubber / plastic → fit check",
    material: "Steel core with bonded elastomer / polymer",
  },
  {
    id: "trolleys",
    title: "Material-Handling Trolleys",
    photo: "photo-1587293852726-70cdb56c2866",
    industry: "In-plant logistics",
    route: "Cut → form → weld frame → fit castors & rollers → paint",
    material: "Structural steel, bought-out castors / rollers",
  },
];

/* --- Industries, with typical parts (Construction leads) --- */
export const INDUSTRIES = [
  {
    id: "construction",
    icon: "construction",
    label: "Construction & Earth-moving",
    lead: true,
    blurb:
      "The core of GTech's work. Machined and fabricated parts that go into excavators, loaders, cranes and compaction equipment for OEMs including HD Hyundai Construction Equipment and Zoomlion.",
    parts: [
      "Forged hydraulic clamps and clamp assemblies",
      "Machined pins, bushes and spacers",
      "Structural weldments, brackets and mounts",
      "Rubber & plastic saddles",
    ],
  },
  {
    id: "automotive",
    icon: "automotive",
    label: "Automotive",
    blurb:
      "Machined components and sheet-metal / formed parts for automotive tier suppliers, built to print with first-article and process controls.",
    parts: [
      "Turned and milled components",
      "Formed sheet-metal brackets",
      "Sub-assemblies and fixtures",
    ],
  },
  {
    id: "energy",
    icon: "energy",
    label: "Energy",
    blurb:
      "Fabricated structures and machined parts for energy-sector equipment, where dimensional accuracy and weld quality matter.",
    parts: [
      "Machined flanges and rings",
      "Fabricated frames and enclosures",
      "Base plates and skid structures",
    ],
  },
  {
    id: "heavy-machinery",
    icon: "heavyMachinery",
    label: "Heavy Machinery",
    blurb:
      "Larger machined and welded parts for industrial and process machinery builders, handled with the 5-ton crane and the full turning / VMC range.",
    parts: [
      "Large machined rings and housings",
      "Heavy weldments and frames",
      "Drilled and tapped base structures",
    ],
  },
  {
    id: "tooling",
    icon: "tooling",
    label: "Industrial Tooling",
    blurb:
      "Precision machined parts, jigs and fixtures for tooling and sheet-metal specialists such as Global Tooling and Protech Stampings.",
    parts: [
      "Fixture plates and locating components",
      "Machined tooling details",
      "Gauges and check fixtures",
    ],
  },
];

/* --- Team strength (source PDF, slide 9) --- */
export const TEAM = {
  total: 42,
  groups: [
    {
      label: "Technical & management",
      count: 7,
      roles: [
        ["Plant Head", 1],
        ["Production Engineers", 2],
        ["Quality Engineers", 2],
        ["Purchase Engineer", 1],
        ["Account Executive", 1],
      ],
    },
    {
      label: "Shop floor",
      count: 35,
      roles: [
        ["CNC Programmers", 2],
        ["CNC Operators", 4],
        ["VMC Operators", 4],
        ["Drill / Tapping Operators", 9],
        ["Skilled Welders", 6],
        ["Helpers", 10],
      ],
    },
  ],
};

/* --- Company statements, rewritten concise per gtech-brand voice --- */
export const STATEMENTS = {
  quality:
    "GTech Enterprises manufactures machined and fabricated components to the customer's drawing, at the agreed cost and delivery date. We run a quality management system with in-process and final inspection, review results against targets every month, and train our people to hold that standard.",
  vision:
    "Be the machining and fabrication partner that construction-equipment OEMs call first for build-to-print work. Grow by holding tolerances and delivery dates, not by cutting corners.",
  mission:
    "Deliver parts that match the drawing, the quantity and the date, every time. Reinvest in machines, measurement and skilled people so the next job is tighter than the last.",
};

export const QMS_POINTS = [
  {
    title: "In-process inspection",
    body: "Parts are checked against the drawing at each machining and fabrication operation, not only at the end.",
  },
  {
    title: "Final inspection & first-article",
    body: "Every lot gets a final dimensional check; first-article and dimensional reports are provided on request.",
  },
  {
    title: "Monthly review",
    body: "Quality objectives are measured and analysed each month, with corrective action tracked to closure.",
  },
  {
    title: "Traceability",
    body: "Material and process records are kept by job so a part can be traced back through its route.",
  },
  {
    title: "Trained operators",
    body: "Operators and welders are trained to the standard for the work they run, with refreshers as needed.",
  },
];

/* PLACEHOLDER — no calibration certificates transcribed from the source PDF. */
export const MEASURING_EQUIPMENT = [
  "Vernier calipers and micrometers (external, internal, depth)",
  "Height gauge and surface plate",
  "Bore gauges and plug / ring gauges",
  "Dial indicators and test indicators",
  "Thread gauges and radius gauges",
  "Weld fillet / throat gauges",
];

/* --- Imagery helpers --- */
export const HERO_PHOTO = "photo-1567789884554-0b844b597180";

/* Fixed Unsplash CDN URL from a photo id. source.unsplash.com keyword search is
   discontinued — fixed ids only. Every use is a PLACEHOLDER (gtech-brand §7). */
export function unsplash(photoId, w = 1200, h = 900) {
  return `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&crop=entropy&q=80&auto=format`;
}
