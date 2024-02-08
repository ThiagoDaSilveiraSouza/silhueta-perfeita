import styled, { CSSProperties } from "styled-components";
import { LazzyAnimationContainer } from "../../../../components";
import {
  CentralizerContainer,
  Flex,
  Gradient,
  Heading,
  Text,
} from "../../../../componentsStyles";
import StrapImg from "../../../../assets/section-6-strap.png";
import Start1Img from "../../../../assets/section-6-star-1.svg";
import Start2Img from "../../../../assets/section-6-star-2.svg";
import Start3Img from "../../../../assets/section-6-star-3.svg";
import { useWindowSize } from "../../../../hooks";

interface ImageCardContainerProps {
  $margintop: CSSProperties["marginTop"];
  $borderradius: CSSProperties["borderRadius"];
}

const ImageCardContainer = styled.div<ImageCardContainerProps>`
  position: relative;
  flex: 0 1 1024px;
  min-height: 514px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: ${({ $borderradius }) => $borderradius};
  background: linear-gradient(159deg, #e0d1b0 16.01%, #bdaa80 114.69%);
  margin-top: ${({ $margintop }) => $margintop};
  padding: 62px 74px;
  box-sizing: border-box;
`;
interface StarImgProps {
  $left?: CSSProperties["left"];
  $top?: CSSProperties["top"];
  $right?: CSSProperties["right"];
}

const StarImg = styled.img<StarImgProps>`
  position: absolute;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 0 1 437px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
    transform: rotate(2.5deg) translateX(-15%) scale(1.45);
  }

  @media (max-width: 1076px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  flex: 0 1 438px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  h2 {
    text-align: start;
  }
  img {
    display: none;
    width: 246.423px;
    height: 246.423px;
  }
  p {
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 1076px) {
    align-items: center;
    img {
      display: block;
    }
    h2,
    p {
      text-align: center;
    }
  }
`;

export const Section6 = () => {
  const { isDesktop } = useWindowSize();
  return (
    <div style={{ position: "relative" }}>
      <Gradient $width="clamp(352.5px, 100%, 705px)" $top="20%" $left="-60%" />
      <LazzyAnimationContainer>
        <Flex $justify-content="center">
          <ImageCardContainer
            $margintop={isDesktop ? "281px" : "61px"}
            $borderradius={isDesktop ? "45px" : "0"}
          >
            <CentralizerContainer
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ImageContainer>
                <img src={StrapImg} alt="strap-image" />
              </ImageContainer>
              <TextContainer>
                <Heading>
                  Ciência e inovação por trás da Silhueta Perfeita
                </Heading>
                <img src={StrapImg} alt="strap-image" />
                <Text>
                  A Silhueta Perfeita se baseia em avanços científicos para
                  oferecer resultados excepcionais. Sua inovadora construção com
                  três elásticos proporciona uma compressão equilibrada,
                  modelando a cintura eficazmente enquanto mantém o conforto.
                  Estudos indicam que esta abordagem de múltiplas camadas de
                  compressão otimiza a modelagem corporal e apoia a postura,
                  contribuindo significativamente para a saúde e bem-estar
                  geral.
                </Text>
              </TextContainer>
              <StarImg src={Start1Img} alt="star-1" $left="-55px" $top="30px" />
              <StarImg src={Start2Img} alt="star-2" $left="4px" $top="-50px" />
              <StarImg
                src={Start3Img}
                alt="star-3"
                $right="-50px"
                $top="-35px"
              />
            </CentralizerContainer>
          </ImageCardContainer>
        </Flex>
      </LazzyAnimationContainer>
    </div>
  );
};
