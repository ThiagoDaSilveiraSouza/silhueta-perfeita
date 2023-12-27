import styled, { CSSProperties, css } from "styled-components";

const sizes = {
  1: "600px",
  2: "1360px",
  3: "1000px",
};

interface CentralizerContainerProps extends CSSProperties {
  size?: keyof typeof sizes;
}

export const CentralizerContainer = styled.div<CentralizerContainerProps>`
  align-self: center;
  display: flex;
  width: 95vw;
  box-sizing: border-box;
  max-width: ${({ size }) => sizes[size || 2]};
  ${({ justifyContent, alignItems, flexDirection, gap, display, overflow }) => {
    return css`
    display: ${display || "flex"};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
    gap: ${gap};
    overflow ${overflow || "hidden"};
    `
  }}
`;