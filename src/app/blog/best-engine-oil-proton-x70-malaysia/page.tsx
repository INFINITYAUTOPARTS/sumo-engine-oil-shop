import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Proton X70",
  slug: "best-engine-oil-proton-x70-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Proton X70 in Malaysia and discover a suitable SUMO 5W30 engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Proton X70"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Proton X70 is a popular SUV in Malaysia. Choosing the right engine oil helps maintain smooth engine performance, better fuel economy and long-term engine protection."
    />
  );
}