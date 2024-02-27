import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import ErrorIcon from "../../../../assets/error-icon.svg";
import logoImg from "../../../../assets/logo.png";
import PaymentFormIcon from "../../../../assets/payment-forms-icon.svg";

export const MainContainer = () => {
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex $flex-direction="column" $align-items="center" $gap="15px">
          <Flex
            $flex-direction="column"
            $align-items="center"
            $justify-content="center"
            $gap="73px"
            // $margin="76px 0 0 0"
          >
            <img src={logoImg} alt="pedido-realizado-icon" />
            <img src={ErrorIcon} alt="pedido-realizado-icon" />
          </Flex>
          <Flex
            $flex-direction="column"
            $justify-content="center"
            $align-items="center"
            $gap="48px"
          >
            <Flex $max-width="570px">
              <Heading $text-align="center">
                Ops...Ocorreu uma falha na transação
              </Heading>
            </Flex>
            <Flex
              $flex-direction="column"
              $align-items="center"
              $gap="15px"
              $max-width="495px"
              $text-align="center"
            >
              <Text $fontweight="400">
                Por favor verifique com o banco emissor do seu cartão o motivo
                da recusa da sua compra.
              </Text>
            </Flex>
            <img src={PaymentFormIcon} alt="formas-de-pagamento" />
            <MainButton $background="#323232">
              Escolha outro meio de pagamento
            </MainButton>
          </Flex>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
