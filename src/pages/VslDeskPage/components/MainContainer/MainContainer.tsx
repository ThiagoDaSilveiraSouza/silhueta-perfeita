import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import logoImg from "../../../../assets/logo.png";

export const MainContainer = () => {
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex $flex-direction="column" $align-items="center" $gap="25px">
          <img
            src={logoImg}
            alt="pedido-realizado-icon"
            style={{ width: "'177px" }}
          />
          <Flex
            $flex-direction="column"
            $align-items="center"
            $max-width="816px"
          >
            <Heading>
              Tenha o <b>corpo dos sonhos</b> com a cinta modeladora{" "}
              <b>Silhueta Perfeita</b>
            </Heading>
          </Flex>
          <Flex $max-width="410px">
            <Text $textalign="center">
              Conquiste a Confiança e o Conforto que Você Merece com a
              Tecnologia Inovadora de Silhueta Perfeita.
            </Text>
          </Flex>
          <iframe
            width="672"
            height="378"
            src="https://www.youtube.com/embed/MczwQBm6c8E?si=IjJN32rHNF6_KDlK&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />

          <MainButton>Quero o corpo dos conhos</MainButton>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
