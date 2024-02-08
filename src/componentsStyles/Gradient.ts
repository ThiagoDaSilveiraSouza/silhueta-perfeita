import styled, { CSSProperties } from "styled-components";

interface GradientProps {
  $position?: CSSProperties["position"]
  $width?: CSSProperties["width"]
  $height?: CSSProperties["height"]
  $top?: CSSProperties["top"]
  $right?: CSSProperties["right"]
  $bottom?: CSSProperties["bottom"]
  $left?: CSSProperties["left"]
  $margin?: CSSProperties["margin"]
  $background?: CSSProperties["background"]
  $zindex?: CSSProperties["zIndex"]
  $borderradius?: CSSProperties["borderRadius"]
  $aspectration?: CSSProperties["aspectRatio"]
  $filter?: CSSProperties["filter"]

}

export const Gradient = styled.div<GradientProps>`
position: ${({ $position = "absolute" }) => $position};
width: ${({ $width = "200px" }) => $width};
height: ${({ $height = "inherit" }) => $height};
top: ${({ $top = "auto" }) => $top};
right: ${({ $right = "auto" }) => $right};
bottom: ${({ $bottom = "auto" }) => $bottom};
left: ${({ $left = "auto" }) => $left};
margin: ${({ $margin = "initial" }) => $margin};
background: ${({ $background = "rgba(224.19, 208.52, 175.61, 0.50)" }) => $background};
z-index:${({ $zindex = "-1" }) => $zindex} ;
border-radius: ${({ $borderradius = "100%" }) => $borderradius};
aspect-ratio: ${({ $aspectration = "1/1" }) => $aspectration};
filter: ${({ $filter = "blur(400px)" }) => $filter};
`