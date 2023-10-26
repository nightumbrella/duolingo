import React, {useEffect, useRef} from 'react'
import { handleScroll } from './utils/handle-scroll';
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import thirdAnimation from "../../lottie-json/5.json"; // laboratory animation

const BackendByScience = () => {
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
    <div className="flex items-center justify-center gap-x-28 mb-20" ref={boxRef}>
           <Lottie
        animationData={thirdAnimation}
        lottieRef={lottieRef}
        loop
        className="w-[450px]"
      ></Lottie>
          <div className="w-[500px] ">
            <h1 className="text-[48px] text-lime-500 font-semibold mb-3">
              backed by science
            </h1>
            <p className="text-[17px] font-light">
              We use a combination of research-backed teaching methods and
              delightful content to create courses that effectively teach
              reading, writing, listening, and speaking skills!
            </p>
          </div>
        </div>
  )
}

export default BackendByScience