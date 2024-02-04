import { Footer, Section12, Section8 } from "../../componentsShared";
import { Section13 } from "../../componentsShared/Section13";
import { PageContainer } from "../../componentsStyles";
import { MainContainer } from "./components";

export const ErrorTransitionPage = () => {
  return (
    <PageContainer>
      <MainContainer />
      <Section8 />
      <Section12 />
      <Section13 />
      <Footer />
    </PageContainer>
  );
};
