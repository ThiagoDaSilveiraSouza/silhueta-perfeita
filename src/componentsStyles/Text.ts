import styled, { CSSProperties } from "styled-components";
import { CssBaseProps, ThemeProps } from "../interfaces";

interface TextProps extends CssBaseProps {
  theme: ThemeProps
  $textalign?: CSSProperties["textAlign"]
  $maxwidth?: CSSProperties["maxWidth"]
  $texttransform?: CSSProperties["textTransform"]
  $fontweight?: CSSProperties["fontWeight"]
}

export const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fonts.bodySize2};
  color: ${({ theme }) => theme.colors.bodyFontColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: normal;
  font-weight:${({ $fontweight }) => $fontweight || 400} ;
  text-align: ${({ $textalign }) => $textalign};
  max-width: ${({ $maxwidth }) => $maxwidth};
  text-transform: ${({ $texttransform }) => $texttransform};
`