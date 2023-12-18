import React from "react";

const ProgressBar = ({ progress,stepCount }: { progress: number,stepCount:number }) => {
  const progressBarStyles = {
    width: `${(progress / stepCount) *100}%`,
    height: "15px",
    backgroundColor: "#58cc02",
    transition: "width 0.5s ease-in-out",
  };
  return (
    <div className="border bg-[#e5e5e5] rounded-full overflow-hidden">
      <div style={progressBarStyles}></div>
    </div>
  );
};

export default ProgressBar;
