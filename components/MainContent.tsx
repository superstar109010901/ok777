"use client";

import React, { useEffect, useRef, useState } from "react";
import mainContentData from "../main-content-data.json";
import { useSidebar } from "../context/SidebarProvider";
import { useModal } from "../context/ModalProvider";
import { Swiper as SwiperType } from "swiper";
import CasinoCard from "./ui/cards/CasinoCard";
import RewardCard from "./ui/cards/RewardCard";
import HashCard from "./ui/cards/HashCard";
import FutureCard from "./ui/cards/FutureCard";
import GameCard from "./ui/cards/GameCard";
import { Button } from "./ui";
import { Icon } from "@iconify/react";
import Auth from "./auth/Auth";
import { SuccessForm } from "./auth/SuccessForm";
import Profile from "./ui/notification/Profile";
import SwiperSlider from "./ui/slider/SwiperSlider";
import { Autoplay } from "swiper/modules";
import { X } from "lucide-react";


import {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
  StatusDropdownSeparator,
} from "@/components/ui/StatusDropdown";
import EarningCard from "./ui/cards/EarningCard";

const statusOptions = [
  "Up to date",
  "Daily", 
  "Checking for updates...",
  "Installing updates",
  "Update failed",
  "Connected",
  "Disconnected",
  "Syncing...",
  "Sync complete"
];


// Extract data from JSON
const {
  card1,
  card2,
  card3,
  cryptoCards,
  card4,
  card5,
  card6,
  card7,
  card9,
  card10,
  brand,
  latestBets,
  gameManufacturers,
  footerContent,
} = mainContentData;

const bannerCards = [
  {
    
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    
    button: "JOIN NOW",
    image: "/images/banner/Banner09.jpg",
    link: "#",
  },
  {
    
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    
    button: "JOIN NOW",
    image: "/images/banner/Banner09.jpg",
    link: "#",
  },
  {
    
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    
    button: "JOIN NOW",
    image: "/images/banner/Banner09.jpg",
    link: "#",
  },
] as const;




// Game Grid Component
const GameGrid: React.FC<{ data: any[]; renderCard: (item: any, index: number) => React.ReactNode }> = ({ data, renderCard }) => (
  <div className="grid grid-cols-3 md:grid-cols-4 p-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
    {data.map((item, index) => renderCard(item, index))}
  </div>
);

// Latest bets table component
const LatestBetsTable: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Up to date");
  return (
  <>
    <div className="text-4.5 font-bold flex items-center w-full justify-between text-white mb-4  gap-2">
      <span>
        Latest Bets
      </span>
       <StatusDropdown >
              <StatusDropdownTrigger className="bg-[#2A3546]">
                {selectedStatus}
              </StatusDropdownTrigger>
              <StatusDropdownContent className="bg-[#2A3546] border-none" align="center">
                {statusOptions.map((status) => (
                  <StatusDropdownItem 
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </StatusDropdownItem>
                ))}
              </StatusDropdownContent>
      </StatusDropdown>
    </div>
    <div className={` grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] gap-[6px] lg:px-8 px-[6px] ${selectedStatus !== "Daily" ? "grid-cols-[20%_20%_20%_40%]" : "grid-cols-[30%_30%_40%]"} `}>
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Game
      </div>
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Player
      </div>
      <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 text-white">
        Time
      </div>
      <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 truncate text-white">
        Bet Amount
      </div>
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Multiplier
      </div>
      {
        selectedStatus !== "Daily" && (
          <div className="text-left text-[12px] font-bold py-2 text-white">
        Payout
      </div>
        )
      }
      
    </div>
    <div className="w-full relative h-[462px] z-[-1] lg:mb-16 mb-8">
      <SwiperSlider
        data={latestBets}
        allowTouchMove={false}
        renderSlide={(bet, index) => (
          <div className={`bg-[#1C2532] lg:px-8 gap-[6px] px-[6px] w-full grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] rounded-[16px] h-[48px] overflow-hidden mb-[6px] ${selectedStatus !== "Daily" ? "grid-cols-[20%_20%_20%_40%]" : "grid-cols-[30%_30%_40%]"} items-center`} key={index}>
            <div className="text-white flex text-[12px] font-bold truncate items-center gap-2">
              <img src="/images/gameLogo.png" alt="game" className="w-6 h-6" />
              {bet.game}
            </div>
            <div className="text-gray-300 text-[12px] font-bold truncate flex items-center gap-2">
              <img
                src="/images/avatar(1).png"
                alt="avatar"
                className="w-6 h-6 hidden md:lg:block"
              />
              {bet.player}
            </div>
            <div className="text-gray-300 text-[12px] hidden md:lg:flex items-center font-bold truncate">
              {bet.time}
            </div>
            <div className="text-gray-300 text-[12px] hidden md:lg:flex font-bold truncate items-center gap-2">
              <img
                src="/icons/coin-icon/BTC.svg"
                alt="coin"
                className="w-6 h-6"
              />
              {bet.bet}
            </div>
            {selectedStatus !== "Daily" && (
            <div className="text-[#2283F6] text-[12px] font-bold truncate flex items-center">
              {bet.multiplier}
            </div>

            )}
            <div className="text-green-400 text-[12px] font-bold truncate flex items-center gap-2">
              {bet.payout}
              <div className="rounded-[8px] overflow-hidden !w-6 !h-6">
                <img
                  src="/icons/coin-icon/BTC.svg"
                  alt="coin"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
        direction="vertical"
        slidesPerView={9.1}
        spaceBetween={6}
        autoplayDelay={1000}
        className="h-full"
      />
      <div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-[30] from-transparent to-[#111923] pointer-events-none"></div>
    </div>
  </>
)}

// Game manufacturers section component
const GameManufacturersSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="lg:mb-16 mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          Game Manufacturers
        </h2>
        <div className="flex justify-end mb-4">
          <div
            className=" hover:bg-gray-600 active:bg-gray-600 w-9 h-9 flex items-center justify-center rounded-l-lg transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon
              icon="mdi:chevron-left"
              className="text-white text-[24px] "
            />
          </div>
          <div
            className="hover:bg-gray-600 active:bg-gray-600 w-9 h-9 flex items-center justify-center rounded-r-lg transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon
              icon="mdi:chevron-right"
              className="text-white text-[24px] "
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <SwiperSlider
          data={gameManufacturers}
          renderSlide={(manufacturer, index) => (
            <GameCard {...manufacturer} gameCount={manufacturer.gamesCount} />
          )}
          slidesPerView={4.4}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            375: { slidesPerView: 1.4 },
            425: { slidesPerView: 1.8 },
            768: { slidesPerView: 3.6 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1440: { slidesPerView: 4.8 },
          }}
          navigationRef={swiperRef}
        />
      </div>
    </div>
  );
};

// MAGIC88 content component
const Magic88Content: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <div className="bg-transparent rounded-lg relative p-6 pt-0 text-left mb-6">
    <div className="background-linear-to-b from-[#0D131C00] to-[#0D131C]">
      <h3 className="text-2xl font-bold text-white mb-4">
        Best crypto casino - Welcome to MAGIC88
      </h3>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Discover the ultimate destination for crypto gaming, where every
        transaction is transparent, and every game is provably fair. MAGIC88
        Casino combines cutting-edge technology with a wide array of gaming
        options to provide a secure and engaging environment for all players.
      </p>
      <h4 className="text-lg font-bold text-gray-400 mb-3">
        Web3 Transaction Hash Games
      </h4>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Experience the thrill of transaction hash games, where every result
        guarantees fairness and transparency. No account is required, simply
        send a transaction to the betting address and your winnings are sent
        back to your wallet. The outcome of every bet can be verified directly
        on the blockchain.
      </p>
    </div>
    {!isExpanded && (<div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-30 from-[#11192300] to-[#111923] pointer-events-none" />)}


    {/* Expanded Content */}
    <div
      className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
    >
      <div className="space-y-4 mb-4">
        <h5 className="text-md font-semibold text-gray-300">
          Advanced Features
        </h5>
        <p className="text-gray-400 leading-relaxed">
          Our platform offers advanced features including real-time odds
          calculation, instant payouts, and comprehensive game history. All
          transactions are recorded on the blockchain for complete transparency
          and auditability.
        </p>
        <h5 className="text-md font-semibold text-gray-300">
          Security & Fairness
        </h5>
        <p className="text-gray-400 leading-relaxed">
          Every game result is generated using cryptographically secure random
          number generation. The house edge is clearly displayed, and all
          winning conditions are publicly verifiable on the blockchain.
        </p>
        <h5 className="text-md font-semibold text-gray-300">
          Supported Cryptocurrencies
        </h5>
        <p className="text-gray-400 leading-relaxed">
          We support major cryptocurrencies including Bitcoin (BTC), Ethereum
          (ETH), USDT, and many others. All deposits and withdrawals are
          processed automatically with minimal fees and maximum security.
        </p>
      </div>
    </div>
  </div>
);

interface MainContentProps { }
const MainContent: React.FC<MainContentProps> = () => {
  const { isCollapsed, activeGameCategory } = useSidebar();
  const { openGameProviderModal, openChooseModal, openLocalGameSearchModal } = useModal();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(true);

  const toggleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  // Helper function to get category display labels
  const getCategoryLabel = (category: string) => {
    const categoryLabels: { [key: string]: string } = {
      'home': 'All Games',
      'hash': 'Hash Games',
      'slots': 'Slots',
      'casino': 'Live Casino',
      'sport': 'Sports',
      'futures': 'Futures',
      'crypto': 'Crypto Games',
      'table': 'Table Games'
    };
    return categoryLabels[category] || 'Games';
  };

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  }



  // Filtered Page Header Component
  const FilteredPageHeader: React.FC<{ title: string; count: number, icon: string }> = ({ title, count, icon }) => (
    <div className="p-4 pb-0 pt-0">
      <div className="flex items-center justify-between mb-4   [@media(max-width:1024px)]:mt-[-4px] ">
        <div className="bg-[rgba(255,255,255,0.08)] rounded-lg p-[7px]">

          <h1 className="text-white text-[14px] font-bold flex items-center gap-2">
            <img src={icon} className="w-6 hidden lg:block h-6" alt="game" />
            {title} <span className="text-[#2283F6] text-[12px] bg-[#111923] px-2 py-0.5 rounded-[4px] ">{count}</span>
          </h1>
          
        </div>
        <button onClick={toggleOpenSearch} className="p-[10px] bg-[#111923] lg:hidden  lg:bg-[rgba(255,255,255,0.04)] flex gap-1 items-center lg:w-50 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            {
              !isOpenSearch ? <X className="w-[18px] h-[18px] text-white" /> : <img src="/icons/search.svg" alt="search" className="w-[18px] h-[18px]" />
            }
            <span className="text-[#A7B5CA] hidden lg:block text-sm">Search</span>
          </button>
        <div className="flex gap-4 [@media(max-width:1024px)]:hidden">
          <button onClick={openGameProviderModal} className="hidden lg:flex w-50 items-center justify-between h-12 px-3  bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            <span className="text-[#A7B5CA] text-sm">Game provider</span>
            <svg
              className="w-4 h-4 text-[#A7B5CA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>




          <button onClick={openChooseModal} className=" hidden lg:flex w-50 items-center justify-between h-12  px-3  bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            <span className="text-[#A7B5CA] text-sm">All</span>
            <svg
              className="w-4 h-4 text-[#A7B5CA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button onClick={toggleOpenSearch} className="p-[10px] bg-[#111923]  lg:bg-[rgba(255,255,255,0.04)] flex gap-1 items-center lg:w-50 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            <img src="/icons/search.svg" alt="search" className="w-[18px] h-[18px]" />
            <span className="text-[#A7B5CA] hidden lg:block text-sm">Search</span>
          </button>
        </div>
      </div>

      <div className="flex xl:hidden items-center gap-3">
        {
          isOpenSearch ? <>

            <button onClick={openGameProviderModal} className="flex w-[50%] items-center justify-between h-10 px-3  bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              <span className="text-[#A7B5CA] text-sm">Game provider</span>
              <svg
                className="w-4 h-4 text-[#A7B5CA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button onClick={openChooseModal} className="flex w-[50%] items-center justify-between h-10  px-3  bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              <span className="text-[#A7B5CA] text-sm">All</span>
              <svg
                className="w-4 h-4 text-[#A7B5CA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </> : <>
            <div className="flex w-full items-center gap-2 h-10 px-3 bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              <img src="/icons/search.svg" alt="search" className="w-[18px] h-[18px] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-[#A7B5CA] text-sm placeholder:text-[#A7B5CA] border-none outline-none min-w-0"
              />
            </div>
          </>
        }
      </div>
    </div>
  );

  // Function to determine which sections to show based on active category
  const shouldShowSection = (sectionType: string) => {
    if (activeGameCategory === "home") return true;

    const categoryMapping: { [key: string]: string[] } = {
      "slots": ["slots", "new-launches"],
      "casino": ["live-casino", "new-launches"],
      "hash": ["hash"],
      "sport": ["sport"]
    };

    return categoryMapping[activeGameCategory]?.includes(sectionType) || false;
  };

  // Scroll to top when switching category (mobile UX)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeGameCategory]);

  // Function to check if we should show the filtered page layout
  const isFilteredView = () => {
    return activeGameCategory !== "home";
  };

  // Get category data for filtered view
  const getCategoryData = () => {
    const categoryData: { [key: string]: { title: string; count: number; data: any[]; icon: string } } = {
      "slots": { title: "Slots", count: 14, data: card3, icon: "/icons/Slots.svg" },
      "casino": { title: "Live Casino", count: 104, data: card2, icon: "/icons/Casino1.svg" },
      "hash": { title: "Hash Games", count: 12, data: card10, icon: "/icons/Hash.svg" },
      "sport": { title: "Sport", count: 23, data: card5, icon: "/icons/Sport.svg" }
    };

    return categoryData[activeGameCategory] || categoryData["slots"];
  };


  // Section header component
  const SectionHeader: React.FC<{ icon: string; title: string; alt: string }> = ({
    icon,
    title,
    alt,
  }) => {
    if (!isFilteredView()) {
      return (<div className="flex items-center justify-between mb-4">
        <h2 className="text-4.5 font-bold flex items-center text-white   gap-2">
          <img className="grayscale" src={icon} alt={alt} />
          {title}
        </h2>
        <span className="font-bold flex items-center text-[14px] text-[#2283F6]">all 13</span>
      </div>)
    }


  };

  const toggleContent = () => setIsExpanded(!isExpanded);

  

  // Render filtered view (mobile only)
  if (isFilteredView()) {
    const categoryData = getCategoryData();

    return (
      <div
        className={`lg:px-6 px-1 py-6 pt-4  w-full max-w-[1920px] mx-auto overflow-x-hidden margin auto ${isCollapsed
          ? "lg:w-[calc(100vw-80px)] xl:w-[calc(100vw-80px)]"
          : "xl:w-[calc(100vw-315px)] lg:w-[calc(100vw-315px)] 2xl:w-[calc(100vw-315px)]"
          }`}
        style={{ margin: "auto" }}
      >
        <SuccessForm isOpen={isOpen} />

        <div className="mb-8 lg:mt-0 mt-[45px]">
          <SwiperSlider
            key="banner-swiper"
            data={bannerCards}
            renderSlide={(card, index) => <RewardCard {...card} />}
            slidesPerView="auto"
            autoplay={false}
            spaceBetween={12}
            slideClassName="lg:!w-[486.76px] !w-[353px]"
            showProgressBars={true}
            customPagination={true}
          />
        </div>

        {/* Mobile Filtered View */}
        <div className="">
          <FilteredPageHeader title={categoryData.title} icon={categoryData.icon} count={categoryData.count} />

          

          
            <GameGrid
              data={categoryData.data}
              renderCard={(card, index) => <CasinoCard key={index} {...card} />}
            />
        </div>

        {/* Desktop Slider View - Keep Original Functionality */}
        <div className="hidden lg:block">
          {/* Show appropriate section based on category */}
          {activeGameCategory === "slots" && (
            <div className="lg:mb-16 mb-8">
              <SectionHeader icon="/icons/Slots.svg" title="Slots" alt="slots" />
              <SwiperSlider
                data={card3}
                autoplayDelay={1000000}
                grid={{ rows: 2, fill: "row" }}
                renderSlide={(card, index) => <CasinoCard {...card} />}
                slidesPerView={7}
                spaceBetween={12}
                slideClassName="mb-1"
                
                breakpoints={{
                  320: { slidesPerView: 3.3, grid: { rows: 2, fill: "row" } },
                  375: { slidesPerView: 3.5, grid: { rows: 2, fill: "row" } },
                  425: { slidesPerView: 4.1, grid: { rows: 2, fill: "row" } },
                  768: { slidesPerView: 4.3, grid: { rows: 2, fill: "row" } },
                  1024: { slidesPerView: 5, spaceBetween: 12, grid: { rows: 2, fill: "row" } },
                  1440: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
                }}
              />
            </div>
          )}

          {activeGameCategory === "casino" && (
            <div className="lg:mb-16 mb-8">
              <SectionHeader icon="/icons/Casino1.svg" title="Live Casino" alt="home" />
              <SwiperSlider
                data={card2}
                autoplayDelay={1000000}
                grid={{ rows: 2, fill: "row" }}
                renderSlide={(card, index) => <CasinoCard {...card} />}
                slidesPerView={7}
                spaceBetween={12}
                slideClassName="mb-1"
                breakpoints={{
                  320: { slidesPerView: 3.3, grid: { rows: 2, fill: "row" } },
                  375: { slidesPerView: 3.5, grid: { rows: 2, fill: "row" } },
                  425: { slidesPerView: 4.1, grid: { rows: 2, fill: "row" } },
                  768: { slidesPerView: 4.3, grid: { rows: 2, fill: "row" } },
                  1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
                  1440: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
                }}
              />
            </div>
          )}

          {activeGameCategory === "hash" && (
            <div className="lg:mb-16 mb-8">
              <SectionHeader icon="/icons/Hash.svg" title="Hash" alt="hash" />
              <SwiperSlider
                data={card9}
                autoplay={false}
                renderSlide={(card, index) => <HashCard {...card} />}
                spaceBetween={12}
                slidesPerView="auto"
                slideClassName="!w-[320px]"
              />
            </div>
          )}

          {activeGameCategory === "sport" && (
            <div className="lg:mb-16 mb-8">
              <SectionHeader icon="/icons/Sport.svg" title="Sport" alt="Sport" />
              <SwiperSlider
                data={card5}
                autoplayDelay={1000000}
                renderSlide={(card, index) => <CasinoCard {...card} />}
                slidesPerView={7}
                spaceBetween={12}
                breakpoints={{
                  320: { slidesPerView: 3.3 },
                  375: { slidesPerView: 3.5 },
                  425: { slidesPerView: 4.1 },
                  768: { slidesPerView: 4.3 },
                  1024: { slidesPerView: 5, spaceBetween: 20 },
                  1440: { slidesPerView: 7.3 },
                }}
              />
            </div>
          )}
        </div>

      </div>
    );
  }

  // Render home view
  return (
    <div
      className={`lg:px-6 px-1 lg:py-6 py-15 pt-4 w-full max-w-[1920px]  mx-auto overflow-x-hidden margin auto ${isCollapsed
        ? "lg:w-[calc(100vw-80px)] xl:w-[calc(100vw-80px)]"
        : "xl:w-[calc(100vw-315px)] lg:w-[calc(100vw-315px)] 2xl:w-[calc(100vw-315px)]"
        }`}
      style={{ margin: "auto" }}
    >
      <SuccessForm isOpen={isOpen} />

      {/* Main Banner Section */}
      <div className="lg:mb-16 mb-8 lg:mt-0 mt-[45px]">
        <SwiperSlider
          key={`banner-swiper-${activeGameCategory}`}
          data={bannerCards}
          renderSlide={(card, index) => <RewardCard {...card} />}
          slidesPerView="auto"
          spaceBetween={12}
          slideClassName="lg:!w-[486.76px] !w-[353px]"
          showProgressBars={true}
          customPagination={true}
        />
      </div>

      

      {/* New Launches Section */}
      {shouldShowSection("new-launches") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader icon="/icons/Home.svg" title="New Launches" alt="home" />
          <SwiperSlider
            key="new-launches-swiper"
            autoplayDelay={1000000}
            data={card1}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={12}
            breakpoints={{
              320: { slidesPerView: 3.3 },
              375: { slidesPerView: 3.5 },
              425: { slidesPerView: 4.1 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5 },
              1440: { slidesPerView: 7.3 },
            }}
            showProgressBars={true}
          />
        </div>
      )}

      {/* Live Casino Section */}
      {shouldShowSection("live-casino") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Casino1.svg"
            title="Live Casino"
            alt="home"
          />
          <SwiperSlider
            key={`live-casino-swiper-${activeGameCategory}`}
            data={card2}
            autoplayDelay={1000000}
            grid={{ rows: 2, fill: "row" }}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={12}
            slideClassName="mb-1"
            breakpoints={{
              320: { slidesPerView: 3.3, grid: { rows: 2, fill: "row" } },
              375: { slidesPerView: 3.5, grid: { rows: 2, fill: "row" } },
              425: { slidesPerView: 4.1, grid: { rows: 2, fill: "row" } },
              768: { slidesPerView: 4.3, grid: { rows: 2, fill: "row" } },
              1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
              1440: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
            }}
          />
        </div>
      )}

      {/* Hash Section */}
      {shouldShowSection("hash") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader icon="/icons/Hash.svg" title="Hash" alt="hash" />
          <SwiperSlider
            key={`hash-swiper-${activeGameCategory}`}
            data={card9}
            autoplay={false}
            renderSlide={(card, index) => <HashCard {...card} />}
            spaceBetween={12}
            slidesPerView="auto"
            slideClassName="!w-[320px]"
          />
        </div>
      )}

      {/* Slots Section */}
      {shouldShowSection("slots") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader icon="/icons/Slots.svg" title="Slots" alt="slots" />
          <SwiperSlider
            key={`slots-swiper-${activeGameCategory}`}
            data={card3}
            autoplayDelay={1000000}
            grid={{ rows: 2, fill: "row" }}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slideClassName="mb-1"
            slidesPerView={7}
            spaceBetween={12}
            breakpoints={{
              320: { slidesPerView: 3.3, grid: { rows: 2, fill: "row" } },
              375: { slidesPerView: 3.5, grid: { rows: 2, fill: "row" } },
              425: { slidesPerView: 4.1, grid: { rows: 2, fill: "row" } },
              768: { slidesPerView: 4.3, grid: { rows: 2, fill: "row" } },
              1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
              1440: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
            }}
          />
        </div>
      )}

      {/* P/F Futures Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Futures1.svg"
          title="P/F Futures"
          alt="future"
        />
        <SwiperSlider
          key={`futures-swiper-${activeGameCategory}`}
          data={cryptoCards}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <FutureCard {...card} />}
          slidesPerView={5}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 2.5 },
            375: { slidesPerView: 2.3 },
            425: { slidesPerView: 3.2 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 5 },
          }}
        />
      </div>

      {/* Cryptogra Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Cryptogra1.svg"
          title="Cryptogra"
          alt="cryptogra"
        />
        <SwiperSlider
          key={`cryptogra-swiper-${activeGameCategory}`}
          data={card4}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <CasinoCard {...card} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
        />
      </div>

      {/* Sport Section */}
      {shouldShowSection("sport") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader icon="/icons/Sport.svg" title="Sport" alt="Sport" />
          <SwiperSlider
            key={`sport-swiper-${activeGameCategory}`}
            data={card5}
            autoplayDelay={1000000}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={12}
            breakpoints={{
              320: { slidesPerView: 3.3 },
              375: { slidesPerView: 3.5 },
              425: { slidesPerView: 4.1 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 7.3 },
            }}
          />
        </div>
      )}

      {/* Chess and cards Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/tablegame.svg"
          title="Chess and cards"
          alt="tablegame"
        />
        <SwiperSlider
          data={card6}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <CasinoCard {...card} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
        />
      </div>

      {/* Latest Bets Section */}
      <LatestBetsTable />

      {/* Game Manufacturers Section */}
      <GameManufacturersSection />

      {/* Latest earnings Section */}
      <div className="lg:mb-16 mb-8">
        <div className="flex items-center justify-between mb-4">
        <h2 className="text-4.5 font-bold flex items-center text-white ">
          Latest earnings
        </h2>
        <span className="font-bold flex items-center text-[14px] text-[#2283F6]">online users 36</span>
      </div>
        <SwiperSlider
          data={card7}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <EarningCard {...card} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
        />
      </div>

      {/* MAGIC88 Style Content */}
      <Magic88Content isExpanded={isExpanded} />

      <div className="text-center">
        <button
          onClick={toggleContent}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-auto"
          style={{ color: "#A7B5CA", fontWeight: "700" }}
        >
          {isExpanded ? "Show Less" : "Show More"}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
