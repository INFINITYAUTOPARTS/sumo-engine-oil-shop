import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";
import { getSiteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const products = await getProducts();
  const staticRoutes = ["", "/products", "/workshop-dealer", "/engine-oil-supplier-malaysia", "/about", "/contact"];

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
