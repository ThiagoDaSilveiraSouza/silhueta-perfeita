import styled from "styled-components";
import { ThemeProps } from "../../../../../../interfaces";

interface BeforeAndAfterCardProps {
  cardData: {
    beforeImg: string;
    afterImg: string;
  };
}

const CardContainer = styled.div`
  flex: 0 1 315px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 5px;
  button {
    width: 100%;
  }
`;

interface ButtonContainerProps {
  theme: ThemeProps;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  border: 2px solid #e0d1b0;
  background: #e0d1b0;
  border-radius: 5px;
  height: 34px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.body};

  p {
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    border: none;
    margin: 0;
    outline: none;
    padding: 0;
    text-transform: uppercase;
  }
`;

const BeforeText = styled.p`
  background: white;
`;
const AfterText = styled.p`
  background: none;
`;

export const BeforeAndAfterCard = ({ cardData }: BeforeAndAfterCardProps) => {
  const { beforeImg, afterImg } = cardData;

  return (
    <CardContainer>
      <ImageContainer>
        <img src={beforeImg} alt="before-image" />
        <img src={afterImg} alt="after-image" />
      </ImageContainer>
      <ButtonContainer>
        <BeforeText>Antes</BeforeText>
        <AfterText>Depois</AfterText>
      </ButtonContainer>
    </CardContainer>
  );
};
