"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SUITES = [
    { id: "01", image: "/images/suite-slider-greenwall.webp", title: "Stay Product Name", features: "Key Features | Key Features | Key Features" },
    { id: "02", image: "/images/suite-slider-nightstand.webp", title: "Stay Product Name", features: "Key Features | Key Features | Key Features" },
    { id: "03", image: "/assets/suits-1.jpg", title: "Stay Product Name", features: "Key Features | Key Features | Key Features" },
    { id: "04", image: "/assets/suits-2.jpg", title: "Stay Product Name", features: "Key Features | Key Features | Key Features" },
    { id: "05", image: "/assets/suits-3.png", title: "Stay Product Name", features: "Key Features | Key Features | Key Features" },
];

export default function OfferSuiteSlider() {
    return (
        <section className="offer-suite-slider general-padding">
            <div className="suite-slider-header container-fluid-lg">
                <div className="suite-slider-heading-group">
                    <div className="title title-dark-olive">
                        <h2>Suites</h2>
                    </div>
                    <div className="content content-dark-light">
                        <p>
                            The property has been reimagined from the ground up. A new name, a new
                            standard, and a renovation that reflects the level of stay Hans has spent
                            his career benchmarking against.
                        </p>
                    </div>
                </div>
            </div>

            <div className="suite-slider-track-wrap">
                <button
                    type="button"
                    className="suite-slider-arrow suite-slider-arrow--prev"
                    aria-label="Previous suite"
                >
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.98524 0.43934C10.571 -0.146447 11.5205 -0.146447 12.1063 0.43934C12.6921 1.02513 12.6921 1.97465 12.1063 2.56043L3.62098 11.0458L12.1063 19.5311C12.6921 20.1169 12.6921 21.0664 12.1063 21.6522C11.5205 22.238 10.571 22.238 9.98524 21.6522L0.43934 12.1063C-0.146447 11.5205 -0.146447 10.571 0.43934 9.98524L9.98524 0.43934Z" fill="#393618" fill-opacity="0.8" />
                    </svg>

                </button>
                <button
                    type="button"
                    className="suite-slider-arrow suite-slider-arrow--next"
                    aria-label="Next suite"
                >
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.56066 0.43934C1.97487 -0.146447 1.02535 -0.146447 0.439567 0.43934C-0.14622 1.02513 -0.14622 1.97465 0.439567 2.56043L8.92492 11.0458L0.439567 19.5311C-0.14622 20.1169 -0.14622 21.0664 0.439567 21.6522C1.02535 22.238 1.97487 22.238 2.56066 21.6522L12.1066 12.1063C12.6923 11.5205 12.6923 10.571 12.1066 9.98524L2.56066 0.43934Z" fill="#393618" fill-opacity="0.8" />
                    </svg>

                </button>

                <div className="suite-slider-track container-fluid-lg">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={15}
                        grabCursor
                        loop={false}
                        speed={800}
                        navigation={{
                            prevEl: ".suite-slider-arrow--prev",
                            nextEl: ".suite-slider-arrow--next",
                        }}
                        breakpoints={{
                            1023: { slidesPerView: 2, spaceBetween: 25 },
                        }}
                        pagination={{
                            el: ".suite-slider-pagination",
                            type: "bullets",
                            clickable: true,
                        }}
                        className="suite-slider-swiper"
                    >
                        {SUITES.map((suite, index) => (
                            <SwiperSlide key={suite.id} className="suite-slider-slide">
                                <div className="suite-slider-card">
                                    <div className="suite-slider-card-media">
                                        <Image
                                            fill
                                            sizes="(max-width: 767px) 90vw, 45vw"
                                            src={suite.image}
                                            alt={suite.title}
                                            className="suite-slider-card-img"
                                            loading={index < 2 ? "eager" : "lazy"}
                                            fetchPriority={index === 0 ? "high" : "auto"}
                                        />
                                    </div>
                                    <div className="suite-slider-card-body">
                                        <div className="title title-dark-olive">
                                            <h3>{suite.title}</h3>
                                        </div>
                                        <p className="suite-slider-features">{suite.features}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="suite-slider-pagination" />
                </div>
            </div>
        </section>
    );
}
