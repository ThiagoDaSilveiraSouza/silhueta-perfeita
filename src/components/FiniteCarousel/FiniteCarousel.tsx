import { ReactNode, useCallback, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { ArrowCicle } from "..";

const FiniteCarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

interface FintieCarouselSlideContainerProps {
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
}

const FiniteCarouselSlideContainer = styled.div<FintieCarouselSlideContainerProps>`
  position: relative;
  width: ${({ $width }) => $width};
  max-width: 100%;
  display: flex;
  height: ${({ $height }) => $height || "fit-content"};
  overflow-x: hidden;
  scroll-snap-type: mandatory;
  box-sizing: border-box;
`;

interface FiniteCarouselSlideProps {
  $currentslideindex: number;
  $itemstoshow: number;
}

const FiniteCarouselSlide = styled.div<FiniteCarouselSlideProps>`
  display: flex;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  transform: ${({ $currentslideindex, $itemstoshow }) =>
    `translateX(${$currentslideindex * (100 / $itemstoshow)}%)`};
  transition: 0.3s;
  box-sizing: border-box;
`;

interface SlideItemProps {
  $itemstoshow: number;
}
const SlideItem = styled.div<SlideItemProps>`
  display: flex;
  position: relative;
  justify-content: center;
  flex: none;
  width: ${({ $itemstoshow }) => `${100 / $itemstoshow}%`};
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
  scroll-snap-align: start;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0.3s;
    }
  }
`;

interface FiniteCarouselProps {
  itemList: ReactNode[];
  itemsToShow?: number;
}

export const FiniteCarousel = ({
  itemList,
  itemsToShow = 3,
}: FiniteCarouselProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prevState) => {
      const isFirstSlide = prevState === 0;

      return isFirstSlide ? 0 : prevState + 1;
    });
  }, []);
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prevState) => {
      const lastIndex = itemList.length - 1;
      const lastIndextToScroll = lastIndex - itemsToShow;
      const isLastSlide = prevState === lastIndextToScroll;

      return isLastSlide ? lastIndextToScroll : prevState - 1;
    });
  }, [itemList, itemsToShow]);

  return (
    <FiniteCarrouselContainer>
      <FiniteCarouselSlideContainer>
        <FiniteCarouselSlide
          $currentslideindex={currentSlideIndex}
          $itemstoshow={itemsToShow}
        >
          {itemList.map((currentItem, index) => {
            return (
              <SlideItem
                key={"finite-carousel-slide-item-" + index}
                $itemstoshow={itemsToShow}
              >
                {currentItem}
              </SlideItem>
            );
          })}
        </FiniteCarouselSlide>
      </FiniteCarouselSlideContainer>
      <ButtonContainer>
        <button onClick={prevSlide}>
          <ArrowCicle direction="left" />
        </button>
        <button onClick={nextSlide}>
          <ArrowCicle />
        </button>
      </ButtonContainer>
    </FiniteCarrouselContainer>
  );
};
