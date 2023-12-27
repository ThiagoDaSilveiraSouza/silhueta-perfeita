import styled, { CSSProperties, css } from "styled-components";
import { ThemeProps } from "../interfaces";

interface TextProps extends CSSProperties {
  theme: ThemeProps
}

export const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fonts.bodySize2};
  color: ${({ theme }) => theme.colors.bodyFontColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: normal;
  font-weight: 400;

  ${({ textAlign, maxWidth }) => {

    return css`
      max-width: ${maxWidth};
      text-align: ${textAlign};
    `
  }};
`