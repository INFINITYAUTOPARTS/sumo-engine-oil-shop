import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop / Dealer Registration",
  description: "Register your workshop or dealership interest for SUMO Engine Oil Malaysia supply, bulk orders and monthly usage quotations.",
  openGraph: {
    title: "Workshop / Dealer Registration | SUMO Engine Oil Malaysia",
    description: "Request workshop supply, dealer pricing and bulk order support for SUMO Engine Oil in Malaysia.",
    type: "website"
  }
};

export default function WorkshopDealerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
