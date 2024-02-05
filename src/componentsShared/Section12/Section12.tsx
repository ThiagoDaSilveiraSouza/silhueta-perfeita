import styled from "styled-components";
import { LazzyAnimationContainer } from "../../components/LazzyAnimationContainer";
import {
  CentralizerContainer,
  Flex,
  Heading,
  Text,
} from "../../componentsStyles";
import SectionImage from "../../assets/section-12-img.png";
import { useWindowSize } from "../../hooks";

const ImageCardContainer = styled.div`
  position: relative;
  flex: 0 1 968px;
  max-width: 968px;
  min-height: 514px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: ${() => {
    const { isDesktop } = useWindowSize();
    return !isDesktop ? "0" : "45px";
  }};
  background: linear-gradient(159deg, #e0d1b0 16.01%, #bdaa80 114.69%);
  margin-top: ${() => {
    const { isDesktop } = useWindowSize();
    return !isDesktop ? "79px" : "220px";
  }};
  padding: 60px 60px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 0 1 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1076px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  flex: 0 1 487px;
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

export const Section12 = () => {
  return (
    <LazzyAnimationContainer>
      <Flex $justify-content="center" $flex="1 1 100%">
        <ImageCardContainer>
          <CentralizerContainer
            style={{ display: "flex", justifyContent: "space-evenly", gap: 56 }}
          >
            <ImageContainer>
              <img src={SectionImage} alt="strap-image" />
            </ImageContainer>
            <TextContainer>
              <Heading>Garantia de satisfação da silhueta perfeita</Heading>
              <img src={SectionImage} alt="strap-image" />
              <Text>
                Acreditamos plenamente na qualidade e eficácia da Silhueta
                Perfeita. Por isso, oferecemos uma garantia de satisfação de 7
                dias. Se você não estiver completamente satisfeita com os
                resultados, pode devolver o produto dentro deste período para
                receber o reembolso total. Nossa garantia é um compromisso com
                sua confiança e satisfação, assegurando que sua experiência com
                a Cinta Silhueta Perfeita seja totalmente sem riscos."
              </Text>
            </TextContainer>
          </CentralizerContainer>
        </ImageCardContainer>
      </Flex>
    </LazzyAnimationContainer>
  );
};
