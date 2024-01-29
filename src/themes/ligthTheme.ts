import { ThemeProps } from "../interfaces";

export const lightTheme: ThemeProps = {
  fonts: {
    heading: "'Judson', serif",
    body: "'DM Sans', sans-serif",
    headingSize: "clamp(1em, 4em, 52px)",
    bodySize1: "clamp(1em, 4em, 18px);",
    bodySize2: "clamp(1em, 4em, 16px);",
  },
  colors: {
    headingFontColor: "#323232",
    bodyFontColor: "#7C7C7C",
    mainBackgroundColor: "#CEBC96",
    secondaryBackgroundColor: "#FFF",
    mainButtonBackgroundColor: "#779F21",
  }
}