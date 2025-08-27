"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSidebar } from "../context/SidebarProvider";
import { useLanguage } from "../context/LanguageProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSelector } from "./ui/Internationalization";

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar, openHashHover, scheduleCloseHashHover, setHashHoverTop } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  // Language data for display
  const languageData = {
    'cn': { name: '中文', flag: '/icons/flag-icon/cn.svg' },
    'en': { name: 'English', flag: '/icons/flag-icon/en.svg' },
    'de': { name: 'Deutsch', flag: '/icons/flag-icon/de.svg' },
    'pl': { name: 'Polish', flag: '/icons/flag-icon/pl.svg' },
    'pt': { name: 'Português', flag: '/icons/flag-icon/pt.svg' },
    'ua': { name: 'Ukraine', flag: '/icons/flag-icon/ua.svg' },
    'es': { name: 'Español', flag: '/icons/flag-icon/es.svg' },
    'pt-br': { name: 'Português (BR)', flag: '/icons/flag-icon/br.svg' },
    'fr': { name: 'Français', flag: '/icons/flag-icon/fr.svg' },
  };

  const currentLanguageDisplay = languageData[currentLanguage.code as keyof typeof languageData] || languageData.cn;

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const overlay = overlayRef.current;
    
    if (!sidebar || !overlay) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      currentX = e.touches[0].clientX;
      const diffX = startX - currentX;
      
      // Only allow swipe from left to right (closing gesture)
      if (diffX < 0) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const diffX = startX - currentX;
      const threshold = 100; // Minimum swipe distance to trigger close
      
      // If swiped right (from left to right) and distance is enough, close sidebar
      if (diffX < -threshold) {
        toggleSidebar();
      }
      
      isDragging = false;
    };

    overlay.addEventListener('touchstart', handleTouchStart, { passive: false });
    overlay.addEventListener('touchmove', handleTouchMove, { passive: false });
    overlay.addEventListener('touchend', handleTouchEnd, { passive: false });

    

    return () => {
      overlay.removeEventListener('touchstart', handleTouchStart);
      overlay.removeEventListener('touchmove', handleTouchMove);
      overlay.removeEventListener('touchend', handleTouchEnd);
    };
  }, [toggleSidebar]);

  return (
    <div>
      <aside
        ref={sidebarRef}
        className={`sidebar bg-[#111923]/54 backdrop-blur-[32px] lg:sticky fixed lg:block transition-all duration-300 z-40 overflow-y-auto overflow-x-visible h-[calc(100vh-159px)] lg:top-[56px] top-[100px] lg:h-[calc(100vh-3.5rem)] ${
          isCollapsed ? "close " : "open"
        }`}
        style={{
          borderRight: "1px solid #2d3748",
          backdropFilter: "blur(32px)",
          background: "rgba(17, 25, 35, 0.54)",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
        onWheel={(e) => {
          // Prevent scroll events from bubbling up to the parent
          e.stopPropagation();
        }}
        onTouchMove={(e) => {
          // Prevent touch scroll events from bubbling up to the parent
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col h-full">
          {/* Top Section - Casino/Sport buttons */}
          <div className={`p-4 ${isCollapsed ? "px-2" : ""}`}>
            <div className={`flex gap-2 ${isCollapsed ? "flex-col" : ""}`}>
              <button
                className={`${
                  isCollapsed ? "w-full mb-2" : "flex-1"
                } w-12 bg-gray-700 rounded-lg p-3 flex items-center gap-2 justify-center text-white font-medium transition-colors hover:bg-gray-500`}
                style={{ background: "#374151" }}
              >
                <img src={"/icons/spade.svg"} className="w-5 h-5" alt="spade" />
                {!isCollapsed && <span className="text-sm font-bold">Casino</span>}
              </button>
              <button
                className={`${
                  isCollapsed ? "w-full" : "flex-1"
                } w-12 bg-transparent rounded-lg p-3 flex items-center gap-2 justify-center text-gray-400 font-medium transition-colors hover:bg-gray-700 active:bg-gray-700`}
              >
                <img
                  src={"/icons/football.svg"}
                  className="w-5 h-5"
                  alt="football"
                />
                {!isCollapsed && <span className="text-sm font-bold">Sport</span>}
              </button>
            </div>
            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)] mt-5"></div>
          </div>

          {/* Navigation Section */}
          <div className={`p-4 ${isCollapsed ? "px-2" : ""} space-y-1 `}>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/search.svg"} className="w-5 h-5" alt="search" />
              {!isCollapsed && <span className="text-sm font-bold">Search</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/heart.svg"} className="w-5 h-5" alt="heart" />
              {!isCollapsed && <span className="text-sm font-bold">Favorites</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/history.svg"} className="w-5 h-5" alt="history" />
              {!isCollapsed && <span className="text-sm font-bold">Recent</span>}
            </div>
            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
          </div>

          {/* Game Categories */}
          <div className={`p-4 pt-0 ${isCollapsed ? "px-2" : ""} space-y-1 flex-1`}>
            <div className="pb-[16px] hidden lg:block md:block">
              <div
                className="relative"
                onMouseEnter={(e) => {
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  setHashHoverTop(rect.top);
                  openHashHover();
                }}
                onMouseLeave={scheduleCloseHashHover}
              >
                <div
                  className={`flex items-center justify-between p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      isCollapsed ? "justify-center" : ""
                    }`}
                  >
                    <img
                      src={"/icons/bitcoin.svg"}
                      className="w-5 h-5"
                      alt="bitcoin"
                    />
                    {!isCollapsed && <span className="text-sm font-bold">Hash Games</span>}
                  </div>
                  {!isCollapsed && (
                    <svg
                      className="w-3 h-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                {/* Floating panel is rendered globally in layout via HashHoverLayer */}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/dice.svg"} className="w-5 h-5" alt="dice" />
                {!isCollapsed && <span className="text-sm font-bold">Slots</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/casino.svg"} className="w-5 h-5" alt="casino" />
                {!isCollapsed && <span className="text-sm font-bold">Live Casino</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/Futures.svg"}
                  className="w-5 h-5"
                  alt="Futures"
                />
                {!isCollapsed && <span className="text-sm font-bold">Futures</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/Cryptogra.svg"}
                  className="w-5 h-5"
                  alt="Cryptogra"
                />
                {!isCollapsed && <span className="text-sm font-bold">Crypto Games</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/football.svg"}
                  className="w-5 h-5"
                  alt="football"
                />
                {!isCollapsed && <span className="text-sm font-bold">Sport</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/game.svg"} className="w-5 h-5" alt="game" />
                {!isCollapsed && <span className="text-sm font-bold">Table Games</span>}
              </div>
              <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
            </div>
            <div className="py-[16px]">
              {/* Membership & Plan */}
              <Link
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  isCollapsed ? "justify-center" : ""
                } ${pathname?.startsWith('/alliance') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-gray-700 active:bg-gray-700'}`}
                href="/alliance"
                aria-current={pathname?.startsWith('/alliance') ? 'page' : undefined}
              >
                <img
                  src={"/icons/thumbsup.svg"}
                  className="w-5 h-5"
                  alt="thumbsup"
                />
                {!isCollapsed && <span className="text-sm font-bold">Alliance Plan</span>}
              </Link>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/king1.svg"} className="w-5 h-5" alt="king1" />
                {!isCollapsed && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">VIP Club</span>
                    <span className="text-xs text-yellow-400 font-medium">
                      VIP
                    </span>
                  </div>
                )}
              </div>

              {/* Information & Support */}
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-white transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/game.svg"} className="w-5 h-5" alt="game" />
                {!isCollapsed && <span className="text-sm font-bold">Game Providers</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/gift.svg"} className="w-5 h-5" alt="gift" />
                {!isCollapsed && <span className="text-sm font-bold">Promotions</span>}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/info-circle.svg"}
                  className="w-5 h-5"
                  alt="info-circle"
                />
                {!isCollapsed && <span className="text-sm font-bold">Help center</span>}
              </div>
              <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
            </div>
            <div className="py-[16px]">
              {/* Tutorials */}
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/tutorial.svg"}
                  className="w-5 h-5"
                  alt="tutorial"
                />
                {!isCollapsed && (
                  <span className="text-sm font-bold">Beginner&apos;s Tutorial</span>
                )}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/cart.svg"} className="w-5 h-5" alt="cart" />
                {!isCollapsed && (
                  <span className="text-sm font-bold">Currency Purchase Tutorial</span>
                )}
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img src={"/icons/vpn.svg"} className="w-5 h-5" alt="vpn" />
                {!isCollapsed && (
                  <span className="text-sm font-bold">VPN recommendation</span>
                )}
              </div>
            </div>
            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
            <div className="py-[16px]">
              {/* Service */}
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/headset.svg"}
                  className="w-5 h-5"
                  alt="headset"
                />
                {!isCollapsed && <span className="text-sm font-bold">Online service</span>}
              </div>
              
              
            </div>
            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
            {isCollapsed && (
              <div className="py-[16px]">
                {/* Service */}
                <div
                  className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <img
                    src={"/icons/archive-arrow-down.svg"}
                    className="w-5 h-5"
                    alt="Download"
                  />
                </div>
                <div
                  className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <img
                    src={"/icons/wallet.svg"}
                    className="w-5 h-5"
                    alt="wallet"
                  />
                </div>
              </div>
            )}

            {/* Language Selection - Mobile */}
            <div className="lg:hidden py-[16px]">
              <div
                onClick={() => setIsLanguageModalOpen(true)}
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 active:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={currentLanguageDisplay.flag}
                  className="w-5 h-5"
                  alt="language"
                />
                {!isCollapsed && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">Language:</span>
                    <span className="text-sm text-white">{currentLanguageDisplay.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section - Payment Methods */}
          {!isCollapsed && (
            <div className="p-4 mt-auto">
              {/* Payment Methods */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <img src={"/icons/gpay.svg"} className="h-5" alt="gpay" />
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={"/icons/apay.svg"} className="h-5" alt="apay" />
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={"/icons/pay.svg"} className="h-5" alt="pay" />
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={"/icons/visa.svg"} className="h-5" alt="visa" />
                  </div>
                </div>
                <button className="w-full bg-gray-700 text-white text-sm py-2 px-3 rounded hover:bg-gray-500 transition-colors">
                  By Crypto
                </button>
              </div>

              <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
              {/* App Download */}
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">Ok777 App</span>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <img
                      src={"/icons/apple.svg"}
                      className="w-4 h-4"
                      alt="apple"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={"/icons/windows.svg"}
                      className="w-4 h-4"
                      alt="windows"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={"/icons/android.svg"}
                      className="w-4 h-4"
                      alt="android"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
      {!isCollapsed && (
        <div
          ref={overlayRef}
          className="lg:hidden fixed left-0 right-0 h-[calc(100vh-7.5rem)] bg-[#00000080]"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Language Selection Modal */}
      <LanguageSelector 
        open={isLanguageModalOpen} 
        onOpenChange={setIsLanguageModalOpen}
        onLanguageChange={(langCode) => setCurrentLanguage({ code: langCode, name: languageData[langCode as keyof typeof languageData]?.name || '中文' })}
        initialLanguage={currentLanguage.code}
      />
    </div>
  );
};

export default Sidebar;
