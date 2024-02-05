import styled from "styled-components";
import { Carousel, LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";

import beforeImage from "../../../../assets/section7-before.png";
import afterImage from "../../../../assets/section7-after.png";
import { BeforeAndAfterCard } from "./components";
import { useWindowSize } from "../../../../hooks";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  h2 {
    max-width: 594px;
  }
  p {
    max-width: 312px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const beforeAndAfterList = [
  {
    beforeImg: beforeImage,
    afterImg: afterImage,
  },
  {
    beforeImg: beforeImage,
    afterImg: afterImage,
  },
  {
    beforeImg: beforeImage,
    afterImg: afterImage,
  },
];

export const Section7 = () => {
  const { isDesktop } = useWindowSize();
  const cardsComponentsList = beforeAndAfterList.map(
    (currentCardProps, index) => (
      <BeforeAndAfterCard
        cardData={currentCardProps}
        key={"before-and-after-" + index}
      />
    )
  );
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex
          $align-items="center"
          $flex-direction="column"
          $margin={isDesktop ? "178px 0 0 0" : "84px 0 0 0"}
          $gap="55px"
        >
          <TitleContainer>
            <Heading>Resultados incríveis de forma rápida e fácil!</Heading>
            <Text>
              Veja o antes e depois de quem usa a cinta modeladora Silhueta
              Perfeita
            </Text>
          </TitleContainer>
          {isDesktop ? (
            <CardsContainer>
              {beforeAndAfterList.map((currentData, index) => {
                return (
                  <BeforeAndAfterCard
                    cardData={currentData}
                    key={"before-and-after-" + index}
                  />
                );
              })}
            </CardsContainer>
          ) : (
            <Carousel itemList={cardsComponentsList} width={"315px"} />
          )}
          <MainButton>Quero o corpo dos sonhos</MainButton>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
