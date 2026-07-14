import Link from "next/link";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Perodua Myvi",
  slug: "best-engine-oil-perodua-myvi",
  description:
    "Looking for the best engine oil for Perodua Myvi in Malaysia? Learn the recommended viscosity and discover a suitable SUMO engine oil.",
});

export default function MyviGuide() {
  return (
    <main className="container-pad py-16">
      <Link href="/blog" className="text-sm font-bold text-oil-red">
        ← Back to Blog
      </Link>

      <h1 className="mt-8 text-5xl font-black">
        Best Engine Oil for Perodua Myvi Malaysia
      </h1>

      <p className="mt-6 text-lg leading-8 text-neutral-600">
        Perodua Myvi is Malaysia&apos;s best-selling hatchback. Using the correct
        engine oil improves engine protection, fuel economy and long-term
        performance.
      </p>

      <img
        src="/product-images/sumo-r4.png"
        alt="SUMO Engine Oil for Perodua Myvi"
        className="mx-auto my-12 w-72"
      />

      <h2 className="mt-10 text-3xl font-bold">
        Recommended Oil Viscosity
      </h2>

      <p className="mt-4 leading-8 text-neutral-700">
        Most Myvi owners in Malaysia commonly use these viscosity grades:
      </p>

      <ul className="mt-6 list-disc pl-8 leading-9">
        <li>5W30 Semi Synthetic</li>
        <li>10W40 Semi Synthetic</li>
        <li>5W40 Fully Synthetic</li>
      </ul>

      <h2 className="mt-12 text-3xl font-bold">
        Why Choose SUMO Engine Oil?
      </h2>

      <ul className="mt-6 list-disc pl-8 leading-9">
        <li>Excellent protection during stop-and-go city driving</li>
        <li>Helps reduce engine wear in Malaysia&apos;s hot weather</li>
        <li>Available in Semi Synthetic and Fully Synthetic options</li>
        <li>Suitable for daily commuting and long-distance travel</li>
        <li>Trusted by workshops and car owners across Malaysia</li>
      </ul>

      <div className="mt-16 rounded-xl border p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          Recommended Product
        </h3>

        <p className="mt-4 text-neutral-700">
          SUMO R4 5W30 Semi Synthetic Engine Oil is a popular option for
          Perodua Myvi owners looking for reliable daily engine protection.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            View Products
          </Link>

          <a
            href="https://wa.me/60169133412"
            className="rounded-lg border px-6 py-3 font-bold hover:bg-neutral-50"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}