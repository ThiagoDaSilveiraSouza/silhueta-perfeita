import styled, { CSSProperties } from "styled-components";
import { Text } from "../../../../../../componentsStyles";
import { useWindowSize } from "../../../../../../hooks";

const CardContainer = styled.div`
  flex: 1 1 100%;
  box-sizing: border-box;
  overflow: hidden;
  width: fit-content;
  margin: 20px;
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
  z-index: 1;
  p {
    max-width: 273px;
  }
`;

const RightSide = styled.div`
  position: relative;
  flex: ${() => {
    const { isMobile } = useWindowSize();
    return !isMobile ? "0 1 274px" : "0 1 157px";
  }};

  display: flex;
  justify-content: right;
  align-items: flex-end;
  position: relative;
  background: #f7f3eb;
  border-radius: 0 25px 25px 0;
  object-fit: contain;
  img {
    width: 100%;
    transform: scale(1.3) translateX(10px);
    object-fit: contain;
    z-index: 0;
  }
`;

interface MainTitleProps {
  $fontsize?: CSSProperties["fontSize"];
}

const MainTitle = styled.h2<MainTitleProps>`
  color: #e0d1b0;
  font-size: ${() => {
    const { isMobile } = useWindowSize();

    return isMobile ? "123px" : "137.848px";
  }};
  font-style: normal;
  font-weight: 700;
  line-height: 106.749%; /* 147.151px */
  letter-spacing: -13.785px;
`;

const Subtitle = styled.h4`
  color: #7c7c7c;
  font-family: "DM Sans";
  font-size: ${() => {
    const { isMobile } = useWindowSize();

    return isMobile ? "21px" : "23px";
  }};
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
          <MainTitle style={{ textAlign: "start" }} $font-size="10px">
            {title}
          </MainTitle>
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
