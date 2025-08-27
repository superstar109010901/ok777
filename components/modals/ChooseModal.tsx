'use client';

import { X, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useModalScrollPrevention } from "@/hooks/useModalScrollPrevention";

type SortOption = "view-all" | "new" | "popular" | "a-z" | "z-a";

interface ChooseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOption: SortOption;
  onOptionChange: (option: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "view-all", label: "View All" },
  { value: "new", label: "New" },
  { value: "popular", label: "Popular" },
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];

export default function ChooseModal({
  isOpen,
  onClose,
  selectedOption,
  onOptionChange,
}: ChooseModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`lg:relative w-full lg:w-[203px] flex flex-col rounded-t-[14px] lg:rounded-[14px] backdrop-blur-[32px] transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'
      }`}>
        {/* Header */}
        <div className="flex p-4 items-center gap-4 rounded-t-[14px] bg-gradient-to-b from-[rgba(17,25,35,0.54)] to-[#002554] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
          <div className="flex-1 text-white font-montserrat text-lg font-bold">
            Choose
          </div>
          <button
            onClick={onClose}
            className="flex h-9 px-2.5 justify-center items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-4 h-4 text-[#A7B5CA]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex p-6 flex-col rounded-b-[14px] bg-[rgba(17,25,35,0.54)] backdrop-blur-[32px] max-h-[60vh] lg:max-h-none overflow-y-auto">
          {sortOptions.map((option) => (
            <div key={option.value} className={`flex h-[50px] px-3 pl-2 items-center gap-2 rounded-xl ${selectedOption === option.value ? 'bg-white/[0.04]' : ''}`}>
              <div className="flex h-9 px-2 pl-3 items-center gap-2 flex-1 rounded-lg">
                <div className="text-white font-montserrat text-sm font-bold line-clamp-1">
                  {option.label}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => onOptionChange(option.value)}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  {selectedOption === option.value ? (
                    <div className="w-6 h-6 rounded-full bg-[#2283F6] border-2 border-[#2283F6] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white stroke-[2]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-[#55657E]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
