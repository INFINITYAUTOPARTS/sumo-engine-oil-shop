import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Engine Oil for Toyota Vios Malaysia (2026 Guide)",
  description:
    "Looking for the best engine oil for Toyota Vios in Malaysia? Learn which viscosity is suitable and why SUMO Engine Oil is trusted by Malaysian drivers.",
};

export default function ToyotaViosGuide() {
  return (
    <main className="container-pad py-16">

      <h1 className="text-5xl font-black">
        Best Engine Oil for Toyota Vios Malaysia
      </h1>

      <p className="mt-6 text-lg text-neutral-600">
        Choosing the correct engine oil helps protect your Toyota Vios engine,
        improve fuel efficiency and extend engine life.
      </p>

      <img
        src="/product-images/sumo-r1.png"
        alt="SUMO Engine Oil"
        className="mx-auto my-12 w-72"
      />

      <h2 className="mt-10 text-3xl font-bold">
        Recommended Oil Viscosity
      </h2>

      <p className="mt-4 text-neutral-700 leading-8">
        Most Toyota Vios models in Malaysia are suitable for:
      </p>

      <ul className="mt-6 list-disc pl-8 leading-9">
        <li>5W30 Fully Synthetic</li>
        <li>5W40 Fully Synthetic</li>
        <li>10W40 Semi Synthetic</li>
      </ul>

      <h2 className="mt-12 text-3xl font-bold">
        Why Choose SUMO Engine Oil?
      </h2>

      <ul className="mt-6 list-disc pl-8 leading-9">
        <li>100% Genuine Japanese Engine Oil</li>
        <li>Excellent engine protection</li>
        <li>High temperature stability</li>
        <li>Smooth engine performance</li>
        <li>Suitable for Malaysian weather</li>
      </ul>

      <div className="mt-16 rounded-xl border p-8">

        <h3 className="text-2xl font-bold">
          Recommended Product
        </h3>

        <p className="mt-4">
          SUMO R1 5W40 Fully Synthetic Engine Oil
        </p>

        <div className="mt-8 flex gap-4">

          <Link
            href="/products"
            className="rounded-lg bg-red-600 px-6 py-3 text-white font-bold"
          >
            View Products
          </Link>

          <a
            href="https://wa.me/60169133412"
            className="rounded-lg border px-6 py-3 font-bold"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </main>
  );
}