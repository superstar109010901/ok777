import { useState } from "react";
import { PokerChip } from "./PokerChip";

interface ChipData {
  id: string;
  value: string | number;
  color: "blue" | "purple" | "green" | "navy" | "red" | "orange";
}

const chips: ChipData[] = [
  { id: "1", value: 1, color: "blue" },
  { id: "5", value: 5, color: "purple" },
  { id: "10", value: 10, color: "green" },
  { id: "50", value: 50, color: "navy" },
  { id: "100", value: 100, color: "red" },
  { id: "customize", value: "Customize", color: "orange" },
];

interface CircularChipSelectorProps {
  onChipSelect?: (chipId: string) => void;
  selectedChip?: string;
  onClose?: () => void;
}

export function CircularChipSelector({ onChipSelect, selectedChip = "", onClose }: CircularChipSelectorProps) {
  const [localSelectedChip, setLocalSelectedChip] = useState<string>("");

  console.log("CircularChipSelector rendered");

  const handleChipClick = (chipId: string) => {
    console.log("Chip clicked in circular view:", chipId);
    setLocalSelectedChip(chipId);
    onChipSelect?.(chipId);
  };

  const getChipPosition = (index: number) => {
    // Position chips to match the Figma design exactly - 6 chips in a circle
    // These are relative positions within the 251x152 container
    const positions = [
      { left: 0, top: 116 },     // chip "1" (bottom left)
      { left: 11, top: 46 },     // chip "5" (left)
      { left: 65, top: 0 },      // chip "10" (top left)
      { left: 136, top: 0 },     // chip "50" (top right)
      { left: 190, top: 45 },    // chip "100" (right)
      { left: 203, top: 116 },   // chip "customize" (bottom right)
    ];

    return positions[index] || { left: 0, top: 0 };
  };

  return (
    <div
      className="absolute  inset-0 flex justify-center items-center z-50 bg-black/[0.04] bg-opacity-20"
      onClick={onClose}
    >
      <div
        className="relative -top-11  flex justify-center items-center flex-shrink-0"
        style={{
          width: "402px",
          height: "402px",
          padding: "125px 75.5px",
          background: "radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.00) 100%)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[251px] h-[152px] flex-shrink-0">
          {/* Center chip "1" */}
          

          {/* Surrounding chips */}
          {chips.map((chip, index) => {
            const position = getChipPosition(index);
            return (
              <div
                key={chip.id}
                className="absolute"
                style={{
                  left: `${position.left}px`,
                  top: `${position.top}px`,
                }}
              >
                <PokerChip
                  value={chip.value}
                  color={chip.color}
                  isSelected={localSelectedChip === chip.id}
                  onClick={() => handleChipClick(chip.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
