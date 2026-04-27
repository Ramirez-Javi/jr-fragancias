import groq from "groq";

export const allBrandsQuery = groq`*[_type == "brand"] | order(name asc) {
  "id": _id,
  "slug": slug.current,
  name,
  origin,
  description
}`;

export const allProductsQuery = groq`*[_type == "product"] | order(featured desc, name asc) {
  "id": _id,
  "slug": slug.current,
  name,
  "mainImageUrl": mainImage.asset->url,
  "galleryImageUrls": gallery[].asset->url,
  shortDescription,
  story,
  productType,
  family,
  occasions,
  topNotes,
  heartNotes,
  baseNotes,
  "performance": {
    "duration": duration,
    "projection": projection
  },
  priceFromLabel,
  presentations[]{label, value, priceLabel},
  accentGradient,
  featured,
  "brand": brand-> {
    "id": _id,
    "slug": slug.current,
    name,
    origin,
    description
  }
}`;

export const featuredProductsQuery = groq`*[_type == "product" && featured == true] | order(name asc) {
  "id": _id,
  "slug": slug.current,
  name,
  "mainImageUrl": mainImage.asset->url,
  "galleryImageUrls": gallery[].asset->url,
  shortDescription,
  story,
  productType,
  family,
  occasions,
  topNotes,
  heartNotes,
  baseNotes,
  "performance": {
    "duration": duration,
    "projection": projection
  },
  priceFromLabel,
  presentations[]{label, value, priceLabel},
  accentGradient,
  featured,
  "brand": brand-> {
    "id": _id,
    "slug": slug.current,
    name,
    origin,
    description
  }
}`;

export const decantProductsQuery = groq`*[_type == "product" && productType == "Decant"] | order(name asc) {
  "id": _id,
  "slug": slug.current,
  name,
  "mainImageUrl": mainImage.asset->url,
  "galleryImageUrls": gallery[].asset->url,
  shortDescription,
  story,
  productType,
  family,
  occasions,
  topNotes,
  heartNotes,
  baseNotes,
  "performance": {
    "duration": duration,
    "projection": projection
  },
  priceFromLabel,
  presentations[]{label, value, priceLabel},
  accentGradient,
  featured,
  "brand": brand-> {
    "id": _id,
    "slug": slug.current,
    name,
    origin,
    description
  }
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  "id": _id,
  "slug": slug.current,
  name,
  "mainImageUrl": mainImage.asset->url,
  "galleryImageUrls": gallery[].asset->url,
  shortDescription,
  story,
  productType,
  family,
  occasions,
  topNotes,
  heartNotes,
  baseNotes,
  "performance": {
    "duration": duration,
    "projection": projection
  },
  priceFromLabel,
  presentations[]{label, value, priceLabel},
  accentGradient,
  featured,
  "brand": brand-> {
    "id": _id,
    "slug": slug.current,
    name,
    origin,
    description
  }
}`;

export const catalogSectionsQuery = groq`*[_type == "category"] | order(title asc) {
  "id": _id,
  title,
  description
}`;

export const bannersQuery = groq`*[_type == "banner"] | order(priority asc) {
  "id": _id,
  title,
  subtitle,
  "imageUrl": image.asset->url,
  ctaLabel,
  ctaHref,
  priority
}`;

export const editorialGuidesQuery = groq`*[_type == "editorialGuide"] | order(title asc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImageUrl": coverImage.asset->url,
  content
}`;

export const editorialGuideBySlugQuery = groq`*[_type == "editorialGuide" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImageUrl": coverImage.asset->url,
  content
}`;