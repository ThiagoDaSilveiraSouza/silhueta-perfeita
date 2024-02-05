import styled, { CSSProperties } from "styled-components";
import { Flex, Heading, Text } from "../../../../../../componentsStyles";
import { useWindowSize } from "../../../../../../hooks";

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
    left?: CSSProperties["left"];
    top?: CSSProperties["top"];
  };
  $position?: CSSProperties["position"];
}

export const Card = ({ cardData, $position }: CardProps) => {
  const { isDesktop } = useWindowSize();
  const { left, top, title, text } = cardData;
  return (
    <BoxContainer>
      <Flex
        $padding="20px"
        $flex-direction="column"
        $gap="12px"
        $border-radius="20px"
        $background="#FFF"
        $box-shadow="0px 30px 28px -28px rgba(0,0,0,0.2)"
        // $width={isDesktop ? "262px" : "295px"}
        $max-width={isDesktop ? "262px" : "295px"}
        $position={$position || "initial"}
        $left={left || "initial"}
        $top={top || "initial"}
        $box-sizing="border-box"
        $text-align={isDesktop ? "start" : "center"}
      >
        <Heading as="h3">
          <b>{title}</b>
        </Heading>
        <Text>{text}</Text>
      </Flex>
    </BoxContainer>
  );
};
