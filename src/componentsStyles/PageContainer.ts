import styled, { CSSProperties, css } from "styled-components";

export const PageContainer = styled.div<CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  ${({ gap, padding }) => {
    return css`
      gap:${gap};
      padding: ${padding || "142px 0"}
    `
  }}
`