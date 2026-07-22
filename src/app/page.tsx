import type { Metadata } from "next";
import { FinalCta } from "@/components/cinematic/final-cta";
import { HeroStage } from "@/components/cinematic/hero-stage";
import { PressureSequence } from "@/components/cinematic/pressure-sequence";

export const metadata: Metadata = {
  title: "Pressure Becomes Proof",
  description: "The main Emberstack cinematic experience: raw craft, pressure, material evidence, and premium pickup.",
};

export default function Home() {
  return (
    <main id="main-content">
      <HeroStage />
      <PressureSequence />
      <FinalCta />
    </main>
  );
}
