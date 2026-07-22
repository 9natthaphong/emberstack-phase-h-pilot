"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const runtime = globalThis as typeof globalThis & {
  __emberstackGsapRegistered?: boolean;
};

if (typeof window !== "undefined" && !runtime.__emberstackGsapRegistered) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  runtime.__emberstackGsapRegistered = true;
}

export { gsap, ScrollTrigger, useGSAP };
