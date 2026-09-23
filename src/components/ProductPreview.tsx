export type ProductPreviewMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: 'screenshot' | 'concept' | 'photograph';
  caption: string;
};

export function ProductPreview({ media, className = '' }: { media?: ProductPreviewMedia; className?: string }) {
  if (!media) return null;
  return (
    <figure className={`product-preview product-preview--${media.kind} ${className}`}>
      <div className="product-preview-frame">
        <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" />
      </div>
      <figcaption>{media.kind === 'concept' ? 'Design preview. ' : ''}{media.caption}</figcaption>
    </figure>
  );
}

