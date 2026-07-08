import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatProductPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/AddToCartButton";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { ProductPlaceholder } from "@/components/ProductPlaceholder";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-oil-red hover:shadow-2xl">
      <Link href={`/products/${product.slug}`} className="relative block bg-gradient-to-b from-neutral-50 to-neutral-100">
        {product.image_url ? (
          <div className="relative h-[300px] w-full bg-neutral-50">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-8 transition duration-300 hover:scale-105"
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
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">
  {product.short_description}
</p>

<div className="mt-3 flex flex-wrap gap-2 text-xs">
  <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
    ✓ Made in Japan
  </span>

  <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
    ✓ Ready Stock
  </span>

  <span className="rounded-full bg-red-100 px-2 py-1 text-red-700">
    ✓ Official Distributor
  </span>
</div>

<div className="mt-auto pt-5">
          <p className="text-2xl font-extrabold text-red-600">{formatProductPrice(product.price)}</p>
          <div className="mt-3 grid gap-2">
            <AddToCartButton product={product} />
            <MarketplaceButtons vertical includeWhatsApp={false} />
          </div>
        </div>
      </div>
    </article>
  );
}
