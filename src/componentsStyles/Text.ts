import styled, { CSSProperties } from "styled-components";
import { CssBaseProps, ThemeProps } from "../interfaces";

interface TextProps extends CssBaseProps {
  theme: ThemeProps
  $textalign?: CSSProperties["textAlign"]
  $maxwidth?: CSSProperties["maxWidth"]
}

export const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fonts.bodySize2};
  color: ${({ theme }) => theme.colors.bodyFontColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: normal;
  font-weight: 400;
  text-align: ${({ $textalign }) => $textalign};
  max-width: ${({ $maxwidth }) => $maxwidth};
`