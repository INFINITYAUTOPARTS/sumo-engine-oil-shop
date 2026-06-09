"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/components/CartProvider";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/workshop-dealer", label: "Workshop / Dealer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <BrandLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-neutral-700 hover:text-oil-red">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <MarketplaceButtons compact />
          </div>
          <Link
            href="/cart"
            className="focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-200 hover:border-oil-red"
            aria-label="View cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-oil-red px-1 text-xs font-bold text-white">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-200 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-2 py-2">
              <MarketplaceButtons vertical />
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
