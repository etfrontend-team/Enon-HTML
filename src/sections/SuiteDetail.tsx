export default function SuiteDetail() {
  return (
    <section className="suite-detail">

      {/* Left: text content */}
      <div className="suite-detail__content-col">
        <div className="suite-detail__content">

          <div className="suite-detail__heading-group">
            <div className="pre-heading">
              <span>Built For</span>
            </div>
            <div className="title title-dark-olive">
              <h2 className="suite-detail__title">
                Built For Those Who Notice The Details.
              </h2>
            </div>
          </div>

          <div className="suite-detail__desc-wrapper content content-dark-light">
            <p className="suite-detail__desc">
              Every room at Enon Heights has been conceived from the floor
              up — renovated with purpose, furnished with restraint.
            </p>
          </div>

        </div>
      </div>

      {/* Right: full-bleed image */}
      <div className="suite-detail__image-col">
        <img
          className="suite-detail__image img-fluid-cover"
          src="/assets/suits-1.jpg"
          alt="Enon Heights suite interior"
        /> 
      </div>

    </section>
  );
}
