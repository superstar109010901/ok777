'use client';

import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useModalScrollPrevention } from "@/hooks/useModalScrollPrevention";
import { card10 } from "../../main-content-data.json"
import Link from "next/link";
interface ChangeGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}



export default function ChangeGameModal({ isOpen, onClose }: ChangeGameModalProps) {
  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen);

  if (!isOpen) return null;

  const handleGameSelect = (gameId: string) => {
    console.log(`Selected game: ${gameId}`);
    // Here you can add navigation logic to the selected game
    onClose();
  };

  const modalContent = (
    <div 
      className="fixed overflow-auto inset-0 flex items-center justify-center z-[999999]" 
      style={{ 
        position: 'fixed', 
        zIndex: 999999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'auto'
      }}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ zIndex: 999999 }}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full  max-w-[740px] h-[100vh] bg-gray-900 rounded-t-3xl  shadow-2xl"
        style={{ zIndex: 1000000 }}
      >
        {/* Header */}
        <div  className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#002554] to-[rgba(17,25,35,0.54)] rounded-t-3xl border-t border-white/16 backdrop-blur-[32px] ">
          <h2 className="text-xl font-bold text-white font-montserrat">Change game</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Game Grid */}
        <div className="p-6 bg-gray-900 ">
          <div className="grid grid-cols-3 gap-4">
            {
              card10.map((item, index) => <div className="rounded-lg overflow-hidden" key={index}>
                <Link href={item.link} 
                onClick={onClose}
                  className="cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt="game"
                    className="w-full object-cover transition-transform duration-200"
                  />
                  
              </Link>
                </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render at document root level
  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
}
