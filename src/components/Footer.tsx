import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";

export function Footer() {
  return (
    <footer className="bg-oil-black text-white">
      <div className="container-pad grid gap-8 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="[&_span_span:first-child]:text-white [&_span_span:last-child]:text-neutral-300">
            <BrandLogo />
          </div>
          <p className="mt-4 text-lg font-black text-oil-gold">Infinity Auto Parts</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-300">
            SUMO Engine Oil Malaysia supplier for car owners, workshops, dealers, and fleet operators across Malaysia.
          </p>
          <div className="mt-5">
            <MarketplaceButtons />
          </div>
        </div>
        <div>
          <p className="font-bold">Shop</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-300">
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/workshop-dealer">Workshop / Dealer</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-300">
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-400">
        Copyright {new Date().getFullYear()} INFINITY AUTO PARTS. All rights reserved.
      </div>
    </footer>
  );
}
