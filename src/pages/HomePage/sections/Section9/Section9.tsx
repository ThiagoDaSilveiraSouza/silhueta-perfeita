import styled from "styled-components";
import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
} from "../../../../componentsStyles";
import { StepCard } from "./components";
import { useWindowSize } from "../../../../hooks";

const StepCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
`;

const stepCardList = [
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
];

export const Section9 = () => {
  const { isDesktop } = useWindowSize();

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex
          $justify-content="center"
          $margin={isDesktop ? "259px 0 0 0" : "120px 0 0 0"}
          $gap="65px"
          $flex-wrap="wrap"
          $flex-direction="column"
          $align-items="center"
        >
          <Flex $max-width="594px">
            <Heading $text-align="center">
              Veja a facilidade de usar cinta Silhueta Perfeita
            </Heading>
          </Flex>
          <StepCardContainer>
            {stepCardList.map((_, index) => {
              return <StepCard index={index} key={"step-card-" + index} />;
            })}
          </StepCardContainer>
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
