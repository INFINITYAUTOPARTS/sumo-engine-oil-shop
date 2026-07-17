import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      title: "Best Engine Oil for Honda HR-V Malaysia",
      description:
        "Recommended engine oil for Honda HR-V in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-honda-hr-v-malaysia",
    },
    {
      title: "Best Engine Oil for Honda CR-V Malaysia",
      description:
        "Recommended engine oil for Honda CR-V in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-honda-cr-v-malaysia",
    },
    {
      title: "Best Engine Oil for Toyota Camry Malaysia",
      description:
        "Recommended engine oil for Toyota Camry in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-toyota-camry-malaysia",
    },
    {
      title: "Best Engine Oil for Perodua Ativa Malaysia",
      description:
        "Recommended engine oil for Perodua Ativa in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-perodua-ativa-malaysia",
    },
    {
      title: "Best Engine Oil for Proton X90 Malaysia",
      description:
        "Recommended engine oil for Proton X90 in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-proton-x90-malaysia",
    },
    {
      title: "Best Engine Oil for Toyota Vios Malaysia",
      description:
        "Learn which SUMO engine oil is suitable for Toyota Vios and why viscosity matters.",
      slug: "/blog/best-engine-oil-toyota-vios-malaysia",
    },
    {
      title: "Best Engine Oil for Proton Saga",
      description:
        "Recommended engine oil for Proton Saga with maintenance tips.",
      slug: "/blog/best-engine-oil-proton-saga",
    },
    {
      title: "Best Engine Oil for Perodua Myvi",
      description:
        "Choosing the right engine oil for Malaysia's most popular car.",
      slug: "/blog/best-engine-oil-perodua-myvi",
    },
    {
      title: "5W30 vs 10W40 Engine Oil",
      description:
        "Understand the difference between 5W30 and 10W40 before your next oil change.",
      slug: "/blog/5w30-vs-10w40-engine-oil",
    },
    {
      title: "Fully Synthetic vs Semi Synthetic",
      description:
        "Which engine oil should you choose for your vehicle?",
      slug: "/blog/fully-synthetic-vs-semi-synthetic",
    },
    {
      title: "How Often Should You Change Engine Oil?",
      description:
        "Recommended engine oil change intervals for Malaysian driving conditions.",
      slug: "/blog/how-often-should-you-change-engine-oil",
    },
    {
      title: "Best Engine Oil for Toyota Hilux Malaysia",
      description:
        "Recommended engine oil for Toyota Hilux diesel models in Malaysia, including viscosity and maintenance guidance.",
      slug: "/blog/best-engine-oil-toyota-hilux-malaysia",
    },
    {
      title: "Best Engine Oil for Honda City Malaysia",
      description:
        "Recommended engine oil for Honda City in Malaysia including viscosity, maintenance interval and product recommendation.",
      slug: "/blog/best-engine-oil-honda-city-malaysia",
    },
    {
      title: "Best Engine Oil for Perodua Bezza Malaysia",
      description:
        "Recommended engine oil for Perodua Bezza in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-perodua-bezza-malaysia",
    },
    {
      title: "Best Engine Oil for Perodua Axia Malaysia",
      description:
        "Recommended engine oil for Perodua Axia in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-perodua-axia-malaysia",
    },
    {
      title: "Best Engine Oil for Perodua Alza Malaysia",
      description:
        "Recommended engine oil for Perodua Alza in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-perodua-alza-malaysia",
    },
    {
      title: "Best Engine Oil for Toyota Corolla Malaysia",
      description:
        "Recommended engine oil for Toyota Corolla in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-toyota-corolla-malaysia",
    },
    {
      title: "Best Engine Oil for Honda Civic Malaysia",
      description:
        "Recommended engine oil for Honda Civic in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-honda-civic-malaysia",
    },
    {
      title: "Best Engine Oil for Proton Persona Malaysia",
      description:
        "Recommended engine oil for Proton Persona in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-proton-persona-malaysia",
    },
    {
      title: "Best Engine Oil for Proton X50 Malaysia",
      description:
        "Recommended engine oil for Proton X50 in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-proton-x50-malaysia",
    },
    {
      title: "Best Engine Oil for Proton X70 Malaysia",
      description:
        "Recommended engine oil for Proton X70 in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-proton-x70-malaysia",
    },
    {
      title: "Best Engine Oil for Toyota Corolla Cross Malaysia",
      description:
        "Recommended engine oil for Toyota Corolla Cross in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-toyota-corolla-cross-malaysia",
    },
    {
      title: "Best Engine Oil for Toyota Veloz Malaysia",
      description:
        "Recommended engine oil for Toyota Veloz in Malaysia, including viscosity and suitable SUMO engine oil.",
      slug: "/blog/best-engine-oil-toyota-veloz-malaysia",
    },
  ];

  return (
    <main className="container-pad py-20">
      <div className="text-center">
        <p className="text-oil-red font-bold uppercase">
          Infinity Auto Parts Blog
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Engine Oil Guides & Tips
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-neutral-600">
          Learn about engine oil, maintenance tips, viscosity, product
          comparisons and recommendations for Malaysian drivers.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="rounded-xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">{article.title}</h2>

            <p className="mt-4 text-neutral-600">
              {article.description}
            </p>

            <Link
              href={article.slug}
              className="mt-8 inline-block rounded bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
            >
              Read Article →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}