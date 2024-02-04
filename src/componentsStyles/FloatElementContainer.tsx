import styled, { CSSProperties } from "styled-components";

interface FloatElementContainerProps {
  $top?: CSSProperties["top"];
  $right?: CSSProperties["right"];
  $bottom?: CSSProperties["bottom"];
  $left?: CSSProperties["left"];
  $zindex?: CSSProperties["zIndex"];
}

export const FloatElementContainer = styled.div<FloatElementContainerProps>`
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  z-index: ${({ $zindex }) => $zindex};
`;
