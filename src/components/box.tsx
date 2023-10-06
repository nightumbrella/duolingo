import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return <div className='px-[225px]'>{children}</div>;
};

export default Box;
