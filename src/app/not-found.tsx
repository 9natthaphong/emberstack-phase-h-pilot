import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found page-shell">
      <p className="eyebrow">404 / Heat lost</p>
      <h1>This frame never made the sequence.</h1>
      <p>The route does not exist, but the approved A → B → C story is still intact.</p>
      <div className="inline-actions"><Link className="button button-primary" href="/">Return to experience</Link><Link className="text-link" href="/gallery">Inspect the anchors</Link></div>
    </main>
  );
}
