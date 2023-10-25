import React, { useEffect, useRef, useState } from "react";
import LottieAnimation from "../lottieAnimation";
//import fourAnimation from "../lottie-json/7.json"; // run the animation
import fourAnimation from "../../lottie-json/7.json";
import Lottie from "lottie-react";

const StayMotivated = () => {
  const lottieRef = useRef(null);
  // const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (lottieRef.current) {
        const element = lottieRef.current;
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        console.log(viewportHeight);

        if (rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
          lottieRef.current.play();
        } else {
          lottieRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center justify-center gap-x-28 mb-20">
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
      {/* <LottieAnimation animationData={fourAnimation} /> */}
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
