import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Truck, Users } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { getSiteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SUMO Engine Oil Malaysia | Official Supplier for Car Owners & Workshops",
  description: "Premium SUMO Engine Oil in Malaysia. Fully Synthetic, Semi Synthetic and Diesel Engine Oil for car owners, workshops and dealers. Contact us via WhatsApp for quotations.",
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    title: "SUMO Engine Oil Malaysia | Official Supplier for Car Owners & Workshops",
    description: "Premium SUMO Engine Oil in Malaysia for car owners, workshops and dealers.",
    url: getSiteUrl(),
    type: "website"
  }
};

export default async function HomePage() {
  const products = await getFeaturedProducts();
  const siteUrl = getSiteUrl();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SUMO Engine Oil Malaysia",
    url: siteUrl,
    telephone: "+60169133412",
    email: "jupiterconsultantservices@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No38, Jalan SM 3, Taman Sunway Batu Caves",
      postalCode: "68100",
      addressLocality: "Batu Caves",
      addressRegion: "Selangor",
      addressCountry: "MY"
    }
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SUMO Engine Oil Malaysia",
    url: siteUrl,
    description: metadata.description
  };
  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      <section className="bg-oil-black text-white">
        <div className="container-pad grid min-h-[700px] items-center gap-10 py-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-sm bg-oil-red px-3 py-1 text-xs font-black uppercase tracking-wide">
              Genuine Japanese Engine Oil
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Genuine SUMO Engine Oil Malaysia
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              Protect your engine with genuine Japanese engine oil.

Suitable for Toyota, Honda, Nissan, Perodua, Proton and more.

Fast delivery across Malaysia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-oil-red px-5 text-sm font-black text-white hover:bg-red-700"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex h-12 items-center justify-center rounded-sm border border-white/30 px-5 text-sm font-black text-white hover:bg-white hover:text-oil-black"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>

<div className="mt-6 grid grid-cols-2 gap-2 text-sm text-neutral-200 sm:grid-cols-2">
  <div>✅ 100% Genuine SUMO Engine Oil</div>
  <div>✅ Official Malaysia Distributor</div>
  <div>✅ Fast Delivery Nationwide</div>
  <div>✅ For Car Owners & Workshops</div>
</div><div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
  <div>
    <p className="text-3xl font-bold text-oil-red">5000+</p>
    <p className="text-sm text-neutral-400">Happy Customers</p>
  </div>

  <div>
    <p className="text-3xl font-bold text-oil-red">100+</p>
    <p className="text-sm text-neutral-400">Workshop Partners</p>
  </div>

  <div>
    <p className="text-3xl font-bold text-oil-red">15+</p>
    <p className="text-sm text-neutral-400">Years Experience</p>
  </div>

  <div>
    <p className="text-3xl font-bold text-oil-red">100%</p>
    <p className="text-sm text-neutral-400">Genuine Products</p>
  </div>
</div>

          <div className="relative min-h-[300px] overflow-hidden rounded-sm border border-white/10 bg-neutral-900 shadow-glow sm:min-h-[420px]">
            <Image
    src="/product-images/sumo-r1.png"
  alt="SUMO R1 5W40 Fully Synthetic Engine Oil"
  fill
  priority
  sizes="(min-width: 1024px) 45vw, 100vw"
  className="object-contain p-4"

/>
          </div>
        </div>
      </section>

      <section className="container-pad py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: BadgeCheck, title: "Quality SUMO oil range", text: "Engine oil options for common Malaysian service needs." },
            { icon: Truck, title: "Dealer friendly ordering", text: "Clear catalog, product quantities, and delivery details in every order." },
            { icon: Users, title: "Built for your customers", text: "Suitable for car owners, workshops, dealers, and fleet maintenance." }
          ].map((item) => (
            <div key={item.title} className="rounded-sm border border-neutral-200 p-5">
              <item.icon className="h-7 w-7 text-oil-red" />
              <h2 className="mt-4 text-lg font-black">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-12">
        <div className="container-pad">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase text-oil-red">Featured products</p>
              <h2 className="mt-2 text-3xl font-black text-oil-black">Popular SUMO oils</h2>
            </div>
            <Link href="/products" className="hidden text-sm font-black text-oil-red sm:inline">
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
