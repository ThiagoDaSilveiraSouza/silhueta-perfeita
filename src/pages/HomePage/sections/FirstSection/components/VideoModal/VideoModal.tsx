import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";

interface ModalProps {
  children?: ReactNode;
  position?: CSSProperties["position"];
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  slideDirection?: "top" | "right" | "bottom" | "left";
  hasCloseButton?: boolean;
  modalCardBackground?: CSSProperties["background"];
  modalCardBorderRadios?: CSSProperties["borderRadius"];
  modalCardWidth?: CSSProperties["width"];
  modalCardTitle?: string;
  modalCardPadding?: CSSProperties["padding"];
  backgroundColor?: CSSProperties["background"];
  backgroundHandleClose?: () => void;
}
interface stylesProps {
  modalisopen: string;
  position: NonNullable<ModalProps["position"]>;
}

interface ModalBackgroundProps {
  backgroundcolor: NonNullable<ModalProps["backgroundColor"]>;
}

interface ModalCardProps {
  slidedirection: NonNullable<ModalProps["slideDirection"]>;
  modalcardbackground: NonNullable<ModalProps["modalCardBackground"]>;
  modalcardpadding: NonNullable<ModalProps["modalCardPadding"]>;
  modalcardborderradios: NonNullable<ModalProps["modalCardBorderRadios"]>;
  modalcardwidth: NonNullable<ModalProps["modalCardWidth"]>;
  modalisopen: string;
}

const ModalContainer = styled.div<stylesProps>`
  position: ${({ position }) => position};
  left: 0;
  top: 0;
  width: ${({ position }) => (position === "absolute" ? "100%" : "100vw")};
  height: ${({ position }) => (position === "absolute" ? "100%" : "100vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ modalisopen }) => (modalisopen === "true" ? "1" : "0")};
  visibility: ${({ modalisopen }) =>
    modalisopen === "true" ? "visible" : "hidden"};
  transition: 0.8s;
`;

const ModalBackground = styled.div<ModalBackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ backgroundcolor }) => backgroundcolor};
`;

const transformDirections: Record<
  NonNullable<ModalProps["slideDirection"]>,
  string
> = {
  top: "translateY(-200%)",
  right: "translateX(200%)",
  bottom: "translateY(200%)",
  left: "translateX(-200%)",
};

const ModalCard = styled.div<ModalCardProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: ${({ modalcardpadding }) => modalcardpadding};
  border-radius: ${({ modalcardborderradios }) => modalcardborderradios};
  width: ${({ modalcardwidth }) => modalcardwidth || "auto"};
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  background: ${({ modalcardbackground }) => modalcardbackground};
  transform: ${({ modalisopen, slidedirection: slideDirection }) =>
    modalisopen === "true"
      ? "translateY(0)"
      : transformDirections[slideDirection]};
  transition: 0.8s;
  overflow-y: auto;
  box-sizing: border-box;

  h3 {
    margin: 0;
    color: #2a3136;
    font-family: ${({ theme }) => theme.mainFont};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 650px) {
    width: min-content;
    width: 100%;
    border-radius: 0;
  }
`;
const ModalCartTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;
const ModalCardCloseButton = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: none;
  user-select: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

/**
 * Modal Component
 *
 * @param {object} props - Properties of the Modal component.
 * @param {ReactNode} props.children - Inner content of the modal.
 * @param {[boolean, Dispatch<SetStateAction<boolean>>]} props.useModal - An array containing a boolean indicating if the modal is open and a function to update the state.
 * @param {"top" | "right" | "bottom" | "left"} props.slideDirection - Slide direction of the modal (default: "top").
 * @param {boolean} props.hasCloseButton - Indicates whether the modal should display a close button (default: false).
 * @param {CSSProperties['background']} props.modalCardBackground - Background color of the modal card.
 * @param {CSSProperties['borderRadius']} props.modalCardBorderRadius - Border radius of the modal card.
 * @param {CSSProperties['width']} props.modalCardWidth - Width of the modal card.
 * @param {CSSProperties['padding']} props.modalCardPadding - Padding of the modal card.
 * @param {CSSProperties['background']} props.backgroundColor - Background color of the modal (when the modal is open).
 * @param {boolean} props.backgroundHandleClose - Indicates whether clicking on the modal background should close the modal (default: false).
 *
 * @returns {React.ReactElement} The Modal component.
 */
export const VideoModal = ({
  children,
  useModal,
  slideDirection = "right",
  hasCloseButton = false,
  modalCardBackground = "rgba(0, 0, 0, 0.64)",
  modalCardPadding = "48px",
  modalCardTitle,
  modalCardBorderRadios = "16px",
  backgroundColor = "rgba(0, 0, 0, 0.3)",
  backgroundHandleClose,
  modalCardWidth = "auto",
  position = "fixed",
}: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useModal;
  const closeModal = () =>
    backgroundHandleClose ? backgroundHandleClose() : setModalIsOpen(false);

  return (
    <ModalContainer modalisopen={modalIsOpen.toString()} position={position}>
      <ModalBackground onClick={closeModal} backgroundcolor={backgroundColor} />
      <ModalCard
        modalisopen={modalIsOpen.toString()}
        slidedirection={slideDirection}
        modalcardbackground={modalCardBackground}
        modalcardpadding={modalCardPadding}
        modalcardborderradios={modalCardBorderRadios}
        modalcardwidth={modalCardWidth}
      >
        <ModalCartTitleContainer>
          <h3>{modalCardTitle}</h3>
          {hasCloseButton && <ModalCardCloseButton onClick={closeModal} />}
        </ModalCartTitleContainer>
        {children}
      </ModalCard>
    </ModalContainer>
  );
};
