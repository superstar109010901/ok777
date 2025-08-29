    "use client";

import { useEffect } from "react";


import Link from "next/link";

import { useState } from "react";

import ChevronDownIcon from "@/components/ui/icons/chevron-down";
import FootballIcon from "@/components/ui/icons/football";
import GiftIcon from "@/components/ui/icons/gift";
import SpadeIcon from "@/components/ui/icons/spade";
import ChevronsDownIcon from "@/components/ui/icons/chevrons-down";
import CasinoPromotionCard from "@/components/ui/cards/PromotionCard";
import NormalButton from "@/components/ui/Button/NormalButton";

interface Tab {
    id: string;
    label: string;
    icon: React.ReactNode;
    count?: number;
  }

  const bannerCards = [
    {
      title: (
        <>
          <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
            REFER &
          </span>
          <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
            REWARDS
          </span>
        </>
      ),
      button: "CLAIM NOW",
      image: "/images/banner/Banner12.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
            COMPLETE TASKS &
          </span>
          <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
            GET DAILY REWARDS!
          </span>
        </>
      ),
      button: "JOIN NOW",
      image: "/images/banner/Banner10.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
            CHECK-IN
          </span>
          <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
            REWARDS!
          </span>
        </>
      ),
      button: "JOIN NOW",
      image: "/images/banner/Banner09.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
            REFER &
          </span>
          <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
            REWARDS
          </span>
        </>
      ),
      button: "CLAIM NOW",
      image: "/images/banner/Banner12.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
            COMPLETE TASKS &
          </span>
          <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
            GET DAILY REWARDS!
          </span>
        </>
      ),
      button: "JOIN NOW",
      image: "/images/banner/Banner10.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
            CHECK-IN
          </span>
          <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
            REWARDS!
          </span>
        </>
      ),
      button: "JOIN NOW",
      image: "/images/banner/Banner09.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
            REFER &
          </span>
          <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
            REWARDS
          </span>
        </>
      ),
      button: "CLAIM NOW",
      image: "/images/banner/Banner12.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
            COMPLETE TASKS &
          </span>
          <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
            GET DAILY REWARDS!
          </span>
        </>
      ),
      button: "JOIN NOW",
      image: "/images/banner/Banner10.jpg",
      link: "#",
    },
    {
      title: (
        <>
          <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
            CHECK-IN
          </span>
          <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
            REWARDS!
          </span>
        </>
      ),
      button: "JOIN NOW",
      image: "/images/banner/Banner09.jpg",
      link: "#",
    },
  ] as const;

const tabs: Tab[] = [
    {
      id: "all",
      label: "All",
      icon: <GiftIcon className="w-6 h-6" />,
      count: 4
    },
    {
      id: "casino", 
      label: "Casino",
      icon: (
        <SpadeIcon className="w-6 h-6" />
      )
    },
    {
      id: "sport",
      label: "Sport", 
      icon: <FootballIcon />
    }
  ];

const PromotionsPage = () => {
    const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
    
    return (    
        <div className="lg:w-[70%] flex flex-col gap-8 w-full mx-auto p-4 pt-[26px] md:pt-4 mb-16">
          <div className="grid grid-cols-3 items-center w-full md:w-[450px]  p-1 bg-white-4 rounded-xl">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
            <NormalButton 
                key={tab.id}
                className={isActive 
                    ? 'bg-ebony-clay text-gallery' 
                    : ''
                }
                onClick={() => handleTabClick(tab.id)}
            > 
                {tab.icon}
                {tab.label}
                {tab.count && (
              <div className="flex items-center justify-center h-5 px-1.5 bg-malachite  rounded-md shadow-[0_1px_0_0_var(--white-08)_inset]">
                <span className="text-white font-montserrat text-xs font-bold">
                  {tab.count}
                </span>
              </div>
            )}
            </NormalButton>
        );
      })}
    </div>

          {/* Game Providers Grid */}
          <div className="flex flex-wrap gap-3 ">
            {
                bannerCards.map((card, index) => <CasinoPromotionCard key={index} {...card} />)
            }
            
            
          </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2.5">
          {/* Show More Button */}
          <div className="flex justify-center">
            <div
              className="h-9 bg-ebony-clay w-[157px] gap-2 text-casper font-montserrat text-[14px] flex items-center justify-center font-bold rounded-[8px] hover:bg-ebony-clay/80 transition-colors"
            >
              Show 4 more
              <ChevronDownIcon className=" text-casper" />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-[158px] mx-auto">
            <div className="h-1.5 bg-oxford-blue rounded-lg overflow-hidden">
              <div className="h-full w-[73%] bg-dodger-blue rounded-lg"></div>
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="text-center">
            <span className="text-polo-blue font-montserrat text-[10px] font-normal">
              Show 18 of 22 games
            </span>
          </div>
        </div>
        </div>
    )
}

export default PromotionsPage;