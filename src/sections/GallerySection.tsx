"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const FILTERS = ["All", "Rooms", "Grounds", "Dining", "Experiences", "Location"];

const INITIAL_COUNT = 8;
const BATCH_SIZE = 5;

type GalleryVariant = "varient-1" | "varient-2" | "varient-3" | "varient-4" | "varient-5";

interface GalleryItem {
    src: string;
    alt: string;
    variant: GalleryVariant;
    caption: string;
    category: string;
}

const galleryItems: GalleryItem[] = [
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-1", caption: "Caption", category: "Rooms" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-1", caption: "Caption", category: "Rooms" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-2", caption: "Caption", category: "Grounds" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-3", caption: "Caption", category: "Dining" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-3", caption: "Caption", category: "Dining" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-3", caption: "Caption", category: "Experiences" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-4", caption: "Caption", category: "Grounds" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-5", caption: "Caption", category: "Location" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-5", caption: "Caption", category: "Location" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-4", caption: "Caption", category: "Grounds" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-3", caption: "Caption", category: "Rooms" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-3", caption: "Caption", category: "Rooms" },
    { src: "/assets/about-mosaic-1.jpg", alt: "Enon Heights suite bedroom", variant: "varient-3", caption: "Caption", category: "Experiences" },
];

export default function GallerySection() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("All");
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [batchStart, setBatchStart] = useState(0);

    const filtered = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);
    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    function handleFilterChange(filter: string) {
        setActive(filter);
        setOpen(false);
        setVisibleCount(INITIAL_COUNT);
        setBatchStart(0);
    }

    function handleLoadMore() {
        setBatchStart(visibleCount);
        setVisibleCount((c) => c + BATCH_SIZE);
    }

    return (
        <section className="gallery-section general-padding">
            <div className="container-fluid-md">
                <div className={`filter-block${open ? " is-open" : ""}`}>
                    <button
                        type="button"
                        className="filter-toggle"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="filter-toggle-label">{active}</span>
                        <svg
                            className="filter-toggle-icon"
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M1 1L7 7L13 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </button>
                    <div className="filter-dropdown">
                        <ul>
                            {FILTERS.map((f) => (
                                <li key={f}>
                                    <button
                                        className={active === f ? "active" : ""}
                                        onClick={() => handleFilterChange(f)}
                                    >
                                        {f}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="gallery-image-wrapper grid grid-cols-12 gap-15">
                    {visible.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`varient-wrapper ${item.variant}`}
                            initial={index >= batchStart ? { opacity: 0, y: 24 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: index >= batchStart ? (index - batchStart) * 0.08 : 0,
                            }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={700}
                                height={560}
                                loading="lazy"
                            />
                            <div className="caption-details">
                                <span>{item.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {hasMore && (
                    <div className="gallery-cta">
                        <button
                            type="button"
                            aria-label="Load more gallery images"
                            className="btn btn-dark"
                            onClick={handleLoadMore}
                        >
                            <span className="label-up">Load More</span>
                            <span className="label-up">Load More</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
