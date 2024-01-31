import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  > img {
    position: relative;
    display: flex;
    width: 100%; /* ou o tamanho desejado */
    height: auto; /* para manter a proporção da imagem */
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
      opacity: 0.5; /* Ajuste conforme necessário para controlar a opacidade do overlay */
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
