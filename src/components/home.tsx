"use client";
import Lottie, { InteractivityProps } from "lottie-react";
import CustomButton from "./customButton";
import Link from "next/link";
import Box from "./box";
import Header from "./header/header";
import LottieAnimation from "./lottieAnimation";
import firstAnimation from "../lottie-json/4.json"; // hero animation phone
import eightAnimation from "../lottie-json/9.json"; // super duolingo animation
import SuperDuolingo from "./super-duolingo";
import { useRef, useEffect, useState } from "react";
import StayMotivated from "./lottie-components/stay-motivated";
import FreeFanEffective from "./lottie-components/free-fun-effective";
import BackendByScience from "./lottie-components/backed-by-science";
import { PersonalizedLearning } from "./lottie-components/personalized-learning";
import LearningAnyTimeAnywhere from "./lottie-components/learning-anytime-anywhere";

const HomePage = () => {
 
  // const interactivity: InteractivityProps = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0.20, .50],
  //       type: "loop",
  //       frames: [0, 200],
  //     },
  //     {
  //       visibility: [0.50, 1.0],
  //       type: "loop",
  //       frames: [200, 250],
  //     },
  //   ],
  // };
  return (
    <div className="">
      <Header />
     
      {/* hero section */}
      <Box>
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <LottieAnimation animationData={firstAnimation} />

          <div
            className="
            flex
            flex-col
            items-center
            w-[450px]
        "
          >
            <h1
              className="
            text-[32px]
            text-center
            mb-7
            "
            >
              The free, fun, and effective way to learn a language!
            </h1>
            <div className="flex items-center flex-col gap-2">
              <CustomButton
                className="
                uppercase
                bg-lime-600
                border-lime-700
                border-b-[4px]
                hover:bg-lime-500
                transition
           "
              >
                get started
              </CustomButton>
              <CustomButton
                className="
                uppercase
                bg-neutral-100
                text-blue-400
                font-semibold
                text-[15px]
                border-neutral-300
                border-b-[4px]
                hover:bg-neutral-200
                transition
           "
              >
                i already have an account
              </CustomButton>
            </div>
          </div>
        </div>
      </Box>
      {/* flag carousel */}
      <div className="border-y  h-[80px] flex items-center justify-between px-[225px] mb-20">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num}>{num}</div>
        ))}
      </div>
      <Box>
        {/* free fun effective */}
        <FreeFanEffective/>
        {/* backed by science */}
       <BackendByScience/>
        {/* stay motivated */}
       <StayMotivated/>
        {/* personalized learning */}
       <PersonalizedLearning/>
      </Box>

      {/* learn anytime, anywhere */}

      <LearningAnyTimeAnywhere/>

      {/* super duolingo */}
      <div className="bg-slate-800 py-[200px] flex items-center justify-center gap-10">
        <LottieAnimation animationData={eightAnimation} />
        <div className="flex flex-col items-center">
          <SuperDuolingo />
          <CustomButton className="bg-neutral-200 mt-10 hover:bg-neutral-300  transition text-black font-semibold border-neutral-400 border-b-[4px]">
            Try 2 weeks for free
          </CustomButton>
        </div>
      </div>
      {/* super duolingo */}

      {/* last section */}
    </div>
  );
};

export default HomePage;
