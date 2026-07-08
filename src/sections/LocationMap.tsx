import Image from "next/image";

const locationMapData = {
  bgDesktopSrc: "/images/location-map-bg-desktop.webp",
  bgMobileSrc: "/images/location-map-bg-mobile.webp",
  bgAlt:
    "Illustrated map of the Garden Route showing the lagoon and roads leading to Enon Heights",
  pinLabel: "Enon Heights",
};

export default function LocationMap() {
  return (
    <section className="location-map general-padding" aria-label="Enon Heights location map">
      <div className="container-fluid">
        <div className="location-map-inner">
          <Image
            fill
            sizes="1410px"
            className="location-map-bg location-map-bg-desktop"
            src={locationMapData.bgDesktopSrc}
            alt={locationMapData.bgAlt}
          />
          <Image
            fill
            sizes="100vw"
            className="location-map-bg location-map-bg-mobile"
            src={locationMapData.bgMobileSrc}
            alt={locationMapData.bgAlt}
          />

          <div className="location-map-pin-group">
            <button
              type="button"
              className="location-map-pin-trigger"
              aria-label={`Show ${locationMapData.pinLabel} label on map`}
            >
              <Image
                className="location-map-pin-marker"
                src="/icons/location-pin-marker.svg"
                alt=""
                width={18}
                height={18}
              />
            </button>

            <div className="location-map-tag">
              <div className="location-map-tag-chip">
                <span className="location-map-tag-label">{locationMapData.pinLabel}</span>
              
              </div>
              <Image
                className="location-map-tag-tail"
                src="/icons/location-pin-tail.svg"
                alt=""
                aria-hidden="true"
                width={19}
                height={17}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
