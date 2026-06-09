"use client";

import Link from "next/link";
import { CartLineItems } from "@/components/CartLineItems";
import { useCart } from "@/components/CartProvider";
import { CartWhatsAppOrderButton } from "@/components/CartWhatsAppOrderButton";
import { formatCurrency } from "@/lib/utils";

export default function CartPage() {
  const { items, total } = useCart();
  const hasContactPrice = items.some((item) => item.product.price === null);

  return (
    <section className="container-pad py-10">
      <h1 className="text-4xl font-black text-oil-black">Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <CartLineItems />
        <aside className="h-fit rounded-sm border border-neutral-200 bg-white p-5">
          <p className="text-sm font-bold uppercase text-neutral-500">Order total</p>
          <p className="mt-2 text-3xl font-black text-oil-red">{hasContactPrice ? "Contact for price" : formatCurrency(total)}</p>
          {items.length ? (
            <div className="mt-5">
              <CartWhatsAppOrderButton />
            </div>
          ) : (
            <Link
              href="/products"
              className="focus-ring mt-5 inline-flex h-12 w-full items-center justify-center rounded-sm bg-oil-red px-5 text-sm font-black text-white hover:bg-red-700"
            >
              Browse products
            </Link>
          )}
        </aside>
      </div>
    </section>
  );
}
