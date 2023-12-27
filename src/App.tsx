import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ResetCss } from "./ResetCss";
import { Routers } from "./routers";
import { lightTheme } from "./themes";
import "typeface-judson";
import "typeface-dm-sans";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ResetCss />
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
