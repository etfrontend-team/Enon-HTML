"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutUsMosaic() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const largeX     = useTransform(smoothProgress, [0, 0.45], [-35, 0]);
  const largeY     = useTransform(smoothProgress, [0, 0.45], [80,  0]);

  const topRightX  = useTransform(smoothProgress, [0.03, 0.48], [70,  0]);
  const topRightY  = useTransform(smoothProgress, [0.03, 0.48], [-70, 0]);

  const midRightX  = useTransform(smoothProgress, [0.08, 0.53], [70,  0]);
  const midRightY  = useTransform(smoothProgress, [0.08, 0.53], [40,  0]);

  const btmLeftX   = useTransform(smoothProgress, [0.08, 0.50], [-50, 0]);
  const btmLeftY   = useTransform(smoothProgress, [0.08, 0.50], [100, 0]);
  const btmRightY  = useTransform(smoothProgress, [0.12, 0.55], [100, 0]);

  return (
    <section ref={sectionRef} className="about-us-mosaic general-padding overflow-hidden">
      <div className="container-fluid-md">
        <div className="about-us-mosaic-inner">

          <div className="about-us-mosaic__image-col">
            <div className="about-us-mosaic__mosaic">

              <div className="about-us-mosaic__col-left">
                <motion.div
                  className="about-us-mosaic__img-large"
                  style={{ x: largeX, y: largeY, willChange: "transform" }}
                >
                  <Image
                    src="/assets/about-mosaic-1.jpg"
                    alt="Enon Heights suite bedroom"
                    width={700}
                    height={924}
                    loading="eager"
                    fetchPriority="high"
                    className="about-us-mosaic__img"
                    style={{ height: "auto" }}
                  />
                </motion.div>
                <div className="about-us-mosaic__col-bottom">
                  <motion.div
                    className="about-us-mosaic__img-btm-left"
                    style={{ x: btmLeftX, y: btmLeftY, willChange: "transform" }}
                  >
                    <Image
                      src="/assets/about-mosaic-4.jpg"
                      alt="Enon Heights grounds"
                      width={278}
                      height={320}
                      className="about-us-mosaic__img"
                    />
                  </motion.div>
                  <motion.div
                    className="about-us-mosaic__img-btm-right"
                    style={{ y: btmRightY, willChange: "transform" }}
                  >
                    <Image
                      src="/assets/about-mosaic-5.jpg"
                      alt="Enon Heights living space"
                      width={324}
                      height={462}
                      className="about-us-mosaic__img"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="about-us-mosaic__col-right">
                <motion.div
                  className="about-us-mosaic__img-top-right"
                  style={{ x: topRightX, y: topRightY, willChange: "transform" }}
                >
                  <Image
                    src="/assets/about-mosaic-2.jpg"
                    alt="Enon Heights coastal landscape"
                    width={316}
                    height={346}
                    className="about-us-mosaic__img"
                    style={{ height: "auto" }}
                  />
                </motion.div>
                <motion.div
                  className="about-us-mosaic__img-mid-right"
                  style={{ x: midRightX, y: midRightY, willChange: "transform" }}
                >
                  <Image
                    src="/assets/about-mosaic-3.jpg"
                    alt="Enon Heights garden exterior"
                    width={462}
                    height={598}
                    className="about-us-mosaic__img"
                    style={{ height: "auto" }}
                  />
                </motion.div>
              </div>

            </div>
          </div>

          <div className="about-us-mosaic__content-col">
            <div className="about-us-mosaic__content">
              <div className="about-us-mosaic__heading-group">
                <div className="pre-heading">
                  <span>About Us</span>
                </div>
                <div className="title title-dark-olive">
                  <h2>Built For Those Who Notice The Details.</h2>
                </div>
              </div>
              <div className="about-us-mosaic__desc-wrapper content content-dark-light">
                <p>
                  Every room at Enon Heights has been considered from the floor
                  up — renovated with purpose, furnished with restraint.
                </p>
              </div>
              <Link href="/about" aria-label="Discover our story" className="cta-link mt-12">
                Discover Our Story
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
