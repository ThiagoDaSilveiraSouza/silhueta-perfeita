import { CSSProperties } from "styled-components";

interface ArrowCircleProps {
  color?: CSSProperties["color"];
  backgroundColor?: CSSProperties["color"];
  direction?: "top" | "right" | "bottom" | "left";
  size?: CSSProperties["width"];
}

export const ArrowCicle = ({
  color = "white",
  backgroundColor = "#323232",
  direction = "right",
  size = 28,
}: ArrowCircleProps) => {
  const rotateByDirection: Record<
    NonNullable<ArrowCircleProps["direction"]>,
    string
  > = {
    top: "rotate(-90deg)",
    right: "rotate(0deg)",
    bottom: "rotate(90deg)",
    left: "rotate(180deg)",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotateByDirection[direction],
      }}
    >
      <circle
        cx="14"
        cy="14"
        r="14"
        transform="rotate(-180 14 14)"
        fill={backgroundColor}
      />
      <path
        d="M11.6393 7.61206C11.4434 7.79064 11.3333 8.03281 11.3333 8.28532C11.3333 8.53783 11.4434 8.78 11.6393 8.95858L16.8113 13.6723L11.6393 18.3861C11.4489 18.5657 11.3436 18.8062 11.346 19.0559C11.3484 19.3056 11.4583 19.5444 11.652 19.721C11.8457 19.8976 12.1078 19.9977 12.3817 19.9999C12.6557 20.0021 12.9196 19.9061 13.1167 19.7326L19.0274 14.3456C19.2233 14.167 19.3333 13.9248 19.3333 13.6723C19.3333 13.4198 19.2233 13.1777 19.0274 12.9991L13.1167 7.61206C12.9207 7.43354 12.655 7.33325 12.378 7.33325C12.1009 7.33325 11.8352 7.43354 11.6393 7.61206Z"
        fill={color}
      />
    </svg>
  );
};
