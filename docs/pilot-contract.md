# Phase H implementation contract

## Rendering decision

- Project type: cinematic long-form product reveal
- Primary action: inspect the proof and its implementation method
- Renderer: semantic DOM + optimized still images
- Motion runtime: GSAP core + ScrollTrigger
- Rejected: WebGL, Three.js, Theatre.js, OGL, Lenis, ScrollSmoother, database, authentication, paid APIs
- Rationale: registered still-image crop, mask, position, scale, and lighting continuity can express the complete approved concept without a GPU scene or second scroll controller

## Route ownership

| Route | Rendering owner | Motion owner |
| --- | --- | --- |
| `/` | Server-rendered semantic page + client-only hero/pressure islands | Hero entrance context; one pressure director timeline |
| `/proof` | Server Component | None |
| `/gallery` | Server Component | None |

## Chapter contract

| Chapter | Narrative job | Visual state | Desktop | Mobile | Reduced motion |
| --- | --- | --- | --- | --- | --- |
| Raw craft | Establish preparation, iron, heat, texture | A | Full viewport, restrained entrance | Same hero with protected crop | Immediate static state |
| Pressure | Make compression and transformation legible | A → exact B | Pinned crop/mask/scale handoff | Normal-flow A chapter | Labeled A state |
| Evidence | Hold surface and material proof | exact B | B remains stable while labels enter outside burger | Normal-flow B chapter | Labeled B state |
| Pickup | Resolve into a premium handoff | exact B → C | Registered mask and focal-crop handoff | Normal-flow C chapter | Labeled C state |
| CTA | Offer inspection path | Static editorial close | Normal flow | Normal flow | Normal flow |

## Animation ownership

| Property | Owner | Writer | Cleanup |
| --- | --- | --- | --- |
| Hero text transform/opacity | `HeroStage` | GSAP context | `useGSAP` context revert |
| Hero image scale | `HeroStage` | GSAP context | `useGSAP` context revert |
| Desktop A/B/C transform, visibility, clip-path | pressure director | One top-level timeline | `useGSAP` context revert |
| Desktop copy/evidence transform/visibility | pressure director | Same top-level timeline | `useGSAP` context revert |
| Mobile/reduced layout and visibility | CSS media queries | CSS only; no animated overlap with desktop owner | Media-query rebuild |
| Resize refresh listener | pressure director | Debounced browser listener | Explicit listener/timer cleanup |

No CSS transition or second JavaScript engine writes the properties owned by GSAP.

## Registered transition contract

- A → B: `match-cut-by-position` plus `registered-state-reveal`
- B hold: `material-state-continuity`
- B → C: `focal-crop-choreography` ending in an `environmental-hard-cut`
- Standard continuity tolerance reference: screen position 0.1, occupancy 8 percentage points, angle 15°, light direction 30°, light intensity 0.2
- The exact B file and path are reused at both boundaries

## Asset and performance budget

- Critical media: A only, priority-loaded
- Deferred media: B and C
- Committed anchor transfer: 840,812 bytes total before framework delivery optimization
- GPU/canvas budget: zero WebGL contexts
- Decoder budget: zero video decoders
- Timeline budget: one pinned scrub timeline, one active high-control interaction in view
- Animated properties: transform and opacity preferred; clip-path reserved for the two registered image handoffs
- No infinite loops, continuous pointer tracking, large blur animation, particle field, or ambient ticker

## Verification matrix

- Desktop: 1440 × 900, all three routes, chapter reachability, reverse scroll, cleanup
- Mobile: 390 × 844, all three routes, crop, navigation, overflow
- Reduced motion: 1440 × 900 with `prefers-reduced-motion: reduce`, no pressure ScrollTrigger, complete A/B/C states
- Structural: lint, production build, links, metadata, image paths, custom 404
- Browser: console, error overlay, failed local requests, horizontal overflow, screenshots/contact sheet

## Evidence boundary

Passing the pilot verifies this implementation and this approved direction in the tested browser matrix. It does not establish independent Level 3 acceptance for varied briefs or prove campaign performance, physical food claims, or universal device coverage.
