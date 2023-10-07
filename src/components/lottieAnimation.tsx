import Lottie from "lottie-react";
import { FC } from "react";
import {twMerge} from 'tailwind-merge'

interface LottieAnimationProps {
  animationData?: object;
  animationFn?: () => void;
  className?: string;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  animationFn,
  className,
  ...props
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop
      {...props}
      className={twMerge(`
      w-[450px]
      `,className)}
    ></Lottie>
  );
};

export default LottieAnimation;
