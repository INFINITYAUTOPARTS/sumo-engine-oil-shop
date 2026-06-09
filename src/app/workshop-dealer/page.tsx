"use client";

import { MessageCircle, Store } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const productOptions = [
  "SUMO 5W30 R4 Semi Synthetic Engine Oil",
  "SUMO 10W40 R3 Semi Synthetic Engine Oil",
  "SUMO 5W40 R1 Fully Synthetic Engine Oil",
  "SUMO 10W40 M2 Ultra Performance Engine Oil",
  "SUMO 20W50 M3 M-Power Engine Oil",
  "SUMO 4X4 15W50 Diesel Engine Oil"
];

export default function WorkshopDealerPage() {
  const [form, setForm] = useState({
    name: "",
    workshopName: "",
    phone: "",
    location: "",
    interestedProducts: [] as string[],
    monthlyUsage: "",
    notes: ""
  });

  function toggleProduct(product: string) {
    setForm((current) => ({
      ...current,
      interestedProducts: current.interestedProducts.includes(product)
        ? current.interestedProducts.filter((item) => item !== product)
        : [...current.interestedProducts, product]
    }));
  }

  function buildMessage() {
    return [
      "Hello, I would like to register as a SUMO Engine Oil workshop/dealer.",
      "",
      `Name: ${form.name}`,
      `Workshop name: ${form.workshopName}`,
      `Phone number: ${form.phone}`,
      `Location: ${form.location}`,
      `Interested products: ${form.interestedProducts.join(", ")}`,
      `Monthly usage estimate: ${form.monthlyUsage}`,
      `Notes: ${form.notes}`
    ].join("\n");
  }

  return (
    <section className="container-pad py-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-oil-red">Workshop / Dealer</p>
          <h1 className="mt-2 text-4xl font-black text-oil-black">Register your interest with INFINITY AUTO PARTS.</h1>
          <p className="mt-4 leading-7 text-neutral-600">
            Share your workshop or dealer details and the SUMO Engine Oil products you are interested in. Your registration will be sent directly to our WhatsApp team.
          </p>
          <div className="mt-6 rounded-sm bg-oil-black p-5 text-white">
            <Store className="h-8 w-8 text-oil-gold" />
            <p className="mt-4 text-lg font-black">For Malaysian workshops, dealers, and car-service businesses.</p>
          </div>
        </div>

        <form className="grid gap-4 rounded-sm border border-neutral-200 bg-white p-5 shadow-sm">
          <label className="text-sm font-bold">
            Name
            <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
          </label>
          <label className="text-sm font-bold">
            Workshop name
            <input required value={form.workshopName} onChange={(event) => setForm({ ...form, workshopName: event.target.value })} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-bold">
              Phone number
              <input required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
            </label>
            <label className="text-sm font-bold">
              Location
              <input required value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
            </label>
          </div>
          <fieldset className="rounded-sm border border-neutral-200 p-4">
            <legend className="px-2 text-sm font-bold">Interested products</legend>
            <div className="mt-2 grid gap-2">
              {productOptions.map((product) => (
                <label key={product} className="flex items-start gap-2 text-sm font-semibold text-neutral-700">
                  <input type="checkbox" checked={form.interestedProducts.includes(product)} onChange={() => toggleProduct(product)} className="mt-1" />
                  <span>{product}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="text-sm font-bold">
            Monthly usage estimate
            <input value={form.monthlyUsage} onChange={(event) => setForm({ ...form, monthlyUsage: event.target.value })} placeholder="Example: 20 cartons per month" className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
          </label>
          <label className="text-sm font-bold">
            Notes
            <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} className="mt-1 min-h-28 w-full rounded-sm border border-neutral-300 px-3 py-3" />
          </label>
          <a
            href={buildWhatsAppUrl(buildMessage())}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-green-600 px-5 text-sm font-black text-white hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Submit via WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}
