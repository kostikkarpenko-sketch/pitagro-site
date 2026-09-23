import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const configuredUrl = (env.SITE_URL || '').trim();
  let siteUrl = '';
  if (configuredUrl) {
    const url = new URL(configuredUrl);
    if (url.protocol !== 'https:' || url.username || url.password || url.port || url.pathname !== '/' || url.search || url.hash || url.hostname === 'localhost') {
      throw new Error('SITE_URL must be a public HTTPS origin, e.g. https://pitagro.com');
    }
    siteUrl = url.origin + '/';
  }
  const indexable = env.SITE_INDEXABLE === 'true';
  if (indexable && !siteUrl) throw new Error('An indexable build requires SITE_URL.');
  const title = 'PITAGRO | Practical technology. Simpler fieldwork.';
  const description = 'Practical agricultural technology for field sampling, navigation and crop observation. Explore the PITAGRO product family and its development progress.';
  const escape = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
  const metadata: Plugin = {
    name: 'pitagro-static-metadata',
    transformIndexHtml(html) {
      const tags: { name?: string; property?: string; content: string }[] = [
        { name: 'description', content: description },
        { name: 'robots', content: indexable ? 'index, follow, max-image-preview:large' : 'noindex, nofollow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:site_name', content: 'PITAGRO' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        ...(siteUrl ? [
          { property: 'og:url', content: siteUrl },
          { property: 'og:image', content: new URL('brand/pitagro-approved.jpg', siteUrl).href },
          { property: 'og:image:width', content: '1254' },
          { property: 'og:image:height', content: '1254' },
          { property: 'og:image:type', content: 'image/jpeg' },
          { property: 'og:image:alt', content: 'The approved PITAGRO master logo: Practical Integrated Technology for Agriculture.' },
        ] : []),
      ];
      const meta = tags.map((tag) => `<meta ${tag.name ? 'name' : 'property'}="${escape(tag.name || tag.property!)}" content="${escape(tag.content)}" />`).join('\n    ');
      const canonical = siteUrl ? `\n    <link rel="canonical" href="${escape(siteUrl)}" />` : '';
      return html.replace(/\s*<meta name="(?:description|robots)"[^>]*>/g, '').replace('</head>', `    ${meta}${canonical}\n  </head>`);
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: indexable ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n` : 'User-agent: *\nDisallow: /\n' });
      if (indexable) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(siteUrl)}</loc></url></urlset>\n` });
    },
  };
  return { base: '/', plugins: [react(), metadata] };
});

