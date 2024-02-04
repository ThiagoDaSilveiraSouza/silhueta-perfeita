import { useState, useEffect, useCallback } from "react";
import { ResponsiveConfigs } from "../configs/responsiveConfigs";

const getWindowSizeData = () => {
  const { viewWidth } = ResponsiveConfigs;
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    isDesktop: window.innerWidth >= viewWidth.desktop,
    isTablet:
      window.innerWidth < viewWidth.desktop &&
      window.innerWidth >= viewWidth.tablet,
    isMobile: window.innerWidth <= viewWidth.mobile,
  };
};

export const useWindowSize = () => {
  const startWindowSize = getWindowSizeData();
  const [windowSize, setWindowSize] = useState(startWindowSize);

  const handleResize = useCallback(() => {
    const currentWindowData = getWindowSizeData();
    setWindowSize(currentWindowData);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowSize;
};
