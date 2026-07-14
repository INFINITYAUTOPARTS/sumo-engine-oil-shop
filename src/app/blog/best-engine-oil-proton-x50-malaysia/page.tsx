import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Proton X50",
  slug: "best-engine-oil-proton-x50-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Proton X50 in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Proton X50"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Proton X50 is one of Malaysia's best-selling compact SUVs. Using the correct engine oil helps improve turbo engine protection, fuel efficiency and long-term reliability."
    />
  );
}