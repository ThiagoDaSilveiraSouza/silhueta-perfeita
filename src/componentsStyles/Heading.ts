import styled, { CSSProperties, css } from "styled-components";
import { ThemeProps } from "../interfaces";


interface HeadingProps {
  theme: ThemeProps;
}

const createTitles = {
  h2: (theme: ThemeProps) => css`
    color: ${theme.colors.headingFontColor};
    text-align: center;
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fonts.headingSize};
    line-height: 105.556%; /* 54.889px */
  `,
  h3: (theme: ThemeProps) => css<HeadingProps>`
    color: ${theme.colors.bodyFontColor};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fonts.bodySize1};
  `
}


interface HeadingProps extends CSSProperties {
  theme: ThemeProps;
}
export const Heading = styled.h2<HeadingProps>`
  ${({ theme, as }) => createTitles[as as keyof typeof createTitles] ? createTitles[as as keyof typeof createTitles](theme) : createTitles.h2(theme)};
  ${({ maxWidth, textAlign }) => {

    return css`
      max-width: ${maxWidth};
      text-align: ${textAlign};
    `
  }};

  b{
    font-weight: bolder;
  }
`