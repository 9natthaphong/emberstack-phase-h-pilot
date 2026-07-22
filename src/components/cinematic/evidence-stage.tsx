import Image from "next/image";
import { evidenceLabels } from "@/lib/content";

type EvidenceStageProps = {
  mode: "mobile" | "reduced";
};

export function EvidenceStage({ mode }: EvidenceStageProps) {
  return (
    <section className="flow-chapter flow-chapter-evidence" aria-labelledby={`${mode}-evidence-title`}>
      <div className="flow-media frame-border">
        <Image
          src="/media/anchors/pressure-b.webp"
          alt="The exact shared middle anchor: the burger is supported on a spatula inside the pickup box."
          fill
          sizes={mode === "mobile" ? "100vw" : "(max-width: 900px) 100vw, 72vw"}
          className="flow-image flow-image-b"
        />
        <span className="anchor-badge">B / Exact shared anchor</span>
      </div>
      <div className="flow-copy">
        <p className="eyebrow">03 / Texture becomes evidence</p>
        <h2 id={`${mode}-evidence-title`}>Nothing resets at the middle.</h2>
        <p>The B frame holds long enough to inspect what the process left behind.</p>
        <ol className="evidence-flow-list">
          {evidenceLabels.map(([index, label, detail]) => (
            <li key={index}>
              <span>{index}</span>
              <div><strong>{label}</strong><p>{detail}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
