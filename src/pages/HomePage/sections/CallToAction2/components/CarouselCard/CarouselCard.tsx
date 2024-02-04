import styled from "styled-components";
import { Text } from "../../../../../../componentsStyles";

const CardContainer = styled.div`
  flex: 1 1 100%;
  box-sizing: border-box;
  overflow: hidden;
  width: fit-content;
`;

const Card = styled.div`
  display: flex;
  box-sizing: border-box;
  background: #f7f3eb;
  border-radius: 25px;
`;

const LeftSide = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 25px 0 25px 25px;
  box-sizing: border-box;
  p {
    max-width: 273px;
  }
`;

const RightSide = styled.div`
  flex: 0 1 274px;
  display: flex;
  justify-content: right;
  position: relative;
  background: #f7f3eb;
  border-radius: 0 25px 25px 0;
  img {
    z-index: 10;
    transform: scale(1.3) translateX(10px);
    width: 100%;
    object-fit: contain;
  }
`;

const MainTitle = styled.h2`
  color: #e0d1b0;
  font-size: 137.848px;
  font-style: normal;
  font-weight: 700;
  line-height: 106.749%; /* 147.151px */
  letter-spacing: -13.785px;
`;

const Subtitle = styled.h4`
  color: #7c7c7c;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

interface CarouselCardProps {
  title: string;
  subtitle: string;
  text: string;
  imgUrl: string;
}

export const CarouselCard = ({
  imgUrl,
  subtitle,
  text,
  title,
}: CarouselCardProps) => {
  return (
    <CardContainer>
      <Card>
        <LeftSide>
          <MainTitle style={{ textAlign: "start" }}>{title}</MainTitle>
          <Subtitle as="h3">{subtitle}</Subtitle>
          <Text>{text}</Text>
        </LeftSide>
        <RightSide>
          <img src={imgUrl} alt="woman-image" />
        </RightSide>
      </Card>
    </CardContainer>
  );
};
