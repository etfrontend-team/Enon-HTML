import Image from "next/image";

const SAMPLE_IMAGE = "/images/more-offers-exclusive-use.jpg";

type Media = {
    type: "image" | "video";
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};

function MediaItem({ item }: { item: Media }) {
    if (item.type === "video") {
        return (
            <video
                className="image-block__img"
                autoPlay
                muted
                loop
                playsInline
                poster={SAMPLE_IMAGE}
            >
                <source src={item.src} type="video/mp4" />
            </video>
        );
    }
    return (
        <Image
            className="image-block__img"
            src={item.src}
            alt={item.alt ?? ""}
            width={item.width ?? 593}
            height={item.height ?? 680}
        />
    );
}

export default function ZigzagSection() {

    const media: Media[] = [
        { type: "image", src: SAMPLE_IMAGE },
        { type: "image", src: SAMPLE_IMAGE },
        { type: "image", src: SAMPLE_IMAGE },
    ];

    // image-block placement: "left" or "right"
    const placement: "left" | "right" = "left";

    return (
        <section className="zig-zag-section general-padding">
            <div className="zig-zag-block-wrapper container-fluid-lg">
                <div className={`flex max-768:flex-col 768:items-center gap-50 992:gap-80 1366:gap-120 ${placement === "left" ? "flex-row-reverse" : ""}`}>
                    <div className="content-block">
                        <div className="content">
                            <p>dfhfhfghfdgh hfg hfg j</p>

                        </div>
                    </div>
                    <div className={`image-block`}>
                        {media.length === 3 ? (
                            <>
                                <div className="image-block__row">
                                    <MediaItem item={media[0]} />
                                </div>
                                <div className="image-block__row image-block__row--split">
                                    <MediaItem item={media[1]} />
                                    <MediaItem item={media[2]} />
                                </div>
                            </>
                        ) : (
                            media.map((item, i) => (
                                <div className="image-block__row" key={i}>
                                    <MediaItem item={item} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
