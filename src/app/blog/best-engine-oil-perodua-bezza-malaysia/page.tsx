import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Perodua Bezza",
  slug: "best-engine-oil-perodua-bezza-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Perodua Bezza in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
    car="Perodua Bezza"
    viscosity="5W30"
    product="SUMO R4 5W30 Semi Synthetic Engine Oil"
    productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
    intro="Perodua Bezza is one of Malaysia's most fuel-efficient sedans. Choosing the correct engine oil helps improve engine protection, fuel economy and long-term reliability."
/>
  );
}