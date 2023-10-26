"use client";
import Lottie, { InteractivityProps } from "lottie-react";
import CustomButton from "./customButton";
import Link from "next/link";
import Box from "./box";
import Header from "./header/header";
import LottieAnimation from "./lottieAnimation";


import SuperDuolingo from "./super-duolingo";
// import { useRef, useEffect, useState } from "react";
import StayMotivated from "./lottie-components/stay-motivated";
import FreeFanEffective from "./lottie-components/free-fun-effective";
import BackendByScience from "./lottie-components/backed-by-science";
import { PersonalizedLearning } from "./lottie-components/personalized-learning";
import LearningAnyTimeAnywhere from "./lottie-components/learning-anytime-anywhere";
import { flagData } from "@/constants/flag";
import Image from "next/image";
import SelectCourse from "./select-course";
import SuperDuolingoSection from "./lottie-components/super-duolingo";
import Hero from "./hero";

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
       <Hero/>
      </Box>
      {/* flag carousel  */}
      <SelectCourse />
      <Box>
        {/* free fun effective */}
        <FreeFanEffective />
        {/* backed by science */}
        <BackendByScience />
        {/* stay motivated */}
        <StayMotivated />
        {/* personalized learning */}
        <PersonalizedLearning />
      </Box>

      {/* learn anytime, anywhere */}

      <LearningAnyTimeAnywhere />

      {/* super duolingo */}
      <SuperDuolingoSection />
      {/* super duolingo */}

      {/* last section */}
    </div>
  );
};

export default HomePage;
