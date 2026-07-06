import Image from "next/image";

export default function ExclusiveUseSection() {
    return (
        <section className="exclusive-use-section container-fluid">
            <div className="exclusive-use-wrapper">
                <div className="bg-img-block">
                    <Image
                        src="/assets/about-mosaic-1.jpg"
                        alt="Enon Heights suite bedroom"
                        width={1440}
                        height={798}
                        loading="lazy"
                    />
                </div>

                <div className="content-block-wrapper">
                    <div className="img-block">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={1440}
                            height={617}
                            loading="lazy"
                        />
                    </div>
                    <div className="content-block">
                        <div className="details-wrapper">
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