import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import { CardsContainer } from "./components";

export const FirstBenefitsSection = () => {
  return (
    <CentralizerContainer align-items="center" flex-direction="column">
      <LazzyAnimationContainer>
        <Flex flex-direction="column" gap="64px" align-items="center">
          <Flex flex-direction="column" align-items="center" gap="45px">
            <Heading max-width="632px" text-align="center">
              Dê Adeus às Inseguranças do Dia-a-Dia
            </Heading>
            <Text text-align="center" max-width="376px">
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
