# PITAGRO: custom-domain release plan

Prepared 2026-09-23. No deployment, purchase, DNS change or account change has been performed.

## Hosting assumption

GitHub Pages, following the owner's earlier discussion. Confirm the GitHub account/organisation and website repository before activating anything. Cloudflare Pages was mentioned in the old review README; these DNS values are specifically for GitHub Pages, not Cloudflare.

## Build

- Runtime: Node.js 22 or 24.
- Install: `npm ci`.
- Build: `npm run build`.
- Artifact: `dist/` only.
- Base path: `/`, for the custom domain. This configuration is NOT for an unconfigured `username.github.io/repository/` subdirectory.
- No server, database, API keys or app-repository access is needed.
- Local `vite preview` is not production hosting.

Public build environment:

```dotenv
SITE_URL=https://pitagro.com
SITE_INDEXABLE=true
VITE_LINKEDIN_URL=
VITE_CONTACT_EMAIL=
```

Populate contacts only with owner-approved destinations. Without a URL, the LinkedIn controls explain that the page is being prepared.

A public build emits canonical and Open Graph URLs, an indexable robots tag, robots.txt and sitemap.xml. A default preview remains noindex; it does not invent a canonical domain. Metadata is in the built HTML, not dependent on JavaScript execution by LinkedIn's crawler.

## DNS for GitHub Pages

After registering the domain: verify ownership in GitHub account/organisation Settings > Pages, using the exact TXT name and token GitHub supplies. Keep that TXT record. Add pitagro.com to the repository's Pages custom-domain setting BEFORE changing pointing records.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-ACCOUNT.github.io |

The CNAME requires your actual account or organisation name, with no repository suffix and no https prefix. Do not guess this value. Use the registrar's default TTL, typically 3600 seconds. Do not add wildcard records. Preserve unrelated mail/TXT records.

Optional IPv6: four AAAA records at @: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

The verification TXT is normally named `_github-pages-challenge-ACCOUNT`; its VALUE is account-specific and must come from GitHub, not this document.

Then enable GitHub Pages with a build/deploy workflow, set the custom domain, and enforce HTTPS when the certificate is ready. With pitagro.com selected as the custom domain and the www record configured, GitHub handles the www-to-apex redirect. Custom Actions deployment does not require a CNAME file in the artifact.

No deployment workflow is active in this project: publishing is deliberately a separate owner-approved step.

## Release checks when the domain is registered

1. Confirm actual GitHub owner/repository and Pages eligibility.
2. Confirm LinkedIn URL, public email and PIT Scout icon/details.
3. Approve the final local visual result and product statuses.
4. Verify domain ownership, configure custom domain, then DNS.
5. Build with the public environment, upload only dist and enable HTTPS.
6. Check apex/www redirect, HTTPS, favicon, canonical, robots, sitemap and the actual LinkedIn sharing preview.

No analytics, forms, cookies or invented social accounts were added.

## Official sources checked

- [GitHub custom domain and DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Vite static deployment](https://vite.dev/guide/static-deploy.html#github-pages)

