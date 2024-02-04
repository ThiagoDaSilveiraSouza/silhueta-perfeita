import {
  CentralizerContainer,
  Flex,
  FloatElementContainer,
  Heading,
  MainButton,
  Text,
} from "../../../../componentsStyles";
import logo from "../../../../assets/logo.png";
import numberOneIcon from "../../../../assets/number-one-icon.svg";
import PlayButton from "../../../../assets/Play Button.svg";
import Banner1 from "../../../../assets/banner_1.png";
import { Link } from "react-router-dom";
import { LeftSide, RightSide } from "./style";
import { useWindowSize } from "../../../../hooks";

export const FirstSection = () => {
  const { width } = useWindowSize();
  const isDesktopSize = 1374 <= width;

  return (
    <CentralizerContainer>
      <Flex
        $padding={"72 0"}
        $flex-wrap="wrap"
        $gap="56px"
        $justify-content="center"
      >
        <LeftSide $alignitems={isDesktopSize ? "start" : "center"}>
          <img src={logo} />
          <Heading
            as="h2"
            style={{
              maxWidth: "410px",
              justifyContent: "start",
              textAlign: isDesktopSize ? "start" : "center",
            }}
          >
            Tenha <b>o corpo dos sonhos</b> com a cinta modeladora{" "}
            <b>Silhueta Perfeita</b>
          </Heading>
          {!isDesktopSize && (
            <img src={Banner1} alt="banner 1" style={{ width: "225px" }} />
          )}

          <Flex $max-width="409px">
            <Text $textalign={isDesktopSize ? "start" : "center"}>
              Conquiste a confiança e o conforto que você merece com a
              tecnologia inovadora da cinta Silhueta Perfeita.
            </Text>
          </Flex>
          <Flex
            style={{ gap: "15px" }}
            $align-items="center"
            $justify-content={isDesktopSize ? "start" : "center"}
          >
            <MainButton>Quero o Corpo Perfeito</MainButton>
            <Link to="vsl-desk" style={{ display: "flex" }}>
              <img
                src={PlayButton}
                alt="play button"
                style={{ maxWidth: "51px", height: "51px" }}
              />
            </Link>
          </Flex>
        </LeftSide>
        <RightSide>
          {isDesktopSize && (
            <>
              <img src={Banner1} alt="banner 1" />

              <FloatElementContainer $bottom="-48px" $left="-13px" $zindex="1">
                <img
                  src={numberOneIcon}
                  alt="number one icon"
                  style={{
                    backdropFilter: "blur(8px)",
                    borderRadius: "100%",
                    background: "rgba(224.19, 208.52, 175.61, 0.03)",
                  }}
                />
              </FloatElementContainer>
            </>
          )}
        </RightSide>
      </Flex>
    </CentralizerContainer>
  );
};
