
interface FontProps {
  heading: string
  headingSize: string
  bodySize1: string
  bodySize2: string
  body: string
}

interface ColorProps {
  headingFontColor: string
  bodyFontColor: string
  mainBackgroundColor: string
  secondaryBackgroundColor: string
}

export interface ThemeProps {
  fonts: FontProps
  colors: ColorProps
}