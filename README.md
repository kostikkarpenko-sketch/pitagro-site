# PITAGRO website

Existing React + TypeScript + Vite landing page. Approved brand assets, imagery and section order are preserved. This repository is separate from every PIT application.

## Local use

Use Node.js 22+ and npm. Run `npm ci`, `npm run build`, then `npm run preview -- --host 127.0.0.1 --port 5183 --strictPort`. Open http://localhost:5183/. This is a local preview, not a public hosting service. `npm run dev` is for development.

Fonts are packaged locally; Google Fonts requests are not required. The installed fonts include their license files in their npm packages.

## Configuration

Copy the settings in `.env.example` into a local `.env.local` or the future hosting build environment. Defaults remain noindex. The final public build needs `SITE_URL=https://pitagro.com` and `SITE_INDEXABLE=true`, after ownership and the release are approved.

`VITE_LINKEDIN_URL` and `VITE_CONTACT_EMAIL` are public website settings. Do not put secrets in VITE variables. Empty contact settings produce clearly explained preparation buttons, not fake destinations.

## Products and approved media

Edit `src/data/siteConfig.ts`. All five products accept an optional `preview` through `src/components/ProductPreview.tsx`. Missing media renders nothing. Real application screens use `kind: 'screenshot'`; design concepts use `kind: 'concept'` and get an explicit design-preview caption. Screenshot images are contained rather than cropped.

The Record workflow image is still the supplied route screen, honestly captioned as such. A real saved Sampling Record is still required. PIT Scout has no approved standalone icon in the current web pack; no substitute logo has been generated.

## Release preparation

See [deployment and DNS instructions](docs/DEPLOYMENT.md) and [change notes](docs/RELEASE_PREPARATION.md). Nothing has been deployed. GitHub Pages is the working hosting assumption from the owner's earlier discussion; no GitHub or registrar settings have been changed.

Do not publish the workspace root. Only `dist/` is the website artifact. Never publish `sources/`, local attachments, logs, reference documents or environment files. `sources/` remains read-only.

