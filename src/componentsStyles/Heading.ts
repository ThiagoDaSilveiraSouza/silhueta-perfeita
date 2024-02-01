import styled, { css } from "styled-components";
import { CssBaseProps, ThemeProps } from "../interfaces";


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


interface HeadingProps extends CssBaseProps {
  theme: ThemeProps;
}
export const Heading = styled.h2<HeadingProps>`
  ${(props) => {
    return css`
      position: ${props["$position"]};
      flex: ${props["$flex"]};
      flex-direction: ${props["$flex-direction"]};
      justify-content: ${props["$justify-content"]};
      justify-self: ${props["justify-self"]};
      align-items: ${props["$align-items"]};
      align-self: ${props["align-self"]};
      gap: ${props["$gap"]};
      flex-wrap: ${props["$flex-wrap"]};
      width: ${props["width"]};
      max-width: ${props["$max-width"]};
      height: ${props["height"]};
      max-height: ${props["max-height"]};
      padding: ${props["$padding"]};
      margin: ${props["$margin"]};
      background: ${props["$background"]};
      opacity: ${props["opacity"]};
      border-radius: ${props["$border-radius"]};
      box-sizing: ${props["$box-sizing"]};
      overflow: ${props["overflow"]};
      text-align: ${props["$text-align"]};
      color: ${props["$color"]};
  `
  }}
  ${({ theme, as }) => createTitles[as as keyof typeof createTitles] ? createTitles[as as keyof typeof createTitles](theme) : createTitles.h2(theme)};
  b{
    font-weight: bolder;
  }
`