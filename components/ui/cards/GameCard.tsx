"use client";
import React from "react";

export interface GameCardProps {
  name: string;
  icon: string;
  gameCount: string;
  sampleGames?: string[];
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  icon,
  gameCount,
  sampleGames,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-[8px_10px_12px_10px] hover:bg-gray-700 transition-colors cursor-pointer">
      <div className="flex items-center pb-4">
        <img
          src={icon}
          alt={`${name} manufacturer icon`}
          className="h-6 w-9 object-contain"
        />
        <div className="ml-3">
          <h3 className="text-[10px] font-[700] text-white leading-tight">
            {name}
          </h3>
          <p className="text-[10px] font-[700] text-[#A7B5CA] leading-tight">
            {gameCount}
          </p>
        </div>
      </div>

      {sampleGames && sampleGames.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {sampleGames.map((game, gameIndex) => (
            <img
              key={gameIndex}
              src={`/images/brand/${game}`}
              alt={`${name} game sample ${gameIndex + 1}`}
              className="w-full h-12 object-cover rounded hover:opacity-80 transition-opacity"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameCard;
