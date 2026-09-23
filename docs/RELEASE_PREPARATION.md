# PITAGRO release preparation, 2026-09-23

This is a focused continuation of the existing website, not a new brand or application. No site has been published and no domain, DNS, registrar or external account settings have been changed.

## Changes

- Preserved the approved section order, hero photograph, four-step workflow, existing product identity and lower landscape.
- Replaced the rejected tightly tracked Manrope headings with DM Sans, with more open word spacing. Body/UI remains Inter; the two handwritten accents remain Caveat. Fonts and their OFL licenses are packaged locally.
- Moved the desktop handwritten phrase into open space away from the operator's face; retained the warm-white mobile treatment.
- Enlarged the evidence strip labels and icons, preserving the three existing claims.
- Added PIT Scout as Product preview, after the existing four products. No release claims or substitute logo were invented. The approved standalone Scout icon is still missing.
- Added a shared ProductPreview component, connected to every product's optional preview field and to the existing workflow route screenshot. Screenshots use contain; concepts receive a Design preview label; missing media produces no fake UI.
- Preserved the existing statuses: Sample and Point Field-tested prototype, Lens In development, Sky Planned.
- Added an actual LinkedIn SVG icon and Follow PIT Agro on LinkedIn control. Until a real URL is supplied, clicking explains that the page is being prepared, rather than navigating to an invented profile. Email behaves similarly.
- Improved keyboard focus, menu Escape handling and menu closure after navigation/resizing.
- Added static title, description, favicon references, Open Graph metadata and configurable canonical URL. Public builds generate robots.txt and sitemap.xml; ordinary previews remain noindex.
- Updated deployment instructions and removed the obsolete pnpm build-policy placeholder. Added ignore rules for local environment files, build output and screenshots.

## Actual image paths

| Use | Path |
| --- | --- |
| Header/footer approved original, 1280 x 256 | /brand/pitagro-logo-header.png |
| PIT Sample icon, 640 x 640 | /brand/pit-sample-icon.png |
| PIT Point icon, 640 x 640 | /brand/pit-point-icon.png |
| PIT Lens icon, 640 x 640 | /brand/pit-lens-icon.png |
| PIT Sky icon, 640 x 640 | /brand/pit-sky-icon.png |
| Hero and Navigate photograph, 1280 x 720 | /media/pitagro-hero-field.jpg |
| Plan photograph, 1672 x 941 | /media/workflow-plan.png |
| Sample photograph, 1086 x 1448 | /media/workflow-sample.png |
| Temporary Record route screenshot, 588 x 1280 | /media/pit-sample-screen.jpg |
| Lower panorama, 1280 x 720 | /media/pitagro-field-panorama.jpg |
| LinkedIn Open Graph image in a configured public build | /brand/pitagro-approved.jpg |
| Approved favicon assets | /favicon.ico, /brand/favicon-32.png, /brand/favicon-48.png, /brand/apple-touch-icon.png |

## Checks performed

- TypeScript app and Vite configuration checks.
- Vite production build and a separate local domain-configured build in dist-release-check; neither was uploaded.
- Actual browser inspection at 1440 x 1000, 820 x 1180 and 390 x 844. The desktop browser scrollbar consumes 15 CSS pixels; requested viewport sizes are recorded as such, not claimed to be real iPhone hardware.
- No horizontal document overflow or broken internal anchors was found at those widths.
- Approved icon currentSrc paths and natural dimensions were inspected, along with original hero resolution.
- Mobile menu tested with Escape and section-link navigation; LinkedIn preparation notice tested by clicking.
- Browser console showed no errors/warnings in the inspected session.
- Fixed two integration defects found during review: unconstrained SVG arrow sizes and intrinsic screenshot overflow in the Record frame. All four workflow frames now have equal outer height at each checked breakpoint.
- Domain metadata checks confirmed preview noindex/no canonical, and release canonical, Open Graph image URL, indexable robots and sitemap for https://pitagro.com/.
- Full-page browser stitching produced duplicated strips, so only genuine viewport screenshots are supplied, not the faulty stitched image.

Screenshots are saved under screenshots/release-preparation/ (desktop, tablet, mobile and section views). These are local review artifacts, excluded from the website build.

## Still needed from the owner

- Final LinkedIn page URL and public email, if desired.
- GitHub account/organisation and website repository; confirm GitHub Pages as the hosting provider.
- The standalone approved PIT Scout icon and confirmation of its concise product description/status.
- A genuine saved Sampling Record screenshot. The present image is explicitly labelled PIT Sample route view and is not misrepresented as a saved record.
- Real screenshots for other products when ready. No fake application screens were added.
- Transparent header logo export, or permission for deterministic background-only PNG processing. The v02 pack explicitly contains opaque RGB files. A generated background-removal attempt altered edges/internal detail and was rejected; it is NOT used by the site. The original approved logo is untouched. The white logo rectangle is therefore still a known outstanding item.

## Files changed

- src/App.tsx
- src/data/siteConfig.ts
- src/main.tsx
- src/styles.css
- src/release.css (new)
- src/components/ProductPreview.tsx (new)
- src/deployment/publicConfig.ts (new)
- index.html
- vite.config.ts
- package.json and package-lock.json (font packages and TypeScript type dependencies)
- pnpm-workspace.yaml
- .env.example (new)
- .gitignore (new)
- README.md
- docs/DEPLOYMENT.md (new)
- docs/RELEASE_PREPARATION.md (this report)
- public/favicon.ico and public/brand/favicon-32.png, favicon-48.png, apple-touch-icon.png (approved pack exports)
- public/fonts/licenses/DM-Sans-OFL.txt, Inter-OFL.txt, Caveat-OFL.txt (new)

PIT Sample and PIT Lens application repositories and read-only sources/ were not modified. Historical v0.3 feedback notes remain reference material; this report records the present implementation and outstanding items.
