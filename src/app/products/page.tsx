import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProductCatalog } from "@/components/ProductCatalog";
import { getProducts } from "@/lib/products";
import { getSiteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SUMO Engine Oil Products Malaysia",
  description: "Browse SUMO Fully Synthetic, Semi Synthetic, Diesel and Performance Series Engine Oil products for car owners, workshops and dealers in Malaysia.",
  alternates: { canonical: `${getSiteUrl()}/products` },
  openGraph: {
    title: "SUMO Engine Oil Products Malaysia",
    description: "Browse official SUMO Engine Oil Malaysia products and request quotations via WhatsApp.",
    url: `${getSiteUrl()}/products`,
    type: "website"
  }
};

export default async function ProductsPage() {
  const products = await getProducts();
  const siteUrl = getSiteUrl();
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SUMO Engine Oil Products Malaysia",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/products/${product.slug}`,
      name: product.name
    }))
  };

  return (
    <section className="container-pad py-10">
      <JsonLd data={itemListJsonLd} />
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase text-oil-red">Product catalog</p>
        <h1 className="mt-2 text-4xl font-black text-oil-black">SUMO Engine Oil Malaysia products</h1>
        <p className="mt-4 leading-7 text-neutral-600">
          Choose official SUMO engine oil by viscosity, category, bottle size, and RM price. Add products to cart or order directly through WhatsApp.
        </p>
      </div>
      <ProductCatalog products={products} />
    </section>
  );
}
