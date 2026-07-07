"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    cubicBezier,
} from "framer-motion";
import Link from "next/link";

const expoOut = cubicBezier(0.16, 1, 0.3, 1);

const springCfg = { stiffness: 100, damping: 30, mass: 1 };

function useIsMobile(query = "(max-width: 992px)") {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setIsMobile(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return isMobile;
}

interface PriceBlockProps {
    image: string;
    imageAlt: string;
    title: string;
    price: string;
    description: string;
    bookHref: string;
}

function SuiteImage({ image, imageAlt }: Pick<PriceBlockProps, "image" | "imageAlt">) {
    return (
        <Image
            src={image}
            alt={imageAlt}
            width={279}
            height={617}
            loading="lazy"
        />
    );
}

function SuiteContent({
    title,
    price,
    description,
    bookHref,
}: Omit<PriceBlockProps, "image" | "imageAlt">) {
    return (
        <div className="grid grid-cols-12 gap-24 max-992:flex max-992:flex-col max-992:items-center max-992:text-center max-992:gap-20">
            <div className="col-span-8 max-992:contents">
                <div className="title title-dark-olive mb-36 max-992:mb-0 max-1199:mb-24 max-992:order-1"><h3>{title}</h3></div>
                <div className="content content-dark-light max-w-408 mr-auto max-992:mx-auto max-992:order-3"><p>{description}</p></div>
            </div>
            <div className="col-span-4 flex flex-col items-center max-992:contents">
                <div className="pricing-block mb-36 max-992:mb-0 max-1199:mb-24 max-992:order-2">
                    <span>{price}</span>
                </div>
                <div className="btn-custom max-992:mt-15 max-992:order-4">
                    <Link href={bookHref} className="btn btn-filled">
                        <span className="label-up">Book Now</span>
                        <span className="label-up">Book Now</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Desktop — whole block reveals on scroll (scroll-linked scrub)
function PriceBlockDesktop(props: PriceBlockProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.5"],
    });
    const progress = useSpring(scrollYProgress, springCfg);
    const y = useTransform(progress, [0, 1], [40, 0], { ease: expoOut });
    const opacity = useTransform(progress, [0, 1], [0, 1], { ease: expoOut });

    return (
        <motion.div className="price-block" ref={ref} style={{ y, opacity }}>
            <div className="img-block">
                <SuiteImage image={props.image} imageAlt={props.imageAlt} />
            </div>
            <div className="content-block">
                <SuiteContent {...props} />
            </div>
        </motion.div>
    );
}

// Mobile — same scroll-linked scrub as desktop, but per block (img + content separate)
function PriceBlockMobile(props: PriceBlockProps) {
    const imgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const imgScroll = useScroll({
        target: imgRef,
        offset: ["start 0.9", "start 0.5"],
    });
    const imgProgress = useSpring(imgScroll.scrollYProgress, springCfg);
    const imgY = useTransform(imgProgress, [0, 1], [40, 0], { ease: expoOut });
    const imgOpacity = useTransform(imgProgress, [0, 1], [0, 1], { ease: expoOut });

    const contentScroll = useScroll({
        target: contentRef,
        offset: ["start 0.9", "start 0.5"],
    });
    const contentProgress = useSpring(contentScroll.scrollYProgress, springCfg);
    const contentY = useTransform(contentProgress, [0, 1], [40, 0], { ease: expoOut });
    const contentOpacity = useTransform(contentProgress, [0, 1], [0, 1], { ease: expoOut });

    return (
        <div className="price-block">
            <motion.div
                className="img-block"
                ref={imgRef}
                style={{ y: imgY, opacity: imgOpacity }}
            >
                <SuiteImage image={props.image} imageAlt={props.imageAlt} />
            </motion.div>
            <motion.div
                className="content-block"
                ref={contentRef}
                style={{ y: contentY, opacity: contentOpacity }}
            >
                <SuiteContent {...props} />
            </motion.div>
        </div>
    );
}

function PriceBlock(props: PriceBlockProps) {
    const isMobile = useIsMobile();
    return isMobile ? <PriceBlockMobile {...props} /> : <PriceBlockDesktop {...props} />;
}

const suites: PriceBlockProps[] = [
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights suite bedroom",
        title: "Suite 01",
        price: "From R 4 800 / Night",
        description:
            "A corner room with direct garden access. King bed, deep soaking bath, private terrace.",
        bookHref: "#",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights suite bedroom",
        title: "Suite 02",
        price: "From R 5 200 / Night",
        description:
            "A corner room with direct garden access. King bed, deep soaking bath, private terrace.",
        bookHref: "#",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights suite bedroom",
        title: "Suite 03",
        price: "From R 5 600 / Night",
        description:
            "A corner room with direct garden access. King bed, deep soaking bath, private terrace.",
        bookHref: "#",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights suite bedroom",
        title: "Suite 04",
        price: "From R 6 000 / Night",
        description:
            "A corner room with direct garden access. King bed, deep soaking bath, private terrace.",
        bookHref: "#",
    },
    {
        image: "/assets/about-mosaic-1.jpg",
        imageAlt: "Enon Heights suite bedroom",
        title: "Suite 05",
        price: "From R 6 400 / Night",
        description:
            "A corner room with direct garden access. King bed, deep soaking bath, private terrace.",
        bookHref: "#",
    },
];

export default function PriceListSection() {
    return (
        <section className="price-list-section general-padding">
            <div className="container-fluid-md">
                <div className="price-block header-wrapper mb-41">
                    <div className="img-block"></div>
                    <div className="content-block">
                        <div className="grid grid-cols-12 gap-24 max-992:flex max-992:flex-col max-992:items-center max-992:text-center max-992:gap-20">
                            <div className="col-span-9 1024:col-span-8 max-992:contents"></div>
                            <div className="col-span-3 1024:col-span-4 flex flex-col 1199:justify-center 1024:items-center max-992:contents">
                                <span>Price per Guest (16  years & Up)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price-list-wrapper">
                    {suites.map((suite, i) => (
                        <PriceBlock key={i} {...suite} />
                    ))}
                </div>

                <div className="peak-season-block">
                    <span>
                        PEAK SEASON: October — April
                    </span>

                    <div className="content content-dark-light mt-15 max-w-600 mr-auto max-992:mx-auto">
                        <p>Peak season rates apply from 1 October to 30 April. Off-peak rates available May to September. Contact us for specific date pricing.</p>
                        </div>
                </div>
            </div>
        </section>
    );
}
