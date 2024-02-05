import styled from "styled-components";
import { useWindowSize } from "../../../../../../hooks";

const StepCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: ${() => {
    const { isDesktop } = useWindowSize();
    return isDesktop ? "400px" : "225px";
  }};
  flex-shrink: 0;
  border-radius: 20px;
  background: #c4c4c4;
  color: #323232;
  text-align: center;
  font-family: Judson;
  font-size: 30.432px;
  font-style: normal;
  font-weight: 400;
  line-height: 105.556%; /* 32.122px */
`;

interface StepCardProps {
  index: number;
}

export const StepCard = ({ index }: StepCardProps) => {
  return <StepCardContainer>Passo {index}</StepCardContainer>;
};
