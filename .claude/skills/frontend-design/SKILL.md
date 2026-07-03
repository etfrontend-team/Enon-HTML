---
name: nextjs-react-typescript-component-rules
description: 'Frontend rules for Next.js projects: TSX components, ADA, Swiper, HTML/CSS with Tailwind v4 @apply. Trigger on .tsx/.jsx/.css tasks.'
---

## COMPONENT

| # | Rule |
|---|------|
| 1 | Functional components in TypeScript (.tsx). Typed props/interfaces for all. |
| 2 | Section data as typed constant inside component: `const heroData = { heading: "…", ctaHref: "/contact" }`. |
| 3 | Comments explain *why* not *what*. No redundant comments. |
| 4 | Never `<a>` `<img>` or RR `<Link>`. Use `next/link` + `next/image` only. |
| 5 | `<Link>` → `href` + `aria-label`. External → add `target="_blank"` `rel="noopener noreferrer"`. |
| 6 | `<Image>` → `src` `alt`(never empty) `width` `height`. LCP/above-fold → `loading="eager"` `fetchPriority="high"`. (`priority` deprecated Next.js 16). Export all images as `.webp` to `/public/images/`. |
| 7 | `<video>` → `playsInline` `muted` `autoPlay` `loop` `preload="metadata"` `aria-label` + `<track>`. Files in `/public/videos/`. |
| 8 | SVGs → never inline SVG code. Save `.svg` file to `/public/icons/`. Use `<Image>` with `alt` `width` `height`. If file unavailable, ask user to provide it. |
| 9 | Section root → BEM class + `general-padding`. If section has container, add `.container-fluid` inside and match inline spacing from Figma on inner div. Example: `<section className="hero-section general-padding"><div className="container-fluid"><div className="hero-section-inner">…</div></div></section>`. |
| 10 | `<button>` → `type="button"\|"submit"` + descriptive `aria-label`. Buttons/links → use `.btn` `.btn-{variant}` from `component.css` only. Never custom styles on buttons or links. |
| 11 | Headings (h1–h6) → wrap in `.title .title-{color}`. Never add `className` directly on `h1`–`h6`, `p`, or `span` tags. |
| 12 | `<p>` → wrap in `.content .content-{color}`. Never add `className` on `p` or `span` directly. |
| 13 | Text containers → `max-w-*` from Figma. Use tokens (`max-w-600`). `[]` for decimals only — declare in `@theme` first. |
| 14 | Image-with-text → image + text widths match Figma per breakpoint. Fluid on smaller screens. |
| 15 | Card links → `<Link>` wraps entire card. All cards use `h-full`. Never fixed heights. |
| 16 | Inputs/Textarea/Select → `<label htmlFor="…">` + matching `id` + `aria-label`. |
| 17 | Phone → `href="tel:+…"`. Email → `href="mailto:…"`. |
| 18 | Every wrapper/div → short hyphen-separated class scoped to section: `{section}-inner` `{section}-content` `{section}-media`. No div/wrapper without a class. Never use `__` double-underscore or numeric suffixes like `-1` `-2`. |
| 19 | Fonts → use `@apply font-{name}` only. Never write `font-family: var(--font-*)` as raw CSS. |

```tsx
<section className="hero-section general-padding">
  <div className="container-fluid">
    <div className="hero-section-inner">
      <div className="hero-section-content">
        <div className="title title-black"><h1>Heading</h1></div>
        <div className="content content-black max-w-600"><p>Text.</p></div>
        <Link href="/about" aria-label="About" className="btn btn-primary">About</Link>
      </div>
      <div className="hero-section-media">
        <Image src="/images/hero.webp" alt="Hero" width={1440} height={800} loading="eager" fetchPriority="high" className="hero-section-image" />
      </div>
    </div>
  </div>
</section>

<video playsInline muted autoPlay loop preload="metadata" aria-label="Demo" className="hero-section-video">
  <source src="/videos/hero.mp4" type="video/mp4" /><track kind="captions" srcLang="en" label="English" />
</video>
<Image src="/icons/arrow.svg" alt="Arrow" width={24} height={24} />
<button type="button" aria-label="Open menu" className="btn btn-primary">Menu</button>
<Link href={card.href} aria-label={`About ${card.title}`} className="card-item h-full block"><div className="card-item-inner" /></Link>
<label htmlFor="email">Email</label>
<input id="email" type="email" name="email" aria-label="Enter email" placeholder="you@example.com" />
```

## ADA

| # | Rule |
|---|------|
| 1 | Interactive elements → descriptive `aria-label`/`aria-labelledby`. Never generic. |
| 2 | Images → meaningful `alt`. Decorative → `alt=""` `role="presentation"`. |
| 3 | Keyboard navigable + visible focus indicators. Never remove outlines without replacement. |
| 4 | `role` where needed: `role="dialog"` `aria-modal="true"` for modals; `aria-hidden="true"` for decorative icons. |
| 5 | Accordions → trigger: `aria-expanded` `aria-controls` `type="button"` `aria-label`. Panel: `id` `role="region"` `aria-labelledby`. |
| 6 | Sliders → wrap with `aria-label`. Buttons → `aria-label="Previous slide"` / `"Next slide"`. |
| 7 | Form errors → `aria-describedby` on input. |
| 8 | `tabIndex` → `0` or `-1` only. Never positive. |

## SWIPER

| # | Rule |
|---|------|
| 1 | Sliders/carousels → Swiper.js only. |
| 2 | Props from Figma: `loop` `autoplay` `slidesPerView` `spaceBetween` `breakpoints`. Never set fixed `width`/`height` on slides — use `slidesPerView` only. |
| 3 | Nav buttons → `aria-label="Previous slide"` / `"Next slide"`. |
| 4 | Mobile ≤425px → `slidesPerView={1}` unless Figma shows more. |

```tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; import "swiper/css/navigation"; import "swiper/css/pagination";

<Swiper loop autoplay={{ delay:3000, disableOnInteraction:false }} slidesPerView={3} spaceBetween={24}
  breakpoints={{ 0:{slidesPerView:1,spaceBetween:16}, 768:{slidesPerView:2,spaceBetween:20}, 1024:{slidesPerView:3,spaceBetween:24} }}
  modules={[Autoplay,Navigation,Pagination]} aria-label="Carousel">
  {slides.map((s,i) => <SwiperSlide key={i}>{/* content */}</SwiperSlide>)}
</Swiper>
```

## HTML

| # | Rule |
|---|------|
| 1 | No classes on `body` `html` `header` `footer`. Style via CSS `@apply`. |
| 2 | No `style={{}}` in JSX except JS-driven dynamic values. All styles via CSS `@apply`. |
| 3 | JSX Tailwind allowed: `p-*` `m-*` `max-w-*` `flex` `flex-col` `flex-row` `grid` `grid-cols-*` `gap-*` `h-full` `w-full`. Rest → CSS `@apply`. |
| 4 | Pixel-perfect to Figma. Never approximate — 56px in Figma = 56 in code. |
| 5 | Opacity colors → `text-black/10`. Never `text-[rgba(0,0,0,0.1)]`. |
| 6 | Figma grid → CSS Grid (`grid` `grid-cols-*`). |
| 7 | Responsive from 425px↓ if Figma mobile ≥440px. 2-col → 1-col. Swiper 2→1 on mobile. |
| 8 | Container padding = Figma horizontal spacing on `.container-fluid`. Inner spacing (pt/pb/pl/pr) on inner div, not container. |
| 9 | Shadows/unusual colors/gradients → CSS var in `@theme` first, then use token. Never write raw `background: linear-gradient(...)` or `font-weight: 500` as plain CSS. |
| 10 | No `[]` for whole numbers (`--spacing:1px`). Use tokens: `max-w-600` `p-24`. Decimals → `@theme` first. |

## CSS

| # | Rule |
|---|------|
| 1 | Files: `style.css`(theme+imports) `base.css`(tags) `component.css`(btns/forms) `layout.css`(header/nav/footer) `utilities.css`(sections). |
| 2 | `@apply` only. Raw CSS only for `content:""` and `transition` values unavailable in Tailwind. Never plain CSS for `font-family` `font-weight` `background` `color` etc. |
| 3 | Breakpoints via `max-*`/`min-*` prefixes. No `@media`. |
| 4 | Base + responsive always in **one** `@apply` line per selector. Never multiple `@apply` blocks in the same rule. Example: `@apply pt-180 pl-107 max-768:pt-80 max-768:pl-40 max-425:pt-60 max-425:pl-24;` |
| 5 | No `[]` arbitrary values in CSS files. |
| 6 | Only colors from `style.css` vars. Never `bg-[#000]`. |
| 7 | No fixed `h-*` `min-h-*` `w-*` `min-w-*`. Use `h-full`/`w-full`. Content-driven layouts. |
| 8 | `layout.css` → header/nav/footer only. |
| 9 | `utilities.css` → section helpers. Every selector scoped under parent. Never unscoped child selectors. |
| 10 | No `@layer`. Write rules directly in files. |
| 11 | Check `base.css`/`component.css` before adding section-specific classes. Add only if style genuinely differs. |
| 12 | `::before`/`::after` → `@apply` for all styles. `content:""` and custom `transition` values → raw CSS only. |
| 13 | Class names → short hyphen-separated: `hero-section-inner` `hero-section-content`. Never `__` double-underscore, never numeric suffixes. |

```css
/* ✓ one @apply, all breakpoints inline */
.hero-section .hero-section-inner { @apply pt-180 pl-107 pr-107 max-768:pt-80 max-768:pl-40 max-768:pr-40 max-425:pt-60 max-425:pl-24 max-425:pr-24; }

/* ✗ never multiple @apply blocks */
.hero-section .hero-section-inner { @apply pt-180 pl-107; @apply max-768:pt-80; }

/* ✓ scoped */ .hero-section .hero-section-heading { @apply max-w-600 text-48 max-768:text-32; }
/* ✗ never unscoped */ .hero-section-heading { @apply text-48; }

/* ✓ pseudo with content */
.hero-section .hero-section-btn::after { @apply absolute inset-0 bg-black/10; content: ""; transition: opacity 0.3s ease; }
```