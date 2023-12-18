"use client";
import React, { useState } from "react";
import ProgressBar from "./_components/progress_bar";

const WelcomeStepPage = () => {
  const [progressStep, setProgressStep] = useState(1);
  return (
    <div>
      <div>
        <ProgressBar progress={progressStep} />
      </div>
      <div>

      </div>
    </div>
  );
};

export default WelcomeStepPage;


const firstStep = () => {
    const firstStepData = [
        {
            id:1,
            title:"TV",
            icon:''
        }
    ]
    return (
        <div>
            <h1>
                How did you hear about Duolingo!
            </h1>

        </div>
    )
}