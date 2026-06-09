import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, PackageCheck, Phone, ShieldCheck, Users } from "lucide-react";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact SUMO Engine Oil Malaysia",
  description: "Contact SUMO Engine Oil Malaysia for retail orders, workshop supply, bulk orders and dealer inquiries.",
  openGraph: {
    title: "Contact SUMO Engine Oil Malaysia",
    description: "WhatsApp SUMO Engine Oil Malaysia for retail, workshop, dealer and bulk order inquiries.",
    type: "website"
  }
};

export default function ContactPage() {
  const contactButtons = [
    {
      label: "WhatsApp Us",
      message: "Hello, I would like to inquire about SUMO Engine Oil Malaysia."
    },
    {
      label: "Request Workshop Price",
      message: "Hello, I would like to request workshop pricing for SUMO Engine Oil."
    },
    {
      label: "Ask for Bulk Order",
      message: "Hello, I would like to ask about bulk order supply for SUMO Engine Oil."
    }
  ];

  return (
    <section className="container-pad py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SUMO Engine Oil Malaysia",
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
          })
        }}
      />
      <p className="text-sm font-black uppercase text-oil-red">Contact us</p>
      <h1 className="mt-2 text-4xl font-black text-oil-black">Talk to INFINITY AUTO PARTS.</h1>
      <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
        We focus on supplying SUMO Engine Oil in Malaysia for car owners, workshops, and dealers who need dependable product availability and fast WhatsApp support.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Phone, label: "Phone", value: "016-913 3412" },
          { icon: MessageCircle, label: "WhatsApp", value: "60169133412" },
          { icon: Mail, label: "Email", value: "jupiterconsultantservices@gmail.com" },
          { icon: MapPin, label: "Address", value: "No38, Jalan SM 3, Taman Sunway Batu Caves, 68100 Batu Caves, Selangor" }
        ].map((item) => (
          <div key={item.label} className="rounded-sm border border-neutral-200 p-5">
            <item.icon className="h-7 w-7 text-oil-red" />
            <p className="mt-4 text-sm font-bold uppercase text-neutral-500">{item.label}</p>
            <p className="mt-1 font-black text-oil-black">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {contactButtons.map((button) => (
          <a
            key={button.label}
            href={buildWhatsAppUrl(button.message)}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-green-600 px-4 text-sm font-black text-white hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            {button.label}
          </a>
        ))}
      </div>

      <div className="mt-5 rounded-sm border border-neutral-200 bg-white p-4">
        <p className="mb-3 text-sm font-black uppercase text-neutral-500">Shop and order channels</p>
        <MarketplaceButtons />
      </div>

      <div className="mt-8 rounded-sm bg-neutral-100 p-6">
        <h2 className="text-2xl font-black text-oil-black">Inquiry types</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {["Retail order", "Workshop supply", "Bulk order", "Dealer inquiry"].map((item) => (
            <div key={item} className="rounded-sm border border-neutral-200 bg-white p-4">
              <PackageCheck className="h-6 w-6 text-oil-red" />
              <p className="mt-3 font-black text-oil-black">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "Business focus", text: "SUMO Engine Oil supplier in Malaysia." },
          { icon: Users, title: "Customers", text: "Car owners, workshops, and dealers." },
          { icon: MessageCircle, title: "Fast support", text: "WhatsApp us for product availability, workshop pricing, and bulk supply." }
        ].map((item) => (
          <div key={item.title} className="rounded-sm border border-neutral-200 p-5">
            <item.icon className="h-7 w-7 text-oil-red" />
            <h3 className="mt-4 text-lg font-black text-oil-black">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
