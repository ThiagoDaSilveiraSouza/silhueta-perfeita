import styled from "styled-components";

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

const ButtonContainer = styled.div`
  display: flex;
  border: 2px solid #e0d1b0;
  background: #e0d1b0;
  border-radius: 5px;
  height: 34px;
  overflow: hidden;

  button {
    flex: 1 1 100%;
    border: none;
    margin: none;
    outline: none;
    padding: 0;
  }
`;

const BeforeButton = styled.button`
  background: "white";
`;
const AfterButton = styled.button`
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
        <BeforeButton>Antes</BeforeButton>
        <AfterButton>Depois</AfterButton>
      </ButtonContainer>
    </CardContainer>
  );
};
