import type { Metadata } from "next";
import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";

export const metadata: Metadata = {
  title: "Best Engine Oil for Toyota Hilux Malaysia (2026 Guide)",
  description:
    "Learn the suitable engine oil viscosity for Toyota Hilux diesel models in Malaysia and view the recommended SUMO 4X4 diesel engine oil.",
};

export default function Page() {
  return (
    <EngineOilGuideTemplate
    car="Toyota Hilux"
    viscosity="15W50"
    product="SUMO 4X4 15W50 Diesel Engine Oil"
    productUrl="/products/sumo-4x4-15w50-diesel-engine-oil"
    intro="Toyota Hilux is one of Malaysia's most popular pickup trucks. Choosing the correct diesel engine oil helps improve durability and protects the engine under heavy-duty driving conditions."
/>
  );
}