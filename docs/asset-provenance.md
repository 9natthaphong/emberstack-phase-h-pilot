# Asset provenance

## Import policy

Only the three explicitly approved Phase D pilot WebP assets were copied from the sibling toolkit repository. No source image was edited, recompressed, regenerated, renamed in place, or written back to the toolkit. The local copies are independent project assets.

Toolkit source repository: [9natthaphong/skillcinematicdesign](https://github.com/9natthaphong/skillcinematicdesign)

Toolkit revision observed during import: `f1e63873dea8959d06e304ead9aa25b1a6297cb9`

Import date: 2026-07-22 (Asia/Bangkok)

## Approved assets

| Anchor | Toolkit source path | Local path | Dimensions | Bytes | SHA-256 | Modification |
| --- | --- | --- | ---: | ---: | --- | --- |
| A / start | `evaluation/phase-d/emberstack-burger/pilot-02/generated/repo/anchor-01-start.webp` | `public/media/anchors/raw-craft-a.webp` | 1672 × 941 | 276,900 | `6C0318FE8005794E4E525B425BB75D8C02DDE05122E29141411F0B4FF52895E7` | None; byte-identical copy |
| B / exact shared middle | `evaluation/phase-d/emberstack-burger/pilot-02/generated/repo/anchor-02-middle.webp` | `public/media/anchors/pressure-b.webp` | 1672 × 941 | 274,414 | `70B17DD4FD734BC1D67D69B2E479BBF08E6482121E0DE6BB15F663C7D4C8BCCC` | None; byte-identical copy |
| C / end | `evaluation/phase-d/emberstack-burger/pilot-02/generated/repo/anchor-03-end.webp` | `public/media/anchors/premium-pickup-c.webp` | 1672 × 941 | 289,498 | `5C3E51423C354DDD9D213DA9824192593E11D4D535F980B52FD75F39A2E4A67A` | None; byte-identical copy |

## Shared-B rule

`public/media/anchors/pressure-b.webp` is the only B asset in the application. The A → B transition lands on it, the evidence chapter holds it, and the B → C transition begins from it. There is no approximate, regenerated, or alternate middle frame.

## Runtime treatment

The browser may request responsive encodings through `next/image`, but the committed source files above remain untouched. CSS changes only crop and position their presentation; no pixels are modified in the repository.
