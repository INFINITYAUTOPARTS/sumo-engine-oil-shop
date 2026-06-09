"use client";

import { useMemo, useState } from "react";
import { ArrowDownAZ, Filter } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/types";

const filters = ["All", "Fully Synthetic", "Semi Synthetic", "Diesel", "Performance Series"] as const;
const sortOptions = [
  { label: "Category", value: "category" },
  { label: "Price low to high", value: "price-asc" },
  { label: "Price high to low", value: "price-desc" }
] as const;

export function ProductCatalog({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [sort, setSort] = useState<(typeof sortOptions)[number]["value"]>("category");

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (filter === "All") return true;
      if (filter === "Diesel") return product.category.toLowerCase().includes("diesel");
      return product.category === filter;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER);
      if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0);
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    });
  }, [filter, products, sort]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4 rounded-sm border border-neutral-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase text-neutral-500">
            <Filter className="h-4 w-4 text-oil-red" />
            Filter by category
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`focus-ring rounded-sm px-3 py-2 text-sm font-black ${
                  filter === item ? "bg-oil-red text-white" : "border border-neutral-200 text-neutral-700 hover:border-oil-red"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <label className="min-w-56 text-sm font-black uppercase text-neutral-500">
          <span className="mb-2 flex items-center gap-2">
            <ArrowDownAZ className="h-4 w-4 text-oil-red" />
            Sort products
          </span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as typeof sort)}
            className="w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm font-bold normal-case text-oil-black"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-neutral-600">
        <p>
          Showing <span className="font-black text-oil-black">{visibleProducts.length}</span> official SUMO products
        </p>
        <p className="hidden font-semibold sm:block">Prices shown in Malaysian Ringgit (RM)</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
