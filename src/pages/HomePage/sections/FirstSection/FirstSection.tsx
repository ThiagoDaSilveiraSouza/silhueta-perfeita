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
import { LeftSide, RightSide } from "./style";
import { useWindowSize } from "../../../../hooks";
import { VideoModal } from "./components";
import { useState } from "react";

export const FirstSection = () => {
  const { width, isDesktop } = useWindowSize();
  const [videoModalIsOpen, setVideoModalisOpen] = useState(false);
  const isDesktopSize = 1374 <= width;

  return (
    <CentralizerContainer>
      <Flex
        $padding={"72 0"}
        $flex-wrap="wrap"
        $gap={"56px"}
        $justify-content="center"
      >
        <LeftSide $alignitems={isDesktopSize ? "start" : "center"}>
          <img src={logo} style={{ width: isDesktop ? "220px" : "130px" }} />
          <Flex
            $flex-direction="column"
            $align-items={isDesktop ? "start" : "center"}
          >
            <Heading
              as="h2"
              style={{
                maxWidth: "410px",
                justifyContent: "start",
                textAlign: isDesktopSize ? "start" : "center",
                flex: "1 1 100%",
              }}
            >
              Tenha <b>o corpo dos sonhos</b> com a cinta modeladora{" "}
              <b>Silhueta Perfeita</b>
            </Heading>
            {!isDesktopSize && (
              <div
                style={{
                  display: "flex",
                  position: "relative",
                }}
              >
                <img src={Banner1} alt="banner 1" style={{ width: "225px" }} />
                <FloatElementContainer
                  $bottom="-20px"
                  $left="-10px"
                  $zindex="1"
                >
                  <img
                    src={numberOneIcon}
                    alt="number one icon"
                    style={{
                      backdropFilter: "blur(8px)",
                      borderRadius: "100%",
                      background: "rgba(224.19, 208.52, 175.61, 0.03)",
                      width: "84px",
                      height: "84px",
                    }}
                  />
                </FloatElementContainer>
              </div>
            )}
          </Flex>

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
            <img
              src={PlayButton}
              alt="play button"
              style={{ maxWidth: "51px", height: "51px" }}
              onClick={() => setVideoModalisOpen(true)}
            />
          </Flex>
        </LeftSide>
        {isDesktopSize && (
          <RightSide>
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
          </RightSide>
        )}
        <VideoModal
          useModal={[videoModalIsOpen, setVideoModalisOpen]}
          modalCardPadding="0"
        >
          <iframe
            width="672"
            height="378"
            src="https://www.youtube.com/embed/MczwQBm6c8E?si=IjJN32rHNF6_KDlK&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </VideoModal>
      </Flex>
    </CentralizerContainer>
  );
};
