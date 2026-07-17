import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Honda CR-V",
  slug: "best-engine-oil-honda-cr-v-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Honda CR-V in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Honda CR-V"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Honda CR-V is a popular family SUV in Malaysia. Using the correct engine oil helps improve engine protection, fuel efficiency and long-term reliability."
    />
  );
}