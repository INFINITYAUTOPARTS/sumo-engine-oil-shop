import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "SUMO Engine Oil Malaysia admin area.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
