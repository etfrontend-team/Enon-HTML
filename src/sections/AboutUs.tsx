import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="about-us general-padding">
      <div className="container-fluid-lg about-us-inner">
        <div className="about-us__image-col">
          <Image
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className="about-us__image img-fluid-cover"
            src="/assets/suits-1.jpg"
            alt="Enon Heights suite interior"
          />
        </div>
        <div className="about-us__content-col">
          <div className="about-us__content">

            <div className="about-us__heading-group">
              <div className="pre-heading">
                <span>Built For</span>
              </div>
              <div className="title title-dark-olive">
                <h2 className="about-us__title">
                  Built For Those <br /> Who Notice The Details.
                </h2>
              </div>
            </div>

            <div className="about-us__desc-wrapper content content-dark-light">
              <p className="about-us__desc">
                Every room at Enon Heights has been conceived from the floor
                up — renovated with purpose, furnished with restraint.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
