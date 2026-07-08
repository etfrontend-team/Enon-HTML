"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const FILTERS = ["All", "At Enon Heights", "Surrounds"];

const INITIAL_COUNT = 6;
const BATCH_SIZE = 4;

type ExperienceTag = "At Enon Heights" | "Surrounds";

interface ExperienceItem {
    image: string;
    alt: string;
    tag: ExperienceTag;
    title: string;
    description: string;
}

const LOREM =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit.";

const experienceItems: ExperienceItem[] = [
    { image: "/images/experience-surrounds-mountain.webp", alt: "Misty mountain trails surrounding Enon Heights", tag: "Surrounds", title: "Experience Name", description: LOREM },
    { image: "/images/experience-enon-heights-terrace.webp", alt: "Sundowner terrace at Enon Heights", tag: "At Enon Heights", title: "Experience Name", description: LOREM },
    { image: "/images/experience-enon-heights-backgammon.webp", alt: "Backgammon by the pool at Enon Heights", tag: "At Enon Heights", title: "Experience Name", description: LOREM },
    { image: "/images/experience-surrounds-surfer.webp", alt: "Surfer riding a wave near Knysna", tag: "Surrounds", title: "Experience Name", description: LOREM },
    { image: "/images/experience-surrounds-golf.webp", alt: "Golfers on a coastal fairway near Enon Heights", tag: "Surrounds", title: "Experience Name", description: LOREM },
    { image: "/images/experience-surrounds-coast.webp", alt: "Visitors exploring rock pools along the coast", tag: "Surrounds", title: "Experience Name", description: LOREM },
    { image: "/images/experience-surrounds-mountain.webp", alt: "Misty mountain trails surrounding Enon Heights", tag: "Surrounds", title: "Experience Name", description: LOREM },
    { image: "/images/experience-enon-heights-terrace.webp", alt: "Sundowner terrace at Enon Heights", tag: "At Enon Heights", title: "Experience Name", description: LOREM },
    { image: "/images/experience-enon-heights-backgammon.webp", alt: "Backgammon by the pool at Enon Heights", tag: "At Enon Heights", title: "Experience Name", description: LOREM },
    { image: "/images/experience-surrounds-surfer.webp", alt: "Surfer riding a wave near Knysna", tag: "Surrounds", title: "Experience Name", description: LOREM },
];

export default function ExperienceSection() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("All");
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [batchStart, setBatchStart] = useState(0);

    const filtered =
        active === "All" ? experienceItems : experienceItems.filter((item) => item.tag === active);
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
        <section className="experience-section general-padding">
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

                <div className="experience-cards-grid grid grid-cols-2 gap-15">
                    {visible.map((item, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={index >= batchStart ? { opacity: 0, y: 24 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: index >= batchStart ? (index - batchStart) * 0.08 : 0,
                            }}
                        >
                            <div className="experience-card-media">
                                <div className="experience-card-image-wrap">
                                    <Image
                                        fill
                                        sizes="(max-width: 767px) 100vw, 50vw"
                                        className="experience-card-image"
                                        src={item.image}
                                        alt={item.alt}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="experience-card-tag">
                                    <span>{item.tag}</span>
                                </div>
                            </div>

                            <div className="experience-card-body">
                                <div className="experience-card-copy">
                                    <div className="title title-dark-olive">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="content content-dark-light">
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                {item.tag === "At Enon Heights" && (
                                    <Link
                                        href="#enquire"
                                        aria-label={`Enquire about ${item.title}`}
                                        className="cta-link"
                                    >
                                        Enquire
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {hasMore && (
                    <div className="experience-cta">
                        <button
                            type="button"
                            aria-label="Load more experiences"
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
