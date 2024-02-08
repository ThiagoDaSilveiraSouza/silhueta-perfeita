import { Footer, Section12, Section8 } from "../../componentsShared";
import { Section13 } from "../../componentsShared/Section13";
import { Gradient, PageContainer } from "../../componentsStyles";
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
    <>
      <Gradient $width="clamp(300px, 50%, 601px)" $top="-15%" $left="-9%" />
      <Gradient $width="clamp(600px, 100%, 1241px)" $top="-50%" $right="-25%" />
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
    </>
  );
};
