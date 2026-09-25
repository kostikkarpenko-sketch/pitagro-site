import { useEffect, useState } from 'react';
import { about, brand, contactConfig, hero, mediaConfig, productModules, recordPreview, sampleSection } from './data/siteConfig';
import { ProductPreview } from './components/ProductPreview';

const navigation = [
  { label: 'Products', href: '#products' },
  { label: 'PIT Sample', href: '#pit-sample' },
  { label: 'About', href: '#about' },
];

function Icon({ name }: { name: 'arrow' | 'menu' | 'close' | 'mail' | 'play' | 'check' | 'field' | 'route' | 'linkedin' }) {
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.74H4.98V9.2h2.95v9.54ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.28 10.84h-2.95V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.72H9.52V9.2h2.83v1.3h.04c.4-.74 1.36-1.53 2.8-1.53 3 0 3.55 1.97 3.55 4.53v5.24Z" /></svg>;
  return <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'arrow' && <><path d="M4 12h15M13 6l6 6-6 6" /></>}
    {name === 'menu' && <path d="M3 7h18M3 17h18" />}
    {name === 'close' && <path d="m5 5 14 14M5 19 19 5" />}
    {name === 'mail' && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>}
    {name === 'play' && <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></>}
    {name === 'check' && <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>}
    {name === 'field' && <><path d="M3 16c6-5 12-5 18 0M3 21c6-5 12-5 18 0M12 12V6M12 8C6 9 5 6 5 3c5 0 7 2 7 5ZM12 6c0-4 3-5 7-5 0 4-2 6-7 5Z" /></>}
    {name === 'route' && <><circle cx="5" cy="19" r="2" /><circle cx="19" cy="5" r="2" /><path d="M7 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h5M13 1l2 2-2 2" /></>}
  </svg>;
}

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <a className="wordmark" href="#top" aria-label="PITAGRO home"><img src={brand.logo} alt="PITAGRO" width="1280" height="256" loading={footer ? 'lazy' : 'eager'} /></a>;
}

function ProductIcon({ src, className = '' }: { src?: string; className?: string }) {
  return <span className={`product-icon ${src ? '' : 'product-icon-pending'} ${className}`} aria-hidden="true">
    {src ? <img src={src} width="640" height="640" alt="" loading="lazy" decoding="async" /> : <span>Product<br />preview</span>}
  </span>;
}

function statusClass(status: string) {
  return status === 'Field-tested prototype' ? 'status-tested' : status === 'In development' ? 'status-development' : 'status-planned';
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactNotice, setContactNotice] = useState('');
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        if (menuOpen) document.getElementById('menu-toggle')?.focus();
      }
    };
    const media = window.matchMedia('(min-width: 601px)');
    const closeMenu = () => { if (media.matches) setMenuOpen(false); };
    document.addEventListener('keydown', escape);
    media.addEventListener('change', closeMenu);
    return () => { document.removeEventListener('keydown', escape); media.removeEventListener('change', closeMenu); };
  }, [menuOpen]);

  const linkedinPending = () => setContactNotice('The PITAGRO LinkedIn page is being prepared. The link will be added here when it is ready.');
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo />
          <button className="menu-toggle" id="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>Menu <Icon name={menuOpen ? 'close' : 'menu'} /></button>
          <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} id="site-navigation" aria-label="Primary navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </nav>
          <a className="button button-dark header-cta" href="#pit-sample">Explore PIT Sample <Icon name="arrow" /></a>
        </div>
      </header>
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-stage">
            <img className="hero-landscape" src="/media/pitagro-hero-field.jpg" width="1280" height="720" alt="" fetchPriority="high" />
            <div className="hero-shade" aria-hidden="true" />
            <div className="container hero-inner">
              <div className="hero-copy">
                <p className="eyebrow">{hero.eyebrow}</p>
                <h1 id="hero-heading"><span>Practical technology.</span><span className="hero-accent">Simpler fieldwork.</span></h1>
                <p className="hero-description">{hero.blurb}</p>
                <div className="hero-actions">
                  <a className="button button-lime" href={hero.primaryCtaTarget}>{hero.primaryCtaLabel}<Icon name="arrow" /></a>
                  <a className="text-link" href={hero.secondaryCtaTarget}>{hero.secondaryCtaLabel}<Icon name="arrow" /></a>
                  {mediaConfig.sampleVideoUrl && <a className="video-cta" href={mediaConfig.sampleVideoUrl}><Icon name="play" />Watch PIT Sample in the field</a>}
                </div>
              </div>
              <div className="hero-photo-space"><p className="handwritten hero-inscription">It all starts<br />with the soil.</p></div>
              <p className="hero-footnote"><span aria-hidden="true" />Practical technology. Real fieldwork.</p>
            </div>
          </div>
          <div className="proof-strip">
            <div className="container proof-grid" aria-label="PIT Sample at a glance">
              <p><Icon name="check" /><span>Field-tested prototype</span></p>
              <p><Icon name="field" /><span>Built around real fieldwork</span></p>
              <p><Icon name="route" /><span>Guided sampling workflow</span></p>
            </div>
          </div>
        </section>
        <section className="sample-section section" id="pit-sample" aria-labelledby="sample-heading">
          <div className="container">
            <div className="sample-intro">
              <div>
                <div className="product-lockup"><ProductIcon src="/brand/pit-sample-icon.png" /><span>PIT Sample</span></div>
                <h2 id="sample-heading">Guided sampling.<br />Clear records.</h2>
              </div>
              <div className="sample-intro-copy">
                <span className="status status-tested"><span className="status-dot" />Field-tested prototype</span>
                <p>{sampleSection.blurb}</p><p className="handwritten">From soil to insight.</p>
              </div>
            </div>
            <ol className="workflow-grid">
              {sampleSection.steps.map((step, index) => <li className={`workflow-step workflow-${step.title.toLowerCase()}`} key={step.title}>
                <div className="workflow-media">
                  {step.title === 'Record' ? <ProductPreview media={recordPreview} /> : <img src={step.image} alt={step.alt} loading="lazy" decoding="async" />}
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="workflow-title"><h3>{step.title}</h3>{index < 3 && <Icon name="arrow" />}</div>
                <p>{step.description}</p>
              </li>)}
            </ol>
          </div>
        </section>
        <section className="products-section section" id="products" aria-labelledby="products-heading">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">The PITAGRO product family</p><h2 id="products-heading">Different tools.<br />The same field-first thinking.</h2></div>
              <p className="section-description">Sampling, navigation and crop observation.<br />Practical technology, built around the work.</p>
            </div>
            <div className="product-grid">
              {productModules.map((product) => <article className={`product-card product-${product.id}`} aria-labelledby={`product-${product.id}-heading`} key={product.id}>
                <ProductIcon src={product.icon} />
                <div className="product-card-content">
                  <h3 id={`product-${product.id}-heading`}>PIT <span>{product.name.replace('PIT ', '')}</span></h3>
                  <p>{product.summary}</p>
                  <span className={`status ${statusClass(product.status)}`}><span className="status-dot" />{product.status}</span>
                  <ProductPreview media={product.preview} />
                </div>
              </article>)}
            </div>
            <aside className="lens-focus" aria-labelledby="lens-focus-heading">
              <div className="lens-brand"><ProductIcon src="/brand/pit-lens-icon.png" /><span>PIT Lens</span></div>
              <div className="lens-focus-copy"><p className="eyebrow">Development focus</p><h3 id="lens-focus-heading">A closer view of the field.</h3><p>PIT Lens is being developed for crop and trial monitoring over time with PITCam.</p></div>
              <div className="lens-definition"><span className="status status-development"><span className="status-dot" />In development</span><dl><div><dt>PIT Lens</dt><dd>The application</dd></div><div><dt>PITCam</dt><dd>The field camera</dd></div></dl></div>
            </aside>
          </div>
        </section>
        <section className="about-section" id="about" aria-labelledby="about-heading">
          <img className="about-landscape" src="/media/pitagro-field-panorama.jpg" width="1280" height="720" alt="Rolling crop fields and hedgerows in the evening light." loading="lazy" />
          <div className="about-shade" aria-hidden="true" />
          <div className="container about-content">
            <div><p className="eyebrow">About PITAGRO</p><h2 id="about-heading">{about.heading}</h2></div>
            <div className="about-copy"><p>Built from practical field experience and designed around real agricultural workflows.</p><a className="text-link" href="#products">Meet the product family<Icon name="arrow" /></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><BrandLogo footer /><p>{brand.shortDescriptor}</p></div>
          <nav className="footer-nav" aria-label="Footer navigation"><p className="footer-label">Explore</p>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#contact">Contact</a><a href="/support/">Support</a><a href="/privacy/">Privacy Policy</a></nav>
          <div className="footer-contact" id="contact">
            <h2 className="footer-label">Stay connected</h2>
            <div className="social-links">
              {contactConfig.linkedinUrl ? <a className="social-button" href={contactConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="PITAGRO on LinkedIn (opens in a new tab)"><Icon name="linkedin" /></a> : <button className="social-button" type="button" aria-label="LinkedIn page coming soon" onClick={linkedinPending}><Icon name="linkedin" /></button>}
              {contactConfig.email ? <a className="social-button" href={`mailto:${contactConfig.email}`} aria-label="Email PITAGRO"><Icon name="mail" /></a> : <button className="social-button" type="button" aria-label="Email contact coming soon" onClick={() => setContactNotice('Our public email address will be added here soon.')}><Icon name="mail" /></button>}
            </div>
            {contactConfig.linkedinUrl ? <a className="linkedin-follow" href={contactConfig.linkedinUrl} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />Follow PIT Agro on LinkedIn</a> : <button className="linkedin-follow" type="button" onClick={linkedinPending}><Icon name="linkedin" />Follow PIT Agro on LinkedIn</button>}
            {contactConfig.email && <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>}
            <p className="contact-notice" role="status">{contactNotice || (!contactConfig.linkedinUrl && !contactConfig.email ? 'Contact channels are being prepared.' : '')}</p>
          </div>
        </div>
        <div className="container footer-bottom"><span>PITAGRO</span><p>Practical technology. Simpler fieldwork.</p><a href="#top">Back to top<Icon name="arrow" /></a></div>
      </footer>
    </div>
  );
}

