import Link from "next/link";
import Image from "next/image";

const footerNavLeft = [
  { label: "Stay", href: "#stay" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const footerNavRight = [
  { label: "Rates", href: "#rates" },
  { label: "Our Story", href: "#our-story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "Journal", href: "#journal" },
];

const footerSocials = [
  { platform: "Facebook", href: "#", icon: "/assets/facebook-icon.svg" },
  { platform: "TikTok", href: "#", icon: "/icons/tiktok-icon.svg" },
  { platform: "Instagram", href: "#", icon: "/assets/instagram-icon.svg" },
];

export default function Footer() {
  return (
    <footer className="site-footer relative">
      <div className="footer-bg-wrapper">
        <div className="relative size-full">
          <img
            className="footer__bg-img img-fluid-cover"
            src="/assets/hero-banner.png"
            alt=""
          />
          <img
            className="footer__bg-img img-fluid-cover opacity-10 blur-[50px]"
            src="/assets/hero-banner.png"
            alt=""
          />
        </div>
      </div>
        <div className="footer-inner">

          {/* Desktop: 3-col — left nav | center image | right nav */}
          <div className="footer-main">

            <div className="footer-col-left">
              <nav aria-label="Footer primary navigation">
                <ul>
                  {footerNavLeft.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-label={link.label}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="footer-cta btn-custom">
                <Link href="#enquire" aria-label="Book Now" className="btn">
                  <span className="label-up">Book Now</span>
                  <span className="label-up">Book Now</span>
                </Link>
              </div>
            </div>

            {/* Center decorative image — desktop only */}
            <div className="footer-media">
              <div className="footer-image-frame">
                <Image
                  src="/images/footer-landscape.jpg"
                  alt="Enon Heights pool and garden view"
                  width={300}
                  height={300}
                  className="footer-image"
                />
              </div>
            </div>

            <div className="footer-col-right">
              <nav aria-label="Footer secondary navigation">
                <ul>
                  {footerNavRight.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-label={link.label}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="footer-contact">
                <Link href="tel:+27825312413" aria-label="Call 082 5312 413">
                  Tel: 082 5312 413
                </Link>
                <Link
                  href="mailto:info@enonheights.com"
                  aria-label="Email info@enonheights.com"
                >
                  Email: info@enonheights.com
                </Link>
              </div>
            </div>

          </div>

          {/* Mobile-only: stacked Book Now, contact, social, image, logo */}
          <div className="footer-mobile-section">
            <div className="footer-mobile-cta btn-custom">
              <Link href="#enquire" aria-label="Book Now" className="btn">
                <span className="label-up">Book Now</span>
                <span className="label-up">Book Now</span>
              </Link>
            </div>
            <div className="footer-mobile-contact">
              <Link href="tel:+27825312413" aria-label="Call 082 5312 413">
                Tel: 082 5312 413
              </Link>
              <Link
                href="mailto:info@enonheights.com"
                aria-label="Email info@enonheights.com"
              >
                Email: info@enonheights.com
              </Link>
            </div>
            <div className="footer-mobile-social">
              {footerSocials.map(({ platform, href, icon }) => (
                <Link
                  key={platform}
                  href={href}
                  aria-label={`Visit our ${platform}`}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={icon} alt={platform} width={18} height={18} />
                </Link>
              ))}
            </div>
            <div className="footer-mobile-image">
              <div className="footer-image-frame">
                <Image
                  src="/images/footer-landscape.jpg"
                  alt="Enon Heights pool and garden view"
                  width={300}
                  height={300}
                  className="footer-image"
                />
              </div>
            </div>
            <div className="footer-mobile-logo">
              <Image
                src="/images/footer-logo.png"
                alt="Enon Heights monogram"
                width={53}
                height={55}
              />
            </div>
          </div>

          {/* Bottom bar: Privacy | H logo | Social icons */}
          <div className="footer-bar">
            <Link
              href="/privacy-policy"
              aria-label="Privacy Policy and Terms and Conditions"
              className="footer-privacy"
            >
              Privacy Policy | Terms &amp; Conditions
            </Link>
            <div className="footer-wordmark">
              <Image
                src="/images/footer-logo.png"
                alt="Enon Heights monogram"
                width={53}
                height={55}
              />
            </div>
            <div className="footer-social">
              {footerSocials.map(({ platform, href, icon }) => (
                <Link
                  key={platform}
                  href={href}
                  aria-label={`Visit our ${platform}`}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={icon} alt={platform} width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright — outside terracotta box */}
        <div className="footer-copyright">
          <p>© 2026 Enon Heights. All rights reserved.</p>
        </div>
      
    </footer>
  );
}
