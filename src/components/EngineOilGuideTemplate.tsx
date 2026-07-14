import Link from "next/link";
import { JsonLd } from "./JsonLd";

type Props = {
  car: string;
  viscosity: string;
  product: string;
  productUrl: string;
  intro?: string;
  updatedDate?: string;
  readingTime?: string;
};

export default function EngineOilGuideTemplate({
  car,
  viscosity,
  product,
  productUrl,
  intro,
  updatedDate = "July 2026",
  readingTime = "3 min read",
}: Props) {
  return (
    <><JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Engine Oil for ${car} Malaysia`,
    description: intro,
    author: {
      "@type": "Organization",
      name: "Infinity Auto Parts",
    },
    publisher: {
      "@type": "Organization",
      name: "Infinity Auto Parts",
    },
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    mainEntityOfPage: {
      "@type": "WebPage",
    },
  }}
/>

    <main className="container-pad mx-auto max-w-4xl py-16">
      <article>
        <nav
  aria-label="Breadcrumb"
  className="mb-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500"
>
  <Link href="/" className="hover:text-oil-red hover:underline">
    Home
  </Link>

  <span aria-hidden="true">›</span>

  <Link href="/blog" className="hover:text-oil-red hover:underline">
    Blog
  </Link>

  <span aria-hidden="true">›</span>

  <span className="text-neutral-700">
    Best Engine Oil for {car} Malaysia
  </span>
</nav>
        <h1 className="text-4xl font-black">
          Best Engine Oil for {car} Malaysia
        </h1>
<div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
  <span>Updated {updatedDate}</span>
  <span aria-hidden="true">•</span>
  <span>{readingTime}</span>
  <span aria-hidden="true">•</span>
  <span>By Infinity Auto Parts</span>
</div>
        <p className="mt-6 text-lg text-neutral-700">
          {intro ?? (
  <>
    Looking for the best engine oil for {car} in Malaysia?
    This guide explains the recommended viscosity and suitable SUMO engine oil.
  </>
)}
        </p>

        <h2 className="mt-10 text-3xl font-bold">
          Recommended Engine Oil
        </h2>

        <p className="mt-4">
          Recommended viscosity:
          <strong> {viscosity}</strong>
        </p>

        <div className="mt-8 rounded-xl border p-6">
          <p className="text-sm font-bold text-oil-red">
            Recommended Product
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {product}
          </h2>

          <div className="mt-6 flex gap-3">
            <Link
              href={productUrl}
              className="rounded bg-red-600 px-5 py-3 font-bold text-white"
            >
              View Product
            </Link>

            <a
              href="https://wa.me/60169133412"
              target="_blank"
              className="rounded border border-green-600 px-5 py-3 font-bold text-green-700"
            >
              Ask on WhatsApp
            </a>
          </div>
          <section className="mt-12">
  <h2 className="text-3xl font-bold">
    Frequently Asked Questions
  </h2>

  <div className="mt-6 space-y-6">

    <div>
      <h3 className="font-bold">
        What engine oil does {car} use?
      </h3>
      <p className="mt-2 text-neutral-700">
        Most {car} models commonly use {viscosity}, but always confirm the
        correct viscosity in your owner&apos;s manual.
      </p>
    </div>

    <div>
      <h3 className="font-bold">
        How often should I change engine oil?
      </h3>
      <p className="mt-2 text-neutral-700">
        Usually every 8,000–10,000 km depending on driving conditions.
      </p>
    </div>

    <div>
      <h3 className="font-bold">
        Is {product} suitable?
      </h3>
      <p className="mt-2 text-neutral-700">
        Yes. It provides reliable engine protection when the required
        viscosity matches your vehicle specification.
      </p>
    </div>

  </div>
</section>
        </div>
        <section className="mt-16 border-t pt-10">
  <h2 className="text-3xl font-bold">
    Related Articles
  </h2>

  <p className="mt-2 text-neutral-600">
    Learn more about engine oil selection, maintenance and other popular
    vehicle guides.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

    <Link
      href="/blog/how-often-should-you-change-engine-oil"
      className="rounded-xl border p-5 hover:border-red-500 hover:shadow-md transition"
    >
      <h3 className="font-bold text-lg">
        How Often Should You Change Engine Oil?
      </h3>

      <p className="mt-2 text-sm text-neutral-600">
        Learn the recommended oil change interval for Malaysian driving
        conditions.
      </p>
    </Link>

    <Link
      href="/blog/fully-synthetic-vs-semi-synthetic"
      className="rounded-xl border p-5 hover:border-red-500 hover:shadow-md transition"
    >
      <h3 className="font-bold text-lg">
        Fully Synthetic vs Semi Synthetic
      </h3>

      <p className="mt-2 text-sm text-neutral-600">
        Understand the difference before choosing your next engine oil.
      </p>
    </Link>

    <Link
      href="/blog/5w30-vs-10w40-engine-oil"
      className="rounded-xl border p-5 hover:border-red-500 hover:shadow-md transition"
    >
      <h3 className="font-bold text-lg">
        5W30 vs 10W40 Engine Oil
      </h3>

      <p className="mt-2 text-sm text-neutral-600">
        Compare viscosity grades and find the right oil for your vehicle.
      </p>
    </Link>

  </div>
</section>
      </article>
    </main>
</>
);
}