import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5W30 vs 10W40 Engine Oil Malaysia (2026 Guide)",
  description:
    "Learn the difference between 5W30 and 10W40 engine oil, which is better for Malaysian weather, and how to choose the right oil for your car.",
};

export default function EngineOilGuide() {
  return (
    <main className="container-pad py-16">
      <Link href="/blog" className="text-sm font-bold text-oil-red">
        ← Back to Blog
      </Link>

      <h1 className="mt-8 text-5xl font-black">
        5W30 vs 10W40 Engine Oil: Which Is Better?
      </h1>

      <p className="mt-6 text-lg leading-8 text-neutral-600">
        Many Malaysian drivers are unsure whether they should use 5W30 or
        10W40 engine oil. The best choice depends on your car model, engine
        condition, mileage, manufacturer recommendation and driving style.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">What Does 5W30 Mean?</h2>
        <p className="mt-4 leading-8 text-neutral-700">
          5W30 is a lighter engine oil. It flows better during cold starts and
          may help with smoother engine response and fuel efficiency in many
          modern vehicles.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">What Does 10W40 Mean?</h2>
        <p className="mt-4 leading-8 text-neutral-700">
          10W40 is slightly thicker, especially at higher operating
          temperatures. It is commonly used for older engines, higher mileage
          vehicles or engines that need stronger oil film protection.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">5W30 vs 10W40 Comparison</h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border text-left">
            <thead className="bg-neutral-100">
              <tr>
                <th className="border p-4">Item</th>
                <th className="border p-4">5W30</th>
                <th className="border p-4">10W40</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-bold">Thickness</td>
                <td className="border p-4">Lighter</td>
                <td className="border p-4">Thicker</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold">Best for</td>
                <td className="border p-4">Modern engines</td>
                <td className="border p-4">Older or higher mileage engines</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold">Fuel economy</td>
                <td className="border p-4">Usually better</td>
                <td className="border p-4">May be slightly lower</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold">Protection</td>
                <td className="border p-4">Good for normal daily driving</td>
                <td className="border p-4">Good for hot and heavy use</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">
          Which Engine Oil Is Better in Malaysia?
        </h2>
        <p className="mt-4 leading-8 text-neutral-700">
          Malaysia has hot weather and heavy traffic conditions, so both 5W30
          and 10W40 can be suitable depending on your vehicle. Newer cars often
          use 5W30, while older or higher mileage cars may benefit from 10W40.
          Always follow your vehicle manufacturer recommendation first.
        </p>
      </section>

      <section className="mt-12 rounded-xl border p-8 shadow-sm">
        <h2 className="text-3xl font-bold">SUMO Recommendation</h2>

        <p className="mt-4 leading-8 text-neutral-700">
          For drivers looking for 5W30, SUMO R4 5W30 Semi Synthetic Engine Oil
          is suitable for many modern daily cars. For drivers looking for
          10W40, SUMO R3 10W40 Semi Synthetic Engine Oil is a practical option
          for daily driving and higher mileage vehicles.
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
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">FAQ</h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border p-6">
            <h3 className="font-bold">Can I use 10W40 instead of 5W30?</h3>
            <p className="mt-3 text-neutral-700">
              It depends on your car model, engine condition and manufacturer
              recommendation. For newer engines, follow the recommended grade
              in your owner&apos;s manual.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-bold">Is 5W30 good for Malaysian weather?</h3>
            <p className="mt-3 text-neutral-700">
              Yes, 5W30 can be suitable for many modern cars in Malaysia,
              especially when recommended by the vehicle manufacturer.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-bold">Is 10W40 better for older cars?</h3>
            <p className="mt-3 text-neutral-700">
              10W40 is commonly used for older or higher mileage vehicles
              because it is thicker at operating temperature.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-black p-8 text-white">
        <h2 className="text-3xl font-bold">Need Help Choosing Engine Oil?</h2>

        <p className="mt-4 leading-8 text-neutral-300">
          Tell us your car model, year and current mileage. We can help you
          choose a suitable SUMO engine oil for your vehicle.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/60123456789"
            className="rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
          >
            Ask on WhatsApp
          </a>

          <Link
            href="/blog"
            className="rounded-lg border border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-black"
          >
            Read More Guides
          </Link>
        </div>
      </section>
    </main>
  );
}