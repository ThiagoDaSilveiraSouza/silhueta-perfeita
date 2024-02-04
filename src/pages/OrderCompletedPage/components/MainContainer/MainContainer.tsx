import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import RightIcon from "../../../../assets/right-icon.png";
import logoImg from "../../../../assets/logo.png";

export const MainContainer = () => {
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex $flex-direction="column" $align-items="center">
          <Flex $gap="88px" $flex-direction="column" $align-items="center" $margin="0 0 24px 0">
            <img
              src={logoImg}
              alt="pedido-realizado-icon"
              style={{ width: "'177px" }}
            />
            <img src={RightIcon} alt="pedido-realizado-icon" />
          </Flex>
          <Flex $max-width="570px" $margin="0 0 56px 0">
            <Heading>Parabéns, seu pedido foi concluído com sucesso!</Heading>
          </Flex>
          <Flex
            $flex-direction="column"
            $align-items="center"
            $gap="20px"
            $max-width="495px"
            $text-align="center"
            $margin="0 0 51px 0"
          >
            <Text>
              Você acaba de dar um grande passo com a Silhueta Perfeita.
              Parabéns pela escolha que transformará sua silhueta!
            </Text>
            <Text>
              Seu pedido está a caminho e em breve você poderá desfrutar dos
              benefícios da nossa cinta.
            </Text>
            <Text $fontweight="bolder">
              Agradecemos por confiar na Silhueta Perfeita.
            </Text>
          </Flex>
          <Flex $justify-content="center">
            <MainButton $background="#323232">Acompanhar meu pedido</MainButton>
          </Flex>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
