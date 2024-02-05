import { Carousel, LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import WomanImageSection5 from "../../../../assets/woman-section5.png";
import { Card } from "./components";
import { CardsContainer, ImageContainer, ImageOverlay } from "./style";
import { useWindowSize } from "../../../../hooks";
import { ResponsiveConfigs } from "../../../../configs/responsiveConfigs";

const cardList = [
  {
    title: "Fácil de Vestir",
    text: "Em poucos segundos você terá a Silhueta Perfeita.",
    left: "-45%",
    top: "5%",
  },
  {
    title: "Cintura Definida",
    text: "Sinta o efeito imediato de uma cintura visivelmente mais fina.",
    left: "-65%",
    top: "35%",
  },
  {
    title: "Conforto Diário",
    text: "Tenha uma Silhueta Perfeita com conforto durante todo o dia.",
    left: "-40%",
    top: "65%",
  },
  {
    title: "Confiança Renovada",
    text: "A transformação física traz um novo nível de autoconfiança.",
    left: "70%",
    top: "20%",
  },
  {
    title: "Melhora da Postura",
    text: "Ajuda a manter a postura correta, contribuindo para a saúde da coluna.",
    left: "65%",
    top: "65%",
  },
];

export const Section5 = () => {
  const { width } = useWindowSize();
  const cardElementListToCarousel = cardList.map((currentCard, index) => (
    <Card cardData={currentCard} key={"section-5-carousel-card-" + index} />
  ));

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer $justify-content="center">
        <Flex
          $margin="190px 0 0 0 "
          $flex-direction="column"
          $align-items="center"
          $gap="58px"
          $position="relative"
        >
          <Flex $flex-direction="column" $align-items="center" $gap="45px">
            <Heading $text-align={"center"}>
              Entregamos <b>mais do que estética</b>, uma jornada de{" "}
              <b>bem-estar e confiança!</b>
            </Heading>
            <Text>Viva a Transformação com a Silhueta Perfeita</Text>
          </Flex>
          <ImageContainer>
            <img src={WomanImageSection5} alt="woman" />
            <ImageOverlay />
            {width >= ResponsiveConfigs.viewWidth["desktop"] && (
              <CardsContainer>
                {cardList.map((currentCard, index) => {
                  return (
                    <Card
                      cardData={currentCard}
                      key={"section-5-card-" + index}
                      $position="absolute"
                    />
                  );
                })}
              </CardsContainer>
            )}
          </ImageContainer>
          {width < ResponsiveConfigs.viewWidth["desktop"] && (
            <Carousel
              itemList={cardElementListToCarousel}
              width="280px"
              justifyControls="center"
              controlsGapDistance="0"
            />
          )}
          <MainButton>Quero o corpo dos conhos</MainButton>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
