import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Honda Civic",
  slug: "best-engine-oil-honda-civic-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Honda Civic in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Honda Civic"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Honda Civic is one of Malaysia's most popular sporty sedans. Choosing the correct engine oil helps improve engine performance, fuel efficiency and long-term reliability."
    />
  );
}