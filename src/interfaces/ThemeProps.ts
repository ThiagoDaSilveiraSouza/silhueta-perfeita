import { CSSProperties } from "styled-components"

interface FontProps {
  heading: CSSProperties["fontSize"]
  headingSize: CSSProperties["fontSize"]
  bodySize1: CSSProperties["fontSize"]
  bodySize2: CSSProperties["fontSize"]
  body: CSSProperties["fontSize"]
}

interface ColorProps {
  headingFontColor: CSSProperties["color"]
  bodyFontColor: CSSProperties["color"];
  mainBackgroundColor: CSSProperties["background"]
  secondaryBackgroundColor: CSSProperties["background"]
  mainButtonBackgroundColor: CSSProperties["background"]
}

export interface ThemeProps {
  fonts: FontProps
  colors: ColorProps
}