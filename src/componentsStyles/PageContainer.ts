import styled, { CSSProperties, css } from "styled-components";
import { useWindowSize } from "../hooks";

export const PageContainer = styled.div<CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  ${({ gap, padding }) => {
    const { isDesktop } = useWindowSize()
    return css`
      gap:${gap};
      padding: ${padding || isDesktop ? "142px 0" : "50px 0"}
    `
  }}
`