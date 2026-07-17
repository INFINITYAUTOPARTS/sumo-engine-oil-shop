import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Proton X90",
  slug: "best-engine-oil-proton-x90-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Proton X90 in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Proton X90"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Proton X90 is Proton's flagship SUV. Using the recommended engine oil helps maintain smooth performance, protect the engine and improve long-term reliability."
    />
  );
}