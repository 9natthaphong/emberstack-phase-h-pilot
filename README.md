# Emberstack — Pressure Becomes Proof

An independent Phase H external-browser pilot for a premium food-commercial narrative:

**Raw craft → compressed heat and texture → premium pickup.**

The experience uses three approved still anchors and a single GSAP + ScrollTrigger desktop timeline. Mobile and reduced-motion users receive purpose-built normal-flow versions of the same A → B → C story.

## Live demo

**Placeholder:** add the Vercel production URL after importing this repository. No deployment is performed by this project setup.

## Creative Motion Toolkit source

This project consumes selected guidance and three approved assets from the external [Creative Motion Toolkit](https://github.com/9natthaphong/skillcinematicdesign). The toolkit remains a separate, read-only sibling repository during implementation; none of its runtime or full package is copied here.

Toolkit revision consulted: `f1e63873dea8959d06e304ead9aa25b1a6297cb9`

## Architecture

- Next.js 16 App Router with TypeScript
- React Server Components for route content and shared layout
- Small Client Components only where navigation state or motion requires browser APIs
- Tailwind CSS v4 pipeline with a project-owned editorial CSS system
- GSAP + ScrollTrigger for one desktop cinematic timeline
- `@gsap/react` for scoped context cleanup
- `next/image` for stable image sizing and responsive delivery
- No backend, database, authentication, WebGL, Three.js, Theatre.js, smooth-scroll library, or paid API

```text
src/
  app/                         route entry points, metadata, 404, global styles
  components/
    cinematic/                 hero, pressure timeline, evidence, pickup, CTA
  hooks/                       reduced-motion subscription
  lib/
    motion/                    client-only GSAP registration and director
    content.ts                 shared anchor and proof content
public/media/
  anchors/                     exact approved A/B/C WebP files
  higgsfield/                  empty reserved location for future approved clips
docs/                          provenance and implementation contracts
```

## Routes

- `/` — five-chapter cinematic landing experience
- `/proof` — runtime decision, technique and transition mappings, cleanup, budgets, and honest evidence status
- `/gallery` — full anchors, responsive crops, still continuity sequence, and future motion-test placeholder

A custom `not-found.tsx` handles unmatched URLs.

## Local setup

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build commands

```bash
npm run lint
npm run build
npm run start
```

## Motion strategy

Desktop uses one 520vh pressure track and one top-level ScrollTrigger timeline. The pinned stage advances through:

1. A compressed with crop, scale, position, and warm-light continuity.
2. B revealed through a registered mask rather than a generic crossfade.
3. B held while evidence labels remain outside the food silhouette.
4. C revealed from the same dominant geometry and light direction.

Images decode and fonts settle before timeline measurement. Resize refresh is debounced. The GSAP React context reverts the timeline, trigger, pin state, inline styles, and owned listeners on unmount or responsive rebuild.

## Reduced-motion strategy

`prefers-reduced-motion: reduce` prevents the pinned timeline from initializing. The page displays labeled A, exact B, and C frames in normal document order with the same copy, evidence, CTA, navigation, and links. No media autoplays.

Below 768px without reduced motion, the site also avoids the desktop pin and uses three short vertical chapters with dedicated food-safe crops.

## Asset provenance

The three WebP anchors are byte-identical copies of approved toolkit pilot assets. B is the exact shared middle file for both transition boundaries. See [docs/asset-provenance.md](docs/asset-provenance.md) for source paths, hashes, dimensions, and modification status.

## Known limitations

- The pilot uses still anchors only; no approved Higgsfield video is present or claimed.
- The images imply a preparation-to-pickup sequence but are not documentary footage or evidence of real-world food claims.
- Level 3 status is browser-pilot evidence for one approved direction, not independent universal creative acceptance.
- Real-device performance outside the tested browser/viewports remains unverified.
- At creation time, `npm audit` reports three transitive advisories in the current stable Next.js dependency tree (one PostCSS moderate and two Sharp/libvips high findings). npm’s proposed forced fix downgrades Next.js to 9.3.3 and is intentionally not applied; re-check when a compatible stable patch is available.

## Screenshot placeholders

Replace these entries with approved production captures after final deployment review:

- `docs/screenshots/desktop-home-1440x900.png`
- `docs/screenshots/mobile-home-390x844.png`
- `docs/screenshots/reduced-motion-home-1440x900.png`
- `docs/screenshots/proof-desktop.png`
- `docs/screenshots/gallery-desktop.png`
