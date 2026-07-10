"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Recommendation = {
  product: string;
  viscosity: string;
  note: string;
  href: string;
};

type VehicleModel = {
  name: string;
  years: string[];
  recommendation: Recommendation;
};

type VehicleOption = {
  models: VehicleModel[];
};

const vehicleData: Record<string, VehicleOption> = {
  Toyota: {
    models: [
      {
        name: "Vios",
        years: ["2014–2018", "2019–2022", "2023–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "A practical choice for many Toyota Vios models used for daily driving.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Yaris",
        years: ["2019–2022", "2023–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "Suitable for many Toyota Yaris models under normal Malaysian driving conditions.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Corolla Altis",
        years: ["2014–2018", "2019–Present"],
        recommendation: {
          product: "SUMO R1 5W40 Fully Synthetic",
          viscosity: "5W40",
          note: "Provides strong protection for drivers looking for a fully synthetic option.",
          href: "/products/sumo-5w40-r1-fully-synthetic-engine-oil",
        },
      },
      {
        name: "Hilux",
        years: ["2015–2020", "2021–Present"],
        recommendation: {
          product: "SUMO 4X4 15W50 Diesel",
          viscosity: "15W50",
          note: "Designed for diesel and 4X4 applications. Confirm your engine specification before purchase.",
          href: "/products/sumo-4x4-15w50-diesel-engine-oil",
        },
      },
    ],
  },

  Honda: {
    models: [
      {
        name: "City",
        years: ["2014–2019", "2020–2023", "2024–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "A common option for Honda City daily driving and regular maintenance.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Civic",
        years: ["2016–2021", "2022–Present"],
        recommendation: {
          product: "SUMO R1 5W40 Fully Synthetic",
          viscosity: "5W40",
          note: "A fully synthetic option offering strong protection for many Honda Civic engines.",
          href: "/products/sumo-5w40-r1-fully-synthetic-engine-oil",
        },
      },
      {
        name: "HR-V",
        years: ["2015–2021", "2022–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "Suitable for many HR-V models used for city and highway driving.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "CR-V",
        years: ["2013–2017", "2018–2022", "2023–Present"],
        recommendation: {
          product: "SUMO R1 5W40 Fully Synthetic",
          viscosity: "5W40",
          note: "A premium fully synthetic option for drivers seeking additional engine protection.",
          href: "/products/sumo-5w40-r1-fully-synthetic-engine-oil",
        },
      },
    ],
  },

  Perodua: {
    models: [
      {
        name: "Myvi",
        years: ["2011–2017", "2018–2021", "2022–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "Suitable for many Perodua Myvi models and normal daily commuting.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Bezza",
        years: ["2016–2019", "2020–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "A practical choice for many Bezza models used for everyday driving.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Axia",
        years: ["2014–2018", "2019–2022", "2023–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "Suitable for many Axia models, subject to the manufacturer’s recommended grade.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Alza",
        years: ["2009–2021", "2022–Present"],
        recommendation: {
          product: "SUMO R3 10W40 Semi Synthetic",
          viscosity: "10W40",
          note: "A practical semi-synthetic option for many Alza models, especially older vehicles.",
          href: "/products/sumo-10w40-r3-semi-synthetic-engine-oil",
        },
      },
    ],
  },

  Proton: {
    models: [
      {
        name: "Saga",
        years: ["2016–2019", "2020–Present"],
        recommendation: {
          product: "SUMO R3 10W40 Semi Synthetic",
          viscosity: "10W40",
          note: "A practical option for many Proton Saga models used for regular daily driving.",
          href: "/products/sumo-10w40-r3-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Persona",
        years: ["2016–2020", "2021–Present"],
        recommendation: {
          product: "SUMO R3 10W40 Semi Synthetic",
          viscosity: "10W40",
          note: "Suitable for many Proton Persona models under normal driving conditions.",
          href: "/products/sumo-10w40-r3-semi-synthetic-engine-oil",
        },
      },
      {
        name: "X50",
        years: ["2020–2023", "2024–Present"],
        recommendation: {
          product: "SUMO R1 5W40 Fully Synthetic",
          viscosity: "5W40",
          note: "A fully synthetic option for drivers seeking strong protection for turbocharged engines.",
          href: "/products/sumo-5w40-r1-fully-synthetic-engine-oil",
        },
      },
      {
        name: "X70",
        years: ["2018–2021", "2022–Present"],
        recommendation: {
          product: "SUMO R1 5W40 Fully Synthetic",
          viscosity: "5W40",
          note: "Offers fully synthetic protection for many Proton X70 driving conditions.",
          href: "/products/sumo-5w40-r1-fully-synthetic-engine-oil",
        },
      },
    ],
  },

  Nissan: {
    models: [
      {
        name: "Almera",
        years: ["2013–2019", "2020–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "Suitable for many Nissan Almera models used for regular city driving.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "Sylphy",
        years: ["2013–2019", "2020–Present"],
        recommendation: {
          product: "SUMO R4 5W30 Semi Synthetic",
          viscosity: "5W30",
          note: "A practical choice for many Nissan Sylphy engines and daily commuting.",
          href: "/products/sumo-5w30-r4-semi-synthetic-engine-oil",
        },
      },
      {
        name: "X-Trail",
        years: ["2015–2018", "2019–Present"],
        recommendation: {
          product: "SUMO R1 5W40 Fully Synthetic",
          viscosity: "5W40",
          note: "A fully synthetic option for drivers seeking stronger protection for SUV use.",
          href: "/products/sumo-5w40-r1-fully-synthetic-engine-oil",
        },
      },
      {
        name: "Navara",
        years: ["2015–2020", "2021–Present"],
        recommendation: {
          product: "SUMO 4X4 15W50 Diesel",
          viscosity: "15W50",
          note: "Designed for diesel and 4X4 use. Confirm compatibility with your engine manual.",
          href: "/products/sumo-4x4-15w50-diesel-engine-oil",
        },
      },
    ],
  },
};

export function EngineOilFinder() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [showResult, setShowResult] = useState(false);

  const models = useMemo(
    () => (brand ? vehicleData[brand]?.models ?? [] : []),
    [brand],
  );

  const selectedModel = models.find((item) => item.name === model);

  function handleBrandChange(value: string) {
    setBrand(value);
    setModel("");
    setYear("");
    setShowResult(false);
  }

  function handleModelChange(value: string) {
    setModel(value);
    setYear("");
    setShowResult(false);
  }

  function handleSubmit() {
    setShowResult(Boolean(brand && model && year));
  }

  return (
    <section className="border-y border-neutral-200 bg-white py-10">
      <div className="container-pad">
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Find the Right Engine Oil</h2>

          <p className="mt-2 text-neutral-600">
            Select your vehicle and we&apos;ll recommend a suitable SUMO engine
            oil.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <select
              value={brand}
              onChange={(event) => handleBrandChange(event.target.value)}
              className="rounded border border-neutral-300 p-3"
            >
              <option value="">Select Brand</option>

              {Object.keys(vehicleData).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={model}
              onChange={(event) => handleModelChange(event.target.value)}
              disabled={!brand}
              className="rounded border border-neutral-300 p-3 disabled:bg-neutral-100"
            >
              <option value="">Select Model</option>

              {models.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(event) => {
                setYear(event.target.value);
                setShowResult(false);
              }}
              disabled={!selectedModel}
              className="rounded border border-neutral-300 p-3 disabled:bg-neutral-100"
            >
              <option value="">Select Year</option>

              {selectedModel?.years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!brand || !model || !year}
              className="rounded bg-red-600 px-4 py-3 font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              Find Engine Oil
            </button>
          </div>

          {showResult && selectedModel ? (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-5">
              <p className="text-sm font-bold uppercase text-green-700">
                Recommended for {brand} {model}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {selectedModel.recommendation.product}
              </h3>

              <p className="mt-1 font-semibold text-neutral-700">
                Recommended viscosity:{" "}
                {selectedModel.recommendation.viscosity}
              </p>

              <p className="mt-3 text-neutral-600">
                {selectedModel.recommendation.note}
              </p>
{model === "Vios" && (
  <Link
    href="/blog/best-engine-oil-toyota-vios-malaysia"
    className="mt-4 inline-block font-bold text-oil-red hover:underline"
  >
    📖 Read Complete Toyota Vios Engine Oil Guide →
  </Link>
)}

{model === "Myvi" && (
  <Link
    href="/blog/best-engine-oil-perodua-myvi"
    className="mt-4 inline-block font-bold text-oil-red hover:underline"
  >
    📖 Read Complete Perodua Myvi Engine Oil Guide →
  </Link>
)}

{model === "Saga" && (
  <Link
    href="/blog/best-engine-oil-proton-saga"
    className="mt-4 inline-block font-bold text-oil-red hover:underline"
  >
    📖 Read Complete Proton Saga Engine Oil Guide →
  </Link>
)}
              <p className="mt-3 text-sm text-neutral-500">
                Recommendation is a general guide. Always confirm the correct
                viscosity and specification in your vehicle owner&apos;s manual.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={selectedModel.recommendation.href}
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
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}