import styled from "styled-components";
import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import logo from "../../../../assets/logo.png";
import PlayButton from "../../../../assets/Play Button.svg";
import Banner1 from "../../../../assets/banner_1.png";

const LeftSide = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 45px;
  img {
    width: 220px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex: 1 1 510px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const FirstSection = () => {
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer padding={"72 0"} flex-wrap="wrap" gap="56px">
        <LeftSide>
          <img src={logo} />
          <Heading
            as="h2"
            max-width="570px"
            justify-content="start"
            text-align="start"
          >
            Tenha <b>o corpo dos sonhos</b> com a cinta modeladora{" "}
            <b>Silhueta Perfeita</b>
          </Heading>
          <Text width="410px">
            Veja Como a Silhueta Perfeita Trabalha em Harmonia com Seu Corpo
            para Criar Curvas Perfeitas
          </Text>
          <Flex style={{ gap: "15px" }}>
            <MainButton>Quero o Corpo Perfeito</MainButton>
            <img
              src={PlayButton}
              alt="play button"
              style={{ maxWidth: "55px" }}
            />
          </Flex>
        </LeftSide>
        <RightSide>
          <img src={Banner1} alt="banner 1" />
        </RightSide>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
