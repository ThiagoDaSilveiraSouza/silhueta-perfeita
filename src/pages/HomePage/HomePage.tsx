import { PageContainer } from "../../componentsStyles";
import {
  CallToAction2,
  Depoiments,
  FirstBenefitsSection,
  FirstSection,
  Section5,
} from "./sections";

export const HomePage = () => {
  return (
    <PageContainer>
      <FirstSection />
      <FirstBenefitsSection />
      <CallToAction2 />
      <Depoiments />
      <Section5 />
    </PageContainer>
  );
};
