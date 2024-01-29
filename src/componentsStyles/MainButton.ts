import styled, { CSSProperties } from "styled-components";
import { ThemeProps } from "../interfaces";

interface MainButtonProps extends CSSProperties {
  theme: ThemeProps
}


export const MainButton = styled.button<MainButtonProps>`
  background: ${({ theme }) => theme.colors.mainButtonBackgroundColor};
  color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  font-size:${({ theme }) => theme.fonts.bodySize2};
  text-align: center;
  padding: 15px 30px;
  border:none;
  border-radius: 50px;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  cursor: pointer;

  &:hover{
    transform: scale(1.01);
    box-shadow: 0 0 5px 0 gray;
  }
`