import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { FC, MutableRefObject, RefObject, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface LottieAnimationProps {
  animationData?: object;
  animationFn?: () => void;
  className?: string;
  ref?:MutableRefObject<LottieRefCurrentProps | null>;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  animationFn,
  className,
  ref,
  ...props
}) => {
  return (
    <Lottie
      lottieRef={ref}
      animationData={animationData}
      loop
      {...props}
      className={twMerge(
        `
      w-[450px]
      `,
        className
      )}
    ></Lottie>
  );
};

export default LottieAnimation;
