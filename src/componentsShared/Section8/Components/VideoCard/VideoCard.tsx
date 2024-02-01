import styled, { CSSProperties } from "styled-components";
import PlayIcon from "../../../../assets/play-icon.svg";

interface VideoCardProps {
  videoData: {
    imgUrl: string;
    videoUrl: string;
  };
}

interface VideoCardContaiProps {
  $backgroundimage: CSSProperties["backgroundImage"];
}

const VideoCardContainer = styled.a<VideoCardContaiProps>`
  position: relative;
  flex: 0 1 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 3px 0 gray;
    cursor: pointer;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
const IconImage = styled.img`
  position: absolute;
`;

export const VideoCard = ({ videoData }: VideoCardProps) => {
  return (
    <VideoCardContainer
      href={videoData.videoUrl}
      target="_blank"
      $backgroundimage={videoData.imgUrl}
    >
      <BackgroundImage
        src={videoData.imgUrl}
        alt={"section-8-video-card-" + videoData.videoUrl}
      />
      <IconImage src={PlayIcon} alt="play-icon" />
    </VideoCardContainer>
  );
};
