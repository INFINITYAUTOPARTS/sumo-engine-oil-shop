import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, MapPin, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Infinity Auto Parts",
  description: "Infinity Auto Parts is your trusted SUMO Engine Oil supplier in Malaysia for car owners, workshops and dealers.",
  openGraph: {
    title: "About Infinity Auto Parts | SUMO Engine Oil Malaysia",
    description: "Your trusted SUMO Engine Oil supplier in Malaysia.",
    type: "website"
  }
};

export default function AboutPage() {
  const supplyTypes = [
    "Fully Synthetic Engine Oil",
    "Semi Synthetic Engine Oil",
    "Diesel Engine Oil",
    "Workshop Supply",
    "Dealer Supply"
  ];
  const reasons = [
    "Genuine SUMO products",
    "Competitive pricing",
    "Fast response via WhatsApp",
    "Workshop-friendly service",
    "Reliable stock availability"
  ];
  const areas = ["Kuala Lumpur", "Selangor", "Johor", "Penang", "Melaka", "Negeri Sembilan", "Other locations in Malaysia"];

  return (
    <>
      <section className="bg-oil-black text-white">
        <div className="container-pad grid gap-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-oil-gold">Infinity Auto Parts</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Your Trusted SUMO Engine Oil Supplier in Malaysia
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
              Infinity Auto Parts specializes in supplying high-quality SUMO Engine Oil products for car owners, workshops and dealers across Malaysia.
            </p>
            <a
              href={buildWhatsAppUrl("Hello, I would like to contact Infinity Auto Parts about SUMO Engine Oil supply.")}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-green-600 px-5 text-sm font-black text-white hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us on WhatsApp
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-gradient-to-b from-neutral-900 to-black">
            <Image
              src="/product-images/sumo-r4.png"
              alt="SUMO Engine Oil supplied by Infinity Auto Parts"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain p-8"
            />
          </div>
        </div>
      </section>

      <section className="container-pad py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase text-oil-red">We provide</p>
            <h2 className="mt-2 text-3xl font-black text-oil-black">Engine oil supply for retail and trade customers.</h2>
            <div className="mt-6 grid gap-3">
              {supplyTypes.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-sm border border-neutral-200 bg-white p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-oil-red" />
                  <p className="font-bold text-oil-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm bg-neutral-100 p-6">
            <ShieldCheck className="h-8 w-8 text-oil-red" />
            <h2 className="mt-4 text-3xl font-black text-oil-black">Why Choose Us</h2>
            <div className="mt-6 grid gap-3">
              {reasons.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-oil-red" />
                  <p className="font-semibold text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-oil-black py-12 text-white">
        <div className="container-pad">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-oil-gold">Service coverage</p>
              <h2 className="mt-2 text-3xl font-black">Supplying SUMO Engine Oil across Malaysia.</h2>
            </div>
            <Truck className="h-10 w-10 text-oil-gold" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 shrink-0 text-oil-gold" />
                <p className="font-bold">{area}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-sm border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-bold uppercase text-neutral-300">Contact</p>
            <p className="mt-2 text-2xl font-black text-oil-gold">WhatsApp: +60 16-913 3412</p>
          </div>
        </div>
      </section>
    </>
  );
}
