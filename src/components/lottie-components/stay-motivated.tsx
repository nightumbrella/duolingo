import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import LottieAnimation from "../lottieAnimation";
//import fourAnimation from "../lottie-json/7.json"; // run the animation
import fourAnimation from "../../lottie-json/7.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const StayMotivated = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  // const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="flex items-center justify-center gap-x-28 mb-20 "
      ref={boxRef}
    >
      <div className="w-[500px] ">
        <h1 className="text-[48px] text-lime-500 font-semibold mb-3">
          stay motivated
        </h1>
        <p className="text-[17px] font-light">
          We make it easy to form a habit of language learning with game-like
          features, fun challenges, and reminders from our friendly mascot, Duo
          the owl.
        </p>
      </div>
      {/* <LottieAnimation animationData={fourAnimation} ref={lottieRef} /> */}
      <Lottie
        animationData={fourAnimation}
        lottieRef={lottieRef}
        loop
        className="w-[450px]"
      ></Lottie>
    </div>
  );
};

export default StayMotivated;
