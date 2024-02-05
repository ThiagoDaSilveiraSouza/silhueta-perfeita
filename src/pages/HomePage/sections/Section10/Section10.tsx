import styled from "styled-components";
import { Carousel, LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import { BenefitCard } from "./components";
import { useWindowSize } from "../../../../hooks";

const CardsContainer = styled.div`
  display: flex;
  transform: translateX(3%);
`;

const benefitsCardsList = [
  {
    title: "01",
    subtitle: "Diferencial da Silhueta Perfeita",
    text: "O grande diferencial da Silhueta Perfeita é o seu triplo elástico, proporcionando uma compressão balanceada e confortável, algo que não se encontra em cintas comuns com apenas um elástico.",
  },
  {
    title: "02",
    subtitle: "Maior benefício comparado as outras",
    text: "Seu maior benefício é o conforto prolongado, permitindo uso contínuo sem restrições de movimento, um aspecto raro em outras cintas do mercado.",
  },
  {
    title: "03",
    subtitle: "O segredo da tecnologia",
    text: "O segredo por trás da tecnologia da Silhueta Perfeita reside no ajuste personalizado, oferecendo uma compressão sob medida que outras cintas não conseguem proporcionar.",
  },
];

export const Section10 = () => {
  const { isDesktop } = useWindowSize();
  const CarouselCardList = benefitsCardsList.map((cardData, index) => {
    return <BenefitCard cardData={cardData} key={"benefit-card-" + index} />;
  });

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex
          $justify-content="center"
          $margin={isDesktop?"259px 0 0 0":"99px 0 0 0"}
          $gap="65px"
          $flex-wrap="wrap"
          $flex-direction="column"
          $align-items="center"
        >
          <Flex
            $max-width="594px"
            $flex-direction="column"
            $align-items="center"
            $gap="45px"
            $text-align="center"
          >
            <Heading>
              Por que a Silhueta Perfeita se destaca das outras cintas?
            </Heading>
            <Text $textalign="center" $maxwidth="477px">
              Enquanto outras cintas prometem resultados, Silhueta Perfeita
              entrega eficácia e conforto incomparáveis.
            </Text>
          </Flex>
          {isDesktop ? (
            <CardsContainer>
              {benefitsCardsList.map((cardData, index) => {
                const translateParcente = index * 7;

                return (
                  <BenefitCard
                    cardData={cardData}
                    key={"benefit-card-" + index}
                    translate={translateParcente}
                  />
                );
              })}
            </CardsContainer>
          ) : (
            <Carousel itemList={CarouselCardList} width="310px" />
          )}

          <MainButton>Quero o corpo dos sonhos</MainButton>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
