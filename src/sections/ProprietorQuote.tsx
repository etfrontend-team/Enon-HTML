export default function ProprietorQuote() {
  return (
    <section className="proprietor-quote">
      <div className="proprietor-quote__card-inner">
      <div className="proprietor-quote__card bg-off-white">

        <div className="proprietor-quote__stamp" aria-hidden="true">
          <img
            className="proprietor-quote__stamp-arc"
            src="/assets/enon-heights-logo.png"
            alt=""
          />
        </div>

        <div className="proprietor-quote__photo-col">
          <img
            className="proprietor-quote__photo img-fluid-cover"
            src="/assets/hero-banner-inner.jpg"
            alt="Enon Heights suite"
          />
        </div>


        <div className="proprietor-quote__quote-col">
          <div className="title title-dark-olive">
            <h3 className="proprietor-quote__blockquote">
                &ldquo;Decades of luxury travel, curated into five exceptional Suites.&rdquo;
            </h3>
          </div>
            <p className="proprietor-quote__names">
              Hans &amp; Liaan | Proprietors
            </p>
        </div>
        </div>

      </div>
    </section>
  );
}
