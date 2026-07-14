import EngineOilGuideTemplate from "@/components/EngineOilGuideTemplate";
import { createEngineOilMetadata } from "@/lib/seo";

export const metadata = createEngineOilMetadata({
  car: "Proton Persona",
  slug: "best-engine-oil-proton-persona-malaysia",
  description:
    "Learn the recommended engine oil viscosity for Proton Persona in Malaysia and discover the suitable SUMO engine oil.",
});

export default function Page() {
  return (
    <EngineOilGuideTemplate
      car="Proton Persona"
      viscosity="5W30"
      product="SUMO R4 5W30 Semi Synthetic Engine Oil"
      productUrl="/products/sumo-5w30-r4-semi-synthetic-engine-oil"
      intro="Proton Persona is a popular Malaysian sedan known for practical daily driving. Choosing the correct engine oil helps support smooth performance, engine protection and long-term reliability."
    />
  );
}