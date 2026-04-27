export type Brand = {
  id: string;
  slug: string;
  name: string;
  origin: string;
  description: string;
};

export type ProductPresentation = {
  label: string;
  value: string;
  priceLabel: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  mainImageUrl?: string;
  galleryImageUrls?: string[];
  shortDescription: string;
  story: string;
  productType: "Perfume" | "Decant";
  family: string;
  occasions: string[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  performance: {
    duration: string;
    projection: string;
  };
  priceFromLabel: string;
  presentations: ProductPresentation[];
  accentGradient: string;
  featured?: boolean;
};

export type CatalogSection = {
  id: string;
  title: string;
  description: string;
};

export type Banner = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  ctaLabel?: string;
  ctaHref?: string;
  priority?: number;
};

export type EditorialBlock = {
  _key?: string;
  children?: Array<{
    _key?: string;
    text?: string;
  }>;
};

export type EditorialGuide = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string;
  content?: EditorialBlock[];
};