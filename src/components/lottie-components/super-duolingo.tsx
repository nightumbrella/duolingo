import React, { useEffect, useRef } from "react";
import CustomButton from "../customButton";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import eightAnimation from "../../lottie-json/9.json"; // super duolingo animation
import { handleScroll } from "./utils/handle-scroll";
import SuperDuolingo from "../super-duolingo";

const SuperDuolingoSection = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  // const [animate, setAnimate] = useState(false);
  useEffect(() => {
    // const handleScroll = () => {
    //   if (lottieRef.current && boxRef.current) {
    //     const element = lottieRef.current;
    //     // const boxRefAction = boxRef.current;
    //     const rect: DOMRect = boxRef.current.getBoundingClientRect();
    //     const viewportHeight = window.innerHeight;

    //     if (rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
    //       element.play();
    //     } else {
    //       element.pause();
    //     }
    //   }
    // };

    window.addEventListener("scroll", () => handleScroll(lottieRef, boxRef));
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(lottieRef, boxRef)
      );
    };
  }, []);
  return (
    <div ref={boxRef} className="bg-slate-800 py-[200px] flex items-center justify-center gap-10">
      {/* <LottieAnimation animationData={eightAnimation} /> */}
      <Lottie
        animationData={eightAnimation}
        lottieRef={lottieRef}
        loop
        className="w-[450px]"
      ></Lottie>
      <div className="flex flex-col items-center">
        <SuperDuolingo />
        <CustomButton className="bg-neutral-200 mt-10 hover:bg-neutral-300  transition text-black font-semibold border-neutral-400 border-b-[4px]">
          Try 2 weeks for free
        </CustomButton>
      </div>
    </div>
  );
};

export default SuperDuolingoSection;
