import Image from "next/image";



export default function PriceListSection() {
    return (
        <section className="price-list-section general-padding">
            <div className="container-fluid-md">

                <div className="price-list-wrapper">
                    <div className="price-block">
                        <div className="img-block">
                            <Image
                                src="/assets/about-mosaic-1.jpg"
                                alt="Enon Heights suite bedroom"
                                width={279}
                                height={617}
                                loading="lazy"
                            />
                        </div>
                        <div className="content-block">

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}