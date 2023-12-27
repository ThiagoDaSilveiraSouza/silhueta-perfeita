import styled, { CSSProperties, css } from "styled-components";

export const PageContainer = styled.div<CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap:${({ gap }) => {
    return css`
      gap:${gap};
    `
  }}
`