import { ReactNode, useCallback, useMemo, useState, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import { CssBaseProps } from "../../interfaces";
import { Navigation } from "./components";
import { useWindowSize } from "../../hooks";

interface ComponentContainerProps {
  $gap: CSSProperties["gap"];
}

const ComponentContainer = styled.div<ComponentContainerProps>`
  flex: 1 1 auto;
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: ${() => {
    const { isDesktop } = useWindowSize();
    return isDesktop ? "start" : "center";
  }};
  gap: ${({ $gap }) => $gap};
  max-width: 100%;
  overflow: hidden;
`;
interface CarouselContainerProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const CarouselContainer = styled.div<CarouselContainerProps>`
  position: relative;
  flex: 1 1 100%;
  width: ${({ width }) => width || "100%"};
  display: flex;
  max-width: 100%;
  height: ${({ height }) => height || "fit-content"};
  overflow-x: hidden;
  scroll-snap-type: mandatory;
`;

const CarouselSlide = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const SlideItem = styled.div`
  display: flex;
  position: relative;
  flex: none;
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
  scroll-snap-align: start;
`;

interface CarouselProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  itemList: ReactNode[];
  setCurrentIndex?: (currentIndex: number) => void;
  justifyControls?: CSSProperties["justifyContent"];
  controlsGapDistance?: CssBaseProps["$gap"];
}

export const Carousel = ({
  width,
  height,
  itemList,
  setCurrentIndex,
  justifyControls = "normal",
  controlsGapDistance = "45px",
}: CarouselProps) => {
  const updatedListItem = useMemo(() => {
    const listFirstItem = itemList[0];
    const listLastItem = itemList[itemList.length - 1];
    return [listLastItem, ...itemList, listFirstItem];
  }, [itemList]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextSlide = useCallback(() => {
    const isLastSlideIndex = currentSlideIndex === updatedListItem.length - 2;

    if (isLastSlideIndex) {
      console.log("isLastSlideIndex", currentSlideIndex);
      setTransitionEnabled(false);
      setCurrentSlideIndex(0);
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentSlideIndex(1);
      }, 0);
      return;
    }

    setTransitionEnabled(true);
    setCurrentSlideIndex((prevSlide) => {
      const nextIndex = prevSlide + 1;
      if (nextIndex > updatedListItem.length - 1) {
        setTransitionEnabled(false);
        setCurrentSlideIndex(1);
        return 1;
      }
      return nextIndex;
    });
  }, [updatedListItem, currentSlideIndex]);

  const prevSlide = useCallback(() => {
    const isFirstSlideIndex = currentSlideIndex === 1;

    if (isFirstSlideIndex) {
      console.log("isFirstSlideIndex", currentSlideIndex);
      setTransitionEnabled(false);
      setCurrentSlideIndex(updatedListItem.length - 1);
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentSlideIndex(updatedListItem.length - 2);
      }, 0);
      return;
    }
    setTransitionEnabled(true);
    setCurrentSlideIndex((prevSlide) => {
      const prevIndex = prevSlide - 1;
      if (prevIndex < 0) {
        setTransitionEnabled(false);
        setCurrentSlideIndex(updatedListItem.length - 2);
        return updatedListItem.length - 2;
      }
      return prevIndex;
    });
  }, [updatedListItem, currentSlideIndex]);

  useEffect(() => {
    const container = document.getElementById("carousel-container");
    const handleTransitionEnd = () => {
      if (container) {
        container.style.transition = "transform 0.3s ease-in-out";
      }
    };

    if (container) {
      container.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, []);

  useEffect(() => {
    setCurrentIndex && setCurrentIndex(currentSlideIndex);
  }, [currentSlideIndex, setCurrentIndex]);

  return (
    <ComponentContainer
      style={{ position: "relative", flex: "1 1 auto" }}
      $gap={controlsGapDistance}
    >
      <CarouselContainer id="carousel-container" width={width} height={height}>
        <CarouselSlide
          style={{
            transform: `translateX(-${currentSlideIndex * 100}%)`,
            transition: transitionEnabled ? "0.6s" : "none",
          }}
        >
          {updatedListItem.map((currentItem, index) => (
            <SlideItem key={index + "carousel-item"}>{currentItem}</SlideItem>
          ))}
        </CarouselSlide>
      </CarouselContainer>
      <Navigation
        justifyControls={justifyControls}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        activeSlideIndex={currentSlideIndex}
        totalOfSlides={updatedListItem.length}
      />
    </ComponentContainer>
  );
};
