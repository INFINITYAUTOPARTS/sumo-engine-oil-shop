import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Engine Oil for Honda City Malaysia (2026 Guide)",
  description:
    "Learn the suitable engine oil viscosity for Honda City in Malaysia, maintenance guidance and a recommended SUMO 5W30 engine oil.",
};

export default function HondaCityOilGuide() {
  return (
    <main className="container-pad mx-auto max-w-4xl py-16">
      <article>
        <h1 className="text-4xl font-black">
          Best Engine Oil for Honda City Malaysia
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Honda City is one of Malaysia&apos;s popular sedans. Choosing the
          correct engine oil helps support engine protection, smooth operation
          and long-term reliability.
        </p>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">Recommended Engine Oil</h2>

          <p className="mt-4 leading-8 text-neutral-700">
            Many Honda City models commonly use a low-viscosity engine oil such
            as <strong>5W30</strong>. The correct grade and specification can
            differ by model year and engine, so always confirm it in the vehicle
            owner&apos;s manual.
          </p>

          <ul className="mt-5 space-y-3 text-neutral-700">
            <li>✅ Common viscosity option: 5W30</li>
            <li>✅ Suitable for regular city and highway driving</li>
            <li>✅ Supports smooth engine operation</li>
            <li>✅ Suitable for Malaysian driving conditions</li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-sm font-bold uppercase text-oil-red">
            Recommended Product
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            SUMO R4 5W30 Semi Synthetic Engine Oil
          </h2>

          <p className="mt-3 leading-7 text-neutral-700">
            A practical option for Honda City owners seeking reliable everyday
            engine protection. Confirm the required viscosity and specification
            before purchase.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
              className="rounded bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700"
            >
              View Product
            </Link>

            <a
              href="https://wa.me/60169133412"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-green-600 bg-white px-5 py-3 font-bold text-green-700 hover:bg-green-50"
            >
              Ask on WhatsApp
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">
            How Often Should You Change Engine Oil?
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            Follow Honda&apos;s maintenance schedule for your specific model.
            Vehicles used in heavy traffic, frequent short trips or demanding
            driving conditions may require more frequent servicing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold">
                Is 5W30 suitable for Honda City?
              </h3>
              <p className="mt-2 leading-7 text-neutral-700">
                5W30 is commonly used for many Honda City models, but the exact
                requirement depends on the model year and engine.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Can Honda City use fully synthetic engine oil?
              </h3>
              <p className="mt-2 leading-7 text-neutral-700">
                Yes, when the oil meets the viscosity and specification required
                by the vehicle manufacturer.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Should I use 5W30 or 10W40?
              </h3>
              <p className="mt-2 leading-7 text-neutral-700">
                The correct choice depends on the engine, vehicle age and
                manufacturer recommendation. Do not select a thicker oil only
                because Malaysia has hot weather.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">Conclusion</h2>

          <p className="mt-4 leading-8 text-neutral-700">
            For many Honda City models, 5W30 is a common engine oil viscosity.
            SUMO R4 5W30 Semi Synthetic Engine Oil can be considered when it
            matches your vehicle&apos;s required specification.
          </p>
        </section>

        <section className="mt-12 border-t border-neutral-200 pt-8">
          <h2 className="text-2xl font-bold">Related Engine Oil Guides</h2>

          <div className="mt-5 grid gap-3">
            <Link
              href="/blog/best-engine-oil-toyota-vios-malaysia"
              className="font-bold text-oil-red hover:underline"
            >
              Best Engine Oil for Toyota Vios Malaysia →
            </Link>

            <Link
              href="/blog/best-engine-oil-perodua-myvi"
              className="font-bold text-oil-red hover:underline"
            >
              Best Engine Oil for Perodua Myvi Malaysia →
            </Link>

            <Link
              href="/blog/5w30-vs-10w40-engine-oil"
              className="font-bold text-oil-red hover:underline"
            >
              5W30 vs 10W40 Engine Oil →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}