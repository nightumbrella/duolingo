import React, {useEffect, useRef} from 'react'
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import {handleScroll} from "@/components/lottie-components/utils/handle-scroll";
import fiveAnimation from "../../lottie-json/14.json"; // run the motorcycle animation

export const PersonalizedLearning = () => {
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
    <div className="flex items-center justify-center gap-x-28 mb-48">
         <Lottie
        animationData={fiveAnimation}
        lottieRef={lottieRef}
        loop
        className="w-[450px]"
      ></Lottie>
          <div className="w-[550px] ">
            <h1 className="text-[48px] text-lime-500 font-semibold mb-3">
              personalized learning
            </h1>
            <p className="text-[17px] font-light">
              Combining the best of AI and language science, lessons are
              tailored to help you learn at just the right level and pace.
            </p>
          </div>
        </div>
  )
}
