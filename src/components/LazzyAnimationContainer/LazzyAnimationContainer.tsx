import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { useWindowSize } from "../../hooks";

interface LazzyContainerProps {
  $isshow: string;
}

const LazzyContainer = styled.section<LazzyContainerProps>`
  transform: ${({ $isshow }) =>
    $isshow === "true" ? "translateY(0)" : "translateY(50%)"};
  opacity: ${({ $isshow }) => ($isshow === "true" ? 1 : 0)};
  transition: 1s;
`;

interface LazzyAnimationContainerProps {
  children?: React.ReactNode;
}

export const LazzyAnimationContainer = ({
  children,
  ...props
}: LazzyAnimationContainerProps) => {
  const { isMobile } = useWindowSize();
  return (
    <InView triggerOnce={true} threshold={isMobile ? 0.05 : 0.25}>
      {({ inView, ref }) => (
        <LazzyContainer ref={ref} $isshow={inView.toString()} {...props}>
          {children}
        </LazzyContainer>
      )}
    </InView>
  );
};
