"use client";

import React from "react";
import { cn } from "../../../lib/utils";

interface BlackButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={cn(
        "flex h-9 px-2.5 items-center justify-center rounded-[8px] cursor-pointer bg-mirage-2 bg-no-repeat hover:bg-[radial-gradient(ellipse_80%_50%_at_bottom_center,#ED1D49_0,#ED1D4900_50%)] hover:bg-[linear-gradient(#FFFFFF54, #919191)] font-bold text-white border border-white-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlackButton;
