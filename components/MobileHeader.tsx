"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface MobileHeaderProps {
  title?: string;
  onBackClick?: () => void;
  onSupportClick?: () => void;
  className?: string;
  showBackButton?: boolean;
}

export function MobileHeader({ title = 'Support/Legal support', onBackClick, onSupportClick, className, showBackButton = true }: MobileHeaderProps) {
  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "flex w-full justify-between items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4",
      "border-t border-b border-[#2A3546] ",
      "bg-[rgba(17,25,35,0.54)] backdrop-blur-[32px]",
      "min-h-[56px] sm:min-h-[64px]", // Ensure minimum touch target height
      className
    )}>
      <div className='flex gap-4 items-center'>
        {/* Back Button */}
      {showBackButton && (
        <button
          onClick={onBackClick}
          className={cn(
            "flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-lg",
            "border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.04)]",
            "shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]",
            "hover:bg-[rgba(255,255,255,0.08)] active:bg-[rgba(255,255,255,0.12)] transition-colors",
            "touch-manipulation"
          )}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7.83003 4.19336L4.03003 8.00003L7.83003 11.8067L8.7767 10.86L6.5767 8.66669H11.97V7.33336H6.5767L8.7767 5.14003L7.83003 4.19336Z" 
              fill="#A7B5CA"
            />
          </svg>
        </button>
      )}

      {/* Title */}
      <h1 className={cn(
        "flex-1 text-white font-montserrat text-base sm:text-lg font-bold",
        showBackButton ? "text-center sm:text-left" : "text-center",
        "truncate px-2 sm:px-0" // Handle long titles on small screens
      )}>
        {title}
      </h1>
      </div>

      {/* Support Button */}
      <button
        onClick={onSupportClick}
        className={cn(
          "flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-lg",
          "border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.04)]",
          "shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]",
          "hover:bg-[rgba(255,255,255,0.08)] active:bg-[rgba(255,255,255,0.12)] transition-colors",
          "touch-manipulation"
        )}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M8.00004 1.33398C4.32671 1.33398 1.33337 4.32732 1.33337 8.00065V11.334C1.33337 11.7007 1.63337 12.0007 2.00004 12.0007H4.00004C4.36671 12.0007 4.66671 11.7007 4.66671 11.334V8.00065C4.66671 7.63398 4.36671 7.33398 4.00004 7.33398H2.71337C3.04004 4.70732 5.28671 2.66732 8.00004 2.66732C10.7134 2.66732 12.96 4.70732 13.2867 7.33398H12C11.6334 7.33398 11.3334 7.63398 11.3334 8.00065V11.334C11.3334 11.7007 11.6334 12.0007 12 12.0007H13.3334V12.6673C13.3334 13.034 13.0334 13.334 12.6667 13.334H10C10 12.9673 9.70004 12.6673 9.33337 12.6673H6.66671C6.30004 12.6673 6.00004 12.9673 6.00004 13.334V14.0007C6.00004 14.3673 6.30004 14.6673 6.66671 14.6673H12.6667C13.7667 14.6673 14.6667 13.7673 14.6667 12.6673V8.00065C14.6667 4.32732 11.6734 1.33398 8.00004 1.33398Z" 
            fill="#A7B5CA"
          />
        </svg>
      </button>
    </div>
  );
}
