import Link from "next/link";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="page-shell cta-grid">
        <p className="eyebrow">05 / The handoff</p>
        <div>
          <h2 id="cta-title">Proof is what survives the transition.</h2>
          <p>Inspect the runtime decisions, continuity contract, and every approved anchor behind this browser pilot.</p>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" href="/gallery">See the Proof</Link>
          <Link className="button button-secondary" href="/proof">Read the method</Link>
          <Link className="text-link" href="/gallery">Open the gallery <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
