"use client";

import { useState, useEffect } from "react";
import MainContent from "@/components/MainContent";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const { isLoading } = useAppSelector((state) => state.loading);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-[100vh] bg-[radial-gradient(circle_at_50%_50%,_#003A81_0%,_#0D131C_30%)] flex flex-col">
        {/* Red Progress Bar at Top */}
        <div className="w-full lg:h-4 h-2 bg-gray-800">
          <div 
            className="h-full bg-crimson rounded-r-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(loadingProgress, 100)}%` }}
          />
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            {/* 777 Logo with Flaming Soccer Ball */}
            <img src="/images/logo.svg" className="h-[96px]" alt="logo" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div >
      <MainContent />
    </div>
  );
}
