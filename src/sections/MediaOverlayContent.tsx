import Image from "next/image";

export default function MediaOverlayContent() {
    return (
        <section className="media-overlay-content container-fluid">
            <div className="media-overlay-content-inner">
                <div className="media-overlay-content-bg">
                    <Image
                        src="/assets/about-mosaic-1.jpg"
                        alt="Enon Heights suite bedroom"
                        width={1440}
                        height={798}
                        loading="lazy"
                    />
                </div>

                <div className="media-overlay-content-grid">
                    <div className="media-overlay-content-image">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={1440}
                            height={617}
                            loading="lazy"
                        />
                    </div>
                    <div className="media-overlay-content-text">
                        <Image
                            className="media-overlay-content-text-bg"
                            src="/images/exclusive-use-content-bg.webp"
                            alt=""
                            aria-hidden="true"
                            width={1440}
                            height={617}
                            loading="lazy"
                        />
                        <div className="media-overlay-content-details">
                            <div className="pre-heading pb-30"><span>EXCLUSIVE USE</span></div>
                            <div className="title title-dark-olive"><h2>The whole property, for your group alone.</h2></div>
                            <div className="content content-dark-light mt-35"><p>All five rooms, the full grounds, and a dedicated team — available for groups of up to 10 guests. Rates are bespoke and available on enquiry.</p></div>
                            <div className="mt-40">
                            <a href="#" className="cta-link">Enquire</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
