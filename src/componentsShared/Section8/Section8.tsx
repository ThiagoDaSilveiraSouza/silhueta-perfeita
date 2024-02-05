import styled from "styled-components";
import { Carousel, LazzyAnimationContainer } from "../../components";
import {
  CentralizerContainer,
  Flex,
  Heading,
  MainButton,
  Text,
} from "../../componentsStyles";
import VideoImg from "../../assets/section-8-video.png";
import { VideoCard } from "./Components";
import { useWindowSize } from "../../hooks";

const TextContainer = styled.div`
  flex: 0 1 370px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  flex-wrap: wrap;

  h2 {
    text-align: start;
  }

  @media (max-width: 1000px) {
    align-items: center;
    h2,
    p {
      text-align: center;
    }
  }
`;

const VideosContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideosList = [
  {
    imgUrl: VideoImg,
    videoUrl: "https://www.youtube.com.br",
  },
  {
    imgUrl: VideoImg,
    videoUrl: "https://www.youtube.com.br",
  },
  {
    imgUrl: VideoImg,
    videoUrl: "https://www.youtube.com.br",
  },
];

export const Section8 = () => {
  const { isDesktop, isMobile } = useWindowSize();
  const VideoCardList = VideosList.map((videoData, index) => {
    return (
      <VideoCard videoData={videoData} key={"section-8-video-card-" + index} />
    );
  });

  return (
    <LazzyAnimationContainer>
      <CentralizerContainer>
        <Flex
          $justify-content="center"
          $margin={isDesktop ? "244px 0 0 0" : "84px 0 0 0"}
          $gap="65px"
          $flex-wrap="wrap"
        >
          <TextContainer $text-align={isDesktop ? "start" : "center"}>
            <Heading width={isMobile ? "226px" : "auto"}>
              Quem está usando aprova!
            </Heading>
            <Text>
              Veja alguns depoimentos de quem já usa a cinta modeladora Silhueta
              Perfeita!
            </Text>
            {!isMobile && <MainButton>Quero o corpo dos sonhos</MainButton>}
          </TextContainer>
          <VideosContainer>
            {isMobile ? (
              <Carousel itemList={VideoCardList} width={"225px"} />
            ) : (
              VideoCardList
            )}
          </VideosContainer>
          {isMobile ? <MainButton>Quero o corpo dos sonhos</MainButton> : ""}
        </Flex>
      </CentralizerContainer>
    </LazzyAnimationContainer>
  );
};
