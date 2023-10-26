import { flagData } from "@/constants/flag";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const SelectCourse = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const leftSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? flagData.length - 6 : prev - 1));
  };
  const rightSlide = () => {
    setCurrentSlide((prev) => (prev === flagData.length - 6 ? 0 : prev + 1));
  };

  return (
    <div className="px-[400px] border-y mb-20 relative">
      <div className="overflow-hidden border">
        {/* left arrow for slider */}
        <button
          onClick={leftSlide}
          className="absolute left-[350px] top-2/4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {/* right arrow for slider */}
        <button
          onClick={rightSlide}
          className="right-[350px] absolute top-2/4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div
          style={{ transform: `translateX(-${currentSlide * 150}px)` }}
          className={`h-[80px] transition duration-300 z-20 select-none flex items-center gap-20`}
        >
          {flagData.map((data, index) => (
            <Link href={data.title} key={index}>
              <div className="flex items-center gap-1 ">
                <Image width={40} src={data.flag} alt="flag" className="" />
                <h5 className="font-semibold uppercase text-neutral-400">
                  {data.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCourse;
