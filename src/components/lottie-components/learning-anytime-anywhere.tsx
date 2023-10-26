import React from 'react'
import LottieAnimation from '../lottieAnimation'
import sixAnimation from "../../lottie-json/12.json"; // run the motorcycle animation
import sevenAnimation from "../../lottie-json/11.json"; // run the motorcycle animation

const LearningAnyTimeAnywhere = () => {
  return (
    <div className="relative h-full mb-[1300px]">
    <div className="absolute top-5 left-2/4 -translate-x-2/4 z-50 justify-center">
      <h1 className="text-[68px] text-center font-bold text-sky-900 mb-10">
        learn anytime,
        <br /> anywhere
      </h1>
      <div className="flex items-center gap-5 justify-center">
        {/* apple store */}
        <button className=" border-2 hover:bg-neutral-300 hover:border-neutral-400 transition bg-neutral-200 border-b-[4px] gap-3 border-neutral-300 py-3 rounded-xl flex items-center px-3">
          {/* apple logo */}
          <svg
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[35px] text-neutral-600"
          >
            <title>badge-app-store</title>
            <path
              d="M26.9039 19.1188C26.9363 16.611 28.2528 14.2945 30.3922 12.981C29.0364 11.0473 26.8469 9.86522 24.4843 9.7914C21.9986 9.53084 19.5888 11.2768 18.3221 11.2768C17.0309 11.2768 15.0807 9.81727 12.9806 9.86042C10.2174 9.94957 7.7038 11.4804 6.35946 13.8929C3.49663 18.8428 5.63205 26.1174 8.3744 30.1184C9.74645 32.0776 11.35 34.2661 13.4482 34.1885C15.5014 34.1035 16.2682 32.881 18.7466 32.881C21.202 32.881 21.9215 34.1885 24.0623 34.1392C26.2655 34.1035 27.6536 32.1713 28.9775 30.1935C29.9633 28.7975 30.7219 27.2546 31.2252 25.622C28.6084 24.5167 26.907 21.9562 26.9039 19.1188V19.1188Z"
              fill="currentColor"
            ></path>
            <path
              d="M22.8604 7.16005C24.0617 5.71991 24.6535 3.86887 24.5102 2C22.6749 2.1925 20.9796 3.06846 19.7621 4.45334C18.5599 5.81971 17.9508 7.60728 18.0691 9.42235C19.929 9.44147 21.6949 8.60765 22.8604 7.16005V7.16005Z"
              fill="currentColor"
            ></path>
          </svg>
          {/* apple logo */}
          <div className="text-start">
            <p className="text-[14px]">Download on the</p>
            <p className="text-[14px] font-semibold">App store</p>
          </div>
        </button>
        {/* goggle play store */}
        <button className=" border-2 hover:bg-neutral-300 hover:border-neutral-400 transition bg-neutral-200 border-b-[4px] gap-3 border-neutral-300 py-3 w-[200px] rounded-xl flex items-center px-3">
          {/* google play logo */}
          <svg
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[35px] text-neutral-600"
          >
            <title>badge-app-store</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="text-start">
            <p className="text-[14px]">Get it on</p>
            <p className="text-[14px] font-semibold">Google Play</p>
          </div>
        </button>
      </div>
    </div>
    <div>
      <LottieAnimation
        animationData={sixAnimation}
        className="absolute w-full left-0 top-0"
      />
      <LottieAnimation
        animationData={sevenAnimation}
        className="w-full absolute left-0"
      />
    </div>
  </div>
  )
}

export default LearningAnyTimeAnywhere