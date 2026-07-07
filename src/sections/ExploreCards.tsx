"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionLink = motion(Link);

interface ExploreCard {
  id: string;
  image: string;
  alt: string;
  label: string;
  href: string;
  position: "left" | "right";
}

const exploreContent = {
  title: "Discover More",
  description:
    "Five suites. One property. A considered place with personal care.",
  centerShadowSrc: "/assets/shadow-image-bg.png",
};

const sideCards: ExploreCard[] = [
  {
    id: "dining",
    image: "/assets/dining.jpg",
    alt: "Table set with oysters, champagne and citrus in soft morning light",
    label: "Dining",
    href: "/dining",
    position: "left",
  },
  {
    id: "experiences",
    image: "/assets/dining.jpg",
    alt: "Boats gliding along a golden coastal marshland river",
    label: "Experiences",
    href: "/experiences",
    position: "right",
  },
];

export default function ExploreCards() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], ["106%", "0%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], ["-106%", "0%", "0%"]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1]);

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [0, 0, 1, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [0, 0, 1, 1]);

  return (
    <section className="explore-cards general-padding" aria-label="Discover more">

      <div className="explore-cards-desktop">
        <div
          ref={trackRef}
          className="explore-cards-track"
          style={{ height: "380vh" }}
        >
          <div className="explore-cards-sticky">
            <div className="max-1199:px-35 max-425:px-20 mx-auto w-full px-58 explore-cards-row flex flex-row gap-25">

              {sideCards
                .filter((card) => card.position === "left")
                .map((card) => (
                  <MotionLink
                    key={card.id}
                    href={card.href}
                    aria-label={`Explore ${card.label}`}
                    className="explore-cards-card explore-cards-card-side w-4/12"
                    style={{ x: leftX, scale: cardScale }}
                  >
                    <Image
                      className="explore-cards-media"
                      src={card.image}
                      alt={card.alt}
                      width={425}
                      height={525}
                    />
                    <motion.div
                      className="explore-cards-overlay"
                      style={{ opacity: overlayOpacity, willChange: "opacity" }}
                    >
                      <div className="title title-off-white">
                        <motion.h3 className="explore-cards-label" style={{ opacity: labelOpacity }}>{card.label}</motion.h3>
                      </div>
                    </motion.div>
                  </MotionLink>
                ))}

              <div className="explore-cards-card explore-cards-card-center w-4/12" style={{ backgroundColor: "#cdd5b9" }}>
                <Image
                  className="explore-cards-center-shadow"
                  src={exploreContent.centerShadowSrc}
                  alt=""
                  aria-hidden="true"
                  width={425}
                  height={525}
                />
                <div className="title title-dark-olive">
                  <h2>{exploreContent.title}</h2>
                </div>
                <div className="content content-dark-light">
                  <p>{exploreContent.description}</p>
                </div>
              </div>

              {sideCards
                .filter((card) => card.position === "right")
                .map((card) => (
                  <MotionLink
                    key={card.id}
                    href={card.href}
                    aria-label={`Explore ${card.label}`}
                    className="explore-cards-card explore-cards-card-side w-4/12"
                    style={{ x: rightX, scale: cardScale }}
                  >
                    <Image
                      className="explore-cards-media"
                      src={card.image}
                      alt={card.alt}
                      width={425}
                      height={525}
                    />
                    <motion.div
                      className="explore-cards-overlay"
                      style={{ opacity: overlayOpacity, willChange: "opacity" }}
                    >
                      <div className="title title-off-white">
                        <motion.h3 className="explore-cards-label" style={{ opacity: labelOpacity }}>{card.label}</motion.h3>
                      </div>
                    </motion.div>
                  </MotionLink>
                ))}

            </div>
          </div>
        </div>
      </div>

      <div className="explore-cards-mobile">
        <div className="container-fluid explore-cards-stack flex flex-col gap-15">

          {sideCards
            .filter((card) => card.position === "left")
            .map((card) => (
              <Link key={card.id} href={card.href} aria-label={`Explore ${card.label}`} className="explore-cards-card explore-cards-card-side">
                <Image
                  className="explore-cards-media"
                  src={card.image}
                  alt={card.alt}
                  width={425}
                  height={525}
                />
                <div className="explore-cards-overlay">
                  <div className="title title-off-white">
                    <h3 className="explore-cards-label">{card.label}</h3>
                  </div>
                </div>
              </Link>
            ))}

          <div className="explore-cards-card explore-cards-card-center" style={{ backgroundColor: "var(--color-sage)" }}>
            <Image
              className="explore-cards-center-shadow"
              src={exploreContent.centerShadowSrc}
              alt=""
              aria-hidden="true"
              width={425}
              height={525}
            />
            <div className="title title-dark-olive">
              <h2>{exploreContent.title}</h2>
            </div>
            <div className="content content-dark-light">
              <p>{exploreContent.description}</p>
            </div>
          </div>

          {sideCards
            .filter((card) => card.position === "right")
            .map((card) => (
              <Link key={card.id} href={card.href} aria-label={`Explore ${card.label}`} className="explore-cards-card explore-cards-card-side">
                <Image
                  className="explore-cards-media"
                  src={card.image}
                  alt={card.alt}
                  width={425}
                  height={525}
                />
                <div className="explore-cards-overlay">
                  <div className="title title-off-white">
                    <h3 className="explore-cards-label">{card.label}</h3>
                  </div>
                </div>
              </Link>
            ))}

        </div>
      </div>

    </section>
  );
}
