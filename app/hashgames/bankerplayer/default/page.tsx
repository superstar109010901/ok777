"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

import { Wallet, ArrowUpDown, Grid3X3, Menu, User, Copy, ArrowLeft, Check, ZoomIn, ZoomOut } from 'lucide-react'
import { ResponsiveChipSelector } from "@/components/ui/chipSelector/ResponsiveChipSelector";
import MenuModal from "@/components/modals/MenuModal";
import { useModal } from "@/context/ModalProvider";
import Link from "next/link";
import GameHistoryTable from "@/components/ui/GameHistoryTable";

const BankerPlayerDefault: React.FC = () => {
  const { openChangeGameModal } = useModal();
  const [difficulty, setDifficulty] = useState<"Beginner" | "Intermediate">(
    "Beginner"
  );
  const [trendTab, setTrendTab] = useState<"Block Trend" | "My trend">(
    "Block Trend"
  );

  const [isBeginnerMode, setIsBeginnerMode] = useState(false)
  const [selectedChip, setSelectedChip] = useState<number | null>(1)
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const [zoomOneState, setZoomOneState] = useState(false);
  const [zoomTwoState, setZoomTwoState] = useState(false);
  
  const historydata = ['O', 'O', 'E', 'E', 'E', 'E']

  for (let i = 0; i < 120 - 6; i++) {
    historydata.push('');
  }

  const history_data = ['r','r','','','','','','','','','','','','y','','','',];
  for (let i = 0; i < 444 - 15; i++) {
    history_data.push('');
  }
  const handleMenuClick = () => {
    setIsMenuModalOpen(true);
  };

  const handleCloseMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  const toggleZoomOne = () => {
    setZoomOneState(!zoomOneState);
  }

  const toggleZoomTwo = () => {
    setZoomTwoState(!zoomTwoState);
  }

  return (
    <>
    
        <div className="flex flex-col items-center min-h-screen gap-4 md:gap-16 py-16 w-[70%] mx-auto">
        {/* Header with Segmented Control */}
        <div className="w-full flex flex-col items-center gap-4 p-0 ">
          <div className=" justify-between  w-full items-center mb-8 bg-[#222d3d] pr-4 rounded-lg flex  [@media(max-width:768px)]:hidden">
        <div className="flex bg-[#72707038] rounded-lg p-1 ">
          <Link
            href="/hashgames/bankerplayer/active"
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
              alt="default"
              className="w-6 h-6"
            />
            Page betting
          </button>
        </div>
        {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={openChangeGameModal}
                className="flex h-9 w-9 justify-center items-center rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white/8 transition-colors"
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
                className="flex h-9 w-9 justify-center items-center rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white/8 transition-colors"
              >
                <Menu className="w-4 h-4 text-casper" />
              </button>
            </div>
      </div>
      {/* Mobile view Header Section*/}
      <div className="bg-[#72707038] rounded-lg w-full  p-1 hidden [@media(max-width:768px)]:flex ">
        <Link
            href="/hashgames/bankerplayer/active"
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
          

          {/* bnaker Section */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for banker */}
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
                    strokeDasharray={`${100 * 1.13} ${(100 - 100) * 1.13}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-crimson">100%</span>
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
            <div className="text-[20px] font-bold text-crimson">BANKER</div>
            <button className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </button>
          </div>
          {/* Divider */}
          <div className="w-[1px] h-[188px]  bg-white/[0.04]"></div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for tie */}
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
                  {/* <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#1BB83D"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${0 * 1.13} ${(100 - 0) * 1.13}`}
                    strokeLinecap="round"
                  /> */}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1BB83D]">0%</span>
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
            <div className="text-[20px] font-bold text-[#1BB83D]">TIE</div>
            <button className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </button>
          </div>
          {/* Divider */}
          <div className="w-[1px] h-[188px]  bg-white/[0.04]"></div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for player */}
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
                  {/* <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#FFB636"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${43 * 1.13} ${(100 - 43) * 1.13}`}
                    strokeLinecap="round"
                  /> */}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-orange">0%</span>
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
            <div className="text-[20px] font-bold text-yellow-orange">PLAYER</div>
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
        <MenuModal 
          isOpen={isMenuModalOpen} 
          onClose={handleCloseMenuModal} 
        />
        </>
  )
      
    }
    


export default BankerPlayerDefault;
