import styled, { css } from "styled-components";
import { CssBaseProps } from "../interfaces";


export const Flex = styled.div<CssBaseProps>`
  display: flex;
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
    `
  }}
`