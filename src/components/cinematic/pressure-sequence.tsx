"use client";

import Image from "next/image";
import { useRef } from "react";
import { EvidenceStage } from "@/components/cinematic/evidence-stage";
import { PickupStage } from "@/components/cinematic/pickup-stage";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { evidenceLabels } from "@/lib/content";
import { createPressureSequence, refreshPressureSequence } from "@/lib/motion/create-pressure-sequence";
import { useGSAP } from "@/lib/motion/gsap-client";

export function PressureSequence() {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);
  const cRef = useRef<HTMLDivElement>(null);
  const heatRef = useRef<HTMLDivElement>(null);
  const pressureCopyRef = useRef<HTMLDivElement>(null);
  const evidenceCopyRef = useRef<HTMLDivElement>(null);
  const pickupCopyRef = useRef<HTMLDivElement>(null);
  const evidenceListRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current;
      const pin = pinRef.current;
      const anchorA = aRef.current;
      const anchorB = bRef.current;
      const anchorC = cRef.current;
      const heat = heatRef.current;
      const pressureCopy = pressureCopyRef.current;
      const evidenceCopy = evidenceCopyRef.current;
      const pickupCopy = pickupCopyRef.current;
      const evidenceList = evidenceListRef.current;

      if (
        reducedMotion ||
        !window.matchMedia("(min-width: 768px)").matches ||
        !root || !pin || !anchorA || !anchorB || !anchorC || !heat ||
        !pressureCopy || !evidenceCopy || !pickupCopy || !evidenceList
      ) return;

      let cancelled = false;
      let resizeTimer: ReturnType<typeof setTimeout> | undefined;
      const safe = contextSafe!;
      const images = Array.from(root.querySelectorAll("img"));
      const install = safe(() => {
        if (cancelled) return;
        createPressureSequence({
          root,
          pin,
          anchorA,
          anchorB,
          anchorC,
          heat,
          pressureCopy,
          evidenceCopy,
          pickupCopy,
          evidenceItems: Array.from(evidenceList.children) as HTMLElement[],
        });
        requestAnimationFrame(refreshPressureSequence);
      });

      const mediaReady = Promise.allSettled(images.map((image) => image.decode().catch(() => undefined)));
      void Promise.all([mediaReady, document.fonts.ready]).then(install);

      const handleResize = safe(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(refreshPressureSequence, 180);
      });
      window.addEventListener("resize", handleResize);

      return () => {
        cancelled = true;
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: rootRef, dependencies: [reducedMotion], revertOnUpdate: true },
  );

  return (
    <>
      <section ref={rootRef} className="pressure-desktop" aria-labelledby="pressure-desktop-title">
        <div className="sr-only">
          <h2 id="pressure-desktop-title">Pressure, evidence, and premium pickup</h2>
          <ol>
            <li>Anchor A establishes heat, preparation, and texture.</li>
            <li>The registered transition compresses A into the exact shared B anchor.</li>
            <li>B holds while crust, heat, and controlled support are identified.</li>
            <li>The exact B anchor transitions into C without resetting the product identity.</li>
          </ol>
        </div>

        <div ref={pinRef} className="pressure-pin" aria-hidden="true">
          <div className="pressure-frame">
            <div ref={aRef} className="pressure-layer pressure-layer-a">
              <Image src="/media/anchors/raw-craft-a.webp" alt="" fill sizes="100vw" className="pressure-image" />
            </div>
            <div ref={bRef} className="pressure-layer pressure-layer-b">
              <Image src="/media/anchors/pressure-b.webp" alt="" fill sizes="100vw" className="pressure-image" />
            </div>
            <div ref={cRef} className="pressure-layer pressure-layer-c">
              <Image src="/media/anchors/premium-pickup-c.webp" alt="" fill sizes="100vw" className="pressure-image" />
            </div>
            <div ref={heatRef} className="heat-continuity" />
            <div className="pressure-vignette" />
          </div>

          <div ref={pressureCopyRef} className="sequence-copy sequence-copy-pressure">
            <p className="eyebrow">02 / Pressure</p>
            <h2>Heat gets compressed into consequence.</h2>
            <p>The crop tightens. The box moves in. The exact B state takes ownership without breaking the subject.</p>
          </div>

          <div ref={evidenceCopyRef} className="sequence-copy sequence-copy-evidence">
            <p className="eyebrow">03 / Texture becomes evidence</p>
            <h2>Hold the proof.</h2>
          </div>

          <ol ref={evidenceListRef} className="sequence-evidence-list">
            {evidenceLabels.map(([index, label, detail]) => (
              <li key={index}>
                <span>{index}</span>
                <div><strong>{label}</strong><p>{detail}</p></div>
              </li>
            ))}
          </ol>

          <div ref={pickupCopyRef} className="sequence-copy sequence-copy-pickup">
            <p className="eyebrow">04 / Premium pickup</p>
            <h2>Craft, carried through.</h2>
            <p>The finish settles. The appetite frame goes quiet. Nothing about the product resets.</p>
          </div>

          <div className="sequence-counter">
            <span data-step="pressure">02</span><span className="counter-rule" /><span>04</span>
          </div>
        </div>
      </section>

      <div className="pressure-mobile" data-motion-route="mobile">
        <section className="flow-chapter flow-chapter-pressure" aria-labelledby="mobile-pressure-title">
          <div className="flow-copy">
            <p className="eyebrow">02 / Pressure</p>
            <h2 id="mobile-pressure-title">Pressure changes the state.</h2>
            <p>On smaller screens the sequence becomes three short chapters. No long pin, no copied desktop timing.</p>
          </div>
          <div className="flow-media frame-border">
            <Image src="/media/anchors/raw-craft-a.webp" alt="The burger on seasoned iron before the pickup move." fill sizes="100vw" className="flow-image flow-image-a" />
            <span className="anchor-badge">A / At the iron</span>
          </div>
        </section>
        <EvidenceStage mode="mobile" />
        <PickupStage mode="mobile" />
      </div>

      <div className="pressure-static" data-motion-route="reduced">
        <header className="static-route-header page-shell">
          <p className="eyebrow">Reduced motion / A → B → C</p>
          <h2>Every state, without mandatory motion.</h2>
          <p>The same causal order is shown as labeled, normal-flow frames. Pinning and scrubbing are not initialized.</p>
        </header>
        <section className="flow-chapter flow-chapter-pressure" aria-labelledby="reduced-pressure-title">
          <div className="flow-copy">
            <p className="eyebrow">02 / A — Raw craft</p>
            <h2 id="reduced-pressure-title">Preparation remains visible.</h2>
            <p>Seasoned iron, steam, surface texture, and an open pickup path establish the start state.</p>
          </div>
          <div className="flow-media frame-border">
            <Image src="/media/anchors/raw-craft-a.webp" alt="Anchor A: burger on seasoned iron beside the open box." fill sizes="(max-width: 900px) 100vw, 72vw" className="flow-image flow-image-a" />
            <span className="anchor-badge">A / Start state</span>
          </div>
        </section>
        <EvidenceStage mode="reduced" />
        <PickupStage mode="reduced" />
      </div>
    </>
  );
}
