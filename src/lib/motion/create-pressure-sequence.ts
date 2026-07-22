"use client";

import { gsap, ScrollTrigger } from "@/lib/motion/gsap-client";

export type PressureSequenceElements = {
  root: HTMLElement;
  pin: HTMLElement;
  anchorA: HTMLElement;
  anchorB: HTMLElement;
  anchorC: HTMLElement;
  heat: HTMLElement;
  pressureCopy: HTMLElement;
  evidenceCopy: HTMLElement;
  pickupCopy: HTMLElement;
  evidenceItems: HTMLElement[];
};

export function createPressureSequence(elements: PressureSequenceElements) {
  const {
    root,
    pin,
    anchorA,
    anchorB,
    anchorC,
    heat,
    pressureCopy,
    evidenceCopy,
    pickupCopy,
    evidenceItems,
  } = elements;

  let activeChapter = "pressure";
  root.dataset.chapter = activeChapter;

  gsap.set(anchorA, { autoAlpha: 1, scale: 1, xPercent: 0, yPercent: 0 });
  gsap.set(anchorB, {
    autoAlpha: 1,
    clipPath: "inset(44% 29% 34% 29%)",
    scale: 1.075,
    xPercent: -1.5,
    yPercent: 1,
  });
  gsap.set(anchorC, {
    autoAlpha: 1,
    clipPath: "polygon(48% 45%, 54% 45%, 54% 57%, 48% 57%)",
    scale: 1.045,
    xPercent: -1,
  });
  gsap.set([evidenceCopy, pickupCopy, ...evidenceItems], { autoAlpha: 0 });
  gsap.set(pressureCopy, { autoAlpha: 1 });
  gsap.set(heat, { autoAlpha: 0, xPercent: -24 });

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      id: "emberstack-pressure-sequence",
      trigger: root,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65,
      pin,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const next = self.progress < 0.38 ? "pressure" : self.progress < 0.72 ? "evidence" : "pickup";
        if (next !== activeChapter) {
          activeChapter = next;
          root.dataset.chapter = next;
        }
      },
    },
  });

  timeline
    .addLabel("pressure")
    .to(anchorA, {
      scale: 1.09,
      xPercent: -1.2,
      yPercent: -0.8,
      clipPath: "inset(7% 9% 8% 9%)",
      duration: 1.05,
    })
    .to(heat, { autoAlpha: 0.82, xPercent: 8, duration: 1.05 }, "<")
    .to(
      anchorB,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        duration: 1.15,
      },
      0.58,
    )
    .to(
      anchorA,
      {
        clipPath: "inset(48% 30% 36% 30%)",
        scale: 1.14,
        duration: 0.86,
      },
      0.66,
    )
    .to(pressureCopy, { autoAlpha: 0, y: -14, duration: 0.22 }, 1.34)
    .set(anchorA, { autoAlpha: 0 }, 1.48)
    .addLabel("evidence", 1.5)
    .to(evidenceCopy, { autoAlpha: 1, y: 0, duration: 0.3 }, 1.52)
    .fromTo(
      evidenceItems,
      { autoAlpha: 0, x: -14 },
      { autoAlpha: 1, x: 0, stagger: 0.16, duration: 0.44 },
      1.62,
    )
    .to(anchorB, { scale: 1.008, duration: 1.28 }, 1.7)
    .to([evidenceCopy, ...evidenceItems], { autoAlpha: 0, x: -10, duration: 0.28 }, 2.92)
    .addLabel("pickup", 3.02)
    .to(
      anchorC,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        xPercent: 0,
        duration: 1.18,
      },
      3.02,
    )
    .to(
      anchorB,
      {
        clipPath: "inset(40% 28% 38% 28%)",
        scale: 1.055,
        duration: 0.96,
      },
      3.12,
    )
    .to(heat, { autoAlpha: 0.28, xPercent: 26, duration: 0.9 }, 3.14)
    .set(anchorB, { autoAlpha: 0 }, 4.02)
    .to(pickupCopy, { autoAlpha: 1, y: 0, duration: 0.38 }, 3.86)
    .to(anchorC, { scale: 1.004, duration: 0.9 });

  return timeline;
}

export function refreshPressureSequence() {
  ScrollTrigger.refresh();
}
