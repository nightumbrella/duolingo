import Image from "next/image";
import { motion as m } from "framer-motion";
import tv from "../../../../public/step-data/tv.svg";
import tiktok from "../../../../public/step-data/tiktok.svg";
import youtube from "../../../../public/step-data/youtube.svg";

export const FirstStep = () => {
  const firstStepData = [
    {
      id: 1,
      title: "TV",
      icon: tv,
    },
    {
      id: 1,
      title: "TikTok",
      icon: tiktok,
    },
    {
      id: 1,
      title: "YouTube",
      icon: youtube,
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
