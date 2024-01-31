import {
  FiniteCarousel,
  LazzyAnimationContainer,
} from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  Text,
} from "../../../../componentsStyles";
import { ResponsiveConfigs } from "../../../../configs/responsiveConfigs";
import { useWindowSize } from "../../../../hooks";
import { DepoimentsCard } from "./components/DepoimentsCard";
import { depoimentsList } from "./data";

export const Depoiments = () => {
  const { width } = useWindowSize();
  const currentItemList = depoimentsList.map((currentCard, index) => (
    <DepoimentsCard cardInfo={currentCard} key={"card-info-" + index} />
  ));

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer $justify-content="center" $gap={"80px"}>
        <Flex
          $align-items="center"
          $flex="1 1 100%"
          $padding="200px 0 0 0"
          $flex-direction="column"
          $gap="80px"
        >
          <Flex
            $flex-direction="column"
            $max-width="632px"
            $gap="45px"
            style={{ textAlign: "center" }}
          >
            <Heading>
              O impacto da Silhueta Perfeita na vida das pessoas!
            </Heading>
            <Text>Transformações que falam mais que palavras.</Text>
          </Flex>
          <Flex $flex="0 1 50%">
            <FiniteCarousel
              itemList={currentItemList}
              itemsToShow={width >= ResponsiveConfigs.viewWidth["1"] ? 3 : 1}
            />
          </Flex>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
