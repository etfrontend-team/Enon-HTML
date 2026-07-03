# Next.js Project Setup

Sets up a new Next.js project with TypeScript, Tailwind CSS, custom folder structure, DefaultLayout, and shared components.

## Steps

### 1. Initialize Next.js App

Run the following and answer the prompts exactly as specified:

```bash
npx create-next-app@latest .
```

Answer the prompts:
- TypeScript → **Yes**
- ESLint → **Yes**
- React Compiler → **No**
- Tailwind CSS → **Yes**
- Code inside `src/` → **Yes**
- App Router → **No**
- Import alias → **Yes**
- Alias → `@/*`
- Add AGENTS.md → **No**

---

### 2. Remove the `api` folder

```bash
rm -rf src/pages/api
```

---

### 3. Replace `src/pages/index.tsx`

Overwrite the file with:

```tsx
export default function Home() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
```

---

### 4. Replace `src/styles/globals.css`

Replace all content with:

```css
@import "tailwindcss";
@import './base.css';
@import './component.css';
@import './layout.css';
@import './utilities.css';
```

---

### 5. Create CSS partials inside `src/styles/`

```bash
touch src/styles/base.css src/styles/component.css src/styles/layout.css src/styles/utilities.css
```

| File | Purpose |
|------|---------|
| `base.css` | Global resets, typography defaults, root-level element styles |
| `component.css` | Reusable component classes (buttons, cards, badges, etc.) |
| `layout.css` | Page-level layout classes (containers, grids, sections) |
| `utilities.css` | One-off utility overrides not covered by Tailwind |

---

### 6. Create folder structure inside `src/`

```bash
mkdir -p src/sections src/layouts src/components/shared src/components/forms src/components/ui
```

---

### 7. Create `src/components/shared/Header.tsx`

```tsx
export default function Header() {
  return (
    <header>
      <p>Header</p>
    </header>
  );
}
```

---

### 8. Create `src/components/shared/Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}
```

---

### 9. Create `src/layouts/DefaultLayout.tsx`

```tsx
import type { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

function slugToTitle(pathname: string): string {
  const slug =
    pathname === "/"
      ? "home"
      : pathname.split("/").filter(Boolean).pop() ?? "home";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const title = `ENON | ${slugToTitle(pathname)}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```