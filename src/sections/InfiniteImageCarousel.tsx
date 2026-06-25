type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

type SlotKind = "tall-lg" | "tall" | "tall-sm" | "hero" | "stack" | "stack-offset";

const SLOT_PATTERN: { kind: SlotKind; consumes: number }[] = [
  { kind: "tall-lg",      consumes: 1 },
  { kind: "stack",        consumes: 2 },
  { kind: "tall",         consumes: 1 },
  { kind: "stack-offset", consumes: 2 },
  { kind: "hero",         consumes: 1 },
  { kind: "stack",        consumes: 2 },
  { kind: "tall-sm",      consumes: 1 },
  { kind: "stack-offset", consumes: 2 },
];

const ITEMS_PER_CYCLE = SLOT_PATTERN.reduce((sum, s) => sum + s.consumes, 0);
const MEDIA: MediaItem[] = [
  { type: "video", src: "/assets/background-leaves-shadow.mp4" },
  { type: "image", src: "/assets/suits-4.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/suits-2.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/hero-banner-inner.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-1.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/dining.jpg",            alt: "Garden Route" },
  { type: "image", src: "/assets/suits-3.png",           alt: "Garden Route" },
  { type: "image", src: "/assets/suits-2.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/suits-4.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/suits-1.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/suits-3.png",           alt: "Garden Route" },
  { type: "image", src: "/assets/dining.jpg",            alt: "Garden Route" },
  { type: "image", src: "/assets/hero-banner-inner.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-4.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/suits-2.jpg",           alt: "Garden Route" },
  { type: "image", src: "/assets/hero-banner-inner.jpg", alt: "Garden Route" },
];

function MediaEl({ item }: { item: MediaItem }) {
  if (item.type === "video") {
    return (
      <video
        className="infinite-image-carousel__media"
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  return (
    <img
      className="infinite-image-carousel__media"
      src={item.src}
      alt={item.alt}
    />
  );
}

function buildTrackColumns(media: MediaItem[]): React.ReactNode[] {
  if (!media.length) return [];

  const fullCycles = Math.ceil(media.length / ITEMS_PER_CYCLE);

  const get = (i: number) => media[i % media.length];

  const cols: React.ReactNode[] = [];
  let itemCursor = 0;

  for (let cycle = 0; cycle < fullCycles; cycle++) {
    for (const slot of SLOT_PATTERN) {
      const isStack = slot.kind === "stack" || slot.kind === "stack-offset";
      const isOffset = slot.kind === "stack-offset";
      const colClass = [
        "infinite-image-carousel__col",
        isStack ? "infinite-image-carousel__col--stack" : `infinite-image-carousel__col--${slot.kind}`,
        isOffset ? "infinite-image-carousel__col--stack-offset" : "",
      ].filter(Boolean).join(" ");

      if (isStack) {
        cols.push(
          <div key={`${cycle}-${itemCursor}`} className={colClass}>
            <div className="infinite-image-carousel__stack-item infinite-image-carousel__stack-item--top">
              <MediaEl item={get(itemCursor)} />
            </div>
            <div className="infinite-image-carousel__stack-item infinite-image-carousel__stack-item--bottom">
              <MediaEl item={get(itemCursor + 1)} />
            </div>
          </div>
        );
      } else {
        cols.push(
          <div key={`${cycle}-${itemCursor}`} className={colClass}>
            <MediaEl item={get(itemCursor)} />
          </div>
        );
      }

      itemCursor += slot.consumes;
    }
  }

  return cols;
}

export default function InfiniteImageCarousel() {
  const trackColumns = buildTrackColumns(MEDIA);

  return (
    <section className="infinite-image-carousel section">
      <div className="container-fluid-lg">
        <div className="infinite-image-carousel__content align-center">
          <div className="infinite-image-carousel__heading-group">
            <div className="pre-heading">
              <span>Experiences</span>
            </div>
            <div className="title title-dark-olive">
              <h2>
                Where The <br /> Garden Route Unfolds
              </h2>
            </div>
          </div>

          <div className="content content-dark-light infinite-image-carousel__desc-wrapper">
            <p>
              Lorem ipsum Golfing at Pezula amet, consectetur adipiscing elit.
              Ut et massa mi. Aliquam in hendrerit urna.
            </p>
          </div>

          <div className="infinite-image-carousel__cta-group align-center">
            <a href="#enquire" className="cta-link">
              Enquire
            </a>
          </div>
        </div>
      </div>

      <div className="infinite-image-carousel__track-wrap">
        <div className="infinite-image-carousel__track">
          {trackColumns}
          {trackColumns}
        </div>
      </div>
    </section>
  );
}