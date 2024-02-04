import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import { useWindowSize } from "../../../../hooks";
import { CardsContainer } from "./components";

export const FirstBenefitsSection = () => {
  const { isDesktop } = useWindowSize();
  return (
    <CentralizerContainer
      $align-items="center"
      $flex-direction="column"
      style={{ justifyContent: "center" }}
    >
      <LazzyAnimationContainer>
        <Flex
          $flex-direction="column"
          $gap="64px"
          $align-items="center"
          $padding={isDesktop ? "211px 0 0 0 " : "99px 0 0 0"}
        >
          <Flex $flex-direction="column" $align-items="center" $gap="45px">
            <Heading $max-width="632px" $text-align="center">
              Dê Adeus às Inseguranças do Dia-a-Dia
            </Heading>
            <Text
              $text-align="center"
              style={{ maxWidth: "376px", textAlign: "center" }}
            >
              Encontre a solução para preocupações comuns que afetam sua
              autoestima.
            </Text>
          </Flex>
          <CardsContainer />
          <MainButton>Quero o Corpo Perfeito</MainButton>
        </Flex>
      </LazzyAnimationContainer>
    </CentralizerContainer>
  );
};
