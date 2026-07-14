import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Toyota Veloz",
  slug: "best-engine-oil-toyota-veloz-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Toyota Veloz in Malaysia and discover the suitable SUMO engine oil.",
});
export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Toyota Veloz"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Toyota Veloz is a practical family MPV in Malaysia. Choosing the correct engine oil helps improve engine protection, fuel efficiency and reliable daily performance."
    />
  );
}