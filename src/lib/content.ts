export const anchors = [
  {
    id: "A",
    name: "Raw craft",
    src: "/media/anchors/raw-craft-a.webp",
    alt: "A finished smashed burger on seasoned iron beside an open pickup box and steel press.",
    note: "The kitchen frame: direct iron surface, visible steam, lacquered crust, and an open route to pickup.",
    focalPoint: "52% 55%",
  },
  {
    id: "B",
    name: "Pressure",
    src: "/media/anchors/pressure-b.webp",
    alt: "The same smashed burger carried into its open pickup box on a steel spatula.",
    note: "The exact shared middle anchor: position, subject identity, heat direction, and material state remain locked.",
    focalPoint: "60% 55%",
  },
  {
    id: "C",
    name: "Premium pickup",
    src: "/media/anchors/premium-pickup-c.webp",
    alt: "The smashed burger settled inside its open pickup box under warm directional light.",
    note: "The calm handoff: the same burger and warm-light direction resolve inside the pickup frame.",
    focalPoint: "61% 55%",
  },
] as const;

export const chapterTechniques = [
  {
    chapter: "01 / Raw craft",
    technique: "Restrained entrance",
    purpose: "Establish preparation, iron, steam, and material detail without delaying the promise.",
  },
  {
    chapter: "02 / Pressure",
    technique: "Sticky multi-phase stage",
    purpose: "Use one pinned master timeline to compress A and reveal the exact shared B through a registered mask.",
  },
  {
    chapter: "03 / Evidence",
    technique: "Registered state hold",
    purpose: "Keep B legible while evidence labels point to the visible surface, heat, and controlled support.",
  },
  {
    chapter: "04 / Pickup",
    technique: "Focal-crop choreography",
    purpose: "Carry B into C while preserving dominant geometry, screen position, and warm-light direction.",
  },
  {
    chapter: "05 / CTA",
    technique: "Static editorial handoff",
    purpose: "Let the finished frame settle before a clear next action.",
  },
] as const;

export const transitionMap = [
  {
    boundary: "A → B",
    registration: "Match cut by position + registered-state reveal",
    constant: "Burger identity, central silhouette, iron surface, warm key light",
    change: "The pickup box closes around the subject as the spatula supports it",
  },
  {
    boundary: "B hold",
    registration: "Material-state continuity",
    constant: "Exact B file, crust, bun highlight, lacquer, heat direction",
    change: "Only evidence copy enters; the food frame remains inspectable",
  },
  {
    boundary: "B → C",
    registration: "Focal crop + environmental hard cut at completion",
    constant: "Subject identity, dominant geometry, box axis, warm light",
    change: "The spatula withdraws and the burger settles into pickup",
  },
] as const;

export const evidenceLabels = [
  ["01", "Crust", "Deep Maillard texture stays visible at the patty edge."],
  ["02", "Heat", "Steam and warm backlight preserve the just-off-iron state."],
  ["03", "Control", "The steel support carries the build without resetting its geometry."],
] as const;
