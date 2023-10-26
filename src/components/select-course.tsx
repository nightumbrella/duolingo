import { flagData } from "@/constants/flag"
import Image from "next/image";
import Link from "next/link"

const SelectCourse = () => {
  return (
    <div className="px-[400px] border-y mb-20">
        <div className="h-[80px] select-none flex items-center gap-20  overflow-hidden">
          {flagData.map((data, index) => (
            <Link href={data.title} key={index}>
              <div  className="flex items-center gap-1 ">
                <Image width={40} src={data.flag} alt="flag" className="" />
                <h5 className="font-semibold uppercase text-neutral-400">
                  {data.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default SelectCourse;


