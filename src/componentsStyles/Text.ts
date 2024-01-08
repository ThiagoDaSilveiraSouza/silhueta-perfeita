import styled from "styled-components";
import { CssBaseProps, ThemeProps } from "../interfaces";

interface TextProps extends CssBaseProps {
  theme: ThemeProps
}

export const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fonts.bodySize2};
  color: ${({ theme }) => theme.colors.bodyFontColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: normal;
  font-weight: 400;
`