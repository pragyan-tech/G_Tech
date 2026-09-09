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
  /* development@ is the primary address, the gmail is the secondary. */
  emails: ["development@gtechent.com", "gtechenterprises21@gmail.com"],
  /* Round-1 feedback: only the Plant Head's number is published on the site.
     Mrs. Aaditi Jadhav's / Dr. Ganesh Jadhav's numbers are intentionally not listed. */
  contacts: [
    {
      name: "Mr. Parag Patil",
      role: "Plant Head",
      phone: "+91 90217 74809",
      tel: "+919021774809",
      wa: "919021774809",
      bio: "Leads the shop floor, production planning, and quality.",
    },
  ],
  /* Confirmed in round-1 feedback. */
  hours: {
    weekly: [{ days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" }],
    note: "24×7 service response for existing clients",
  },
};

/* --- Leadership (round-1 update) ---
   PLACEHOLDER photos/bios — confirm every bio with the client before launch. */
export const LEADERSHIP = [
  {
    name: "Mrs. Aaditi Jadhav",
    role: "Managing Director",
    initials: "AJ",
    // PLACEHOLDER — Awaiting Mrs. Aaditi Jadhav's photo from client.
    photo: null,
    // PLACEHOLDER BIO — confirm with client.
    bio: "Mrs. Aaditi Jadhav is the founding Managing Director of GTech Enterprises, established in Chikhali, Pune in 2016. She sets the company's direction, holds its customer relationships, and drives investment in machines, measurement and people. Under her leadership GTech has grown into a build-to-print supplier for construction-equipment and industrial OEMs.",
  },
  {
    name: "Mr. Parag Patil",
    role: "Plant Head",
    initials: "PP",
    photo: "/assets/client-assets/team/parag-patil.jpeg",
    // PLACEHOLDER BIO — confirm with client.
    bio: "Mr. Parag Patil runs the GTech shop floor as Plant Head. He owns production planning, machining and fabrication operations, and in-process quality, and has spent his career on precision manufacturing floors. He is the day-to-day point of contact for live jobs and delivery schedules.",
  },
];

/* --- Organization structure ---
   From organization-chart.pdf (Doc GT/MR/F/20, Rev 00, 01.03.2023).
   TODO (client): the chart titles Mr. Satish Patil as "Purchase Engineer /
   Sr. Maintenance Engineer", Mr. Shankar Jadhav as "Sr. Quality Engineer" and
   Miss. Sarita Mane as "Account / HR" — confirm the "Head" titles used below,
   and confirm the shop-floor headcount (35 per round-1 feedback; the chart's
   own tallies add up differently). */
export const ORG = {
  tiers: [
    {
      id: "md",
      label: "Managing Director",
      person: { name: "Mrs. Aaditi Jadhav", role: "Managing Director", initials: "AJ", photo: null },
    },
    {
      id: "plant-head",
      label: "Plant Head",
      person: {
        name: "Mr. Parag Patil",
        role: "Plant Head",
        initials: "PP",
        photo: "/assets/client-assets/team/parag-patil.jpeg",
      },
    },
    {
      id: "department-heads",
      label: "Department heads",
      heads: [
        { name: "Mr. Satish Patil", role: "Purchase Head" },
        { name: "Miss. Sarita Mane", role: "Accounts & HR" },
        { name: "Mr. Shankar Jadhav", role: "Quality Head" },
        { name: "Mr. Ganesh Naphade", role: "Production Head" },
      ],
    },
  ],
  shopFloor: "Shop-floor team: 35 members",
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
  { value: "BFW VMC", label: "850 × 600 × 600 mm specification" },
];

/* Capability overview cards — link to the sub-capability pages.
   `photo` is an Unsplash id rendered via unsplash(); the home page shows these
   as portrait photo cards. */
export const CAPABILITIES = [
  {
    id: "cnc-machining",
    icon: "machining",
    title: "Machining",
    body: "Turning up to Ø300 × 800 L on LMW centres with an 8-station hydraulic turret, plus VMC milling to an 850 × 600 × 600 mm specification.",
    to: "/capabilities/cnc-machining",
    // PLACEHOLDER — replace with real GTech shop photo (CNC lathe / milling close-up)
    photo: "photo-1581092160562-40aa08e78837",
  },
  {
    id: "fabrication",
    icon: "fabrication",
    title: "Fabrication",
    body: "Koike HD plasma profiling on a 3 × 8 m bed, press-brake forming in the 200-ton class, and MIG / TIG / arc welding.",
    to: "/capabilities/fabrication",
    // PLACEHOLDER — replace with real GTech shop photo (welding sparks / heavy fabrication)
    photo: "photo-1504328345606-18bbc8c9d7d1",
  },
  {
    id: "assembly",
    icon: "assembly",
    title: "Assembly & Finishing",
    body: "Fixtured sub-assembly and welded structures with a 5-ton crane — prototype through mid-volume production runs.",
    to: "/capabilities/assembly-and-finishing",
    // PLACEHOLDER — replace with real GTech shop photo (assembly floor / weldment)
    photo: "photo-1587293852726-70cdb56c2866",
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
    title: "Machining",
    eyebrow: "Capabilities",
    subline:
      "Turning and milling to the customer drawing — from single prototypes to repeat production lots.",
    intro: [
      "GTech runs three LMW CNC turning centres and a BFW vertical machining centre on the Chikhali floor. Turning covers work up to Ø300 × 800 L with an 8-station hydraulic turret and chuck sizes of 165, 200 and 300 mm; the smallest centre (LMW Smart Plus) handles fine work down to Ø165 × 300 L.",
      "Milling is done on the BFW BMV 50 TC24, an 850 × 600 × 600 mm machine specification with 510 mm of head-stock (Z-axis) travel. Prismatic parts, flange faces, bores and drilled / tapped patterns are cut in one setup where the geometry allows. Programming is done from customer models and drawings, with first-article measurement before a lot is released.",
    ],
    specTitle: "Machining specifications",
    specColumns: ["Machine", "Make", "Spec", "Value"],
    specRows: [
      ["CNC turning centre", "LMW", "Chuck Ø × Length", "Ø300 × 800 L"],
      ["CNC turning centre", "LMW", "Chuck Ø × Length", "Ø200 × 500 L"],
      ["CNC turning centre", "LMW Smart Plus", "Chuck Ø × Length", "Ø165 × 300 L"],
      ["Turret", "LMW", "Capacity", "8 stations, hydraulic indexing"],
      ["Chuck sizes", "LMW", "Capacity", "165 / 200 / 300 mm"],
      ["Max boring bar", "LMW", "Max Ø", "Ø32 mm"],
      ["Vertical machining centre", "BFW BMV 50 TC24", "Work envelope", "850 × 600 × 600 mm specification"],
      ["VMC head-stock travel (Z)", "BFW", "Work envelope", "510 mm"],
      ["VMC spindle nose to table", "BFW", "Work envelope", "100 – 610 mm (to 810 mm with column riser)"],
      ["Radial drilling", "Rajkot SP", "Drill Ø", "Ø1.25 in"],
      ["Smart tapping", "ITCO", "Tap size", "M25"],
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
    title: "Fabrication",
    eyebrow: "Capabilities",
    subline:
      "Profile cutting, forming and welding of steel structures and weldments, up to 5-ton crane handling.",
    intro: [
      "Plate and section work starts on the Koike HD plasma cutter — a 3 × 8 m bed at 300 A — and a Laxmi band saw for bar stock. Formed parts are bent on a press brake in the 200-ton class (ADH), with rolling and bending for cylindrical and curved work.",
      "Welding is done to MIG, TIG and arc processes on fixtures, with a 600 A machine for heavy sections and a 5-ton crane for handling large weldments. Structures are checked for dimension and fit against the drawing before they move to machining or assembly. Sheet-metal forming and structural steel fabrication are both in scope, prototype through production.",
    ],
    specTitle: "Fabrication specifications",
    specColumns: ["Machine", "Make", "Spec", "Value"],
    specRows: [
      ["Plasma cutting machine", "Koike", "Bed size", "300 A, HD, 3 × 8 m bed"],
      ["Press brake", "ADH", "Tonnage × Length", "200 ton"],
      ["Welding machine", "Jasic / ESAB", "Amperage", "600 A (MIG / TIG / arc)"],
      ["Overhead crane", "—", "Capacity", "5 ton"],
      ["Band saw", "Laxmi Industries", "Cutting Ø", "Ø140 mm cutting"],
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
    specTitle: "Assembly & support specifications",
    specColumns: ["Machine", "Make", "Spec", "Value"],
    specRows: [
      ["Overhead crane", "—", "Capacity", "5 ton"],
      ["Milling machine", "Vernier", "Work envelope", "FN 3"],
      ["Lathe", "Sagar", "Bed length", "6 ft bed"],
      ["Micromill", "M1TR", "Work envelope", "1210 × 460 × 460 mm"],
      ["Column drilling", "WMW", "Drill Ø", "Ø1.5 in"],
      ["Pillar drilling", "Premier", "Drill Ø", "Ø1 in (× 2)"],
      ["Air compressors", "—", "Power rating", "10 / 7.5 / 5 HP"],
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

/* --- Full machine list ---
   Reconciled from machine-list-updated.pdf (Doc GT/OPR/F/01) and the updated
   company profile deck ("Machines Available"). Identical units are consolidated
   with a "(× n)" suffix.

   TODO (client) — points to confirm between the two updated sources:
   • machine-list-updated.pdf lists 7 welding machines (4 Jasic + 3 ESAB),
     3 Kismat drills, a JMC turret mill, a SEW profile cutter, a DeWalt chop
     saw and 8 Forte grinders — all added below. It does NOT list any press
     brake, overhead crane or air compressor; those are carried over from the
     deck. The press brake is recorded as ADH 200 ton (the old 220 ton row is
     removed, per round-1 feedback).
   • machine-list-updated.pdf gives the BFW VMC as "1300 × 700 mm" and the LMW
     Smart Plus as "Ø165 × 500 L", and omits the Ø300 × 800 L LMW turning
     centre. The deck-consistent figures (850 × 600 × 600 mm, Ø165 × 300 L,
     three turning centres) are kept so the machine list matches the rest of
     the site — confirm which set is current.
   • Kismat drill GT/MC-05 shows capacity "6" in the PDF (unit unclear);
     grouped here with the two "DIA 32" Kismat drills as Ø32 mm. */
export const MACHINES = [
  { name: "CNC turning centre", make: "LMW", capacity: "Ø300 × 800 L", category: "Machining" },
  { name: "CNC turning centre", make: "LMW LT 20 X", capacity: "Ø200 × 500 L", category: "Machining" },
  { name: "CNC turning centre", make: "LMW Smart Plus", capacity: "Ø165 × 300 L", category: "Machining" },
  { name: "Vertical machining centre (VMC)", make: "BFW BMV 50 TC24", capacity: "850 × 600 × 600 mm", category: "Machining" },
  { name: "Turret milling machine", make: "JMC", capacity: "3 HP", category: "Machining" },
  { name: "Milling machine", make: "Vernier", capacity: "FN 3", category: "Machining" },
  { name: "Lathe", make: "Sagar", capacity: "6 ft bed", category: "Machining" },
  { name: "Micromill", make: "M1TR", capacity: "1210 × 460 × 460 mm", category: "Machining" },
  { name: "Radial drilling machine", make: "Rajkot SP", capacity: "Ø1.25 in", category: "Machining" },
  { name: "Column drilling machine", make: "WMW", capacity: "Ø1.5 in", category: "Machining" },
  { name: "Pillar drilling machine (× 2)", make: "Premier", capacity: "Ø1 in", category: "Machining" },
  { name: "Drilling machine (× 3)", make: "Kismat", capacity: "Ø32 mm", category: "Machining" },
  { name: "Smart tapping machine", make: "ITCO", capacity: "M25", category: "Machining" },
  { name: "Tapping arm", make: "Smart Tap", capacity: "M16", category: "Machining" },
  { name: "Plasma cutting machine", make: "Koike", capacity: "300 A, HD, 3 × 8 m bed", category: "Fabrication" },
  { name: "Press brake", make: "ADH", capacity: "200 ton", category: "Fabrication" },
  { name: "Welding machine (× 4)", make: "Jasic", capacity: "600 A (MIG / TIG / arc)", category: "Fabrication" },
  { name: "Welding machine (× 3)", make: "ESAB", capacity: "600 A (MIG / TIG / arc)", category: "Fabrication" },
  { name: "Profile cutting machine", make: "SEW", capacity: "up to 150 mm", category: "Fabrication" },
  { name: "Bandsaw cutting machine", make: "Laxmi Industries", capacity: "Ø140 mm cutting", category: "Fabrication" },
  { name: "Chop saw machine", make: "DeWalt", capacity: "355 mm blade", category: "Fabrication" },
  { name: "Overhead crane", make: "—", capacity: "5 ton", category: "Support" },
  { name: "Air compressors", make: "—", capacity: "10 / 7.5 / 5 HP", category: "Support" },
  { name: "Grinder (× 8)", make: "Forte", capacity: "—", category: "Support" },
];

export const MACHINE_CATEGORIES = ["All", "Machining", "Fabrication", "Support"];

/* --- Clients & partners ---
   Logos supplied by the client (round-1 feedback), stored in
   /public/assets/client-assets/logos/. HD Hyundai Construction Equipment India
   and Zoomlion are the anchor construction-equipment OEMs (name them first).

   TODO (client): the source deck lists all of these together under "Esteemed
   Customers" and does NOT separate build-to-print OEM customers from equipment
   suppliers / partners (e.g. Atlas Copco, KYB). Confirm the split so this can
   become two lists — "Customers" and "Suppliers & partners". DRDO added per
   round-1 instruction. Some supplied logo files have a baked-in background
   colour (SANY, Atlas Copco, Zoomlion) — request transparent-PNG versions. */
export const CLIENTS = [
  { id: "hd-hyundai", name: "HD Hyundai Construction Equipment India", logo: "/assets/client-assets/logos/hd-hyundai.png" },
  { id: "zoomlion", name: "Zoomlion", logo: "/assets/client-assets/logos/zoomlion.png" },
  { id: "sany", name: "SANY", logo: "/assets/client-assets/logos/sany.png" },
  { id: "lt-construction", name: "L&T Construction", logo: "/assets/client-assets/logos/lt-construction.png" },
  { id: "kyb", name: "KYB", logo: "/assets/client-assets/logos/kyb.png" },
  { id: "conmat", name: "Conmat", logo: "/assets/client-assets/logos/conmat.png" },
  { id: "atlas-copco", name: "Atlas Copco", logo: "/assets/client-assets/logos/atlas-copco.png" },
  { id: "global-tooling", name: "Global Tooling", logo: "/assets/client-assets/logos/global-tooling.png" },
  { id: "drdo", name: "DRDO", logo: "/assets/client-assets/logos/drdo.webp" },
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

/* --- Industries, with typical parts (Construction leads) ---
   `photo` is an Unsplash id rendered via unsplash(); the home page shows these
   as portrait photo cards linking to the matching section on /industries. */
export const INDUSTRIES = [
  {
    id: "construction",
    icon: "construction",
    label: "Construction & Earth-moving",
    lead: true,
    // PLACEHOLDER — replace with real GTech shop photo (excavator / crane component)
    photo: "photo-1487875961445-47a00398c267",
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
    // PLACEHOLDER — replace with real GTech shop photo (auto parts / assembly)
    photo: "photo-1552519507-da3b142c6e3d",
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
    // PLACEHOLDER — replace with real GTech shop photo (turbine / power infrastructure part)
    photo: "photo-1466611653911-95081537e5b7",
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
    // PLACEHOLDER — replace with real GTech shop photo (industrial crane / heavy equipment)
    photo: "photo-1504917595217-d4dc5ebe6122",
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
    // PLACEHOLDER — replace with real GTech shop photo (dies / moulds / precision tooling)
    photo: "photo-1621905251189-08b45d6a269e",
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

/* --- Certifications ---
   Certificate scans supplied by the client, held as PDFs in
   /public/assets/client-assets/certifications/. Names / issuers / numbers read
   directly off the scans. */
export const CERTIFICATIONS = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    caption: "Quality Management System",
    issuer: "ROHS Certification Pvt. Ltd.",
    number: "25DQOA97",
    file: "/assets/client-assets/certifications/cert-3.pdf",
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    caption: "Environmental Management System",
    issuer: "QRO",
    number: "305025051917E",
    file: "/assets/client-assets/certifications/cert-1.pdf",
  },
  {
    id: "iso-3834-2",
    name: "ISO 3834-2:2016",
    caption: "Quality requirements for fusion welding of metallic materials (Part 2)",
    issuer: "U.S. Certification",
    number: "US-GHPS-25-17256206",
    file: "/assets/client-assets/certifications/cert-2.pdf",
  },
];

/* --- Awards & recognition ---
   Images in /public/assets/client-assets/awards/.
   TODO (client): award-1.jpeg is a shelf photo showing an HD Hyundai "Valued
   Business Partner" plaque and a "Quality Month 2025" appreciation award —
   send flat scans / individual photos and confirm the exact wording. */
export const AWARDS = [
  {
    id: "hd-hyundai-partner",
    name: "HD Hyundai Construction Equipment India",
    caption: "Valued Business Partner · Quality Month 2025 appreciation",
    image: "/assets/client-assets/awards/award-1.jpeg",
  },
];

/* Certifications section background — PLACEHOLDER (Unsplash, gtech-brand §7).
   Future upgrade: /assets/client-assets/certifications/section-background.jpg
   once the client supplies a real shop-floor photo. */
export const CERT_SECTION_BG = "photo-1567789884554-0b844b597180";

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
/* Hero background — static shop-floor photo (PLACEHOLDER, gtech-brand §7).
   Round-2 feedback reverted the hero from video back to this still image. */
export const HERO_PHOTO = "photo-1567789884554-0b844b597180";

/* Plant-tour clip (client-supplied) + its poster still. Round-2 feedback moved
   this out of the hero and into the "Who We Are" section. The poster stands in
   while the video buffers, on load failure, and under prefers-reduced-motion. */
export const PLANT_TOUR_VIDEO = "/assets/client-assets/video/plant-tour.mp4";
export const PLANT_TOUR_POSTER = "/assets/client-assets/video/plant-tour-poster.png";

/* "Why GTech" section image (PLACEHOLDER, Unsplash — industrial / precision-work
   close-up; swap for a first-party GTech CNC lathe photo, gtech-brand §7). */
export const WHY_GTECH_PHOTO = "photo-1504328345606-18bbc8c9d7d1";

/* Fixed Unsplash CDN URL from a photo id. source.unsplash.com keyword search is
   discontinued — fixed ids only. Every use is a PLACEHOLDER (gtech-brand §7). */
export function unsplash(photoId, w = 1200, h = 900) {
  return `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&crop=entropy&q=80&auto=format`;
}
