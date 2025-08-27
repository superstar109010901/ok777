"use client";

import React from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "primary" | "secondary" | "gradient" | "custom";

interface UnifiedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const UnifiedButton: React.FC<UnifiedButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "default",
  style,
  disabled = false,
  type = "button",
}) => {
  const baseClasses = "flex items-center justify-center transition-colors cursor-pointer rounded-lg";
  
  const variantClasses = {
    default: "h-9 bg-[rgba(255, 255, 255, 0.04)] border-b-[1px] border-[#2a3536] border-t-[3px] border-[#FFFFFF29] hover:bg-[rgba(255, 255, 255, 0.08)]",
    primary: "h-9 bg-[#2283F6] text-white hover:bg-[#1a6fd8]",
    secondary: "h-9 bg-[rgba(255, 255, 255, 0.08)] text-[#A7B5CA] hover:bg-[rgba(255, 255, 255, 0.12)]",
    gradient: "h-9 bg-gradient-to-r from-[#0546A7] to-[#0C9898] text-white hover:brightness-110",
    custom: "",
  };

  const defaultStyle = variant === "default" ? { borderTop: "1px solid #9b9292bd" } : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={style || defaultStyle}
    >
      {children}
    </button>
  );
};

export default UnifiedButton;
