import styled, { CSSProperties } from "styled-components";

interface ImageContainerProps {
  $height: CSSProperties['height']
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ $height }) => $height || "auto"};
  > img {
    position: relative;
    display: flex;
    width: 100%; 
    display: block;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: lightgray url(WomanImageSection5) 7.966px 0px / 98.189%
        106.395% no-repeat;
      opacity: 0.5;
      z-index: 10;
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; /* ajuste a altura da área com opacidade conforme necessário */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`;

export const CardsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
