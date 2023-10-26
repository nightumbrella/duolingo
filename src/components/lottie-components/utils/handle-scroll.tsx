import { LottieRefCurrentProps } from "lottie-react";
import { RefObject } from "react";

export const handleScroll = (
  lottieRef: RefObject<LottieRefCurrentProps | null>,
  boxRef: RefObject<HTMLElement | null>
) => {
  if (lottieRef.current && boxRef.current) {
    const element = lottieRef.current;
    // const boxRefAction = boxRef.current;
    const rect: DOMRect = boxRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
      element.play();
    } else {
      element.pause();
    }
  }
};
