import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Perodua Axia",
  slug: "best-engine-oil-perodua-axia-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Perodua Axia in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
    car="Perodua Axia"
    viscosity="5W30"
    product="SUMO R4 5W30 Semi Synthetic Engine Oil"
    productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
    intro="Perodua Axia is one of Malaysia's popular compact cars. Choosing the correct engine oil helps improve fuel efficiency, engine protection and long-term reliability."
/>
  );
}