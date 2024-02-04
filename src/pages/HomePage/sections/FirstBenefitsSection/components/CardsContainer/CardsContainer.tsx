import styled from "styled-components";
import { Flex, Heading, Text } from "../../../../../../componentsStyles";
import fatIcon from "../../../../../../assets/fat-icon.svg";
import bellyIcon from "../../../../../../assets/belly-icon.svg";
import waistIcon from "../../../../../../assets/waist-icon.svg";

const Squad = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 89px;
  height: 89px;
  background: rgba(224, 209, 176, 0.25);
  border-radius: 25px;
`;

interface CardProps {
  title: string;
  text: string;
  imgUrl: string;
}

const CardList: CardProps[] = [
  {
    title: "Roupas marcando a barriga",
    text: "Sinta-se confortável e confiante em qualquer roupa.",
    imgUrl: fatIcon,
  },
  {
    title: "Cintura quadrada",
    text: "Obtenha a definição desejada na sua cintura.",
    imgUrl: waistIcon,
  },
  {
    title: "Insegurança com a Barriga",
    text: "Elimine a preocupação com a aparência da barriga.",
    imgUrl: bellyIcon,
  },
];

export const Card = ({ title, text, imgUrl }: CardProps) => {
  return (
    <Flex
      $position="relative"
      $flex="0 1 279px"
      $flex-direction="column"
      $align-items="center"
      $padding="120px 17px 25px"
      $background="rgba(224, 209, 176, 0.1)"
      $border-radius="25px"
      $margin="45px 0 0 0"
      $box-sizing="border-box"
      $gap="14px"
    >
      <Squad>
        <img src={imgUrl} alt={title} />
      </Squad>
      <Heading as="h3" $text-align="center">
        <b>{title}</b>
      </Heading>
      <Text $textalign="center">{text}</Text>
    </Flex>
  );
};

export const CardsContainer = () => {
  return (
    <Flex
      $flex="1 1 auto"
      $gap="25px"
      $flex-wrap="wrap"
      $justify-content="center"
    >
      {CardList.map((currentCard, index) => (
        <Card
          {...currentCard}
          key={"firstBenefitsSection-CardsContainer-" + index}
        />
      ))}
    </Flex>
  );
};
