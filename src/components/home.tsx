"use client";
import Lottie, { InteractivityProps } from "lottie-react";
import firstAnimation from "../lottie-json/4.json";
import CustomButton from "./customButton";

const HomePage = () => {
  //   const interactivity: InteractivityProps = {
  //     mode: "scroll",
  //     actions: [
  //       {
  //         visibility: [0, 1],
  //         type: "loop",
  //         frames: [0, 60],
  //       },
  //     ],
  //   };
  return (
    <div className="">
        {/* hero section */}
      <div
        className='
        flex
        items-center
        h-[calc(100vh-80px)]
      '
      >
        <Lottie
          animationData={firstAnimation}
          loop
          className='
            w-[500px]
          '
        />
        <div className="
            flex
            flex-col
            items-center
        ">
          <h1
            className='
            text-[32px]
            text-center
            '
          >
            The free, fun, and effective way to learn a language!
          </h1>
          <CustomButton
            className='
                uppercase
                bg-lime-600
                border-lime-700
                border-b-[4px]
                hover:bg-lime-500
                transition
           '
          >
            get started
          </CustomButton>
          <CustomButton
            className='
                uppercase
                bg-neutral-100
                text-blue-400
                font-semibold
                text-[15px]
                border-neutral-300
                border-b-[4px]
                hover:bg-neutral-200
                transition
           '
          >
            i already have an account
          </CustomButton>
        </div>
      </div>
      {/* flag carousel */}
        <div className="border-y h-[80px] flex items-center justify-between">
            {
                [1,2,3,4,5].map(num => (
                    <div key={num}>{num}</div>
                ))
            }
        </div>
    </div>
  );
};

export default HomePage;
