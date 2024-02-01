import "react-alice-carousel/lib/alice-carousel.css";
import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import { cardsList } from "./data";
import { CarouselCard } from "./components";
import { Carousel } from "../../../../components/Carousel";

export const CallToAction2 = () => {
  const cardsComponentsList = cardsList.map((currentCardProps, index) => (
    <CarouselCard key={"carousel-card-" + index} {...currentCardProps} />
  ));

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer $justify-content="center">
        <Flex
          $padding="72px 0"
          $flex-wrap="wrap"
          $gap="56px"
          $max-width="100%"
          $justify-content="center"
        >
          <Flex
            $flex-direction="column"
            $gap="45px"
            $flex={"1 1 420px"}
            $padding="25px 0 0 0 "
          >
            <Heading
              as="h2"
              style={{ textAlign: "start", maxWidth: "570px" }}
              width="100%"
            >
              Modele a <b>beleza</b> do seu corpo com a cinta{" "}
              <b>Silhueta Perfeita</b>
            </Heading>
            <Text style={{ maxWidth: "399px" }}>
              Veja como a Silhueta Perfeita trabalha em harmonia com o seu corpo
              para criar curvas perfeitas.
            </Text>
            <Flex style={{ gap: "15px" }}>
              <MainButton>Quero o Corpo Perfeito</MainButton>
            </Flex>
          </Flex>
          <div>
            <Carousel itemList={cardsComponentsList} width="620px" />
          </div>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
