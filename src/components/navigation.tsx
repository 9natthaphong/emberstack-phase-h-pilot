"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Experience"],
  ["/proof", "Proof"],
  ["/gallery", "Gallery"],
] as const;

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" aria-label="Emberstack home">
          <span className="brand-glyph" aria-hidden="true">E</span>
          <span className="brand-word">Emberstack</span>
        </Link>
        <div className="nav-links">
          {links.map(([href, label]) => (
            <Link
              key={href}
              className="nav-link"
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
