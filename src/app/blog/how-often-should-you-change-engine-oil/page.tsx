import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Often Should You Change Engine Oil? (Malaysia 2026 Guide)",
  description:
    "Learn how often you should change your engine oil in Malaysia based on driving habits, mileage and engine oil type.",
};

export default function OilChangeIntervalGuide() {
  return (
    <main className="container-pad py-16">

      <Link
        href="/blog"
        className="text-sm font-bold text-oil-red"
      >
        ← Back to Blog
      </Link>

      <h1 className="mt-8 text-5xl font-black">
        How Often Should You Change Engine Oil?
      </h1>

      <p className="mt-6 text-lg leading-8 text-neutral-600">
        Regular engine oil changes are essential for protecting your engine.
        The ideal interval depends on the oil type, your vehicle, driving
        conditions and the manufacturer&apos;s recommendation.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">
          Typical Oil Change Intervals
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-neutral-300">
            <thead className="bg-neutral-100">
              <tr>
                <th className="border p-4 text-left">Oil Type</th>
                <th className="border p-4 text-left">Recommended Interval</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-4">Mineral Oil</td>
                <td className="border p-4">5,000 km</td>
              </tr>

              <tr>
                <td className="border p-4">Semi Synthetic</td>
                <td className="border p-4">7,000–8,000 km</td>
              </tr>

              <tr>
                <td className="border p-4">Fully Synthetic</td>
                <td className="border p-4">10,000 km or more (depending on manufacturer)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">
          Factors That Affect Oil Change Frequency
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Frequent short trips, heavy traffic, towing, hot weather and
          aggressive driving can shorten the lifespan of engine oil. Drivers
          operating under these conditions may need more frequent oil changes.
        </p>
      </section>
            <section className="mt-12">
        <h2 className="text-3xl font-bold">
          Signs You Should Change Your Engine Oil
        </h2>

        <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-8 text-neutral-600">
          <li>Engine oil becomes dark and dirty.</li>
          <li>Engine noise becomes louder than usual.</li>
          <li>Oil warning light appears on the dashboard.</li>
          <li>Reduced fuel efficiency.</li>
          <li>The recommended mileage or time interval has been reached.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">
          Conclusion
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Changing your engine oil on time is one of the easiest ways to extend
          engine life and maintain performance. Whether you use mineral, semi
          synthetic or fully synthetic oil, always follow your vehicle
          manufacturer&apos;s recommendations and choose a trusted engine oil such
          as SUMO Engine Oil for reliable protection.
        </p>
      </section>

    </main>
  );
}