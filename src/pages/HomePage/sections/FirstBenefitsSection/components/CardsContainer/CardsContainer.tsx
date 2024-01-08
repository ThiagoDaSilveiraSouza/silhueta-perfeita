import styled from "styled-components";
import { Flex, Heading, Text } from "../../../../../../componentsStyles";

const Squad = styled.div`
  position: absolute;
  top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 89px;
  height: 89px;
  background: rgba(224, 209, 176, 0.25);
  border-radius: 25px;

  &:after {
    content: "";
    width: 43px;
    height: 43px;
    background: rgb(224, 209, 176);
    border-radius: 100%;
    opacity: 1;
  }
`;

interface CardProps {
  title: string;
  text: string;
}

const CardList: CardProps[] = [
  {
    title: "Insegurança com a Barriga",
    text: "Elimine a preocupação com a aparência da barriga.",
  },
  {
    title: "Cintura sem forma",
    text: "Obtenha a definição desejada na sua cintura.",
  },
  {
    title: "Desconforto com Roupas",
    text: "Sinta-se confortável e confiante em qualquer roupa.",
  },
];

export const Card = ({ title, text }: CardProps) => {
  return (
    <Flex
      position="relative"
      flex="0 1 279px"
      flex-direction="column"
      align-items="center"
      padding="120px 17px 25px"
      background="rgba(224, 209, 176, 0.1)"
      border-radius="25px"
      margin="45px 0 0 0"
      box-sizing="border-box"
      gap="14px"
    >
      <Squad />
      <Heading as="h3" text-align="center">
        <b>{title}</b>
      </Heading>
      <Text text-align="center">{text}</Text>
    </Flex>
  );
};

export const CardsContainer = () => {
  return (
    <Flex flex="1 1 auto" gap="25px" flex-wrap="wrap" justify-content="center">
      {CardList.map((currentCard, index) => (
        <Card
          {...currentCard}
          key={"firstBenefitsSection-CardsContainer-" + index}
        />
      ))}
    </Flex>
  );
};
