"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FigureItem {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
}

function FigureCard({ image, imageAlt, title, description }: FigureItem) {
    const ref = useRef<HTMLElement>(null);

    // subtle parallax — image drifts within its clipped frame as the section scrolls
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <figure className="figure-card" ref={ref}>
            <div className="frame">
                <div className="img-block">
                    <motion.div className="parallax-inner" style={{ y }}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={559}
                            height={559}
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
            <figcaption className="content-block">
                <div className="title title-dark-olive mb-15"><h4>{title}</h4></div>
                <div className="content content-dark-light max-w-360"><p>{description}</p></div>
            </figcaption>
        </figure>
    );
}

interface FigureBlockProps {
    items: [FigureItem, FigureItem];
    reverse?: boolean;
}

function FigureBlock({ items, reverse = false }: FigureBlockProps) {
    return (
        <div className={`figure-block${reverse ? " figure-block--reverse" : ""}`}>
            <FigureCard {...items[0]} />
            <FigureCard {...items[1]} />
        </div>
    );
}

const figures: FigureItem[] = [
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights farm feature",
        title: "Farm Feature 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights farm feature",
        title: "Farm Feature 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights farm feature",
        title: "Farm Feature 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights farm feature",
        title: "Farm Feature 4",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
];

export default function ImageFigureSection() {
    return (
        <section className="image-figure-section general-padding">
            <div className="container-fluid-md">
                <div className="image-figure-wrapper">
                    <FigureBlock items={[figures[0], figures[1]]} />
                    <FigureBlock items={[figures[2], figures[3]]} reverse />
                </div>
            </div>
        </section>
    );
}
