"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

import { Wallet, ArrowUpDown, Grid3X3, Menu, User, Copy, ArrowLeft, Check, ZoomIn } from 'lucide-react'
import { ResponsiveChipSelector } from "@/components/ui/chipSelector/ResponsiveChipSelector";
import MenuModal from "@/components/modals/MenuModal";
import { useModal } from "@/context/ModalProvider";
import Link from "next/link";
import GameHistoryTable from "@/components/ui/GameHistoryTable";

const OddDefault: React.FC = () => {
  const { openChangeGameModal } = useModal();
  const [activeTab, setActiveTab] = useState<"Active" | "Default">("Active");
  const isActive = activeTab === "Active";
  const [difficulty, setDifficulty] = useState<"Beginner" | "Intermediate">(
    "Beginner"
  );
  const [trendTab, setTrendTab] = useState<"Block Trend" | "My trend">(
    "Block Trend"
  );

  const [isBeginnerMode, setIsBeginnerMode] = useState(false)
  const [selectedChip, setSelectedChip] = useState<number | null>(1)
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuModalOpen(true);
  };

  const handleCloseMenuModal = () => {
    setIsMenuModalOpen(false);
  };


  // Mock data for lottery trend

  const board: (string | null)[][] = [
    // Each row = array of cells: "E", "O", or null for empty
    [
      "E",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "O",
    ],
    [
      "O",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "E",
    ],
    [
      "E",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "E",
      "O",
      "O",
    ],
    [
      "O",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "O",
      "O",
      "E",
      "O",
      "E",
      "E",
    ],
    [
      "E",
      null,
      "E",
      null,
      null,
      "E",
      null,
      "O",
      null,
      null,
      "E",
      null,
      null,
      "E",
      null,
      null,
      "O",
      null,
      null,
      "E",
      null,
      null,
      "O",
      null,
      null,
      "E",
      null,
      null,
      "O",
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  ];
  const GameBoard = ({ board }: { board: (string | null)[][] }) => {
    return (
      <div className=" rounded-lg w-full mb-4">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 mb-1 bg-[#1b2430]">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="w-10 h-10 flex items-center justify-center border border-gray-700"
              >
                {cell === "E" ? (
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-500 text-black text-[12px] font-bold [@media(max-width:850px)]:text-[10px] [@media(max-width:850px)]:w-4 [@media(max-width:850px)]:h-4">
                    E
                  </div>
                ) : cell === "O" ? (
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white text-[12px] font-bold [@media(max-width:850px)]:text-[10px] [@media(max-width:850px)]:w-4 [@media(max-width:850px)]:h-4">
                    O
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  const ChipSVG: React.FC<{
    value?: number;
    label?: string;
    color: string;
    selected?: boolean;
    onClick?: () => void;
    sizePx?: number;
  }> = ({ value, label, color, selected = false, onClick, sizePx = 64 }) => {
    const display = label ?? (value != null ? String(value) : "");
    const textLines = display.split('\n');
    const darkStroke = "#0B1220";
  return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        className={`relative inline-flex items-center justify-center rounded-full transition-transform active:scale-95`}
        style={{ width: sizePx, height: sizePx }}
      >
        <svg width={sizePx} height={sizePx} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="baseGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="60%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="1" />
            </radialGradient>
            <linearGradient id="innerSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1A2640" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#0F1722" stopOpacity="0.55" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            </filter>
          </defs>

          {/* Golden outer ring when selected */}
          {selected && (
            <>
              <circle cx="50" cy="50" r="49" fill="none" stroke="#FFB636" strokeWidth="4" />
              <circle cx="50" cy="50" r="49" fill="none" stroke="#FFB636" strokeWidth="4" opacity="0.5" filter="url(#glow)" />
            </>
          )}

          {/* Outer base */}
          <circle cx="50" cy="50" r="46" fill="url(#baseGrad)" stroke={darkStroke} strokeWidth="2" />

          {/* Outer inner ring */}
          <circle cx="50" cy="50" r="38" fill="none" stroke={darkStroke} strokeWidth="3" opacity="0.9" />

          {/* Inner disc */}
          <circle cx="50" cy="50" r="28" fill="url(#innerSheen)" stroke={darkStroke} strokeWidth="2.5" />

          {/* 8 markers: 4 squares (cardinal) and 4 diamonds (diagonals) */}
          {([0, 90, 180, 270] as number[]).map((deg, idx) => (
            <g key={`sq-${idx}`} transform={`rotate(${deg} 50 50)`}>
              <rect x="46" y="6" width="8" height="10" rx="2" fill="#F2F6FF" stroke="#DCE4F2" strokeWidth="1" />
            </g>
          ))}
          {([45, 135, 225, 315] as number[]).map((deg, idx) => (
            <g key={`dm-${idx}`} transform={`rotate(${deg} 50 50)`}>
              <rect x="48" y="8" width="6" height="6" rx="1.5" fill="#F2F6FF" stroke="#DCE4F2" strokeWidth="1" transform="rotate(45 51 11)" />
            </g>
          ))}

          {/* Label */}
          {textLines.length === 1 ? (
            <text x="50" y="58" textAnchor="middle" fontFamily="inherit" fontWeight="800" fontSize="28" fill="#FFFFFF">
              {textLines[0]}
            </text>
          ) : (
            <>
              <text x="50" y="48" textAnchor="middle" fontFamily="inherit" fontWeight="800" fontSize="14" fill="#FFFFFF">
                {textLines[0]}
              </text>
              <text x="50" y="64" textAnchor="middle" fontFamily="inherit" fontWeight="800" fontSize="14" fill="#FFFFFF">
                {textLines[1]}
              </text>
            </>
          )}
        </svg>
      </button>
    );
  };
  
  return (
    <>
    
        
        <div className="flex flex-col items-center min-h-screen gap-4 md:gap-16 py-16 w-[70%] mx-auto">
        {/* Header with Segmented Control */}
        <div className="w-full flex flex-col items-center gap-4 p-0 ">
          <div className=" justify-between  w-full items-center mb-8 bg-[#222d3d] pr-4 rounded-lg flex  [@media(max-width:768px)]:hidden">
        <div className="flex bg-[#72707038] rounded-lg p-1 ">
          <Link
            href="/hashgames/bigsmall/active"
            className={` px-8  py-1.5 rounded-lg font-bold transition-all duration-200 text-[14px] border-none flex items-center gap-2 
                bg-color-[#FFFFFF] text-white shadow-lg hover:bg-[rgba(255,255,255,0.08)]`}
          >
            {" "}
            <img
              src="/icons/swap-horizontal.svg"
              alt="active"
              className="w-6 h-6"
            />
            Transfer betting
          </Link>
          <button
            className={`px-8 py-1.5 rounded-lg font-bold transition-all duration-200 text-[14px] border-none flex items-center gap-2
                bg-[rgba(255,255,255,0.13)] text-gray-300 hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)]
            `}
          >
            {" "}
            <img
              src="/icons/wallet.svg"
              alt="active"
              className="w-6 h-6"
            />
            Page betting
          </button>
        </div>
        {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={openChangeGameModal}
                className="flex h-9 w-9 justify-center items-center rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white-8 transition-colors"
              >
                <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66683 10.6666H2.00016C1.63197 10.6666 1.3335 10.9651 1.3335 11.3333V14C1.3335 14.3681 1.63197 14.6666 2.00016 14.6666H4.66683C5.03502 14.6666 5.3335 14.3681 5.3335 14V11.3333C5.3335 10.9651 5.03502 10.6666 4.66683 10.6666Z"
                fill="#A7B5CA"
              />
              <path
                d="M9.33333 10.6666H6.66667C6.29848 10.6666 6 10.9651 6 11.3333V14C6 14.3681 6.29848 14.6666 6.66667 14.6666H9.33333C9.70152 14.6666 10 14.3681 10 14V11.3333C10 10.9651 9.70152 10.6666 9.33333 10.6666Z"
                fill="#A7B5CA"
              />
              <path
                d="M13.9998 10.6666H11.3332C10.965 10.6666 10.6665 10.9651 10.6665 11.3333V14C10.6665 14.3681 10.965 14.6666 11.3332 14.6666H13.9998C14.368 14.6666 14.6665 14.3681 14.6665 14V11.3333C14.6665 10.9651 14.368 10.6666 13.9998 10.6666Z"
                fill="#A7B5CA"
              />
              <path
                d="M4.66683 6H2.00016C1.63197 6 1.3335 6.29848 1.3335 6.66667V9.33333C1.3335 9.70152 1.63197 10 2.00016 10H4.66683C5.03502 10 5.3335 9.70152 5.3335 9.33333V6.66667C5.3335 6.29848 5.03502 6 4.66683 6Z"
                fill="#A7B5CA"
              />
              <path
                d="M9.33333 6H6.66667C6.29848 6 6 6.29848 6 6.66667V9.33333C6 9.70152 6.29848 10 6.66667 10H9.33333C9.70152 10 10 9.70152 10 9.33333V6.66667C10 6.29848 9.70152 6 9.33333 6Z"
                fill="#A7B5CA"
              />
              <path
                d="M13.9998 6H11.3332C10.965 6 10.6665 6.29848 10.6665 6.66667V9.33333C10.6665 9.70152 10.965 10 11.3332 10H13.9998C14.368 10 14.6665 9.70152 14.6665 9.33333V6.66667C14.6665 6.29848 14.368 6 13.9998 6Z"
                fill="#A7B5CA"
              />
              <path
                d="M4.66683 1.33331H2.00016C1.63197 1.33331 1.3335 1.63179 1.3335 1.99998V4.66665C1.3335 5.03484 1.63197 5.33331 2.00016 5.33331H4.66683C5.03502 5.33331 5.3335 5.03484 5.3335 4.66665V1.99998C5.3335 1.63179 5.03502 1.33331 4.66683 1.33331Z"
                fill="#A7B5CA"
              />
              <path
                d="M9.33333 1.33331H6.66667C6.29848 1.33331 6 1.63179 6 1.99998V4.66665C6 5.03484 6.29848 5.33331 6.66667 5.33331H9.33333C9.70152 5.33331 10 5.03484 10 4.66665V1.99998C10 1.63179 9.70152 1.33331 9.33333 1.33331Z"
                fill="#A7B5CA"
              />
              <path
                d="M13.9998 1.33331H11.3332C10.965 1.33331 10.6665 1.63179 10.6665 1.99998V4.66665C10.6665 5.03484 10.965 5.33331 11.3332 5.33331H13.9998C14.368 5.33331 14.6665 5.03484 14.6665 4.66665V1.99998C14.6665 1.63179 14.368 1.33331 13.9998 1.33331Z"
                fill="#A7B5CA"
              />
            </svg>
              </button>
              <button 
                onClick={handleMenuClick}
                className="flex h-9 w-9 justify-center items-center rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white-8 transition-colors"
              >
                <Menu className="w-4 h-4 text-casper" />
              </button>
            </div>
      </div>
      {/* Mobile view Header Section*/}
      <div className="bg-[#72707038] rounded-lg w-full  p-1 hidden [@media(max-width:768px)]:flex ">
        <Link
            href="/hashgames/bigsmall/active"
          className={` w-[50%] justify-center text-center  py-1.5 rounded-lg font-bold transition-all duration-200 text-[14px] border-none flex items-center gap-2 hover:bg-[rgba(255,255,255,0.08)]`}
        >
          {" "}
          <img
            src="/icons/swap-horizontal.svg"
            alt="active"
            className="w-6 h-6"
          />
          Transfer betting
        </Link>
        <button
          className={` w-[50%] justify-center text-center  py-1.5 rounded-lg font-bold transition-all duration-200 text-[14px] border-none flex items-center gap-2 bg-[rgba(255,255,255,0.13)] text-gray-300 hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)]`}
        >
          {" "}
          <img
            src="/icons/wallet.svg"
            alt="active"
            className="w-6 h-6"
          />
          Page betting
        </button>
      </div>
      
      

      {/* Block Information */}
          <div
            className="flex min-h-[80px] md:h-[100px] relative p-4 justify-center items-center gap-2 md:gap-4 w-full  rounded-xl relative overflow-hidden"
            style={{
              background: "url('https://api.builder.io/api/v1/image/assets/TEMP/35f26e9aa061258b5e5f2783c73faff4c656c9a3?width=740') lightgray 50% / cover no-repeat, #111923",
              backgroundBlendMode: "hard-light, normal"
            }}
          >
            <img src="/images/hashgame.jpg" className="absolute rounded-[14px] top-0 z-1 left-0 w-full h-full" />
            <div className="flex relative z-5 flex-col justify-center items-center gap-1  flex-1">
              <span className="text-xs md:text-sm font-bold text-casper">Current block</span>
              <div className="flex h-9 px-2 md:px-3 pr-3 md:pr-12 justify-center items-center gap-2 rounded-lg bg-black/[0.54]">
                <Copy className="w-4 h-4 text-casper" />
                <span className="text-xs md:text-sm font-bold text-casper">73852830</span>
              </div>
            </div>
            <div className="flex flex-col relative z-5 justify-center items-center gap-1 flex-1">
              <span className="text-xs md:text-sm font-bold text-casper">Next block</span>
              <div className="flex h-9 px-2 md:px-3 pr-3 md:pr-12 justify-center items-center gap-2 rounded-lg bg-black/[0.54]">
                <Copy className="w-4 h-4 text-dodger-blue" />
                <span className="text-xs md:text-sm font-bold text-dodger-blue">73872867</span>
              </div>
            </div>
          </div>

          {/* Betting Limit and Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 sm:gap-0">
            <div className="text-sm font-bold">
              <span className="text-white">Limit </span>
              <span className="text-dodger-blue">1-15000</span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <span className={`text-xs sm:text-sm font-bold ${isBeginnerMode ? 'text-gray-400' : 'text-white'}`}>Beginner</span>
              <div className="relative">
                <button
                  onClick={() => setIsBeginnerMode(!isBeginnerMode)}
                  className={cn(
                    "w-10 h-6 rounded-full transition-colors relative",
                    isBeginnerMode ? "bg-[#2283F6]" : "bg-[#3C485C]"
                  )}
                >
                  <div
                className={cn(
                  "absolute top-0.5 w-5 h-5 rounded-full transition-transform duration-200",
                  isBeginnerMode ? "translate-x-4 bg-white" : "translate-x-0.5 bg-casper border-2 border-casper"
                )}
              >
                {isBeginnerMode && (
                  <Check className="w-3 h-3 text-[#2283F6] absolute top-1 left-1" strokeWidth={3} />
                )}
              </div>
                </button>
              </div>
              <span className={`text-xs sm:text-sm font-bold ${!isBeginnerMode ? 'text-gray-400' : 'text-white'}`}>Intermediate</span>
            </div>
          </div>
        </div>
        

        {/* Main Betting Section */}
        <div className="flex p-4 md:p-8 items-start gap-4 w-full rounded-xl bg-white/[0.04]">
          {/* ODD Section */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              <div className="flex flex-col items-start">
                <div className="text-base font-bold">
                  <span className="text-casper">$</span>
                  <span className="text-white">10038</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4 text-casper" />
                  <span className="text-sm font-bold text-casper">12</span>
                </div>
              </div>
              {/* Progress Circle for ODD */}
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#ED1D49"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${57 * 1.13} ${(100 - 57) * 1.13}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-crimson">57%</span>
                </div>
              </div>
            </div>
            <button className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </button>
            <div className="text-2xl font-bold text-crimson">SMALL</div>
            <button className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-[188px]  bg-white/[0.04]"></div>

          {/* EVEN Section */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for EVEN */}
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#FFB636"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${43 * 1.13} ${(100 - 43) * 1.13}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-orange">43%</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-base font-bold text-right">
                  <span className="text-casper">$</span>
                  <span className="text-white">7592</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-casper">11</span>
                  <User className="w-4 h-4 text-casper" />
                </div>
              </div>
            </div>
            <button className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </button>
            <div className="text-2xl font-bold text-yellow-orange">BIG</div>
            <button className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </button>
          </div>
        </div>

        {/* Betting Controls */}
        <ResponsiveChipSelector />

        {/* Betting Grid */}
        <div className="flex py-4 md:py-8 px-2 flex-col justify-end items-center gap-4 w-full rounded-xl bg-white/[0.04]">
          {/* Betting History Tags - Above Table */}
          <div className="flex px-2 justify-between items-center w-full">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex h-6 items-center gap-2">
                <span className="text-xs font-bold text-white">#3</span>
              </div>
              <div className="flex h-6 items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-crimson flex items-center justify-center">
                  <span className="text-xs font-bold text-bunker">O</span>
                </div>
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <div className="flex h-6 items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-orange flex items-center justify-center">
                  <span className="text-xs font-bold text-bunker">E</span>
                </div>
                <span className="text-xs font-bold text-white">2</span>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex h-6 items-center gap-1">
                <div className="h-4 px-1 rounded-full bg-crimson flex items-center gap-1">
                  <span className="text-xs font-bold text-bunker">O</span>
                  <div className="w-2 h-2 rounded-full border border-yellow-orange"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-orange"></div>
                  <div className="w-2 h-2 bg-yellow-orange transform rotate-45"></div>
                </div>
              </div>
              <div className="flex h-6 items-center gap-1">
                <div className="h-4 px-1 rounded-full bg-yellow-orange flex items-center gap-1">
                  <span className="text-xs font-bold text-bunker">E</span>
                  <div className="w-2 h-2 rounded-full border border-crimson"></div>
                  <div className="w-2 h-2 rounded-full bg-crimson"></div>
                  <div className="w-2 h-2 bg-crimson transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <GameHistoryTable />
        </div>
        </div>
      
    
    
    
    {/* Menu Modal */}
    <MenuModal 
      isOpen={isMenuModalOpen} 
      onClose={handleCloseMenuModal} 
    />
    </>
  );
};

export default OddDefault;
