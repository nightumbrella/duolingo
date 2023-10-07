import Lottie from "lottie-react";
import { FC } from "react";

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
      className={className}
    ></Lottie>
  );
};

export default LottieAnimation;
