import "react-alice-carousel/lib/alice-carousel.css";
import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Gradient,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import { cardsList } from "./data";
import { CarouselCard } from "./components";
import { Carousel } from "../../../../components/Carousel";
import { useWindowSize } from "../../../../hooks";

export const CallToAction2 = () => {
  const { isDesktop } = useWindowSize();
  const cardsComponentsList = cardsList.map((currentCardProps, index) => (
    <CarouselCard key={"carousel-card-" + index} {...currentCardProps} />
  ));

  return (
    <div style={{ position: "relative" }}>
      <Gradient $width="clamp(352.5px, 100%, 705px)" $top="10%" $right="-80%" />
      <LazzyAnimationContainer>
        <CentralizerContainer $justify-content="center">
          <Flex
            $padding={isDesktop ? "279px 0 0 0" : "72px 0 0 0"}
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
              $align-items={isDesktop ? "start" : "center"}
            >
              <Heading
                as="h2"
                style={{
                  textAlign: isDesktop ? "start" : "center",
                  maxWidth: "498px",
                }}
              >
                Modele a <b>beleza</b> do seu corpo com a cinta{" "}
                <b>Silhueta Perfeita</b>
              </Heading>
              <Text style={{ maxWidth: "399px" }}>
                Veja como a Silhueta Perfeita trabalha em harmonia com o seu
                corpo para criar curvas perfeitas.
              </Text>
              {isDesktop && <MainButton>Quero o Corpo Perfeito</MainButton>}
            </Flex>
            <Flex
              $flex-direction="column"
              $gap="42px"
              $align-items="center"
              $flex="0 1 570px"
            >
              <Carousel itemList={cardsComponentsList} width="570px" />
              {!isDesktop && <MainButton>Quero o Corpo Perfeito</MainButton>}
            </Flex>
          </Flex>
        </CentralizerContainer>
      </LazzyAnimationContainer>
    </div>
  );
};
