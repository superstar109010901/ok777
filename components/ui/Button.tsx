"use client";

import React from "react";
import clsx from "clsx";

type ButtonVariant = "blue" | "black" | "red" | "green" | "blueOne" | "Wallet";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariant;
}

const styles: Record<
  ButtonVariant,
  { base: string; edge?: string; width?: string }
> = {
  blue: {
    base: "bg-[linear-gradient(#0C60FF,#2C9FFA)] border border-[#55657E]",
    edge: "bg-[#003a8a]",
    width: "w-[146px]",
  },
  black: {
    base: "flex h-9 w-9 items-center justify-center rounded-lg border border-white/4 bg-white/4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white/8 transition-colors",
  },
  red: {
    base: "bg-[linear-gradient(to_bottom,rgb(249,71,110)_0%,rgb(189,1,57)_24%)]",
    edge: "bg-[#61001d]",
    width: "w-[85px]",
  },
  green: {
    base: "bg-[linear-gradient(1turn,#31FF5E_0.8%,#1BB83D)]",
    edge: "bg-[#1BB83D80]",
    width: "w-[146px]",
  },
  blueOne: {
    base: "bg-[linear-gradient(#0C60FF,#2C9FFA)] border border-[#55657E]",
    edge: "bg-[#003a8a]",
    width: "w-[173px]",
  },
  Wallet: {
    base: "bg-[linear-gradient(1turn,#0C60FF_0.8%,#2C9FFA)]",
    edge: "bg-[#003a8a]",
    width: "w-[146px]",
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = " h-[33px]",
  type = "button",
  disabled = false,
  variant = "blue",
}) => {
  const { base, edge, width } = styles[variant];

  if (!edge) {
    // Simple (black) style
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          "flex items-center justify-center transition-colors",
          base,
          className
        )}
      >
        {children}
      </button>
    );
  }

  // Pushable style (blue, red, green)
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "pushable group relative border-none bg-transparent cursor-pointer outline-offset-1 focus:outline-none focus-visible:outline",
        width,
        className
      )}
    >
      <span
        className={clsx(
          "edge absolute translate-y-[3px] top-0 left-0 w-full h-full rounded-[8px]",
          edge
        )}
      ></span>
      <span
        className={clsx(
          "front relative w-full h-full rounded-[8px] hover:shadow-[0_3px_16px_transparent,inset_0_4px_3px_#ffffff4d] text-white font-bold flex items-center justify-center text-[12px] will-change-transform transform transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-[3px] group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)] group-active:translate-y-[1px] group-active:duration-[34ms]",
          base
        )}
       
      >
        {children}
      </span>
    </button>
  );
};

interface BlueButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
      // background: linear-gradient(3360deg, #db0a49 .8%, #fb2b57);
  return (
    <button className="pushable group relative border-none bg-transparent p-0 cursor-pointer outline-offset-1 hover:brightness-110 transition-filter duration-250 focus:outline-none focus-visible:outline">
      <span className="edge absolute translate-y-[3px] top-0 left-0 w-full px-[25.2px] h-full rounded-[12.6px] bg-[#003a8a]"></span>
      <span
        className="front relative lg:h-[51.97px] h-[37.73px] block rounded-[12.6px] px-[25.2px] text-xl text-white bg-[linear-gradient(#0C60FF,#2C9FFA)] will-change-transform
         shadow-inner shadow-gray-400            
        transform transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)]
                    group-hover:-translate-y-[3px] group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)]
                    border-[1px] border-[#55657E]
                    group-active:translate-y-[1px] hover:shadow-[0_3px_28px_#2283f666] group-active:duration-[34ms] text-[12px] font-bold flex items-center justify-center text-[13.72px] lg:text-[18.9px]"
        style={{ boxShadow:"0 3px 28px #2283f666, inset 0 3px 3px #ffffff21" }}
      >
        {children}
      </span>
    </button>
  );
};

export { BlueButton };
export default Button;
