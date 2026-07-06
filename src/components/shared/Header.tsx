"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Our Story", href: "#our-story" },
  { label: "Stay", href: "#stay" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Location", href: "#location" },
];

const LOGO_SRC = "/assets/site-logo.png";
const MENU_IMG_LEFT = "/assets/menu-image-1.png";
const MENU_IMG_RIGHT = "/assets/menu-image-2.png";

const SOCIAL_LINKS = [
  { href: "#", src: "/assets/facebook-icon.svg", alt: "Facebook" },
  { href: "#", src: "/assets/twitter-icon.svg", alt: "Twitter" },
  { href: "#", src: "/assets/instagram-icon.svg", alt: "Instagram" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    window.dispatchEvent(new Event(isMenuOpen ? "lenis:stop" : "lenis:start"));
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="header-logo relative" aria-label="Enon Heights home">
            <Image fill src={LOGO_SRC} alt="Enon Heights" sizes="(max-width: 425px) 190px, (max-width: 1366px) 228px, 265px" style={{ objectFit: "contain" }} />
          </a>

          <nav
            className={`header-nav${isMenuOpen ? " header-nav--hidden" : ""}`}
            aria-label="Main navigation"
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <div className="header-enquire-wrap btn-custom">
              <a href="#enquire" className="btn">
                <span className="label-up">Enquire</span>
                <span className="label-up">Enquire</span>
              </a>
            </div>
            <button
              className="header-menu-btn"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((o) => !o)}
            >
              {isMenuOpen ? (
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  aria-hidden="true"
                  className="size-19"
                >
                  <path d="M0.353516 0.353516L19.4454 19.4454" stroke="#FCFBF5" />
                  <path d="M19.6924 0.353516L0.600499 19.4454" stroke="#FCFBF5" />
                </svg>
              ) : (
                <svg
                  width="27"
                  height="19"
                  viewBox="0 0 27 19"
                  fill="none"
                  aria-hidden="true"
                  className="767:h-18 h-16 767:w-27 w-24"
                >
                  <path d="M0 0.5H27" stroke="#FCFBF5" />
                  <path d="M0 9.49463H27" stroke="#FCFBF5" />
                  <path d="M0 18.4888H14" stroke="#FCFBF5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div
        className={`menu-overlay${isMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="menu-panel">
          <video
            className="menu-panel__video"
            src="/assets/background-leaves-shadow.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Enon Heights ambient video"
          >
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="menu-inner-container">
            <div className="menu-img menu-img--left">
              <div className="menu-img__frame">
                <Image fill sizes="(max-width: 1366px) 290px, 329px" src={MENU_IMG_LEFT} alt="" role="presentation" className="menu-img__photo" />
              </div>
            </div>
            <div className="menu-img menu-img--right">
              <div className="menu-img__frame">
                <Image fill sizes="(max-width: 1366px) 290px, 329px" src={MENU_IMG_RIGHT} alt="" role="presentation" className="menu-img__photo" />
              </div>
            </div>
            <nav className="menu-nav" aria-label="Menu navigation">
              <ul data-lenis-prevent>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="menu-footer">
              <div className="menu-contact">
                <p className="menu-contact__title">Contact Us</p>
                <div className="menu-contact__info">
                  <a href="tel:0825312413">Tel: 082 5312 413</a>
                  <a href="mailto:info@enonheights.com">Email: info@enonheights.com</a>
                </div>
              </div>

              <div className="menu-social">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.alt} href={s.href} aria-label={s.alt} className="menu-social__link">
                    <Image src={s.src} alt="" role="presentation" width={18} height={18} />
                  </a>
                ))}
              </div>

              <div className="menu-enquire-mobile">
                <div className="btn-custom">
                  <Link href="#enquire" className="btn" onClick={closeMenu}>
                    <span className="label-up">Enquire</span>
                    <span className="label-up">Enquire</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
