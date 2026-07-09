const googleMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13226.587011377302!2d22.985241361890314!3d-34.02727727004501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e78c1781957220f%3A0x892442dacde2a85f!2sEnon%20Heights%20-%205-Star%20Luxury%20Guest%20Farm%20-%20Opening%2021%20October%202026!5e0!3m2!1sen!2sin!4v1783581774565!5m2!1sen!2sin";

const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Enon%20Heights%20Welbedacht%20Lane%20Eastford%20Knysna%20South%20Africa";

export default function ContactMap() {
  return (
    <section className="contact-map general-padding" aria-labelledby="contact-map-title">
      <div className="container-fluid-lg">
        <div className="contact-map__inner">
          <div className="contact-map__content">
            <div className="contact-map__group contact-map__location-group">
              <div className="contact-map__heading-group">
                <p className="contact-map__eyebrow">Find Us</p>
                <h1 className="contact-map__title" id="contact-map-title">
                  Enon Heights
                </h1>
              </div>

              <address className="contact-map__text contact-map__address">
                <span>Welbedacht Lane, Eastford, Knysna,</span>
                <span>South Africa</span>
              </address>
            </div>

            <div className="contact-map__group">
              <h2 className="contact-map__subheading">Contact</h2>
              <div className="contact-map__text contact-map__contact-list">
                <a href="mailto:hello@enonheights.com">
                  hello@enonheights.com
                </a>
                <a href="tel:+27000000000">+27 (0) XX XXX XXXX</a>
              </div>
            </div>

            <div className="contact-map__group">
              <h2 className="contact-map__subheading">Hours</h2>
              <p className="contact-map__text">
                We respond to all enquiries within 24 hours, seven days a week.
              </p>
            </div>

            <a
              className="contact-map__directions"
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open directions to Enon Heights in Google Maps"
            >
              Directions
            </a>
          </div>

          <div className="contact-map__map" aria-label="Google map to Enon Heights">
            <iframe
              src={googleMapSrc}
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Enon Heights Google Map"
              className="contact-map__iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
