import styled from "styled-components";
import { CssBaseProps } from "../interfaces";

const sizes = {
  1: "600px",
  2: "1140px",
  3: "1920px",
};

interface CentralizerContainerProps extends CssBaseProps {
  size?: keyof typeof sizes;
}

export const CentralizerContainer = styled.div<CentralizerContainerProps>`
  display: flex;
  align-self: center;
  width: 95vw;
  box-sizing: border-box;
  max-width: ${({ size }) => sizes[size || 2]};

`;