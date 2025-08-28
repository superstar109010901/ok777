"use client";

import React from "react";

interface BlackButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  onClick,
  className = "",
  style,
}) => {
  return (
    <button
      className={
        "flex h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white-8 transition-colors" +
        className
      }
      onClick={onClick}
      style={style || { borderTop: "1px solid #9b9292bd" }}
    >
      {children}
    </button>
  );
};

export default BlackButton;
