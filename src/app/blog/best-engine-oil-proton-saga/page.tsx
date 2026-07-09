import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Engine Oil for Proton Saga Malaysia (2026 Guide)",
  description:
    "Looking for the best engine oil for Proton Saga in Malaysia? Learn suitable viscosity options and why SUMO Engine Oil is a reliable choice.",
};

export default function ProtonSagaGuide() {
  return (
    <main className="container-pad py-16">
      <Link href="/blog" className="text-sm font-bold text-oil-red">
        ← Back to Blog
      </Link>

      <h1 className="mt-8 text-5xl font-black">
        Best Engine Oil for Proton Saga Malaysia
      </h1>

      <p className="mt-6 text-lg leading-8 text-neutral-600">
        Proton Saga is one of Malaysia&apos;s most popular daily cars. Choosing
        the correct engine oil helps keep the engine smooth, protects internal
        parts and supports better long-term reliability.
      </p>

      <img
        src="/product-images/sumo-r3.png"
        alt="SUMO Engine Oil for Proton Saga Malaysia"
        className="mx-auto my-12 w-72"
      />

      <h2 className="mt-10 text-3xl font-bold">Recommended Oil Viscosity</h2>

      <p className="mt-4 leading-8 text-neutral-700">
        For many Proton Saga models, these engine oil grades are commonly
        considered:
      </p>

      <ul className="mt-6 list-disc pl-8 leading-9">
        <li>10W40 Semi Synthetic</li>
        <li>5W30 Semi Synthetic</li>
        <li>5W40 Fully Synthetic</li>
      </ul>

      <h2 className="mt-12 text-3xl font-bold">
        Why SUMO Engine Oil is Suitable for Proton Saga
      </h2>

      <ul className="mt-6 list-disc pl-8 leading-9">
        <li>Suitable for daily city driving in Malaysia</li>
        <li>Good protection for high-temperature traffic conditions</li>
        <li>Available in semi synthetic and fully synthetic options</li>
        <li>Trusted by car owners and workshops</li>
        <li>Easy ordering through website, WhatsApp, Shopee and TikTok Shop</li>
      </ul>

      <div className="mt-16 rounded-xl border p-8 shadow-sm">
        <h3 className="text-2xl font-bold">Recommended Product</h3>

        <p className="mt-4 text-neutral-700">
          SUMO R3 10W40 Semi Synthetic Engine Oil is a suitable option for many
          Proton Saga owners who want reliable daily engine protection.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            View Products
          </Link>

          <a
            href="https://wa.me/60123456789"
            className="rounded-lg border px-6 py-3 font-bold hover:bg-neutral-50"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}