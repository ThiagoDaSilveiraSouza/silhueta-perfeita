import styled from "styled-components";
import { Heading, Text } from "../../../../../../componentsStyles";

interface BenefitCardProps {
  cardData: {
    title: string;
    subtitle: string;
    text: string;
  };
  translate: number;
}

interface BenefitCardContainerProps {
  $translate: number;
}

const BenefitCardContainer = styled.div<BenefitCardContainerProps>`
  display: flex;
  width: 306.834px;
  /* min-height: 352px; */
  padding: 40px 50px 40px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 8px 27.8px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  transform: ${({ $translate }) => `translateX(-${$translate}%)`};
`;

export const BenefitCard = ({ cardData, translate }: BenefitCardProps) => {
  return (
    <BenefitCardContainer $translate={translate}>
      <Heading style={{ color: "#E0D1B0" }}>{cardData.title}</Heading>
      <Heading as="h3">
        <b>{cardData.subtitle}</b>
      </Heading>
      <Text>{cardData.text}</Text>
    </BenefitCardContainer>
  );
};
