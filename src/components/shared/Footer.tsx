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

const footerPrivacyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
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
        <div className="relative size-full overflow-hidden">
          <div className="footer-bg-base">
            <img
              className="footer__bg-img img-fluid-cover"
              src="/assets/footer-bg.png"
              alt=""
            />
          </div>
          <div className="footer-bg-overlay">
            <img
              className="footer__bg-img img-fluid-cover opacity-10"
              src="/assets/footer-bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
        <div className="footer-inner rust-noise">

          {/* Desktop: 3-col — left nav | center image | right nav */}
          <div className="footer-main">

            <div className="footer-col-left footer-nav-items">
              <nav aria-label="Footer primary navigation" className="navigation-panel">
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
                  style={{ height: "auto" }}
                />
              </div>
            </div>

            <div className="footer-col-right footer-nav-items">
              <nav aria-label="Footer secondary navigation" className="navigation-panel">
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
              <div className="footer-contact navigation-panel">
                <ul>
                  <li>
                  <Link href="tel:+27825312413" aria-label="Call 082 5312 413">
                    Tel: 082 5312 413
                  </Link>
                  </li>
                  <li>
                  <Link
                    href="mailto:info@enonheights.com"
                    aria-label="Email info@enonheights.com"
                  >
                    Email: info@enonheights.com
                  </Link>
                  </li>
                </ul>
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
            <div className="footer-mobile-contact footer-contact navigation-panel">
            <ul>
                  <li>
                  <Link href="tel:+27825312413" aria-label="Call 082 5312 413">
                    Tel: 082 5312 413
                  </Link>
                  </li>
                  <li>
                  <Link
                    href="mailto:info@enonheights.com"
                    aria-label="Email info@enonheights.com"
                  >
                    Email: info@enonheights.com
                  </Link>
                  </li>
                </ul>
            </div>
            <div className="footer-mobile-social footer-social">
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
            <div className="footer-mobile-image footer-media">
              <div className="footer-image-frame">
                <Image
                  src="/images/footer-landscape.jpg"
                  alt="Enon Heights pool and garden view"
                  width={300}
                  height={300}
                  className="footer-image"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom bar: Privacy | H logo | Social icons */}
          <div className="footer-bar">
            <div className="footer-privacy navigation-panel">
              <ul>
                {footerPrivacyLinks.map((link, i) => (
                  <li key={link.href} className="footer-privacy-item">
                    {i > 0 && <span className="footer-privacy-separator" aria-hidden="true">|</span>}
                    <Link href={link.href} aria-label={link.label}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-wordmark">
              <Image
                src="/images/footer-logo-new.png"
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
          <div className="content content-small content-dark">
          <p>© 2026 Enon Heights. All rights reserved.</p>
          </div>
        </div>
      
    </footer>
  );
}
