import styled, { CSSProperties } from "styled-components";
import { ArrowCicle } from "../../../ArrowCircle";

interface NavigationContainerProps {
  $justifycontrols: CSSProperties["justifyContent"];
}

const NavigationContainer = styled.div<NavigationContainerProps>`
  display: flex;
  gap: 11px;
  justify-content: ${({ $justifycontrols }) => $justifycontrols};
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100%;
    background: none;
  }
`;

const BulletsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

interface BulletProps {
  $active: string;
}
const Bullet = styled.div<BulletProps>`
  width: ${({ $active }) => ($active === "true" ? "39px" : "9px")};
  height: 9px;
  background: ${({ $active }) =>
    $active === "false" ? "rgba(124,124,124,0.25)" : "#E0D1B0"};
  border-radius: 10px;
  transition: 0.3s;
`;

interface NavigationProps {
  justifyControls?: CSSProperties["justifyContent"];
  prevSlide?: () => void;
  nextSlide?: () => void;
  activeSlideIndex: number;
  totalOfSlides: number;
}

export const Navigation = ({
  justifyControls = "center",
  prevSlide,
  nextSlide,
  activeSlideIndex,
  totalOfSlides,
}: NavigationProps) => {
  const numberOfBullets = totalOfSlides - 2;
  const BulletsComponentsList = [...Array(numberOfBullets)].map(
    (value, index) => {
      const isActive = activeSlideIndex - 1 === index;
      return (
        <Bullet
          key={"carousel-bullet-" + value + "-" + index}
          $active={isActive.toString()}
        />
      );
    }
  );
  return (
    <NavigationContainer $justifycontrols={justifyControls}>
      <button onClick={prevSlide}>
        <ArrowCicle direction="left" />
      </button>
      <BulletsContainer>{BulletsComponentsList}</BulletsContainer>
      <button onClick={nextSlide}>
        <ArrowCicle />
      </button>
    </NavigationContainer>
  );
};
