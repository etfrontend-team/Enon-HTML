"use client";

import Image from "next/image";
import { useState } from "react";

type GettingTab = {
  label: string;
  description: string;
  points: string[];
};

type GettingMedia =
  | {
      mediaType?: "image";
      src: string;
      alt: string;
    }
  | {
      mediaType: "video";
      src: string;
      alt: string;
      poster?: string;
    };

const tabs: GettingTab[] = [
  {
    label: "By car",
    description:
      "The N2 Garden Route runs directly through Knysna. We arrange private transfers from George, Cape Town, or Port Elizabeth.",
    points: [
      "Point 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Point 2 Lorem ipsum dolor sit amet, consectetur.",
      "Point 3 ipsum dolor sit amet, consectetur.",
      "Point 4 Lorem ipsum dolor sit amet, consectetur adipiscing.",
      "Point 5 Lorem ipsum dolor sit amet, consectetur.",
      "Point 6 ipsum dolor sit amet, consectetur.",
    ],
  },
  {
    label: "By air",
    description:
      "Fly into George Airport and continue along the Garden Route by private transfer or rental car.",
    points: [
      "Point 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Point 2 Lorem ipsum dolor sit amet, consectetur.",
      "Point 3 ipsum dolor sit amet, consectetur.",
      "Point 4 Lorem ipsum dolor sit amet, consectetur adipiscing.",
    ],
  },
  {
    label: "From Cape Town",
    description:
      "Follow the coastal route east towards Knysna, with time for Garden Route stops along the way.",
    points: [
      "Point 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Point 2 Lorem ipsum dolor sit amet, consectetur.",
      "Point 3 ipsum dolor sit amet, consectetur.",
    ],
  },
];

const gettingMedia: GettingMedia[] = [
  {
    src: "/images/getting-here-arrival.jpg",
    alt: "Contemporary Enon Heights residence at dusk",
  },
  {
    src: "/images/scroll-gallery-right.webp",
    alt: "Garden Route ocean view",
  },
  {
    src: "/images/getting-here-coast.jpg",
    alt: "Coastal rocks and sea near Knysna",
  },
];

export default function GettingZigzagTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];
  const visibleMedia = gettingMedia.slice(0, 3);
  const mediaCount = visibleMedia.length;

  return (
    <section className="getting-zigzag general-padding" aria-labelledby="getting-zigzag-title">
      <div className="container-fluid-lg">
        <div className="getting-zigzag__inner">
          <div className="getting-zigzag__content">
            <div className="getting-zigzag__heading">
              <p className="getting-zigzag__eyebrow">Getting Here</p>
              <h2 className="getting-zigzag__title" id="getting-zigzag-title">
                How To Find Us
              </h2>
            </div>

            <div className="getting-zigzag__tabs" role="tablist" aria-label="Getting here options">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={`getting-zigzag-panel-${index}`}
                  id={`getting-zigzag-tab-${index}`}
                  className={`getting-zigzag__tab${
                    activeIndex === index ? " getting-zigzag__tab--active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              className="getting-zigzag__panel"
              id={`getting-zigzag-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`getting-zigzag-tab-${activeIndex}`}
            >
              <p className="getting-zigzag__description">{activeTab.description}</p>
              <ul className="getting-zigzag__list">
                {activeTab.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`getting-zigzag__images getting-zigzag__images--count-${mediaCount}`}
          >
            {visibleMedia.map((media, index) => (
              <div className="getting-zigzag__image" key={media.src}>
                {media.mediaType === "video" ? (
                  <video
                    src={media.src}
                    poster={media.poster}
                    className={`getting-zigzag__image-img getting-zigzag__video getting-zigzag__image-img--${index + 1}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={media.alt}
                  />
                ) : (
                  <Image
                    fill
                    src={media.src}
                    alt={media.alt}
                    sizes={
                      mediaCount === 1
                        ? "(max-width: 992px) 100vw, 48vw"
                        : "(max-width: 992px) 50vw, 24vw"
                    }
                    className={`getting-zigzag__image-img getting-zigzag__image-img--${index + 1}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
