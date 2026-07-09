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
      <section className="bg-white py-12 border-y border-neutral-200">
  <div className="container-pad">

    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

      <div>
        <p className="text-4xl font-black text-oil-red">4.9★</p>
        <p className="mt-2 font-semibold">Customer Rating</p>
      </div>

      <div>
        <p className="text-4xl font-black text-oil-red">5000+</p>
        <p className="mt-2 font-semibold">Happy Customers</p>
      </div>

      <div>
        <p className="text-4xl font-black text-oil-red">100+</p>
        <p className="mt-2 font-semibold">Workshop Partners</p>
      </div>

      <div>
        <p className="text-4xl font-black text-oil-red">15+</p>
        <p className="mt-2 font-semibold">Years Experience</p>
      </div>

    </div>

  </div>
</section>
<section className="bg-neutral-50 py-14">
  <div className="container-pad">

    <p className="text-center text-sm font-bold uppercase text-oil-red">
      Suitable For
    </p>

    <h2 className="mt-2 text-center text-4xl font-black">
      Popular Car Brands in Malaysia
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
      Genuine SUMO engine oil suitable for most Japanese and Malaysian vehicles.
    </p>

    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">

      {[
        "Toyota",
        "Honda",
        "Nissan",
        "Perodua",
        "Proton",
        "Mazda",
        "Mitsubishi",
        "Subaru",
        "Suzuki",
        "Isuzu",
      ].map((brand) => (

        <div
          key={brand}
          className="rounded-xl border bg-white p-6 text-center font-semibold shadow-sm transition hover:shadow-md"
        >
          🚗 {brand}
        </div>

      ))}

    </div>

  </div>
</section>
<section className="bg-black py-20 text-white">
  <div className="container-pad">

    <p className="text-center text-sm font-bold uppercase text-oil-red">
      Why Choose Us
    </p>

    <h2 className="mt-2 text-center text-4xl font-black">
      Why Infinity Auto Parts?
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-center text-neutral-300">
      Official SUMO Malaysia distributor supplying genuine Japanese engine oil
      with reliable support for both workshops and retail customers.
    </p>

    <div className="mt-14 grid gap-8 md:grid-cols-4">

      <div className="rounded-xl border border-neutral-700 p-6">
        <div className="text-4xl">🇯🇵</div>
        <h3 className="mt-4 text-xl font-bold">
          Genuine Japan Product
        </h3>
        <p className="mt-3 text-neutral-400">
          Original SUMO engine oil imported from Japan.
        </p>
      </div>

      <div className="rounded-xl border border-neutral-700 p-6">
        <div className="text-5xl">🚚</div>
        <h3 className="mt-4 text-xl font-bold">
          Fast Delivery
        </h3>
        <p className="mt-3 text-neutral-400">
          Nationwide shipping across Malaysia.
        </p>
      </div>

      <div className="rounded-xl border border-neutral-700 p-6">
        <div className="text-5xl">🔧</div>
        <h3 className="mt-4 text-xl font-bold">
          Workshop Friendly
        </h3>
        <p className="mt-3 text-neutral-400">
          Trusted by mechanics and automotive professionals.
        </p>
      </div>

      <div className="rounded-xl border border-neutral-700 p-6">
        <div className="text-5xl">💬</div>
        <h3 className="mt-4 text-xl font-bold">
          WhatsApp Support
        </h3>
        <p className="mt-3 text-neutral-400">
          Fast quotation and customer support every day.
        </p>
      </div>

    </div>

  </div>
</section>
      <section className="container-pad py-12">
        <div className="grid gap-4 md:grid-cols-3">
          
  {[
     {icon: BadgeCheck,
    title: "100% Genuine Japan Oil",
    text: "Original SUMO engine oil for Malaysian drivers and workshops.",
  },
  {
    icon: Truck,
    title: "Fast Delivery Nationwide",
    text: "Clear catalog, stock availability, and delivery support across Malaysia.",
  },
  {
    icon: Users,
    title: "Trusted by Car Owners & Workshops",
    text: "Suitable for retail buyers, mechanics, dealers, and fleet maintenance.",
  },

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
      <section className="container-pad py-16">
  <div className="text-center">
    <p className="text-sm font-bold uppercase text-oil-red">
      Customer Reviews
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Trusted by Car Owners Across Malaysia
    </h2>

    <p className="mt-4 text-neutral-600">
      Thousands of customers trust Infinity Auto Parts for genuine SUMO
      engine oil and reliable service.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    <div className="rounded-xl border p-6 shadow-sm">
      <div className="text-yellow-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-4 text-neutral-700">
        Original SUMO engine oil. Fast delivery and excellent customer
        service. Highly recommended!
      </p>

      <p className="mt-6 font-bold">
        Lim Wei Hong
      </p>

      <p className="text-sm text-neutral-500">
        Kuala Lumpur
      </p>
    </div>

    <div className="rounded-xl border p-6 shadow-sm">
      <div className="text-yellow-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-4 text-neutral-700">
        Good packaging, genuine product and responsive seller. Will buy
        again.
      </p>

      <p className="mt-6 font-bold">
        Ah Chong Auto Service
      </p>

      <p className="text-sm text-neutral-500">
        Selangor
      </p>
    </div>

    <div className="rounded-xl border p-6 shadow-sm">
      <div className="text-yellow-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-4 text-neutral-700">
        Excellent quality engine oil. My workshop has been using SUMO for
        years.
      </p>

      <p className="mt-6 font-bold">
        Kelvin Tan
      </p>

      <p className="text-sm text-neutral-500">
        Penang
      </p>
    </div>

  </div>
</section>
<section className="bg-neutral-50 py-16">
  <div className="container-pad">
    <div className="text-center">
      <p className="text-sm font-bold uppercase text-oil-red">
        FAQ
      </p>

      <h2 className="mt-2 text-4xl font-black">
        Frequently Asked Questions
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
        Common questions about SUMO Engine Oil Malaysia, delivery, wholesale
        purchase and product selection.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-4xl space-y-4">
      {[
        {
          question: "Is SUMO Engine Oil suitable for Perodua and Proton?",
          answer:
            "Yes. SUMO Engine Oil is suitable for many Malaysian vehicles including Perodua, Proton, Toyota, Honda, Nissan and more. Always follow the viscosity recommended in your owner's manual.",
        },
        {
          question: "Is SUMO Engine Oil original?",
          answer:
            "Yes. Infinity Auto Parts is an official SUMO Malaysia supplier providing genuine Japanese engine oil.",
        },
        {
          question: "Do you ship throughout Malaysia?",
          answer:
            "Yes. We deliver across Peninsular Malaysia and East Malaysia depending on courier coverage.",
        },
        {
          question: "Can workshops buy in bulk?",
          answer:
            "Yes. Workshops and dealers are welcome. Contact us for wholesale pricing and dealer support.",
        },
        {
          question: "Which engine oil should I choose?",
          answer:
            "The correct oil depends on your vehicle model and manufacturer recommendation. Contact us and we will help you choose.",
        },
        {
          question: "Where can I buy SUMO Engine Oil?",
          answer:
            "You can order directly through our website, WhatsApp, Shopee or TikTok Shop.",
        },
      ].map((faq) => (
        <div key={faq.question} className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold">
            {faq.question}
          </h3>
          <p className="mt-3 text-neutral-600">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}
