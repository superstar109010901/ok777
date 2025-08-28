"use client";

import React from "react";

interface NormalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NormalButton: React.FC<NormalButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={
        "flex text-casper active:text-white h-12 px-4 bg-transparent hover:bg-[#2A3546] hover:text-white px-4 items-center justify-center rounded-[8px] hover:border hover:border-white-4  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)]" +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NormalButton;
