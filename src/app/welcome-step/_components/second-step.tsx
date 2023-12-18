import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import tv from "../../../../public/step-data/tv.svg";

const SecondStep = () => {
  const firstStepData = [
    {
      id: 2,
      title: "TikTok",
      icon: tv,
    },
  ];
  return (
    <m.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>How did you hear about Duolingo!</h1>
      <div>
        {firstStepData.map((stepData) => (
          <div key={stepData.id} className="border rounded-2xl">
            <Image alt="image" width={100} height={100} src={stepData.icon} />
            {stepData.title}
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default SecondStep;
