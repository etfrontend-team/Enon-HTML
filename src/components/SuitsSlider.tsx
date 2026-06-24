import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VARIANT_CYCLE = ["tall", "medium", "tall", "short"] as const;

const SUITES = [
  { id: "01", name: "Suite 01", image: "/assets/suits-1.jpg" },
  { id: "02", name: "Suite 02", image: "/assets/suits-2.jpg" },
  { id: "03", name: "Suite 03", image: "/assets/suits-3.png" },
  { id: "04", name: "Suite 04", image: "/assets/suits-4.jpg" },
  { id: "05", name: "Suite 05", image: "/assets/suits-1.jpg" },
];

export default function SuitsSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="suits-slider">
      <div className="suits-slider__header container-fluid-lg">
        <div className="suits-slider__content">
          <div className="suits-slider__heading-group">
            <div className="pre-heading">
              <span>The Suites</span>
            </div>
            <div className="title title-dark-olive">
              <h2>Five distinct spaces</h2>
            </div>
          </div>
          <a href="#enquire" className="cta-link">Enquire</a>
        </div>

        <div className="suits-slider__nav">
          <button
            ref={prevRef}
            className="suits-slider__btn suits-slider__prev"
            aria-label="Previous suite"
          >
            <img src="/assets/prev-arrow.svg" alt="" />
          </button>
          <button
            ref={nextRef}
            className="suits-slider__btn suits-slider__next"
            aria-label="Next suite"
          >
            <img src="/assets/next-arrow.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="suits-slider__track">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={15}
          grabCursor
          loop
          speed={800}
          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation;
            if (nav && typeof nav !== "boolean") {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          pagination={{
            el: ".suits-slider__pagination",
            type: "progressbar",
          }}
          className="suits-slider__swiper"
        >
          {SUITES.map((suite, index) => (
            <SwiperSlide key={suite.id} className="suits-slider__slide">
              <div className={`suits-slider__card suits-slider__card--${VARIANT_CYCLE[index % VARIANT_CYCLE.length]}`}>
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="suits-slider__card-img"
                />
                <div className="suits-slider__card-gradient" />
                <p className="suits-slider__card-name">{suite.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="suits-slider__pagination" />
      </div>
    </section>
  );
}
