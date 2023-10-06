import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  buttonRef?: null | undefined;
  type?: "button" | "submit";
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  disabled,
  buttonRef,
  className,
  type,
  ...props
}) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      ref={buttonRef}
      className={twMerge(
        `
        text-white
        border
        border-b-2
        w-[330px]
        py-3
        rounded-xl
      `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
