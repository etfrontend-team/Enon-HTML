---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality following strict HTML/CSS architecture rules. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, HTML/CSS layouts, or when styling/beautifying any web UI using Tailwind CSS v4 with a multi-file CSS architecture). Generates creative, polished, pixel-perfect code that avoids generic AI aesthetics and strictly follows project HTML, CSS, and Tailwind v4 conventions.
license: Complete terms in LICENSE.txt
---

<!-- BEGIN:router -->
# Frontend Design Skill — Section Router

Read ONLY the section(s) you need. Each section is wrapped in BEGIN/END markers.

| Task | Read section |
|---|---|
| Planning aesthetic direction before coding | `design-thinking` |
| Writing or reviewing HTML / JSX structure | `html-rules` |
| Setting up CSS files / architecture / style.css | `css-architecture` |
| Global base styles (headings, paragraphs, containers) | `css-base` |
| Buttons, inputs, forms | `css-components` |
| Header / footer styles | `css-layout` |
| Section-specific / utility classes | `css-utilities` |
| Swiper sliders / carousels | `slider-rules` |
| Accordion components | `accordion-rules` |
| Accessibility (ARIA, keyboard, contrast) | `ada-rules` |
| SEO (meta, headings, structured data) | `seo-rules` |
| TypeScript / React component conventions | `tsx-rules` |
| Full implementation from scratch | Read ALL sections |

To read a section, extract only lines between `<!-- BEGIN:section-name -->` and `<!-- END:section-name -->`.
<!-- END:router -->

<!-- BEGIN:design-thinking -->
## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Technical requirements (Tailwind v4, multi-file CSS, accessibility, SEO).
- **Differentiation**: What makes this UNFORGETTABLE?

NEVER use overused fonts (Inter, Roboto, Arial), clichéd purple gradients, or predictable cookie-cutter layouts.

Choose a clear conceptual direction and execute it with precision. Match implementation complexity to the aesthetic vision.
<!-- END:design-thinking -->

<!-- BEGIN:tsx-rules -->
## Next.js / React TypeScript Component Rules

1. All sections and components must be React functional components using TypeScript (.tsx) with proper typed interfaces for all props.

2. All data (text, links, images) must be stored as a typed variable/constant inside the component itself — not in a separate file — unless shared globally.
   ```tsx
   const heroData = {
     heading: "Welcome to Our Platform",
     description: "We help you build better products.",
     ctaLabel: "Get Started",
     ctaHref: "/contact",
   };
   ```

3. Comments must explain *why*, not *what*. No redundant comments.

4. Never use native `<a>`, `<img>`, or React Router `<Link>`. Always use:
   - `<Link>` from `next/link` for navigation (include `href`, `aria-label`; add `target="_blank" rel="noopener noreferrer"` for external).
   - `<Image>` from `next/image` for all images (include `src`, `alt`, `width`, `height`; add `priority` for above-fold).

5. Every `<video>` must include: `playsInline`, `muted`, `autoPlay`, `loop`, `preload="metadata"`, `aria-label`, and a `<track>` for captions.

6. Never inline SVG in JSX. Save to `/public/icons/` and render via `<Image>`.

7. All section components use BEM-style root class + `general-padding`:
   ```tsx
   <section className="hero-section general-padding">
   ```

8. Every `<button>` must include `type="button"|"submit"` and `aria-label`.

9. Every heading (h1–h6) wrapped in `.title` + color modifier. Check `base.css` first — only add section class if style genuinely differs:
   ```tsx
   <div className="title title-black"><h1>...</h1></div>
   ```

10. Every `<p>` wrapped in `.content` + color modifier:
    ```tsx
    <div className="content content-black"><p>...</p></div>
    ```

11. Text container width must match Figma using `max-w-*`.

12. Card links: `<Link>` wraps the entire card. All cards in a grid use `h-full`.

13. Every `<input>`, `<textarea>`, `<select>` must have `<label>` linked via `htmlFor` / matching `id`.

14. Phone/email links use `tel:` and `mailto:` protocols.

15. Only these Tailwind classes allowed directly in JSX `className`: `p-*`, `m-*`, `max-w-*`, `flex`, `flex-col`, `flex-row`, `grid`, `grid-cols-*`, `gap-*`, `h-full`, `w-full`. Everything else goes in CSS via `@apply`.

16. If color used with opacity, use Tailwind modifier: `text-black/10`.

17. Use CSS Grid (`grid`, `grid-cols-*`) for grid layouts from Figma.

18. No `style` attribute unless absolutely required (e.g. dynamic accordion height). All other styling in CSS files.
<!-- END:tsx-rules -->

<!-- BEGIN:html-rules -->
## HTML Rules

1. No classes on `body`, `html`, `header`, `footer`. Style via CSS selectors with `@apply`.
2. No inline `style` attribute unless required for JS-driven dynamic values (e.g. accordion height).
3. Every `<Link>` (next/link): `href`, `aria-label`, `target`+`rel` if external. Each attribute on new line.
4. Every `<button>`: `type="button"|"submit"` and `aria-label`. Each on new line.
5. Every `<section>`: descriptive class + `general-padding`. Name derived from Figma section context.
6. Every `<Image>` (next/image): `src`, `alt` (never blank), `width`, `height`. On separate lines.
7. Every h1–h6: wrapped in `.title` + color modifier div. No classes on heading tags.
8. Every `<p>`: wrapped in `.content` + color modifier div. No classes on `<p>` tags.
9. All `<section>` elements inside `<main>`.
10. Only these Tailwind classes in JSX `className`: `p-*`, `m-*`, `max-w-*`, `flex`, `flex-col`, `flex-row`, `grid`, `grid-cols-*`, `gap-*`, `h-full`, `w-full`.
11. Every `<input>` has associated `<label>` via `htmlFor` / matching `id`.
12. Phone: `href="tel:+1234567890"`, Email: `href="mailto:hello@example.com"`.
13. Responsive: if Figma mobile ≥ 440px, reduce sizes from 425px and below. 2-col desktop → 1-col mobile.
14. No `[]` syntax for spacing when `--spacing: 1px`. Exception: decimal values declared in `style.css @theme` first.
15. If color used with opacity: `text-black/10`, never `text-[rgba(0,0,0,0.1)]`.
16. Box shadows, unusual colors, globally-used font sizes → declare as CSS variables in `@theme` first.
17. Match container padding to Figma horizontal side spacing. Inner spacing on the next inner div.
18. All code must be pixel-perfect to Figma. Pull spacing, font size, color directly from Figma via MCP — never approximate.
<!-- END:html-rules -->

<!-- BEGIN:css-architecture -->
## CSS Architecture — File Structure

Use exactly these five files in this order:

| File | Purpose |
|---|---|
| `style.css` | `@theme {}` config: imports, breakpoints, spacing, fonts, colors, font sizes |
| `base.css` | Global/foundational: html, body, links, headings, paragraphs, containers, `general-padding`, title/content colors |
| `component.css` | Buttons, inputs, textareas, selects |
| `layout.css` | Header and footer styles |
| `utilities.css` | Section-specific and helper classes |

### style.css — `@theme {}` only

```css
@import "./base.css";
@import "./component.css";
@import "./layout.css";
@import "./utilities.css";

@theme {
  /* Breakpoints */
  --breakpoint-1920: 1921px; --breakpoint-1600: 1601px; --breakpoint-1512: 1513px;
  --breakpoint-1440: 1441px; --breakpoint-1366: 1367px; --breakpoint-1199: 1200px;
  --breakpoint-1024: 1025px; --breakpoint-992: 993px;  --breakpoint-768: 769px;
  --breakpoint-640: 641px;   --breakpoint-576: 577px;  --breakpoint-425: 426px;
  --breakpoint-375: 376px;

  --spacing: 1px;

  /* Font families — from Figma */
  --font-{name}: "{Family}", sans-serif;

  /* Colors — from Figma */
  --color-{name}: #xxxxxx;

  /* Font sizes — from Figma, descending: h1 largest → h6 sixth, then by value */
  --text-heading-1: {px}; --text-heading-2: {px}; --text-heading-3: {px};
  --text-heading-4: {px}; --text-heading-5: {px}; --text-heading-6: {px};
  --text-{n}: {n}px;
}
```

### Global CSS Rules (all files)

- **All styles use `@apply`** with Tailwind v4. No raw CSS properties.
- **Responsive** goes inline in same `@apply` using `max-*`/`min-*` prefixes. Never `@media`.
- **No `[]` arbitrary values** in CSS files.
- **No fixed `h-*`, `min-h-*`, `w-*`, `min-w-*`** on sections/containers. `h-full`/`w-full` OK.
- **No `:root` variables** — all vars in `style.css @theme {}`.
- **No `@layer` blocks** — write rules directly in each file.
- **No undeclared colors** — declare in `@theme` first, then use token.
- Only declare `@theme` variables that are shared globally. Not section-specific values.
<!-- END:css-architecture -->

<!-- BEGIN:css-base -->
## base.css Contents

```css
/* Headings — target both tag and class */
h1, .h1 { @apply text-heading-1 max-768:text-22; }
h2, .h2 { @apply text-heading-2 max-768:text-20; }
/* h3–h6 follow same pattern */

/* Paragraphs */
.content p { @apply text-16; }
.content p + p { @apply mt-10; }

/* Title color helpers */
.title-{color} h1,
.title-{color} h2 /* ... through h6 */ { @apply text-{color}; }

/* Content color helpers */
.content-{color} p { @apply text-{color}; }

/* Containers (X-axis padding from Figma) */
.container-fluid    { @apply px-50; }
.container-fluid-md { @apply px-80; }
.container-fluid-lg { @apply px-100; }

/* General padding (Y-axis from Figma) */
.general-padding { @apply py-100 max-1199:py-50 max-768:py-30; }
```
<!-- END:css-base -->

<!-- BEGIN:css-components -->
## component.css Contents

```css
/* Base button */
.btn {
  @apply px-16 py-8 inline-flex text-center rounded-[10px] border border-solid cursor-pointer transition-all duration-300;
}

/* Variants — from Figma, with hover + transitions */
.btn-primary {
  @apply text-white bg-black border-black hover:bg-white hover:text-black;
}
/* Add further variants as needed */

/* Inputs, textareas, selects — match Figma exactly */
input, textarea, select { @apply ...; }
```

Rules:
- Every button variant must have hover effect with transition.
- Inputs/textarea/select must match Figma colors, font sizes, spacing, borders exactly.
- Check if paragraph/button style matches a global style before adding section-specific class.
<!-- END:css-components -->

<!-- BEGIN:css-layout -->
## layout.css Contents

All header, navigation, and footer CSS only. Nothing else belongs here.
<!-- END:css-layout -->

<!-- BEGIN:css-utilities -->
## utilities.css Contents

Section-specific and helper utility classes only.

**Every selector must be scoped under its section parent class:**

```css
/* Correct — scoped */
.hero-section .hero-section__heading {
  @apply max-w-600 text-heading-1 max-768:text-heading-3;
}
.hero-section .hero-section__description {
  @apply max-w-500 text-18 max-768:text-16;
}

/* Wrong — unscoped */
.hero-section__heading { @apply ...; }
```

Example full section pattern:
```css
/* utilities.css */
.hero-section .hero-section__heading {
  @apply max-w-600 text-heading-1 max-768:text-heading-3;
}
```
```tsx
/* HeroSection.tsx */
<section className="hero-section general-padding">
  <div className="container-fluid">
    <div className="title title-black">
      <h1 className="hero-section__heading">{heroData.heading}</h1>
    </div>
    <div className="content content-black">
      <p className="hero-section__description">{heroData.description}</p>
    </div>
  </div>
</section>
```

When creating a new section:
1. Identify headings, descriptions, buttons — apply `.title`, `.content`, `.btn` first.
2. Check if styles match global definitions in `base.css`/`component.css` before adding new classes.
3. Only create section-scoped classes where style genuinely differs from globals.
4. Assign BEM-style names derived from parent section class.
<!-- END:css-utilities -->

<!-- BEGIN:slider-rules -->
## Slider Rules (Swiper Only)

Only Swiper.js. No other slider library.

```tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
```

Every Swiper instance must include:
- `loop={true}`
- `autoplay={{ delay: 3000, disableOnInteraction: false }}`
- `slidesPerView` — matching Figma desktop
- `spaceBetween` — matching Figma pixel values
- `breakpoints` — responsive for tablet/mobile per Figma
- `modules={[Autoplay, Navigation, Pagination]}` — only used modules
- `aria-label` on the wrapper element

```tsx
<Swiper
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  slidesPerView={3}
  spaceBetween={24}
  breakpoints={{
    0:    { slidesPerView: 1, spaceBetween: 16 },
    768:  { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  }}
  modules={[Autoplay, Navigation, Pagination]}
  aria-label="Product highlights carousel"
  className="testimonials-slider"
>
```

- Nav buttons must have `aria-label="Previous slide"` / `aria-label="Next slide"`.
- On mobile (≤ 425px): `slidesPerView` must be `1` unless Figma explicitly shows more.
<!-- END:slider-rules -->

<!-- BEGIN:accordion-rules -->
## Accordion Rules

1. First accordion item open by default. Only one open at a time.
2. Animation via CSS height transition — never `display:none/block`. Use ref-based actual height.

```tsx
const [activeIndex, setActiveIndex] = useState<number>(0);
const toggle = (index: number) => {
  setActiveIndex(prev => (prev === index ? -1 : index));
};

// Panel:
<div
  ref={panelRef}
  style={{
    height: isOpen ? panelRef.current?.scrollHeight + "px" : "0px",
    overflow: "hidden",
    transition: "height 0.3s ease",
  }}
  role="region"
  aria-labelledby={`accordion-trigger-${index}`}
>
```

3. Trigger must have: `aria-expanded={isOpen}`, `aria-controls={panelId}`, `type="button"`, `aria-label`.
4. Panel must have: `id={panelId}`, `role="region"`, `aria-labelledby={triggerId}`.
<!-- END:accordion-rules -->

<!-- BEGIN:ada-rules -->
## Accessibility (ADA) Rules

1. All interactive elements need descriptive `aria-label` or `aria-labelledby`. Never generic.
2. All images: meaningful `alt`. Decorative images: `alt=""` + `role="presentation"`.
3. Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. All `<section>` inside `<main>`.
4. Color contrast: WCAG AA (4.5:1 normal text, 3:1 large). Never convey info by color alone.
5. All interactive elements keyboard-navigable with visible focus indicators.
6. Use `role` where native semantics insufficient:
   - Navigation: `role="navigation"`
   - Modals: `role="dialog"`, `aria-modal="true"`
   - Accordion triggers: `role="button"`, `aria-expanded`, `aria-controls`
   - Sliders/carousels: `role="region"`, `aria-label`
   - Decorative icons: `aria-hidden="true"`
7. Accordion: trigger has `aria-expanded` + `aria-controls`; panel has `id` + `role="region"` + `aria-labelledby`.
8. Swiper: wrapper has `aria-label`; nav buttons have descriptive `aria-label`.
9. Skip-to-content link at top of layout: `<a href="#main-content" className="skip-to-content">Skip to main content</a>`.
10. Form errors associated with input via `aria-describedby`.
11. Never `tabIndex > 0`. Use `tabIndex={0}` for focusable non-interactive, `tabIndex={-1}` to remove from order.
<!-- END:ada-rules -->

<!-- BEGIN:seo-rules -->
## SEO Rules

1. Exactly one `<h1>` per page. Headings follow logical order (h1→h2→h3). Never skip levels.
2. Semantic structure: `<main>` wraps primary content, `<nav>` wraps navigation, `<article>` for standalone content.
3. Always `<Image>` from `next/image` (lazy loading, WebP, srcSet). Accurate `width`/`height` to prevent CLS. `priority` for above-fold images. Descriptive `alt`.
4. Internal links: `<Link href="/path">`. External: `target="_blank" rel="noopener noreferrer"`. All links: descriptive text or `aria-label`. No "Click here".
5. URL slugs: lowercase, hyphen-separated. No underscores or query strings.
6. Every page must include via App Router `metadata` export:
   ```tsx
   export const metadata: Metadata = {
     title: "Page Title | Brand Name",       // unique, under 60 chars
     description: "150–160 char description.",
     openGraph: {
       title: "Page Title | Brand Name",
       description: "OG description.",
       url: "https://yoursite.com/page",
       images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
     },
   };
   ```
7. Performance: avoid render-blocking resources. Use `next/font`. Minimize `use client`. Keep server-rendered where possible.
8. Where applicable (blog, products, FAQs): add JSON-LD structured data via `<script type="application/ld+json">` in `<head>`.
<!-- END:seo-rules -->