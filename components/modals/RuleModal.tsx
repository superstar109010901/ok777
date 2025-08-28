'use client';

import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useModalScrollPrevention } from "@/hooks/useModalScrollPrevention";
import { Button, UnifiedButton } from "../ui";

interface RuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RuleModal({ isOpen, onClose }: RuleModalProps) {
  const [activeTab, setActiveTab] = useState<'hash-size' | 'hash-odd-even' | 'lucky-hash'>('hash-size');
  
  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen);

  if (!isOpen) return null;

  const tabs = [
    { id: 'hash-size', label: 'Hash size' },
    { id: 'hash-odd-even', label: 'Hash odd and even' },
    { id: 'lucky-hash', label: 'lucky hash' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'hash-size':
        return (
          <div className="space-y-6">
            {/* Value rules section */}
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Value rules</h3>
              <div className="text-sm text-white space-y-2 leading-relaxed">
                <p>
                  The game uses <span className="text-cyan-400">TRX</span> blockchain's{' '}
                  <span className="text-cyan-400">block hash</span> as the random number source.{' '}
                  <span className="text-cyan-400">(ignoring letters)</span>
                </p>
                <p>
                  Each block hash is a 64-character hexadecimal string. We extract the last 8 characters{' '}
                  <span className="text-cyan-400">(ignoring letters)</span> and convert them to decimal numbers.
                </p>
              </div>
            </div>

            {/* Wallet A section */}
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Wallet A</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value="TP4KGac4W7oKYuXgfUcZVm7..."
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg text-white text-sm border border-gray-700"
                />
                
                <UnifiedButton variant="primary" className="h-12 px-4">
              <span className="text-xs font-bold">Query</span>
            </UnifiedButton>
              </div>
            </div>

            {/* Wallet B section */}
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Wallet B</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value="TP4KGac4W7oKYuXgfUcZVm7..."
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg text-white text-sm border border-gray-700"
                />
                <UnifiedButton variant="primary" className="h-12 px-4">
              <span className="text-xs font-bold">Query</span>
            </UnifiedButton>
              </div>
            </div>

            {/* Game rules section */}
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Game rules</h3>
              <div className="text-sm text-white space-y-2 leading-relaxed">
                <p>
                  The game uses <span className="text-cyan-400">TRX</span> blockchain's{' '}
                  <span className="text-cyan-400">block hash</span> as the random number source.{' '}
                  <span className="text-cyan-400">(ignoring letters)</span>
                </p>
                <p>
                  Players can bet on various outcomes based on the extracted numbers from the block hash.
                </p>
              </div>
            </div>

            {/* Rules of the game section */}
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Rules of the game</h3>
              <div className="text-sm text-white space-y-2">
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-medium">1.</span>
                  <p>
                    Numbers <span className="text-cyan-400">0, 1, 2, 3, and 4</span> are considered small numbers.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-medium">2.</span>
                  <p>
                    Numbers <span className="text-cyan-400">5, 6, 7, 8, and 9</span> are considered big numbers.
                  </p>
                </div>
              </div>
            </div>

            {/* Things to note section */}
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Things to note</h3>
              <div className="text-sm text-white space-y-2">
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-medium">1.</span>
                  <p>
                    The game is based on the <span className="text-cyan-400">TRON</span> blockchain technology.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-medium">2.</span>
                  <p>
                    All results are verifiable on the blockchain and cannot be manipulated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'hash-odd-even':
        return (
          <div className="space-y-6">
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Hash Odd and Even Rules</h3>
              <div className="text-sm text-white space-y-2 leading-relaxed">
                <p>
                  This game mode focuses on whether the extracted numbers from the{' '}
                  <span className="text-cyan-400">block hash</span> are odd or even.
                </p>
                <p>
                  Players bet on whether the final number will be odd or even, with{' '}
                  <span className="text-cyan-400">1:1</span> payout ratio.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'lucky-hash':
        return (
          <div className="space-y-6">
            <div className="bg-[#ffffff0a] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-3">Lucky Hash Rules</h3>
              <div className="text-sm text-white space-y-2 leading-relaxed">
                <p>
                  Lucky Hash is a special game mode where players bet on specific{' '}
                  <span className="text-cyan-400">hash patterns</span> or combinations.
                </p>
                <p>
                  Higher rewards are offered for more specific predictions, with{' '}
                  <span className="text-cyan-400">varying payout ratios</span> based on difficulty.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center overflow-y-auto justify-center z-[999999]" 
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
        className="fixed inset-0 bg-black/50  backdrop-blur-sm"
        onClick={onClose}
        style={{ zIndex: 999999 }}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-2xl h-[100vh] bg-gray-900 rounded-t-3xl  shadow-2xl"
        style={{ zIndex: 1000000 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#002554] to-[rgba(17,25,35,0.54)] rounded-t-3xl border-t border-white-16 backdrop-blur-[32px] ">
          <h2 className="text-xl font-bold text-white font-montserrat">Rule</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 py-4  border-b border-gray-700">
          <div className="flex gap-2 p-2 rounded-lg  bg-[#ffffff0a]">

         

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-600 text-gray-200'
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
           </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6  bg-gray-900">
          {renderContent()}
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
