import Lottie from "lottie-react";
import { FC, RefObject, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface LottieAnimationProps {
  animationData?: object;
  animationFn?: () => void;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
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
      // lottieRef={ref}
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
