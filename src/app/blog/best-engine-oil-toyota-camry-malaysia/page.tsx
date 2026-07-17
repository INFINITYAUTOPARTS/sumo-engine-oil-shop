import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Toyota Camry",
  slug: "best-engine-oil-toyota-camry-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Toyota Camry in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Toyota Camry"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Toyota Camry is well known for its comfort and reliability. Choosing the recommended engine oil helps maintain smooth performance and long-term engine protection."
    />
  );
}