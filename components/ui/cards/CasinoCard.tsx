"use client";

import React from "react";

export interface CasinoCardProps {
  badge: string;
  views?: string;
  user?: string;
  image: string;
}

const CasinoCard: React.FC<CasinoCardProps> = ({
  user,
  badge,
  image,
  views,
}) => {
  const getBadgeColor = (badgeType: string): string => {
    switch (badgeType) {
      case "HOT":
        return "bg-[#ED1D49]";
      case "NEW":
        return "bg-[#1BB83D]";
      default:
        return "bg-[#FFAB00]";
    }
  };

  return (
    <div className=" rounded-[8px] overflow-hidden w-full">
      <div className="relative rounded-[8px] overflow-hidden">
        <div className="rounded-[8px]  relative overflow-hidden">

        <img
          src={image}
          alt={`Casino game`}
          className="w-full object-cover transition-transform duration-300"
          />
          <div className="absolute rounded-[8px] w-full top-0 left-0 h-full hover:backdrop-blur-[3px] duration-300 "></div>
          </div>

        {/* Optional User and Views Info */}
        {(user || views) && (
          <div className="flex items-center mt-2">
            {user && <img src={`/icons/${user}.svg`} className="w-4 h-4" alt="User icon" />}
            {views && <span className="text-white text-[14px] ml-2">{views}</span>}
          </div>
        )}

        <div
          className={`absolute top-2 left-2 text-white text-[10px] lg:text-[12.24px] font-bold lg:px-2 px-[2px] py-[0.5px] rounded-full border-t border-[#ffffff30] ${getBadgeColor(
            badge
          )}`}
        >
          {badge}
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;
