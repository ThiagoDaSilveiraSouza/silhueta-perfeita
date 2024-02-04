import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import BarCodeIcon from "../../../../assets/bar-code-icon.svg";
import logoImg from "../../../../assets/logo.png";

export const MainContainer = () => {
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex $flex-direction="column" $align-items="center">
          <Flex $flex-direction="column" gap="89px" $align-items="center">
            <img src={logoImg} alt="pedido-realizado-icon" />
            <img src={BarCodeIcon} alt="pedido-realizado-icon" />
          </Flex>
          <Flex $justify-content="center" $margin="11px 0 0 0">
            <Heading>Boleto gerado com sucesso!</Heading>
          </Flex>
          <Flex
            $flex-direction="column"
            $align-items="center"
            $max-width="495px"
            $text-align="center"
            $margin="51px 0 0 0"
          >
            <Text>
              Você acaba de dar um grande passo com a Silhueta Perfeita.
              Parabéns pela escolha que transformará sua silhueta!
            </Text>
          </Flex>
          <Flex
            $justify-content="center"
            $border="3px solid #CEBC96"
            $max-width="457px"
            $padding="16px"
            $margin="48px 0 0 0"
          >
            <Text $texttransform="uppercase" $fontweight="700">
              O seu boleto vence em 2 dias
            </Text>
          </Flex>
          <Flex $flex-direction="column" $align-items="center" $margin="39px 0 0 0" $gap="21px">
            <MainButton $background="#323232">VISUALIZAR MEU BOLETO</MainButton>
            <a
              href="#"
              style={{
                color: "#323232",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "14px",
                letterSpacing: "0.84px",
                textDecorationLine: "underline",
                fontFamily: "DM Sans",
                padding: "2px",
                boxSizing: "border-box",
              }}
            >
              Clique aqui para copiar o código de barras
            </a>
          </Flex>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
