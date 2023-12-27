import { PageContainer } from "../../componentsStyles";
import { CallToAction2, FirstBenefitsSection, FirstSection } from "./sections";

export const HomePage = () => {
  return (
    <PageContainer>
      <FirstSection />
      <FirstBenefitsSection />
      <CallToAction2 />
    </PageContainer>
  );
};
