import styled, { css } from "styled-components";
import { CssBaseProps } from "../interfaces";

const sizes = {
  1: "600px",
  2: "1360px",
  3: "1000px",
};

interface CentralizerContainerProps extends CssBaseProps {
  size?: keyof typeof sizes;
}

export const CentralizerContainer = styled.div<CentralizerContainerProps>`
  align-self: center;
  display: flex;
  width: 95vw;
  box-sizing: border-box;
  max-width: ${({ size }) => sizes[size || 2]};
  ${(props) => {
    const propsNames = Object.keys(props)
    return css`
    ${propsNames.map((currentPropName) => `${currentPropName}:${props[currentPropName as keyof typeof props]}`)}
    display: ${props.display || "flex"};
    overflow ${props.overflow || "hidden"};
    `
  }}
`;