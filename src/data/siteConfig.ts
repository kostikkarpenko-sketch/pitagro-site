import type { ProductPreviewMedia } from '../components/ProductPreview';
import { publicContact } from '../deployment/publicConfig';

export type ModuleStatus = 'Field-tested prototype' | 'In development' | 'Planned' | 'Product preview';
export const brand = {
  name: 'PITAGRO',
  shortDescriptor: 'Practical Integrated Technology for Agriculture',
  platformName: 'PITAGRO products',
  logo: '/brand/pitagro-logo-header.png',
};
export const contactConfig = publicContact;
// Only populate this with a real, owner-approved video.
export const mediaConfig = {
  sampleVideoUrl: '', // A brand film is not a PIT Sample application demonstration.
  brandFilmUrl: 'https://www.youtube.com/shorts/y0P5jZ_ilMw',
  youtubeUrl: 'https://www.youtube.com/@PITAgroUK',
  instagramUrl: 'https://www.instagram.com/pitagro.app/',
};

export type ProductModule = {
  id: string;
  name: string;
  status: ModuleStatus;
  icon?: string;
  summary: string;
  preview?: ProductPreviewMedia;
};

// Only use owner-approved product icons and media.
// Concept images must use kind: 'concept'; they are labelled as design previews.
export const productModules: ProductModule[] = [
  { id: 'sample', name: 'PIT Sample', status: 'Field-tested prototype', icon: '/brand/pit-sample-icon.png', summary: 'Guided sampling workflows with route planning, field guidance and records.' },
  { id: 'point', name: 'PIT Point', status: 'Field-tested prototype', icon: '/brand/pit-point-icon.png', summary: 'Precision navigation for reaching and revisiting important field locations.' },
  { id: 'lens', name: 'PITSense', status: 'In development', icon: '/brand/pit-lens-icon.png', summary: 'Crop and trial observation with PITCam. Soil-moisture and leaf-wetness monitoring are planned extensions.' },
  { id: 'sky', name: 'PIT Sky', status: 'Planned', icon: '/brand/pit-sky-icon.png', summary: 'Aerial crop observation and field mapping.' },
  { id: 'scout', name: 'PIT Scout', status: 'In development', icon: '/brand/pit-scout-icon.png', summary: 'Record field walks, photos and observations, then bring the visit together in a report.' },
  { id: 'yield', name: 'PIT Yield', status: 'In development', icon: '/brand/pit-yield-logo.jpg', summary: 'An early development direction focused on yield potential. Product details will follow.' },
  { id: 'support', name: 'PIT Support', status: 'In development', icon: '/brand/pit-support-icon.png', summary: 'Weather, agricultural information and market context to help plan fieldwork.' },
  { id: 'sport', name: 'PIT Sport', status: 'In development', icon: '/brand/pit-sport-icon.jpg', summary: 'Workout logging and FIELD FIT movement routines built around the agricultural working day.' },
  { id: 'strategy', name: 'PIT Strategy', status: 'In development', icon: '/brand/pit-strategy-mark.svg', summary: 'An agricultural strategy game exploring crop rotation and field decisions through fictional farming scenarios.' },
];

export const hero = {
  eyebrow: 'Practical Integrated Technology for Agriculture',
  heading: 'Practical agricultural technology for real fieldwork.',
  blurb: 'Soil sampling, crop scouting and field intelligence \u2014 built around the way agricultural work actually happens.',
  primaryCtaLabel: 'See PIT Sample in action', primaryCtaTarget: '#pit-sample',
  supportingLine: 'Built in the UK. Designed for practical field use.',
  secondaryCtaLabel: 'Our products', secondaryCtaTarget: '#products',
};

export const sampleSection = {
  heading: 'Guided sampling. Clear records.',
  blurb: 'Our flagship product, field-tested and being prepared for iOS release. Plan a route, follow it in the field and record your sampling work. Not yet publicly released.',
  steps: [
    { title: 'Plan', description: 'Prepare your sampling route before heading out.', image: '/media/workflow-plan.png', alt: 'Field map, notebook and laptop on a farm workbench.' },
    { title: 'Navigate', description: 'Follow the route through the field.', image: '/media/pitagro-hero-field.jpg', alt: 'A field operator using a phone among growing crops.' },
    { title: 'Sample', description: 'Collect soil samples along your route.', image: '/media/workflow-sample.png', alt: 'A soil core held in a metal sampling probe against a crop field.' },
    { title: 'Record', description: 'Keep a clear record of your sampling work.', image: '/media/pit-sample-screen.jpg', alt: 'Actual PIT Sample field and route screen.' },
  ],
};
// Temporary route view, explicitly NOT a saved Sampling Record.
export const recordPreview: ProductPreviewMedia = {
  src: '/media/pit-sample-screen.jpg', alt: 'Actual PIT Sample field and route screen, not a saved sampling record.',
  width: 588, height: 1280, kind: 'screenshot', caption: 'PIT Sample route view',
};
export const about = {
  heading: 'Built around the work.',
  paragraphs: [
    'PIT Agro develops practical agricultural technology around real field workflows. The project brings together field experience, agronomy and digital tools to make tasks such as soil sampling, crop scouting, monitoring and field data collection simpler, clearer and more consistent.',
    'Built in the UK, PIT Agro is being developed from practical field use rather than around technology for its own sake.',
  ],
};

