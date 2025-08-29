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
        "flex text-casper active:text-white h-[36px] px-4 bg-transparent hover:bg-ebony-clay hover:text-white px-4 items-center justify-center rounded-[8px] gap-[8px] font-bold  " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NormalButton;
