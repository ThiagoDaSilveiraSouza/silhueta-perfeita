import {
  ReactNode,
  useCallback,
  useMemo,
  useState,
  useEffect,
  MouseEvent,
  TouchEvent,
} from "react";
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

interface CarouselSlideProps {
  $translatex: number;
  $transition: string;
}

const CarouselSlide = styled.div<CarouselSlideProps>`
  display: flex;
  width: 100%;
  transform: translateX(-${({ $translatex }) => $translatex}%);
  transition: ${({ $transition }) => $transition};
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
  user-select: none;
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
  const [mousePosition, setMousePosition] = useState<null | number>(null);

  const nextSlide = useCallback(() => {
    const isLastSlideIndex = currentSlideIndex === updatedListItem.length - 2;

    if (isLastSlideIndex) {
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

  const mouseHandlerDonw = (event: MouseEvent<HTMLDivElement>) => {
    const currentMousePosition = event.clientX;
    setMousePosition(currentMousePosition);
  };

  const mouseHandlerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (mousePosition !== null) {
      const currentMousePosition = event.clientX;
      currentMousePosition > mousePosition && prevSlide();
      currentMousePosition < mousePosition && nextSlide();
      setMousePosition(null);
    }
  };

  const mouseHandlerTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const currentMousePosition = event.touches[0].clientX;
    setMousePosition(currentMousePosition);
  };

  const onHandlerTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (mousePosition !== null) {
      const currentMousePosition = event.touches[0].clientX;
      currentMousePosition > mousePosition && prevSlide();
      currentMousePosition < mousePosition && nextSlide();
      setMousePosition(null);
    }
  };
  useEffect(() => {
    setCurrentIndex && setCurrentIndex(currentSlideIndex);
  }, [currentSlideIndex, setCurrentIndex]);

  return (
    <ComponentContainer
      style={{ position: "relative", flex: "1 1 auto" }}
      $gap={controlsGapDistance}
    >
      <CarouselContainer
        width={width}
        height={height}
        onMouseDown={mouseHandlerDonw}
        onMouseMove={mouseHandlerMove}
        onTouchStart={mouseHandlerTouchStart}
        onTouchMove={onHandlerTouchMove}
      >
        <CarouselSlide
          $translatex={currentSlideIndex * 100}
          $transition={transitionEnabled ? "0.6s" : "none"}
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
