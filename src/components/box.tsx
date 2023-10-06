import React from "react";

const box = ({ children }: { children: React.ReactNode }) => {
  return <div className='px-[225px]'>{children}</div>;
};

export default box;
