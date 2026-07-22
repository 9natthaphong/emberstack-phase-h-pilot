import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Emberstack / External browser pilot</p>
        <p className="footer-title">Pressure becomes proof.</p>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/">Experience</Link>
        <Link href="/proof">Proof</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>
      <p className="footer-note">Independent Phase H consumer implementation. No generated video is used.</p>
    </footer>
  );
}
