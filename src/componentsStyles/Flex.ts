import styled, { CSSProperties, css } from "styled-components";



export const Flex = styled.div<CSSProperties>`
  display: flex;
  ${({ position, flex, flexDirection, justifyContent, justifySelf, alignItems, alignSelf, gap, flexWrap, width, maxWidth, height, maxHeight, padding, margin, background, opacity, borderRadius, boxSizing, overflow }) => {
    return css`
      position: ${position};
      flex: ${flex};
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      justify-self: ${justifySelf};
      align-items: ${alignItems};
      align-self: ${alignSelf};
      gap: ${gap};
      flex-wrap: ${flexWrap};
      width: ${width};
      max-width: ${maxWidth};
      height: ${height};
      max-height: ${maxHeight};
      padding: ${padding};
      margin: ${margin};
      background: ${background};
      opacity: ${opacity};
      border-radius: ${borderRadius};
      box-sizing: ${boxSizing};
      overflow: ${overflow};
    `
  }}
`