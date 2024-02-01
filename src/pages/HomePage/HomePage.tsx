import { Section8 } from "../../componentsShared";
import { PageContainer } from "../../componentsStyles";
import {
  CallToAction2,
  Depoiments,
  FirstBenefitsSection,
  FirstSection,
  Section10,
  Section5,
  Section6,
  Section7,
  Section9,
} from "./sections";

export const HomePage = () => {
  return (
    <PageContainer>
      <FirstSection />
      <FirstBenefitsSection />
      <CallToAction2 />
      <Depoiments />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </PageContainer>
  );
};
