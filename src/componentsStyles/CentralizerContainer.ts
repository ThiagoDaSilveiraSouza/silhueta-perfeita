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
  position: relative;
  display: flex;
  align-self: center;
  max-width: 90vw;
  box-sizing: border-box;
  width: ${({ size }) => sizes[size || 2]};
`;