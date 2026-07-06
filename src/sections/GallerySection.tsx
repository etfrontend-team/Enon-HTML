"use client";

import Image from "next/image";
import { useState } from "react";

const FILTERS = ["All", "Rooms", "Grounds", "Dining", "Experiences", "Location"];

export default function GallerySection() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("All");

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
                                        onClick={() => {
                                            setActive(f);
                                            setOpen(false);
                                        }}
                                    >
                                        {f}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="gallery-image-wrapper grid grid-cols-12 gap-15">
                    <div className="varient-wrapper varient-1">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-1">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-2">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-3">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-3">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-3">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>

                    <div className="varient-wrapper varient-4">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>

                    <div className="varient-wrapper varient-5">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>

                    <div className="varient-wrapper varient-5">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>

                    <div className="varient-wrapper varient-4">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>

                    <div className="varient-wrapper varient-3">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-3">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                    <div className="varient-wrapper varient-3">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                        <div className="caption-details">
                            <span>Caption</span>
                        </div>
                    </div>
                </div>

                <div className="gallery-cta ">
                    <button
                        type="button"
                        aria-label="Load More"
                        className="btn btn-dark"
                    >
                        <span className="label-up">Learn More</span>
                        <span className="label-up">Learn More</span>
                    </button>
                </div>
            </div>
        </section>
    )
}