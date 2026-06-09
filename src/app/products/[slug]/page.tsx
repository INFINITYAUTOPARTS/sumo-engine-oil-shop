import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { JsonLd } from "@/components/JsonLd";
import { ProductPlaceholder } from "@/components/ProductPlaceholder";
import { WhatsAppOrderButton } from "@/components/WhatsAppInquiryButton";
import { getProductBySlug, getProducts } from "@/lib/products";
import { formatProductPrice, getSiteUrl } from "@/lib/utils";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.short_description,
    alternates: { canonical: `${getSiteUrl()}/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.short_description,
      url: `${getSiteUrl()}/products/${product.slug}`,
      type: "website",
      images: product.image_url ? [product.image_url] : []
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();
  const siteUrl = getSiteUrl();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image_url ? `${siteUrl}${product.image_url}` : undefined,
    brand: {
      "@type": "Brand",
      name: "SUMO Engine Oil Malaysia"
    },
    category: product.category,
    sku: product.slug,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.slug}`,
      priceCurrency: "MYR",
      price: product.price,
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <section className="container-pad py-10">
      <JsonLd data={productJsonLd} />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-sm border border-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-100">
          {product.image_url ? (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-8"
              />
            </div>
          ) : (
            <ProductPlaceholder name={product.name} viscosity={product.viscosity} volume={product.volume} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2 text-xs font-black uppercase">
            <span className="bg-oil-black px-2 py-1 text-white">{product.category}</span>
            <span className="bg-oil-gold px-2 py-1 text-oil-black">{product.viscosity}</span>
            <span className="border border-neutral-300 px-2 py-1 text-neutral-700">{product.volume}</span>
          </div>
          <h1 className="mt-5 text-4xl font-black text-oil-black">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{product.description}</p>
          <div className="mt-6 rounded-sm border border-neutral-200 bg-white p-5">
            <p className="text-sm font-bold uppercase text-neutral-500">Price</p>
            <p className="mt-1 text-3xl font-black text-oil-red">{formatProductPrice(product.price)}</p>
            <p className="mt-2 text-sm text-neutral-500">Stock available: {product.stock}</p>
            <div className="mt-5 grid max-w-sm gap-3">
              <WhatsAppOrderButton product={product} />
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
