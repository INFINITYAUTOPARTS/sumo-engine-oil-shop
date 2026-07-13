import Link from "next/link";

type Props = {
  car: string;
  viscosity: string;
  product: string;
  productUrl: string;
  intro?: string;
};

export default function EngineOilGuideTemplate({
  car,
  viscosity,
  product,
  productUrl,
  intro,
}: Props) {
  return (
    <main className="container-pad mx-auto max-w-4xl py-16">
      <article>
        <h1 className="text-4xl font-black">
          Best Engine Oil for {car} Malaysia
        </h1>

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
      </article>
    </main>
  );
}