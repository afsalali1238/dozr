/* =================================================================
   Hardcoded equipment listings — stand-in for a real backend.

   Sourced from LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html
   so Browse/Detail pages match the already-reviewed prototype content.
   When Supabase is wired in (see ROADMAP.md Phase 3), this file is
   replaced by a fetch() call returning the same shape — keep the shape
   stable so page code doesn't need rewriting.
   ================================================================= */

window.DOZR_EQUIPMENT = [
  {
    id: "cat-305-cr",
    category: "excavators",
    categoryLabel: "Mini excavator",
    weightTonnes: 5.0,
    name: "CAT 305 CR",
    verified: true,
    gpsTracked: true,
    featuredOnHome: true,
    specs: {
      "Operating weight": "5.0 T",
      "Fuel": "Diesel",
      "GPS tracking": "Live",
    },
  },
  {
    id: "cat-320",
    category: "excavators",
    categoryLabel: "Excavator",
    weightTonnes: 20,
    name: "CAT 320",
    verified: true,
    gpsTracked: true,
    featuredOnHome: true,
    description:
      "Well-maintained 20-tonne crawler excavator with full service history. GPS-tracked — you get a live link the moment it leaves the yard, plus an engine-hours report at the end of the hire. Operator available on request.",
    specs: {
      "Operating weight": "20.3 T",
      "Engine hours": "4,182 hrs",
      "Fuel": "Diesel",
      "Dig depth": "6.7 m",
      "GPS tracking": "Live",
      "Year": "2021",
    },
  },
  {
    id: "komatsu-wa320",
    category: "wheel",
    categoryLabel: "Wheel loader",
    name: "Komatsu WA320",
    verified: true,
    gpsTracked: true,
    featuredOnHome: true,
    specs: {
      "Fuel": "Diesel",
      "GPS tracking": "Live",
    },
  },
  {
    id: "hitachi-zx130",
    category: "excavators",
    categoryLabel: "Excavator",
    weightTonnes: 13,
    name: "Hitachi ZX130",
    verified: true,
    gpsTracked: true,
    specs: { "Operating weight": "13 T" },
  },
  {
    id: "kubota-kx080",
    category: "excavators",
    categoryLabel: "Excavator",
    weightTonnes: 8,
    name: "Kubota KX080",
    verified: false,
    gpsTracked: false,
    specs: { "Operating weight": "8 T" },
  },
  {
    id: "volvo-ec220",
    category: "excavators",
    categoryLabel: "Excavator",
    weightTonnes: 22,
    name: "Volvo EC220",
    verified: true,
    gpsTracked: true,
    specs: { "Operating weight": "22 T" },
  },
  {
    id: "cat-336",
    category: "excavators",
    categoryLabel: "Excavator",
    weightTonnes: 36,
    name: "CAT 336",
    verified: false,
    gpsTracked: false,
    specs: { "Operating weight": "36 T" },
  },
];

/* Category tiles shown on Home / used to drive the Browse tab bar.
   Unit counts are illustrative — replace with real inventory counts
   once available. */
window.DOZR_CATEGORIES = [
  { id: "excavators", label: "Excavators", units: 42 },
  { id: "wheel", label: "Wheel Loaders", units: 18 },
  { id: "cranes", label: "Cranes", units: 16 },
  { id: "dump", label: "Dump Trucks", units: 27 },
  { id: "flatbed", label: "Flatbed Trailers", units: 20 },
  { id: "generators", label: "Generators", units: 23 },
];

/** Look up a single unit by id — used by equipment-detail.html (?id=). */
function getEquipmentById(id) {
  return window.DOZR_EQUIPMENT.find((e) => e.id === id);
}

/** Filter listings by category id — used by browse.html tab bar. */
function getEquipmentByCategory(categoryId) {
  return window.DOZR_EQUIPMENT.filter((e) => e.category === categoryId);
}
