import React from "react";
import CustomButton from "./customButton";
import Link from "next/link";
import LottieAnimation from "./lottieAnimation";
import firstAnimation from "../lottie-json/4.json"; // hero animation phone
import Lottie from "lottie-react";

const Hero = () => {
    const interactivity = {
        mode: "",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0, 45],
          },
          {
            visibility: [0.45, 1.0],
            type: "loop",
            frames: [45, 60],
          },
        ],
      };
      
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      {/* <LottieAnimation animationData={firstAnimation} /> */}
      <Lottie
        animationData={firstAnimation}
        loop
        className="w-[450px]"
      ></Lottie>
      {/* <lottie-interactivity src></lottie-interactivity> */}
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
            <Link href={"/welcome"}>get started</Link>
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
  );
};

export default Hero;
