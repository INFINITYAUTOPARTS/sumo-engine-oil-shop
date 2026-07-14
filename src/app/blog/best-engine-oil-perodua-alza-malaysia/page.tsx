import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Perodua Alza",
  slug: "best-engine-oil-perodua-alza-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Perodua Alza in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Perodua Alza"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Perodua Alza is one of Malaysia's most popular MPVs. Choosing the correct engine oil helps improve engine protection, fuel efficiency and long-term reliability for family driving."
    />
  );
}