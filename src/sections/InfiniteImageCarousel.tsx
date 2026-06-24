import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const COLUMN_CYCLE = ["tall", "stack", "hero", "stack"] as const;
type ColumnType = typeof COLUMN_CYCLE[number];

const ITEMS_PER_COL: Record<ColumnType, number> = {
  tall: 1,
  stack: 2,
  hero: 1,
};

// Only src/type come from data — layout comes from COLUMN_CYCLE (index-based)
const MEDIA: MediaItem[] = [
  { type: "image", src: "/assets/suits-4.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-2.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/hero-banner-inner.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-1.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/dining.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-3.png", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-2.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-4.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-1.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/suits-3.png", alt: "Garden Route" },
  { type: "image", src: "/assets/dining.jpg", alt: "Garden Route" },
  { type: "image", src: "/assets/hero-banner-inner.jpg", alt: "Garden Route" },
];

// Group flat media list into columns using COLUMN_CYCLE
function buildColumns(items: MediaItem[]) {
  const cols: Array<{ type: ColumnType; items: MediaItem[] }> = [];
  let itemIdx = 0;
  let cycleIdx = 0;
  while (itemIdx < items.length) {
    const colType = COLUMN_CYCLE[cycleIdx % COLUMN_CYCLE.length];
    const count = ITEMS_PER_COL[colType];
    if (itemIdx + count > items.length) break;
    cols.push({ type: colType, items: items.slice(itemIdx, itemIdx + count) });
    itemIdx += count;
    cycleIdx++;
  }
  return cols;
}

function MediaEl({ item, className }: { item: MediaItem; className: string }) {
  if (item.type === "video") {
    return (
      <video
        className={className}
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  return <img className={className} src={item.src} alt={item.alt} />;
}

const SPEED = 50; // px per second

export default function InfiniteImageCarousel() {
  const columns = buildColumns(MEDIA);
  const xRef = useRef(0);
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (paused.current || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    xRef.current -= SPEED * (delta / 1000);
    if (xRef.current <= -halfWidth) xRef.current += halfWidth;
    x.set(xRef.current);
  });

  return (
    <section className="infinite-image-carousel">
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

      <div
        className="infinite-image-carousel__track-wrap"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="infinite-image-carousel__track"
        >
          {[...columns, ...columns].map((col, i) =>
            col.type === "stack" ? (
              <div
                key={i}
                className="infinite-image-carousel__col infinite-image-carousel__col--stack"
              >
                <div className="infinite-image-carousel__stack-item infinite-image-carousel__stack-item--top">
                  <MediaEl item={col.items[0]} className="infinite-image-carousel__media" />
                </div>
                <div className="infinite-image-carousel__stack-item infinite-image-carousel__stack-item--bottom">
                  <MediaEl item={col.items[1]} className="infinite-image-carousel__media" />
                </div>
              </div>
            ) : (
              <div
                key={i}
                className={`infinite-image-carousel__col infinite-image-carousel__col--${col.type}`}
              >
                <MediaEl item={col.items[0]} className="infinite-image-carousel__media" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
