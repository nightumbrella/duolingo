"use client";
import LottieAnimation from "@/components/lottieAnimation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// ↓↓↓ for welcome route assets
// import happyDuo from "../../../public/welcome/happyDuo.json";
// import heyDuo from "../../../public/welcome/heyDuo.json";
// import writeDuo from "../../../public/welcome/writeDuo.json";
// import goodDuo from "../../../public/welcome/goodDuo.json";

const Welcome = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("welcome-step")
  }
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative mt-20">
        {/* <LottieAnimation /> */}
        <span className="border absolute bottom-32 left-12 rounded-xl px-3 py-1">
          Hi there! I&apos;m NightDuo!
        </span>
        <Image
          alt="sdf"
          width={100}
          height={100}
          className="w-[300px] h-[300px]"
          src={"/check.svg"}
        />
      </div>
      <div className="border-t w-full absolute  bottom-20">
        <button
          type="button"
          onClick={onClick}
          className="uppercase ml-auto text-white absolute -bottom-16 right-40  px-10 py-3 rounded-xl hover:bg-[#72d62b] transition font-semibold bg-[#4db302] border-b-[4px] border-[#c1ff60]"
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
