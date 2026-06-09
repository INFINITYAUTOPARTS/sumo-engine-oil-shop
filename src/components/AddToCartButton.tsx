"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-oil-red px-4 text-sm font-black text-white transition hover:bg-red-700"
      onClick={() => {
        addItem(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
    >
      <ShoppingCart className="h-4 w-4" />
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
