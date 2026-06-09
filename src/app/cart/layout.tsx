import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review selected SUMO Engine Oil Malaysia products and request a workshop or dealer quotation via WhatsApp.",
  robots: {
    index: false,
    follow: true
  }
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
