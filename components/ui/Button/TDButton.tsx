"use client"

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TDButtonProps {
    className?: string;
    type: "red" | "blue";
    children: ReactNode;
    onClick: () => void;
}

const TDButton: React.FC<TDButtonProps> = ({ className, type, children, onClick }) => {
    const redStyle = "bg-[linear-gradient(#F9476E_0%,#BD0139_24%)] hover:bg-[linear-gradient(#FF7593,#C4003A,#F92956)]";
    const blueStyle = "bg-[linear-gradient(#2C9FFA_0%,#0C60FF_24%)] hover:bg-[linear-gradient(#47AEFF,#1868FF,#47AEFF)]";
    const Style = type === "red" ? redStyle : blueStyle;
    const edge = type === "red" ? "bg-[#ED1D4980]" : "bg-[#2283F680]";

    return (
        <>
            <button onClick={onClick} className={cn("pushable group relative border-none bg-transparent p-0 cursor-pointer outline-offset-1 transition-filter duration-250 focus:outline-none focus-visible:outline", className)}>
                <span className={cn("edge absolute top-1 left-0 rounded-[12px]", edge, className)}></span>
                <span
                    className={cn(`front relative rounded-[12px] text-white will-change-transform
                               inner-shadow-[#FFFFFF21]
                    transform transition-transform 
                    group-hover:-translate-y-[3px] 
                    border border-[#FFFFFF21]
                    
                    group-active:translate-y-[1px] font-bold  flex items-center justify-center`, className, Style)}
                >
                    {children}
                </span>
            </button>
        </>
    );
}

export default TDButton;