import Image from "next/image";

type PickupStageProps = {
  mode: "mobile" | "reduced";
};

export function PickupStage({ mode }: PickupStageProps) {
  return (
    <section className="flow-chapter flow-chapter-pickup" aria-labelledby={`${mode}-pickup-title`}>
      <div className="flow-copy">
        <p className="eyebrow">04 / Premium pickup</p>
        <h2 id={`${mode}-pickup-title`}>The process resolves. The product stays itself.</h2>
        <p>Same silhouette. Same warm key light. Same material story—now settled into a calm pickup frame.</p>
      </div>
      <div className="flow-media frame-border">
        <Image
          src="/media/anchors/premium-pickup-c.webp"
          alt="The burger settled inside its pickup box with its geometry and warm lighting preserved."
          fill
          sizes={mode === "mobile" ? "100vw" : "(max-width: 900px) 100vw, 72vw"}
          className="flow-image flow-image-c"
        />
        <span className="anchor-badge">C / Pickup resolved</span>
      </div>
    </section>
  );
}
