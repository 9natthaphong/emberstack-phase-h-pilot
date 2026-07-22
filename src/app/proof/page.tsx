import type { Metadata } from "next";
import Link from "next/link";
import { chapterTechniques, transitionMap } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proof",
  description: "Runtime selection, technique mapping, continuity rules, fallbacks, cleanup, and honest evidence status for the Emberstack pilot.",
};

const budgetRows = [
  ["Runtime", "GSAP core + ScrollTrigger + @gsap/react only"],
  ["Media", "Three approved WebP anchors; 840,812 bytes total"],
  ["Motion", "One pinned desktop master timeline; no infinite loops"],
  ["Mobile", "No pinned timeline below 768px"],
  ["Reduced motion", "No ScrollTrigger initialization; static A → B → C"],
  ["Rendering", "DOM + optimized images; no WebGL, shader, or 3D cost"],
] as const;

export default function ProofPage() {
  return (
    <main id="main-content" className="detail-page">
      <header className="detail-hero page-shell">
        <p className="eyebrow">Runtime evidence / Phase H</p>
        <h1>The method is part of the frame.</h1>
        <p className="detail-lede">Pressure Becomes Proof is a browser pilot built as an independent consumer of the external Creative Motion Toolkit. It demonstrates one approved concept on one concrete stack; it is not universal creative proof.</p>
        <div className="detail-meta">
          <span>Approved concept</span><strong>Pressure Becomes Proof</strong>
          <span>Selected runtime</span><strong>GSAP + ScrollTrigger</strong>
          <span>Evidence status</span><strong>Level 3 / browser-pilot only</strong>
        </div>
      </header>

      <section className="proof-section page-shell proof-runtime" aria-labelledby="runtime-title">
        <p className="section-index">01</p>
        <div>
          <p className="eyebrow">Runtime decision</p>
          <h2 id="runtime-title">The smallest stack that can explain the transformation.</h2>
          <p>The external router selected GSAP + ScrollTrigger because ordered scroll reveals process and material evidence, and one pinned stage provides a measurable destination state. Native CSS cannot provide the coordinated scrub. Heavier stacks add cost without adding product truth.</p>
          <div className="reason-pairs">
            <article><h3>Why not WebGL?</h3><p>The approved anchors already carry photoreal surface, light, and depth. There is no inspectable geometry, shader rule, or camera-relative interaction that requires a GPU scene.</p></article>
            <article><h3>Why not Theatre or Three.js?</h3><p>No authored 3D sequence or spatial product mechanism exists here. Adding either would turn implementation complexity into decoration.</p></article>
            <article><h3>Why no smooth-scroll layer?</h3><p>Native scroll gives the timeline all needed input. Lenis and ScrollSmoother were rejected to avoid another controller and preserve predictable navigation.</p></article>
          </div>
        </div>
      </section>

      <section className="proof-section page-shell" aria-labelledby="techniques-title">
        <p className="section-index">02</p>
        <div>
          <p className="eyebrow">Chapter-to-technique map</p>
          <h2 id="techniques-title">Every motion has an information job.</h2>
          <div className="proof-table-wrap">
            <table className="proof-table">
              <thead><tr><th>Chapter</th><th>Technique</th><th>Information job</th></tr></thead>
              <tbody>{chapterTechniques.map((row) => <tr key={row.chapter}><td>{row.chapter}</td><td>{row.technique}</td><td>{row.purpose}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="proof-section page-shell" aria-labelledby="continuity-title">
        <p className="section-index">03</p>
        <div>
          <p className="eyebrow">Registered transition map</p>
          <h2 id="continuity-title">B is a boundary, not an approximation.</h2>
          <p>The local file <code>pressure-b.webp</code> is the exact approved source middle anchor. It is used once as the terminal state of A → B and again as the starting state of B → C. It is never regenerated, recomposed, or substituted.</p>
          <div className="transition-ledger">
            {transitionMap.map((item) => (
              <article key={item.boundary}>
                <h3>{item.boundary}</h3>
                <dl><dt>Registration</dt><dd>{item.registration}</dd><dt>Constant</dt><dd>{item.constant}</dd><dt>Change</dt><dd>{item.change}</dd></dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section page-shell" aria-labelledby="routes-title">
        <p className="section-index">04</p>
        <div>
          <p className="eyebrow">Implementation routes</p>
          <h2 id="routes-title">One meaning, three compositions.</h2>
          <div className="route-comparison">
            <article><span>Desktop</span><h3>Pinned inspection</h3><p>One 520vh track drives one top-level timeline. Crop, position, scale, mask, and warm-light overlays move through A, B hold, and C.</p></article>
            <article><span>Mobile</span><h3>Short vertical states</h3><p>Below 768px, A, B, and C become normal-flow chapters with dedicated crops and readable copy. No long pin is initialized.</p></article>
            <article><span>Reduced motion</span><h3>Labeled static sequence</h3><p>The browser receives the complete A → B → C evidence in document order. Pinning and scrubbing are disabled; information and links remain intact.</p></article>
          </div>
        </div>
      </section>

      <section className="proof-section page-shell" aria-labelledby="lifecycle-title">
        <p className="section-index">05</p>
        <div>
          <p className="eyebrow">Lifecycle + performance</p>
          <h2 id="lifecycle-title">Scoped, measured, disposable.</h2>
          <p>ScrollTrigger registers inside a client-only module. The pressure component waits for image decoding and fonts before measurement, refreshes through a debounced resize handler, and uses the React GSAP context to revert the timeline, trigger, pin state, inline styles, and listener on unmount or responsive rebuild.</p>
          <dl className="budget-list">{budgetRows.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="proof-section proof-limitations page-shell" aria-labelledby="limits-title">
        <p className="section-index">06</p>
        <div>
          <p className="eyebrow">Honest status</p>
          <h2 id="limits-title">Evidence, with boundaries.</h2>
          <p>This proves that one approved Emberstack direction can be implemented as a responsive browser experience with explicit cleanup and fallbacks. It does not prove universal creative quality, conversion lift, production readiness for every device, real-world food claims, or independent Level 3 acceptance across varied briefs.</p>
          <ul>
            <li>The still sequence implies process; it is not documentary footage.</li>
            <li>No approved Higgsfield clips are present, so video continuity is not tested.</li>
            <li>Performance budgets describe this pilot’s composition, not a universal benchmark.</li>
          </ul>
          <div className="inline-actions"><Link className="button button-primary" href="/gallery">Inspect the anchors</Link><Link className="text-link" href="/">Return to experience</Link></div>
        </div>
      </section>
    </main>
  );
}
