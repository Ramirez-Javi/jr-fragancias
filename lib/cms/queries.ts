import { banners, brands, catalogSections, editorialGuides, products } from "@/lib/cms/mock-data";
import { sanityClient } from "@/lib/cms/client";
import {
  allBrandsQuery,
  allProductsQuery,
  bannersQuery,
  catalogSectionsQuery,
  decantProductsQuery,
  editorialGuideBySlugQuery,
  editorialGuidesQuery,
  featuredProductsQuery,
  productBySlugQuery,
} from "@/lib/cms/sanity-queries";
import type { Banner, Brand, CatalogSection, EditorialGuide, Product } from "@/lib/cms/types";

async function fetchFromSanity<T>(query: string, params?: Record<string, unknown>) {
  if (!sanityClient) {
    return null;
  }

  try {
    if (params) {
      return await sanityClient.fetch<T>(query, params);
    }

    return await sanityClient.fetch<T>(query);
  } catch {
    return null;
  }
}

async function getLiveProducts(): Promise<Product[]> {
  const result = await fetchFromSanity<Product[]>(allProductsQuery);
  return result && result.length > 0 ? result : [];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const result = await fetchFromSanity<Product[]>(featuredProductsQuery);

  if (result && result.length > 0) {
    return result;
  }

  const liveProducts = await getLiveProducts();

  if (liveProducts.length > 0) {
    return liveProducts
      .slice()
      .sort((left, right) => Number(Boolean(right.mainImageUrl)) - Number(Boolean(left.mainImageUrl)))
      .slice(0, 3);
  }

  return products.filter((product) => product.featured);
}

export async function getAllProducts(): Promise<Product[]> {
  const liveProducts = await getLiveProducts();
  return liveProducts.length > 0 ? liveProducts : products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const result = await fetchFromSanity<Product>(productBySlugQuery, { slug });

  if (result) {
    return result;
  }

  const liveProducts = await getLiveProducts();

  if (liveProducts.length > 0) {
    return undefined;
  }

  return products.find((product) => product.slug === slug);
}

export async function getAllBrands(): Promise<Brand[]> {
  const result = await fetchFromSanity<Brand[]>(allBrandsQuery);
  return result && result.length > 0 ? result : brands;
}

export async function getCatalogSections(): Promise<CatalogSection[]> {
  const result = await fetchFromSanity<CatalogSection[]>(catalogSectionsQuery);
  return result && result.length > 0 ? result : catalogSections;
}

export async function getDecantProducts(): Promise<Product[]> {
  const result = await fetchFromSanity<Product[]>(decantProductsQuery);
  return result && result.length > 0
    ? result
    : products.filter((product) => product.productType === "Decant");
}

export async function getBanners(): Promise<Banner[]> {
  const result = await fetchFromSanity<Banner[]>(bannersQuery);
  return result && result.length > 0 ? result : banners;
}

export async function getEditorialGuides(): Promise<EditorialGuide[]> {
  const result = await fetchFromSanity<EditorialGuide[]>(editorialGuidesQuery);
  return result && result.length > 0 ? result : editorialGuides;
}

export async function getEditorialGuideBySlug(
  slug: string,
): Promise<EditorialGuide | undefined> {
  const result = await fetchFromSanity<EditorialGuide>(editorialGuideBySlugQuery, { slug });
  return result ?? editorialGuides.find((guide) => guide.slug === slug);
}