import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "SUMO Engine Oil Malaysia | Official Supplier for Car Owners & Workshops",
    template: "%s | SUMO Engine Oil Malaysia"
  },
  description: "Premium SUMO Engine Oil in Malaysia. Fully Synthetic, Semi Synthetic and Diesel Engine Oil for car owners, workshops and dealers. Contact us via WhatsApp for quotations.",
  keywords: [
    "SUMO Engine Oil Malaysia",
    "Engine Oil Supplier Malaysia",
    "Fully Synthetic Engine Oil Malaysia",
    "Semi Synthetic Engine Oil Malaysia",
    "Diesel Engine Oil Malaysia",
    "Engine Oil for Workshops Malaysia"
  ],
  openGraph: {
    title: "SUMO Engine Oil Malaysia | Official Supplier for Car Owners & Workshops",
    description: "Premium SUMO Engine Oil in Malaysia for car owners, workshops and dealers.",
    url: getSiteUrl(),
    siteName: "SUMO Engine Oil Malaysia",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/brand/infinity-auto-parts-logo.png", type: "image/png" }
    ],
    apple: [{ url: "/brand/infinity-auto-parts-logo.png", type: "image/png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "SUMO Engine Oil Malaysia",
    description: "Fully Synthetic, Semi Synthetic and Diesel Engine Oil for Malaysia."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-MY">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <FloatingWhatsAppButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
