import styled, { CSSProperties } from "styled-components";
import { Flex, Heading, Text } from "../../../../../../componentsStyles";

const BoxContainer = styled.div`
  transition: 0.3s;
  &:hover {
    > div {
      user-select: none;
      transform: scale(1.05);
    }
  }
`;
interface CardProps {
  cardData: {
    title: string;
    text: string;
  };
  $position?: CSSProperties["position"];
  $left?: CSSProperties["left"];
  $top?: CSSProperties["top"];
}

export const Card = ({ cardData, $position, $left, $top }: CardProps) => {
  return (
    <BoxContainer>
      <Flex
        $padding="20px"
        $flex-direction="column"
        $gap="12px"
        $border-radius="20px"
        $background="#FFF"
        $box-shadow="0px 30px 28px -28px rgba(0,0,0,0.2)"
        width="262px"
        $max-width="262px"
        $position={$position || "initial"}
        $left={$left || "initial"}
        $top={$top || "initial"}
        $box-sizing="border-box"
        $margin="30px"
      >
        <Heading as="h3">{cardData.title}</Heading>
        <Text>{cardData.text}</Text>
      </Flex>
    </BoxContainer>
  );
};
