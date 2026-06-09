"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { formatCurrency, formatProductPrice } from "@/lib/utils";

export function CartLineItems({ compact = false }: { compact?: boolean }) {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return <div className="rounded-sm border border-dashed border-neutral-300 p-6 text-center text-neutral-600">Your cart is empty.</div>;
  }

  return (
    <div className="divide-y divide-neutral-200 rounded-sm border border-neutral-200 bg-white">
      {items.map((item) => (
        <div key={item.product.id} className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <Link href={`/products/${item.product.slug}`} className="font-bold text-oil-black hover:text-oil-red">
              {item.product.name}
            </Link>
            <p className="mt-1 text-sm text-neutral-500">
              {item.product.viscosity} / {item.product.volume} / {formatProductPrice(item.product.price)}
            </p>
            <p className="mt-2 font-black text-oil-red">
              {item.product.price === null ? "Contact for price" : formatCurrency(item.product.price * item.quantity)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {!compact ? (
              <button
                className="focus-ring grid h-9 w-9 place-items-center rounded-sm border border-neutral-200"
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
            ) : null}
            <span className="grid h-9 min-w-10 place-items-center rounded-sm bg-neutral-100 px-3 font-bold">{item.quantity}</span>
            {!compact ? (
              <button
                className="focus-ring grid h-9 w-9 place-items-center rounded-sm border border-neutral-200"
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            ) : null}
            {!compact ? (
              <button
                className="focus-ring grid h-9 w-9 place-items-center rounded-sm border border-neutral-200 text-oil-red"
                onClick={() => removeItem(item.product.id)}
                aria-label="Remove product"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
