import Lottie from "lottie-react";
import { FC } from "react";

interface LottieAnimationProps {
  animationData?: object;
  animationFn: () => void;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  animationFn,
}) => {
  return <Lottie animationData={animationData}></Lottie>;
};

export default LottieAnimation;
