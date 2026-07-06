"use client";

import Image from "next/image";

export default function GallerySection() {
    return (
        <section className="gallery-section">
            <div className="container-fluid-md">
                <div className="gallery-image-wrapper grid grid-cols-12 gap-15">
                    <div className="varient-wrapper varient-1">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                    </div>
                    <div className="varient-wrapper varient-1">
                        <Image
                            src="/assets/about-mosaic-1.jpg"
                            alt="Enon Heights suite bedroom"
                            width={700}
                            height={560}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}