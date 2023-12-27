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
    <CentralizerContainer alignItems="center" flexDirection="column">
      <LazzyAnimationContainer>
        <Flex flexDirection="column" gap="64px" alignItems="center">
          <Flex flexDirection="column" alignItems="center" gap="45px">
            <Heading maxWidth="632px" textAlign="center">
              Dê Adeus às Inseguranças do Dia-a-Dia
            </Heading>
            <Text textAlign="center" maxWidth="376px">
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
