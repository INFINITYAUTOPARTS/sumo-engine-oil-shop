import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Toyota Corolla",
  slug: "best-engine-oil-toyota-corolla-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Toyota Corolla in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Toyota Corolla"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Toyota Corolla is one of the world's best-selling sedans. Choosing the correct engine oil helps improve engine protection, fuel efficiency and long-term reliability for everyday driving."
    />
  );
}