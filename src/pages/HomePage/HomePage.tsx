import { Footer, Section12, Section8 } from "../../componentsShared";
import { Section13 } from "../../componentsShared/Section13";
import { PageContainer } from "../../componentsStyles";
import {
  CallToAction2,
  Depoiments,
  FirstBenefitsSection,
  FirstSection,
  Section10,
  Section11,
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
      <Section11 />
      <Section12 />
      <Section13 />
      <Footer />
    </PageContainer>
  );
};
