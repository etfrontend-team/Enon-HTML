import Image from "next/image";
import Link from "next/link";

const BACKGROUND_VIDEO =
  "http://192.168.11.121:3000/api/media/file/Firefly%20make%20the%20leaves%20on%20this%20shadow%20image%20move%20subtly.mp4";

export default function ThankYouHero() {
  return (
    <section className="thankyou-hero hero-banner hero-banner__bg-shadow green-noise">
      <div className="hero-banner__inner">
        <div className="hero-banner__bg" aria-hidden="true">
          <video
            className="hero-banner__bg-img thankyou-hero__bg-video"
            src={BACKGROUND_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="hero-banner__bg-overlay thankyou-hero__bg-overlay" />
        </div>

        <div className="thankyou-hero__layout">
          <div className="thankyou-hero__content">
            <div className="thankyou-hero__heading-group">
              <p className="thankyou-hero__eyebrow">Thank You</p>
              <div className="title title-off-white">
                <h1 className="thankyou-hero__title">
                  We&apos;ve received your enquiry.
                </h1>
              </div>
            </div>

            <div className="thankyou-hero__details">
              <p>
                A member of the Enon Heights team will be in touch within 24
                hours.
              </p>
              <p>
                In the meantime, take a look at the journal for notes on Knysna
                and what to expect when you arrive.
              </p>

              <div className="btn-custom">
                <Link href="/" className="btn btn-filled thankyou-hero__button">
                  <span className="label-up">Go Back Home</span>
                  <span className="label-up">Go Back Home</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="thankyou-hero__image" aria-hidden="true">
            <Image
              fill
              priority
              sizes="593px"
              src="/images/thankyou-hero-card.jpg"
              alt=""
              role="presentation"
              className="thankyou-hero__image-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
