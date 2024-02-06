import styled, { CSSProperties } from "styled-components";
import { useWindowSize } from "../../../../hooks";


interface LeftSideProps {
  $justifycontent?: CSSProperties["justifyContent"]
  $alignitems?: CSSProperties["alignItems"]
}

export const LeftSide = styled.div<LeftSideProps>`
  flex: 0 1 518px;
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignitems = "start" }) => $alignitems};
  justify-content: ${({ $justifycontent = "start" }) => $justifycontent};
  gap: ${() => {
    const { isDesktop } = useWindowSize()
    return isDesktop ? "45px" : "24px"
  }};
  img {
    width: 220px;
  }
`;


export const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  flex: 0 1 525px;
  img {
    flex: 1 1 100%;
    width: 100%;
    object-fit: contain;
  }
`;

