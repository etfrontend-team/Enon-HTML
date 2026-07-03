import { useEffect, useRef, useState } from "react";

const MAX_BLUR_PX = 8;

const TABS = ["Details", "Inclusions", "Exclusions"] as const;
type Tab = (typeof TABS)[number];

const SUITE_DESCRIPTION =
  "A corner room with direct garden access. King bed, deep soaking bath, private terrace.";
const SUITE_DETAILS = [
  "Garden outlook",
  "48 sqm",
  "Max 2 guests",
  "En-suite bathroom",
  "Shower & Bath",
  "TV",
  "Mini fridge",
];
const SUITE_PRICE = "R 10,000";
const ASSET_IMAGES = ["/assets/suits-1.jpg", "/assets/suits-2.jpg", "/assets/suits-3.png", "/assets/suits-4.jpg"];

type Suite = {
  id: string;
  name: string;
  images: string[];
};

const imagesForCount = (count: number, offset: number) =>
  Array.from({ length: count }, (_, i) => ASSET_IMAGES[(i + offset) % ASSET_IMAGES.length]);

const SUITES: Suite[] = [
  { id: "01", name: "Suite 01", images: imagesForCount(4, 0) },
  { id: "02", name: "Suite 02", images: imagesForCount(3, 1) },
  { id: "03", name: "Suite 03", images: imagesForCount(4, 2) },
  { id: "04", name: "Suite 04", images: imagesForCount(5, 3) },
  { id: "05", name: "Suite 05", images: imagesForCount(3, 0) },
];

function SuiteCard({
  suite,
  index,
  blur,
  sectionRef,
}: {
  suite: Suite;
  index: number;
  blur: number;
  sectionRef: (el: HTMLElement | null) => void;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("Details");
  const [imageIndex, setImageIndex] = useState(0);

  const activeList = activeTab === "Details" ? SUITE_DETAILS : [];
  const isOdd = index % 2 === 0;
  const dragStartX = useRef<number | null>(null);

  const showPrev = () =>
    setImageIndex((i) => (i === 0 ? suite.images.length - 1 : i - 1));
  const showNext = () =>
    setImageIndex((i) => (i === suite.images.length - 1 ? 0 : i + 1));

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    const threshold = 50;
    if (delta > threshold) showPrev();
    else if (delta < -threshold) showNext();
  };

  return (
    <section
      ref={sectionRef}
      className={`suite-detail ${isOdd ? "suite-detail--odd" : "suite-detail--even"}`}
      style={blur > 0.05 ? { filter: `blur(${blur.toFixed(2)}px)` } : undefined}
    >
      <div className="container-fluid-lg">
        <div className="suite-detail__inner">
          <div className="suite-detail__content-column">
            <div className="suite-detail__heading-group">
              <div className="title title-dark-olive">
                <h3 className="suite-detail__title">{suite.name}</h3>
              </div>
              <div className="content content-dark-light">
                <p className="suite-detail__description">{SUITE_DESCRIPTION}</p>
              </div>
            </div>

            <div className="suite-detail__tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`suite-detail__tab ${activeTab === tab ? "suite-detail__tab--active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="suite-detail__panel">
              <ul className="suite-detail__list">
                {activeList.map((item) => (
                  <li key={item} className="suite-detail__list-item">
                    <span className="suite-detail__dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="suite-detail__price">{SUITE_PRICE}</p>
            </div>

            <div className="suite-detail__cta-group mt-10">
              <div className="btn-custom">
                <a href="#book" aria-label="Book Now" className="btn btn-filled">
                  <span className="label-up">Book Now</span>
                  <span className="label-up">Book Now</span>
                </a>
              </div>
              <a href="#enquire" className="cta-link">
                Enquire
              </a>
            </div>
          </div>

          <div className="suite-detail__image-column">
            <div
              className="suite-detail__image-wrapper"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => (dragStartX.current = null)}
            >
              <div
                className="suite-detail__image-track"
                style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              >
                {suite.images.map((src, i) => (
                  <img
                    key={i}
                    className="suite-detail__image"
                    src={src}
                    alt={`${suite.name} photo ${i + 1}`}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  />
                ))}
              </div>
              <div className="suite-detail__image-overlay" aria-hidden="true" />
              <div className="suite-detail__nav">
                <div className="suite-detail__nav-arrows">
                  <button
                    type="button"
                    className="suite-detail__nav-btn"
                    onClick={showPrev}
                    aria-label="Previous photo"
                  >
                    <img src="/assets/prev-arrow.svg" alt="" />
                  </button>
                  <button
                    type="button"
                    className="suite-detail__nav-btn"
                    onClick={showNext}
                    aria-label="Next photo"
                  >
                    <img src="/assets/next-arrow.svg" alt="" />
                  </button>
                </div>
                <p className="suite-detail__counter">
                  {imageIndex + 1}|{suite.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SuiteShowcase() {
  const sectionEls = useRef<Array<HTMLElement | null>>([]);
  const [blurs, setBlurs] = useState<number[]>(() => SUITES.map(() => 0));

  useEffect(() => {
    let ticking = false;
    const measure = () => {
      const vh = window.innerHeight;
      const next = SUITES.map((_, i) => {
        const incoming = sectionEls.current[i + 1];
        if (!incoming) return 0;
        const progress = Math.min(Math.max(1 - incoming.getBoundingClientRect().top / vh, 0), 1);
        return progress * MAX_BLUR_PX;
      });
      setBlurs(next);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {SUITES.map((suite, index) => (
        <SuiteCard
          key={suite.id}
          suite={suite}
          index={index}
          blur={blurs[index]}
          sectionRef={(el) => {
            sectionEls.current[index] = el;
          }}
        />
      ))}
    </>
  );
}
