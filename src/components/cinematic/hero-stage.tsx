"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap, useGSAP } from "@/lib/motion/gsap-client";

export function HeroStage() {
  const rootRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    (_context, contextSafe) => {
      if (reducedMotion) return;

      let cancelled = false;
      const safe = contextSafe!;
      const reveal = safe(() => {
        if (cancelled) return;
        gsap.fromTo(
          ".hero-reveal",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" },
        );
        gsap.fromTo(
          imageRef.current,
          { scale: 1.035 },
          { scale: 1, duration: 1.4, ease: "power2.out" },
        );
      });

      const image = imageRef.current;
      if (!image) return;
      void image.decode().catch(() => undefined).then(reveal);

      return () => {
        cancelled = true;
      };
    },
    { scope: rootRef, dependencies: [reducedMotion], revertOnUpdate: true },
  );

  return (
    <section ref={rootRef} className="hero-stage" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          ref={imageRef}
          src="/media/anchors/raw-craft-a.webp"
          alt="A smashed burger on seasoned iron beside an open pickup box and steel press."
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-grade" aria-hidden="true" />
      </div>

      <div className="hero-content page-shell">
        <p className="eyebrow hero-reveal">Emberstack / Process 01</p>
        <h1 id="hero-title" className="hero-title hero-reveal">
          <span>Pressure</span>
          <span>Becomes Proof.</span>
        </h1>
        <p className="hero-copy hero-reveal">
          Visible preparation. Cast-iron heat. A lacquered, textured finish carried all the way to pickup.
        </p>
      </div>

      <div className="hero-index page-shell hero-reveal" aria-hidden="true">
        <span>Raw craft</span>
        <span className="hero-rule" />
        <span>01 / 05</span>
      </div>
    </section>
  );
}
