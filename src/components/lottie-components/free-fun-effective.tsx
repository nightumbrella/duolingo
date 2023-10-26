import Lottie, { LottieRefCurrentProps } from "lottie-react";
import React, { useEffect, useRef } from "react";
import secondAnimation from "../../lottie-json/10.json"; //free fan
import Link from "next/link";
import { handleScroll } from "./utils/handle-scroll";

const FreeFanEffective = () => {
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
    <div
      className="flex items-center justify-center gap-x-28 mb-20"
      ref={boxRef}
    >
      <div>
        <h1 className="text-[48px] text-lime-500 font-semibold mb-3">
          free. fun. effective.
        </h1>
        <p className="w-[450px] text-[17px] font-light">
          {`Learning with Duolingo is fun, and `}
          <Link
            href="/efficacy"
            className="text-blue-400 font-semibold"
          >{`research shows that it works!  `}</Link>
          {`With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world communication skills.`}
        </p>
      </div>
      <Lottie
        animationData={secondAnimation}
        lottieRef={lottieRef}
        loop
        className="w-[450px]"
      ></Lottie>
    </div>
  );
};

export default FreeFanEffective;
