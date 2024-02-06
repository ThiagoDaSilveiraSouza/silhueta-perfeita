import styled from "styled-components";
import { Flex, Text } from "../../../../../../componentsStyles";

const DepoimentsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 336px;
  padding: 40px;
  border-radius: 20px;
  background: #f7f3eb;
  box-sizing: border-box;
  margin: 0 10px;

  h3 {
    color: #7c7c7c;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h4 {
    color: #7c7c7c;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

interface DepoimentsCardProps {
  cardInfo: {
    name: string;
    description: string;
    text: string;
    imgUrl: string;
  };
}

export const DepoimentsCard = ({ cardInfo }: DepoimentsCardProps) => {
  return (
    <DepoimentsCardContainer $flex-direction="column">
      <header style={{ display: "flex", alignItems: "center", gap: "19px" }}>
        <img
          src={cardInfo.imgUrl}
          alt={cardInfo.name}
          style={{ width: "66px" }}
        />
        <Flex $flex-direction="column">
          <h3>{cardInfo.name}</h3>
          <h4>{cardInfo.description}</h4>
        </Flex>
      </header>
      <Text>{cardInfo.text}</Text>
    </DepoimentsCardContainer>
  );
};
