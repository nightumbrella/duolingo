"use client";
import React, { useState } from "react";
import ProgressBar from "./_components/progress_bar";
import { AnimatePresence, motion as m } from "framer-motion";
import { FirstStep } from "./_components/first-step";
import SecondStep from "./_components/second-step";

const WelcomeStepPage = () => {
  const [progressStep, setProgressStep] = useState(1);
  const [stepCount, setStepCount] = useState(2);

  return (
    <>
      <div className="w-[60vw] px-10 mx-auto  ">
        <div className="py-10 mb-20 ">
          <ProgressBar progress={progressStep} stepCount={stepCount} />
        </div>
        <div>
          <AnimatePresence>
            {progressStep === 1 ? <FirstStep /> : <SecondStep />}
          </AnimatePresence>
        </div>
      </div>
      <div className="border-t w-full absolute  bottom-20">
        <button
          type="button"
          onClick={() => setProgressStep((prev) => prev + 1)}
          className="uppercase ml-auto text-white absolute -bottom-16 right-40  px-10 py-3 rounded-xl hover:bg-[#72d62b] transition font-semibold bg-[#4db302] border-b-[4px] border-[#c1ff60]"
        >
          continue
        </button>
      </div>
    </>
  );
};

export default WelcomeStepPage;
