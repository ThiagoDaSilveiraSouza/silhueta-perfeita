import { Carousel, LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  Text,
} from "../../../../componentsStyles";
import { useWindowSize } from "../../../../hooks";
import { DepoimentsCard } from "./components/DepoimentsCard";
import { depoimentsList } from "./data";

export const Depoiments = () => {
  const { isDesktop } = useWindowSize();
  const currentItemList = depoimentsList.map((currentCard, index) => (
    <DepoimentsCard cardInfo={currentCard} key={"card-info-" + index} />
  ));

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer $justify-content="center" $gap={"80px"}>
        <Flex
          $align-items="center"
          $flex="1 1 100%"
          $padding={isDesktop ? "234px 0 0 0" : "119px 0 0 0"}
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
            {isDesktop ? (
              currentItemList
            ) : (
              <Carousel itemList={currentItemList} width={"336px"} />
            )}
          </Flex>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
