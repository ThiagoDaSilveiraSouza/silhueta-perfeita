import styled, { keyframes, CSSProperties } from "styled-components";
import { ThemeProps } from "../interfaces";



const pulseAnimation = keyframes`
  0% {
    opacity: 0.3;
  }
  
  100% {
    opacity: 0;
    transform: scaleX(1.1) scaleY(1.5);
    border: 5px solid black;
  }
  
`;

interface MainButtonProps extends CSSProperties {
  theme: ThemeProps;
  $background?: CSSProperties["background"];
  $color?: CSSProperties["color"];
}

export const MainButton = styled.button<MainButtonProps>`
  position: relative;
  display: flex;
  background: ${({ theme, $background }) =>
    $background ? $background : theme.colors.mainButtonBackgroundColor};
  color: ${({ theme, $color }) =>
    $color ? $color : theme.colors.secondaryBackgroundColor};
  font-size: ${({ theme }) => theme.fonts.bodySize2};
  text-align: center;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  width: fit-content;
  height: 51px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.3s;
  z-index: 1;
  opacity: 1;

  &:hover{
    transform: scale(1.1);
  }

  &::before{
    content: "";
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;  
    width: 100%;
    height: 100%;
    border-radius: 50px;
    animation: ${pulseAnimation} 0.6s infinite;
    transition: transform 0.3s;
    background: black;
    z-index: -3;
  }

`;
