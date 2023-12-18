"use client";
import React, { useState } from "react";
import ProgressBar from "./_components/progress_bar";
import { AnimatePresence, motion as m } from "framer-motion";
import { FirstStep } from "./_components/first-step";
import SecondStep from "./_components/second-step";

const WelcomeStepPage = () => {
  const [progressStep, setProgressStep] = useState(1);
  const [stepCount, setStepCount] = useState(2)

  return (
    <div className="w-[60vw] px-10 mx-auto">
      <div className="py-10 mb-20">
        <ProgressBar progress={progressStep} stepCount={stepCount}/>
      </div>
      <div>
        <AnimatePresence>
          {progressStep === 1 ? <FirstStep /> : <SecondStep />}
        </AnimatePresence>
      </div>
      <button onClick={() => setProgressStep((prev) => prev + 1)}>
        next {progressStep}
      </button>
    </div>
  );
};

export default WelcomeStepPage;
