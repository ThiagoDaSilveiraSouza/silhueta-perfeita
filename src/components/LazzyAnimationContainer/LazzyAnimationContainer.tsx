import React from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";

interface LazzyContainerProps {
  isshow: string;
}

const LazzyContainer = styled.section<LazzyContainerProps>`
  transform: ${({ isshow }) =>
    isshow === "true" ? "translateY(0)" : "translateY(50%)"};
  opacity: ${({ isshow }) => (isshow === "true" ? 1 : 0)};
  transition: 1s;
`;

interface LazzyAnimationContainerProps {
  children?: React.ReactNode;
}

export const LazzyAnimationContainer = ({
  children,
  ...props
}: LazzyAnimationContainerProps) => {
  return (
    <InView triggerOnce={true} threshold={0.5}>
      {({ inView, ref }) => (
        <LazzyContainer ref={ref} isshow={inView.toString()} {...props}>
          {children}
        </LazzyContainer>
      )}
    </InView>
  );
};
