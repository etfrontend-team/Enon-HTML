"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame, animate } from "framer-motion";

const SPEED = 2;
const SPEED_MOBILE = 3;

interface GallerySlide {
    image: string;
    alt: string;
    caption: string;
}

const slides: GallerySlide[] = [
    {
        image: "/assets/about-mosaic-1.jpg",
        alt: "Garden terrace at Enon Heights",
        caption: "Garden Terrace",
    },
    {
        image: "/assets/about-mosaic-2.jpg",
        alt: "Morning light through the suite windows",
        caption: "Morning Light",
    },
    {
        image: "/assets/about-mosaic-3.jpg",
        alt: "Locally sourced breakfast spread",
        caption: "Locally Sourced",
    },
    {
        image: "/assets/about-mosaic-4.jpg",
        alt: "Private courtyard at golden hour",
        caption: "Private Courtyard",
    },
    {
        image: "/assets/about-mosaic-5.jpg",
        alt: "The dining room at Enon Heights",
        caption: "The Dining Room",
    },
    {
        image: "/assets/suits-1.jpg",
        alt: "Suite interior with natural light",
        caption: "Suite One",
    },
    {
        image: "/assets/suits-2.jpg",
        alt: "Handcrafted details throughout the property",
        caption: "Suite Two",
    },
];

const loopedSlides = [...slides, ...slides];

export default function GalleryCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const isManual = useRef(false);
    const halfWidth = useRef(0);
    const boxWidth = useRef(0);
    const speedRef = useRef(SPEED);
    const x = useMotionValue(0);
    const xPercent = useTransform(x, (val) =>
      boxWidth.current > 0 ? `${(val / boxWidth.current) * 100}%` : "0%",
    );

    useEffect(() => {
        const measure = () => {
          if (trackRef.current) {
            halfWidth.current = trackRef.current.scrollWidth / 2;
            boxWidth.current = trackRef.current.offsetWidth;
          }
          speedRef.current = window.innerWidth < 768 ? SPEED_MOBILE : SPEED;
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        return () => ro.disconnect();
      }, []);
    
      useAnimationFrame((_, delta) => {
        if (isPaused.current || isManual.current || halfWidth.current === 0) return;
        const half = halfWidth.current;
        const pxPerMs = (half * speedRef.current) / 100 / 1000;
        let newX = x.get() - delta * pxPerMs;
        if (newX <= -half) newX += half;
        if (newX > 0) newX -= half;
        x.set(newX);
      });

    const slideNext = () => {
        if (halfWidth.current === 0) return;
        const slideWidth = halfWidth.current / slides.length;
        isManual.current = true;
        animate(x, x.get() - slideWidth - 15, {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            onComplete: () => { isManual.current = false; },
        });
    };

    const slidePrev = () => {
        if (halfWidth.current === 0) return;
        const slideWidth = halfWidth.current / slides.length;
        isManual.current = true;
        animate(x, x.get() + slideWidth + 15, {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            onComplete: () => { isManual.current = false; },
        });
    };

    return (
        <section
            className="gallery-carousel general-padding"
            aria-label="Gallery"
        >
            <div className="gallery-carousel-wrapper">
                <div className="container-fluid">
                <div className="gallery-carousel-viewport">
                    <motion.div
                        ref={trackRef}
                        className="gallery-carousel-track"
                        style={{ x: xPercent }}
                    >
                        {loopedSlides.map((slide, index) => (
                            <div key={index} className="gallery-carousel-slide">
                                <div className="gallery-carousel-media-wrap relative">
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        sizes="(max-width: 767px) 75vw, (max-width: 1199px) 40vw, 28vw"
                                        className="gallery-carousel-img"
                                        loading={index < 4 ? "eager" : "lazy"}
                                    />
                                    <div className="gallery-carousel-overlay bg-[linear-gradient(180deg,#00000000_84.58%,#00000066_100%)] absolute inset-0 size-full block" />
                                    <div className="gallery-carousel-caption-wrap">
                                        <div className="title title-off-white"> 
                                            <p className="gallery-carousel-caption">{slide.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <button
                    onClick={slidePrev}
                    onPointerEnter={(e) => { if (e.pointerType === "mouse") isPaused.current = true; }}
                    onPointerLeave={(e) => { if (e.pointerType === "mouse") isPaused.current = false; }}
                    className="gallery-carousel-btn gallery-carousel-prev"
                    aria-label="Previous slide"
                >
                    <Image
                        src="/icons/chevron.svg"
                        alt=""
                        aria-hidden="true"
                        width={13}
                        height={23}
                        className="gallery-carousel-chevron rotate-180"
                    />
                </button>
                <button
                    onClick={slideNext}
                    onPointerEnter={(e) => { if (e.pointerType === "mouse") isPaused.current = true; }}
                    onPointerLeave={(e) => { if (e.pointerType === "mouse") isPaused.current = false; }}
                    className="gallery-carousel-btn gallery-carousel-next"
                    aria-label="Next slide"
                >
                    <Image
                        src="/icons/chevron.svg"
                        alt=""
                        aria-hidden="true"
                        width={13}
                        height={23}
                        className="gallery-carousel-chevron"
                    />
                </button>
                </div>
            </div>
        </section>
    );
}
