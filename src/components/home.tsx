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
    <div>
      <div
        className='
        flex
        items-center

      '
      >
        <Lottie
          animationData={firstAnimation}
          loop
          className='
            w-[500px]
          '
        />
        <div>
          <h1
            className='
            text-[32px]
            '
          >
            The free, fun, and effective way to learn a language!
          </h1>
          <CustomButton
            className='uppercase
           bg-lime-600
           border-b-lime-700
           border-b-[4px]
           border-lime-700
           hover:bg-lime-500
           transition

           '
          >
            get started
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
