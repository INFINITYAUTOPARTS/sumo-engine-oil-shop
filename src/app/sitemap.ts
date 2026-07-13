import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";
import { getSiteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const products = await getProducts();
  const staticRoutes = [
  "",
  "/products",
  "/workshop-dealer",
  "/engine-oil-supplier-malaysia",
  "/about",
  "/contact",

  "/blog",
  "/blog/5w30-vs-10w40-engine-oil",
  "/blog/fully-synthetic-vs-semi-synthetic",
  "/blog/how-often-should-you-change-engine-oil",
  "/blog/best-engine-oil-perodua-myvi",
  "/blog/best-engine-oil-proton-saga",
  "/blog/best-engine-oil-toyota-vios-malaysia",
  "/blog/best-engine-oil-toyota-hilux-malaysia",
  "/blog/best-engine-oil-honda-city-malaysia",
];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: product.updated_at ? new Date(product.updated_at) : new Date()
    }))
  ];
}
