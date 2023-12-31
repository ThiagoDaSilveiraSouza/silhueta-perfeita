import { CSSProperties } from "styled-components"

export interface CssBaseProps {
  "position"?: CSSProperties["position"]
  "display"?: CSSProperties["display"]
  "flex-direction"?: CSSProperties["flexDirection"]
  "flex"?: CSSProperties["flex"]
  "justify-content"?: CSSProperties["justifyContent"]
  "justify-self"?: CSSProperties["justifySelf"]
  "align-items"?: CSSProperties["alignItems"]
  "align-self"?: CSSProperties["alignSelf"]
  "gap"?: CSSProperties["gap"]
  "flex-wrap"?: CSSProperties["flexWrap"]
  "width"?: CSSProperties["width"]
  "max-width"?: CSSProperties["maxWidth"]
  "height"?: CSSProperties["height"]
  "max-height"?: CSSProperties["maxHeight"]
  "padding"?: CSSProperties["padding"]
  "margin"?: CSSProperties["margin"]
  "background"?: CSSProperties["background"]
  "opacity"?: CSSProperties["opacity"]
  "border-radius"?: CSSProperties["borderRadius"]
  "box-sizing"?: CSSProperties["boxSizing"]
  "overflow"?: CSSProperties["overflow"]
  "text-align"?: CSSProperties["textAlign"]
}