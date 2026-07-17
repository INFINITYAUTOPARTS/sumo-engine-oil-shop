import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Perodua Ativa",
  slug: "best-engine-oil-perodua-ativa-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Perodua Ativa in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Perodua Ativa"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Perodua Ativa is a popular compact SUV in Malaysia. The correct engine oil helps protect the turbocharged engine, improve efficiency and support reliable daily driving."
    />
  );
}