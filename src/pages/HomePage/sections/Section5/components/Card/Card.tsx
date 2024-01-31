import { CSSProperties } from "styled-components";
import { Flex, Heading, Text } from "../../../../../../componentsStyles";

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
    <Flex
      $padding="20px"
      $flex-direction="column"
      $gap="12px"
      $border-radius="20px"
      $background="#FFF"
      $box-shadow="0px 8px 27.8px 0px gray"
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
  );
};
