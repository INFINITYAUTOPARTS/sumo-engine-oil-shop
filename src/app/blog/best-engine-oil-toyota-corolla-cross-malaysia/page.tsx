import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Toyota Corolla Cross",
  slug: "best-engine-oil-toyota-corolla-cross-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Toyota Corolla Cross in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Toyota Corolla Cross"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Toyota Corolla Cross is a popular crossover SUV in Malaysia. Using the recommended engine oil helps ensure smooth performance, fuel efficiency and long-lasting engine protection."
    />
  );
}