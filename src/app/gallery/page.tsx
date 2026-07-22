import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { anchors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Inspect the approved A/B/C anchors, responsive crops, continuity evidence, and future motion-test placeholders.",
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="detail-page gallery-page">
      <header className="detail-hero gallery-hero page-shell">
        <p className="eyebrow">Continuity evidence / A — B — C</p>
        <h1>Three frames. One material story.</h1>
        <p className="detail-lede">These are the exact approved Phase D pilot anchors copied into this independent project. Full frames and crops below use the same files—no regeneration and no substitute middle.</p>
      </header>

      <section className="anchor-inspection page-shell" aria-labelledby="anchors-title">
        <div className="section-heading">
          <p className="eyebrow">Full-frame inspection</p>
          <h2 id="anchors-title">Approved source sequence</h2>
          <p>1672 × 941 WebP / 16:9 / exact source bytes retained</p>
        </div>
        <div className="anchor-grid">
          {anchors.map((anchor) => (
            <figure key={anchor.id} className="anchor-figure">
              <div className="anchor-image-wrap frame-border">
                <Image src={anchor.src} alt={anchor.alt} width={1672} height={941} sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="anchor-letter">{anchor.id}</span>
              </div>
              <figcaption><div><strong>{anchor.name}</strong><span>1672 × 941</span></div><p>{anchor.note}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="crop-section page-shell" aria-labelledby="crop-title">
        <div className="section-heading">
          <p className="eyebrow">Responsive composition</p>
          <h2 id="crop-title">One anchor, two intentional crops</h2>
          <p>The shared B anchor is shown without altering its pixels.</p>
        </div>
        <div className="crop-comparison">
          <figure className="desktop-crop">
            <div className="crop-frame frame-border"><Image src="/media/anchors/pressure-b.webp" alt="Wide desktop crop of shared anchor B." fill sizes="(max-width: 900px) 100vw, 70vw" className="crop-image" /></div>
            <figcaption><strong>Desktop / 16:9</strong><p>Full context keeps the press, iron, box axis, and food silhouette readable.</p></figcaption>
          </figure>
          <figure className="mobile-crop">
            <div className="crop-frame frame-border"><Image src="/media/anchors/pressure-b.webp" alt="Portrait mobile crop of shared anchor B centered on the burger and pickup box." fill sizes="(max-width: 900px) 88vw, 24vw" className="crop-image crop-image-mobile" /></div>
            <figcaption><strong>Mobile / 9:16</strong><p>The focal point shifts to 60% while protecting the burger and box edge.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className="continuity-strip" aria-labelledby="continuity-strip-title">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Reduced-motion route</p>
            <h2 id="continuity-strip-title">A → exact B → C</h2>
            <p>All meaning survives as a labeled still sequence.</p>
          </div>
          <div className="still-strip">
            {anchors.map((anchor, index) => (
              <figure key={anchor.id}>
                <div className="still-frame"><Image src={anchor.src} alt={`${anchor.id}: ${anchor.alt}`} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{anchor.id} / {anchor.name}</strong></figcaption>
              </figure>
            ))}
          </div>
          <div className="continuity-notes">
            <p><strong>Geometry</strong> The burger remains the dominant rounded mass at the center-right of every frame.</p>
            <p><strong>Light</strong> A warm key continues from upper right while the seasoned iron stays near-black.</p>
            <p><strong>State</strong> The product never becomes raw again; only its support and pickup context advance.</p>
          </div>
        </div>
      </section>

      <section className="motion-placeholder page-shell" aria-labelledby="motion-title">
        <div>
          <p className="eyebrow">Motion tests / Reserved</p>
          <h2 id="motion-title">No approved clips yet.</h2>
          <p>When manually approved Higgsfield clips exist, this section will compare clip 01 (A → exact B) and clip 02 (exact B → C), including reduced-motion posters and continuity notes. The current pilot makes no video claim and autoplays nothing.</p>
        </div>
        <div className="empty-media" role="img" aria-label="Empty motion-test slot reserved for future approved video">
          <span>Future approved media</span><strong>A → B / B → C</strong><small>public/media/higgsfield/</small>
        </div>
      </section>

      <section className="gallery-cta page-shell"><p>Want the implementation decisions behind these frames?</p><Link className="button button-primary" href="/proof">Read the proof</Link></section>
    </main>
  );
}
