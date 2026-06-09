import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatProductPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/AddToCartButton";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { ProductPlaceholder } from "@/components/ProductPlaceholder";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-oil-red/40 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="relative block bg-gradient-to-b from-neutral-50 to-neutral-100">
        {product.image_url ? (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-6 transition duration-300 hover:scale-105"
            />
          </div>
        ) : (
          <ProductPlaceholder name={product.name} viscosity={product.viscosity} volume={product.volume} />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold uppercase">
          <span className="bg-oil-black px-2 py-1 text-white">{product.viscosity}</span>
          <span className="bg-oil-gold px-2 py-1 text-oil-black">{product.volume}</span>
          <span className="border border-neutral-200 px-2 py-1 text-neutral-600">{product.category}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="text-lg font-black text-oil-black hover:text-oil-red">
          {product.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">{product.short_description}</p>
        <div className="mt-auto pt-5">
          <p className="text-xl font-black text-oil-red">{formatProductPrice(product.price)}</p>
          <div className="mt-3 grid gap-2">
            <AddToCartButton product={product} />
            <MarketplaceButtons vertical includeWhatsApp={false} />
          </div>
        </div>
      </div>
    </article>
  );
}
