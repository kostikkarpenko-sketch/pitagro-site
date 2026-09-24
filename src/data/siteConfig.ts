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
export const mediaConfig = { sampleVideoUrl: '' };

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
  { id: 'lens', name: 'PIT Lens', status: 'In development', icon: '/brand/pit-lens-icon.png', summary: 'Being developed for crop and trial monitoring over time with PITCam.' },
  { id: 'sky', name: 'PIT Sky', status: 'Planned', icon: '/brand/pit-sky-icon.png', summary: 'Aerial crop observation and field mapping.' },
  { id: 'scout', name: 'PIT Scout', status: 'Product preview', icon: '/brand/pit-scout-icon.png', summary: 'Field scouting. Product details to follow.' },
];

export const hero = {
  eyebrow: 'Practical Integrated Technology for Agriculture',
  heading: 'Practical technology. Simpler fieldwork.',
  blurb: 'Practical tools for field sampling, navigation and crop observation. Clear workflows. Useful field records.',
  primaryCtaLabel: 'Explore PIT Sample', primaryCtaTarget: '#pit-sample',
  secondaryCtaLabel: 'Our products', secondaryCtaTarget: '#products',
};

export const sampleSection = {
  heading: 'Guided sampling. Clear records.',
  blurb: 'Plan a route, follow it in the field and record your sampling work. One practical workflow, from start to finish.',
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
export const about = { heading: 'Built around the work.' };

