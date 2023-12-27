import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";

export const CallToAction2 = () => {
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer
        style={{ padding: "72px 0", flexWrap: "wrap", gap: "56px" }}
      >
        <Flex flexDirection="column" gap="45px">
          <Heading as="h2" style={{ textAlign: "start", maxWidth: "570px" }}>
            Tenha <b>o corpo dos sonhos</b> com a cinta modeladora{" "}
            <b>Silhueta Perfeita</b>
          </Heading>
          <Text style={{ maxWidth: 410 }}>
            Veja Como a Silhueta Perfeita Trabalha em Harmonia com Seu Corpo
            para Criar Curvas Perfeitas
          </Text>
          <Flex style={{ gap: "15px" }}>
            <MainButton>Quero o Corpo Perfeito</MainButton>
          </Flex>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
