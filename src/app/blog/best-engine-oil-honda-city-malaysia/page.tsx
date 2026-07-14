import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Honda City",
  slug: "best-engine-oil-honda-city-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Honda City in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
    car="Honda City"
    viscosity="5W30"
    product="SUMO R4 5W30 Semi Synthetic Engine Oil"
    productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
    intro="Honda City is one of Malaysia's most popular sedans. Choosing the correct engine oil helps improve fuel economy, engine protection and long-term reliability."
/>
  );
}