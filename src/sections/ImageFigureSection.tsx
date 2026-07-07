"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FigureItem {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
}

interface FigureCardProps extends FigureItem {
    size: "large" | "small";
}

function FigureCard({ image, imageAlt, title, description, size }: FigureCardProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yLarge = useTransform(scrollYProgress, [0, 1], [54, -54]);
    const ySmall = useTransform(scrollYProgress, [0, 1], [180, -180]);

    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 769px)");
        setIsDesktop(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const y = isDesktop ? (size === "small" ? ySmall : yLarge) : 0;
 
    return (
        <figure className={`figure-card figure-card-${size}`} ref={ref}>
            <motion.div className="figure-card-motion" style={{ y }}>
                <div className="frame">
                    <div className="img-block">
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={559}
                            height={559}
                            loading="lazy"
                            className="img-fluid-cover"
                        />
                    </div>
                </div>
                <figcaption className="content-block">
                    <div className="title title-dark-olive"><h3>{title}</h3></div>
                    <div className="content content-dark-light"><p>{description}</p></div>
                </figcaption>
            </motion.div>
        </figure>
    );
}

const figures: FigureItem[] = [
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Freshly picked produce from Enon Heights farm",
        title: "Freshly Picked",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque porttitor nisl ut diam gravida, viverra rhoncus velit pharetra.",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "The private courtyard at Enon Heights",
        title: "Private Courtyard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque porttitor nisl elementum.",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Locally sourced ingredients at Enon Heights",
        title: "Locally Sourced",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque porttitor nisl ut diam gravida, viverra.",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Special occasions hosted at Enon Heights",
        title: "Special Occasions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque porttitor nisl ut diam gravida, viverra rhoncus velit pharetra.",
    },
];

export default function ImageFigureSection() {
    const rows: FigureItem[][] = [];
    for (let i = 0; i < figures.length; i += 2) {
        rows.push(figures.slice(i, i + 2));
    }

    return (
        <section className="image-figure-section general-padding bg-linear-cream border-body/10 border-t">
            <div className="container-fluid-lg">
                <div className="image-figure-wrapper">
                    {rows.map((row, rowIndex) => {
                        const isReversed = rowIndex % 2 === 1 && row.length === 2;

                        return (
                            <div
                                key={rowIndex}
                                className={`figure-block${isReversed ? " figure-block-reversed" : ""}`}
                            >
                                {row.map((item, itemIndex) => {
                                    let size: "large" | "small";
                                    if (row.length === 2) {
                                        const largeIndex = isReversed ? 1 : 0;
                                        size = itemIndex === largeIndex ? "large" : "small";
                                    } else {
                                        size = rowIndex % 2 === 0 ? "large" : "small";
                                    }
                                    return <FigureCard key={item.title} {...item} size={size} />;
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
