# Operating Systems — ECE_ΓΚ702

Course materials site for the **Operating Systems (ECE_ΓΚ702)** class at the University of Patras.
It presents the course intro, prerequisites, graded **activities** (PDF handouts), **tutorial
exercises**, and a short x86 **Assembly quick guide**, with a bilingual **English / Greek** toggle
and a **dark / light** theme switch.

The repository ships the site in two forms:

1. **`index.html`** — a single, self-contained static page (no build step, no dependencies).
2. A full **Next.js** application (the original source under `src/`).

---

## 1. Single-file version (`index.html`)

[`index.html`](./index.html) is a standalone, dependency-free version of the site. Everything —
markup, styling, bilingual content, theming, scroll-spy navigation, and the tutorial viewer — lives
in that one file. The only external resource is a Google Fonts stylesheet, with a graceful serif
fallback when offline.

### Features

- Bilingual content (EN / GR) with the choice persisted in `localStorage`.
- Dark / light theme toggle, also persisted, defaulting to your OS preference.
- Sticky "on this page" side navigation with scroll-spy highlighting.
- Activities open the handout **PDFs, which are embedded directly in the file** (base64), so they
  work even if you copy `index.html` somewhere else on its own.
- Tutorial exercises open in an in-page modal with their content rendered inline.

### How to use it

Just open the file in a browser — no server, no other files needed:

```bash
# macOS
open index.html
# Linux
xdg-open index.html
```

The activity PDFs are embedded in the page and opened in a new tab via Blob URLs, so the page is
fully self-contained and portable. (Browsers block top-level navigation to `data:` URLs, which is
why Blob URLs are used.) As a graceful fallback, each activity link also points at the matching
file under `public/handouts/` if the embedded copy is ever removed.

To update the standalone page, edit the `content` (course copy), `tutorials` (exercise bodies),
and the inline `<style>` block directly inside `index.html`.

---

## 2. Next.js application

The original source is a [Next.js](https://nextjs.org/) app using the App Router, Tailwind CSS,
and MDX for tutorial content.

### Run with Docker (recommended)

This project uses `docker-compose`.

- Build: `docker-compose build dev` (development) or `docker-compose build prod` (production).
  For **dev** you only need to build once — changes refresh automatically via a shared volume.
  For **prod** you must rebuild after each change.
- Run: `docker-compose up dev` or `docker-compose up prod` (add `-d` to detach).
- Clean up: `docker-compose down --remove-orphans` between builds and when switching environments
  to avoid collisions from prior builds or runs.

Default host ports are **3000** for dev and **8080** for prod. You can change these in
`docker-compose.yaml`, though routing them through a reverse proxy is strongly advised if possible.

### Run locally with Node

```bash
npm install
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

---

## Project structure

```
.
├── index.html                 # Standalone single-file version of the site
├── public/
│   ├── handouts/              # Activity PDFs
│   └── tutorials/             # Tutorial markdown sources
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx           # Home page (intro, activities, exercises, assembly guide)
│   │   ├── handouts/[handout] # PDF viewer route
│   │   └── tutorials/[tutorial]
│   ├── components/            # Header, Section, ...
│   ├── content/tutorials/     # MDX tutorial content
│   ├── context/LangContext.tsx# EN/GR language provider
│   └── data/                  # Handout & tutorial metadata
├── Dockerfile
└── docker-compose.yaml
```

---

## Adding new handouts (activities)

To add a new handout you need to perform three mandatory steps:

1. Add the PDF of the handout in the `public/handouts/` directory. Follow the naming convention
   already used and actively avoid case-sensitive namings.
2. List the handout in `src/data/handouts.ts`. The title used there shows up on the individual
   listing page (`domain.tld/handouts/handout-name`).
3. Add a listing for the handout in `src/app/page.tsx` for easier discovery — include a link to the
   individual listing and a brief description of the handout's value to the student.

If you also maintain the standalone `index.html`, add the handout to its `content.en.handouts` and
`content.gr.handouts` arrays (with the `href` pointing to the PDF under `public/handouts/`), and
re-embed the PDFs so the file stays self-contained:

```bash
# regenerate the embedded base64 PDFs in index.html
node -e 'const fs=require("fs"),p=require("path"),d="public/handouts";
const e=fs.readdirSync(d).filter(f=>f.endsWith(".pdf")).sort().map(f=>JSON.stringify(f.replace(/\.pdf$/,""))+":"+JSON.stringify(fs.readFileSync(p.join(d,f)).toString("base64")));
let h=fs.readFileSync("index.html","utf8");
h=h.replace(/window\.HANDOUT_PDFS\s*=\s*\{[\s\S]*?\};/,"window.HANDOUT_PDFS = {\n      "+e.join(",\n      ")+"\n    };");
fs.writeFileSync("index.html",h);'
```

## Adding new tutorial exercises

1. Add the MDX content under `src/content/tutorials/` (e.g. `tutorial_4.mdx`).
2. Register it in `src/app/tutorials/[tutorial]/page.tsx` and add metadata in `src/data/tutorials.ts`.
3. For the standalone `index.html`, add an entry to the `tutorials` object and to the
   `content.*.tutorials` arrays.
