"use client";
import Header from "@/components/header/header";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Register = () => {
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const siteLanguageContent = (
    <div className="relative">
      <h1 className="text-base font-semibold uppercase flex items-center">
        site language:{" "}
        <span className="ml-1">{currentLanguage.toUpperCase()}</span>
      <IoIosArrowDown className="ml-2 text-xl"/>
      </h1>
    </div>
  );

  return (
    <div
      className="bg-[#235390] text-white h-screen w-full"
      style={{ backgroundImage: `url('/star.svg')` }}
    >
      <Header className="bg-[#235390]" customRight={siteLanguageContent} />
    </div>
  );
};

export default Register;
