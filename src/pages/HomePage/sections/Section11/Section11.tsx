import styled from "styled-components";
import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  Text,
} from "../../../../componentsStyles";
import { ProdutcCard } from "./components";
import ProductImg1 from "../../../../assets/section-11-strap-1.png";
import ProductImg2 from "../../../../assets/section-11-strap-2.png";
import ProductImg3 from "../../../../assets/section-11-strap-3.png";
import { useWindowSize } from "../../../../hooks";

const ProductsCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const productCardList = [
  {
    id: 1,
    name: "kit bronze",
    imgUrl: ProductImg1,
    title: "1 Cinta Silhueta Perfeita",
    hasFreeSheeping: false,
    giftCount: 1,
    value: 159.9,
    parcels: 10,
    nameColor: "red",
    nameBackgroundColor: "#FFDBCC",
  },
  {
    id: 2,
    name: "Kit ouro",
    imgUrl: ProductImg2,
    title: "3 Cintas Silhueta Perfeita",
    hasFreeSheeping: true,
    giftCount: 3,
    value: 299,
    parcels: 10,
    nameColor: "brow",
    nameBackgroundColor: "#E0D1B0",
  },
  {
    id: 3,
    name: "Kit prata",
    imgUrl: ProductImg3,
    title: "2 Cintas Silhueta Perfeita",
    hasFreeSheeping: false,
    giftCount: 0,
    value: 0,
    parcels: 10,
    nameColor: "dark-gray",
    nameBackgroundColor: "#E3E3E3",
  },
];

export const Section11 = () => {
  const { isDesktop } = useWindowSize();
  return (
    <LazzyAnimationContainer>
      <CentralizerContainer $justify-content="center">
        <Flex
          $margin={isDesktop ? "190px 0 0 0" : "93px 0 0 0"}
          $flex-direction="column"
          $align-items="center"
          $gap="58px"
          $position="relative"
        >
          <Flex $flex-direction="column" $align-items="center" $gap="29px">
            <Heading $max-width="502px" $text-align="center">
              Oferta imperdível, a beleza ao seu alcance
            </Heading>
            <Text>Viva a Transformação com a Silhueta Perfeita</Text>
          </Flex>

          <ProductsCardsContainer>
            {productCardList.map((cardData, index) => {
              const isBigger = index === 1 && isDesktop;
              return (
                <ProdutcCard
                  cardData={cardData}
                  key={"product-card-" + index}
                  isBigger={isBigger}
                />
              );
            })}
          </ProductsCardsContainer>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
