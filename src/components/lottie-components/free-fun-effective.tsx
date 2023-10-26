import Lottie from "lottie-react";
import React from "react";
import secondAnimation from "../../lottie-json/10.json"; //free fan
import Link from "next/link";

const FreeFanEffective = () => {
  return (
    <div className="flex items-center justify-center gap-x-28 mb-20">
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
        // lottieRef={lottieRef}
        loop
        className="w-[450px]"
      ></Lottie>
    </div>
  );
};

export default FreeFanEffective;
