import React from "react";
import { cn } from "../../lib/utilities";

export const Button = ({children, className}) => {
  return (
    <button className= {cn('py-3 sm:py-4 px-4 sm:px-[25px] font-bold rounded-full text-white bg-linear-(--gradient-linear-primary) opacity-90 hover:opacity-100 hover:scale-105 hover:-translate-y-0.75 transition-all delay-150 cursor-pointer text-xs md:text-base', className)}>
      {children}
    </button>
  );
};
