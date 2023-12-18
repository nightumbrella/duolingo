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
      id: 2,
      title: "TikTok",
      icon: tiktok,
    },
    {
      id: 3,
      title: "YouTube",
      icon: youtube,
    },
  ];
  return (
    <m.div
    className="px-10"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-5 border rounded-xl px-3 py-1 inline-block bg-[#72d62b] text-white">How did you hear about Duolingo!</h1>
      <div className="grid grid-cols-2 gap-5 ">
        {firstStepData.map((stepData) => (
          <div key={stepData.id} className="border rounded-2xl flex items-center py-4 gap-5 text-lg px-2">
            <Image alt="image" width={50} height={50} src={stepData.icon} />
            {stepData.title}
          </div>
        ))}
      </div>
      
    </m.div>
  );
};
