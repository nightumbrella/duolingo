"use client";
import Header from "@/components/header/header";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import dutch from "../../../public/flag/dutch.svg";
import japanese from "../../../public/flag/japanese.svg";
import korean from "../../../public/flag/korean.svg";

const techFlags = [
  {
    id:1,
    label:'Japanese',
    flag:japanese,
    learnersCount:'40 800 123'
  },
  {
    id:2,
    label:'Korean',
    flag:korean,
    learnersCount:'40 800 123'
  },
  {
    id:3,
    label:'German',
    flag:dutch,
    learnersCount:'40 800 123'
  },
]

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

      <h1 className="text-center pt-32 text-3xl">
        I want to learn
      </h1>

      <div className="grid grid-cols-4 w-[50vw] mx-auto gap-3 mt-20">
      {
        techFlags.map(flag =>{
          return (
            <div key={flag.id} className="relative transition cursor-pointer flex flex-col border items-center  py-10 rounded-2xl border-b-[4px] hover:bg-[#ffffff1f] ">
              <Image alt="iamge" className="mb-5" width={100} height={100} src={flag.flag} />
              <h1 className="mb-3">{flag.label}</h1>
              <h2 className="mb-3 flex">{flag.learnersCount} <span className="ml-1">
                learners</span></h2>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default Register;
