"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface FlatButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const FlatButton: React.FC<FlatButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button onClick={onClick} className="pushable group relative border-none bg-transparent p-0 cursor-pointer outline-offset-1 transition-filter duration-250 focus:outline-none focus-visible:outline">
                    <span className={cn("edge absolute  top-[3px] left-0 w-full h-full rounded-[8px] !bg-[#2283F680] opacity-80", className)}></span>
                    <span
                        className={cn(`front relative rounded-[8px]   text-white will-change-transform
                        
                        group-hover:-translate-y-[3px] 
                        border border-[#FFFFFF21]
                        group-active:translate-y-[1px]  flex items-center justify-center bg-dodger-blue hover:bg-cornflower-blue`, className)}
                    >
                        {children}
                    </span>
                </button>
  );
};

export default FlatButton;
