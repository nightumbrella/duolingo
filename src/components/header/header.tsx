"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton";
import { ReactNode, useEffect, useRef, useState } from "react";
import classNames from "classnames";
const Header = ({
  className,
  customRight,
}: {
  className?: string;
  customRight?: ReactNode;
}) => {
  const [scrollActive, setScrollActive] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scrollDown = () => {
      if (window.scrollY > 50) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
    window.addEventListener("scroll", scrollDown);
  }, []);
  return (
    <div
      ref={headerRef}
      className={classNames(
        `${
          scrollActive ? "border-b drop-shadow-sm" : ""
        } transition duration-500 fixed top-0  z-50 flex items-center  justify-between px-[400px] py-2 bg-white left-0 w-screen`,
        className
      )}
    >
      <Link href={"/"}>
        <Image src={"/logo.svg"} fill alt="logo" className="!relative" />
      </Link>
      <div>
        {customRight ? (
          customRight
        ) : (
          <CustomButton className="uppercase transition w-[200px] bg-lime-500 font-semibold border-b-lime-700 border-b-[4px] hover:bg-lime-400">
            <Link href={"/welcome"}>get started</Link>
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default Header;
