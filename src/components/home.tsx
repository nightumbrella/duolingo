"use client";
import Lottie, { InteractivityProps } from "lottie-react";
import firstAnimation from "../lottie-json/4.json";
import CustomButton from "./customButton";
import Box from "./box";
import Header from "./header";
import LottieAnimation from "./lottieAnimation";
import secondAnimation from "../lottie-json/10.json";
import thirdAnimation from "../lottie-json/5.json";
import Link from "next/link";

const HomePage = () => {
  console.log(typeof firstAnimation);
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
    <div className=''>
      <Header />
      {/* hero section */}
      <Box>
        <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
          <LottieAnimation animationData={firstAnimation} />

          <div
            className='
            flex
            flex-col
            items-center
            w-[450px]
        '
          >
            <h1
              className='
            text-[32px]
            text-center
            mb-7
            '
            >
              The free, fun, and effective way to learn a language!
            </h1>
            <div className='flex items-center flex-col gap-2'>
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
        </div>
      </Box>
      {/* flag carousel */}
      <div className='border-y  h-[80px] flex items-center justify-between px-[225px]'>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num}>{num}</div>
        ))}
      </div>

      <Box>
        {/* free fun effective */}
        <div className='flex items-center justify-center gap-x-28'>
          <div>
            <h1 className="text-[48px] text-lime-500 font-semibold">free. fun. effective.</h1>
            <p className="w-[450px] text-[17px] font-light">
              {`Learning with Duolingo is fun, and `}
              <Link
                href='/efficacy'
                className='text-blue-400 font-semibold'
              >{`research shows that it works!  `}</Link>
              {`With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world communication skills.`}
            </p>
          </div>
          <LottieAnimation
            animationData={secondAnimation}
            className='min-w-[450px]'
          />
        </div>

        {/* backed by science */}

        <div className='flex items-center'>
          <LottieAnimation
            animationData={thirdAnimation}
            className='min-w-[450px]'
          />
          <div>
            <h1 className="text-[48px] text-lime-500 font-semibold">backed by science</h1>
            <p>
              We use a combination of research-backed teaching methods and
              delightful content to create courses that effectively teach
              reading, writing, listening, and speaking skills!
            </p>
          </div>
        </div>
      </Box>

      {/* last section */}
    </div>
  );
};

export default HomePage;
