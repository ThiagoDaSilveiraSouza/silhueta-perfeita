import styled from "styled-components";

const CardContainer = styled.div`
  padding: 50px 50px 0 0;
  box-sizing: border-box;
  overflow: hidden;
  width: fit-content;
`;

const Card = styled.div`
  display: flex;
  box-sizing: border-box;
  background: #f7f3eb;
  border-radius: 25px;
  max-width: 570px;
`;

const LeftSide = styled.div`
  flex: 0 1 273px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 25px;
  box-sizing: border-box;
  p {
    max-width: 200px;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  flex: 0 1 295px;
  background: #f7f3eb;
  border-radius: 0 25px 25px 0;
  img {
    z-index: 10;
    transform: scale(1.35);
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

const Paragraph = styled.p`
  color: #7c7c7c;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
          <Paragraph>{text}</Paragraph>
        </LeftSide>
        <RightSide>
          <img src={imgUrl} alt="woman-image" />
        </RightSide>
      </Card>
    </CardContainer>
  );
};
