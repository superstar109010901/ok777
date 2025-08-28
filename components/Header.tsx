"use client";

import React, { useEffect, useRef, useState } from "react";
import { AUTH_CHANGED_EVENT, getIsLoggedIn } from "@/lib/auth";
import UserProfileDropdown from "./ui/notification/Profile";
import { Button, UnifiedButton } from "./ui";
import LanguageSelect from "./ui/LanguageSelect";
import { useModal } from "../context/ModalProvider";
import { useSidebar } from "../context/SidebarProvider";
import { useProfile } from "../context/ProfileProvider";
import { useLanguage } from "../context/LanguageProvider";
import Auth from "./auth/Auth";
import AuthButton from "./ui/AuthButton";
import AuthModal from "./modals/AuthModal";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import BlackButton from "./ui/Button/BlackButton";
import ArrowToRightStrokeIcon from "./ui/icons/arrow-to-right-stroke";
import { cn } from "@/lib/utils";
import SearchIcon from "./ui/icons/search";
import TDButton from "./ui/Button/TDButton";
import MessageDots2Icon from "./ui/icons/message-dots-2";
import NotificationIcon from "./ui/icons/notification";

// Game navigation tabs for mobile
const gameNavTabs = [
  { id: "home", label: "Home", icon: "/icons/Home.svg", active: true },
  { id: "hash", label: "Hash Games", icon: "/icons/Hash.svg", active: false },
  { id: "slots", label: "Slots", icon: "/icons/Slots.svg", active: false },
  { id: "casino", label: "Casino", icon: "/icons/Casino1.svg", active: false },
  { id: "sport", label: "Sport", icon: "/icons/Sport.svg", active: false },
];

// Reusable components to eliminate duplication
const MenuButton: React.FC<{ onClick: () => void; isCollapsed: boolean }> = ({ onClick, isCollapsed }) => (
  <div className="relative lg:block hidden">
    <BlackButton onClick={onClick}>
      <ArrowToRightStrokeIcon className={cn("w-4 h-4", isCollapsed ? "rotate-180" : "") } />
    </BlackButton>
  </div>
);


const Logo: React.FC = () => (
  <div  className="flex items-center">
    <Link href='/'>
      <img src="/images/logo.svg" alt="777 Gaming Logo" />
    </Link>
  </div>
);

const BonusesButton: React.FC = () => (
  <div className="relative sm:block hidden">
    <UnifiedButton
      variant="gradient"
      className="px-3 py-2"
      style={{
        border: "1px solid #6B7280",
      }}
    >
      <div className="flex items-center gap-2">
        <img src="/images/awards/Chest-box.svg" className="h-8" alt="bonuses" />
        <span className="text-white font-medium text-xs lg:block hidden">
          Bonuses
        </span>
      </div>
    </UnifiedButton>
    {/* Notification badge overlapping the button */}
    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded w-5 flex items-center justify-center">
      4
    </div>
  </div>
);

const SearchButton: React.FC = () => {
  const { openGameSearchModal } = useModal();

  
  return (
      <BlackButton className="sm:block hidden" onClick={openGameSearchModal}>
        <SearchIcon className="w-4 h-4" />
      </BlackButton>
  );
};





const NotificationBadge: React.FC = () => (
  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded w-5 flex items-center justify-center">
    4
  </div>
);

const LeftSection: React.FC<{ 
  toggleSidebar: () => void;
  isCollapsed: boolean;
  showMobileSearch: boolean;
  onMobileSearchClick: () => void;
  onMobileSearchClose: () => void;
}> = ({
  toggleSidebar,
  isCollapsed,
  showMobileSearch,
  onMobileSearchClick,
  onMobileSearchClose,
}) => (
  <div className="flex items-center gap-2">
    <MenuButton onClick={toggleSidebar} isCollapsed={isCollapsed} />
    <Logo />
    <BonusesButton />
    <SearchButton />
    
  </div>
);

const AuthSection: React.FC<{ toggleAuthModal: () => void; isLoggedIn: boolean }> = ({
  toggleAuthModal,
  isLoggedIn,
}) => (
  <div className="flex items-center gap-2">
    {
      isLoggedIn ? <>
        <WalletSection />
      </>:<>
        <div className="relative">
      <BlackButton className="w-[71px]" onClick={toggleAuthModal}>
        <span className="text-white  font-medium text-xs">Log in</span>
      </BlackButton>
    </div>
    <TDButton type="red" className="w-[85px] h-[33px] rounded-lg" onClick={toggleAuthModal}>
      <span className="text-[12px]">Register</span>
    </TDButton>
      </>
    }
    
  </div>
);

const UtilitySection: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [showLang, setShowLang] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const { openNotifications } = useModal();

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setShowLang(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  // Prevent scroll penetration when dropdown is open
  useEffect(() => {
    if (showLang) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [showLang]);

  const handleToggleLang = () => {
    setShowLang((s) => !s);
  };

  return (
    <div className="flex items-center gap-2" ref={wrapperRef}>
      <div className="relative lg:block hidden">
        <BlackButton  onClick={handleToggleLang}>
          <img src={`/icons/flag-icon/${currentLanguage.code}.svg`} className=" h-4" alt="flag" />
        </BlackButton>
        {showLang && (
          <div className="absolute right-0 top-full mt-2 z-[1000]">
            <LanguageSelect
              open
              triggerless
              onRequestClose={() => setShowLang(false)}
              onChange={(lang) => setCurrentLanguage({ code: lang.code, name: lang.name })}
            />
          </div>
        )}
      </div>
      {isLoggedIn && (<NotificationButton onClick={() => openNotifications()} />) }
      <BlackButton className="lg:block hidden">
        <MessageDots2Icon className="w-4 h-4" />
      </BlackButton>
      {isLoggedIn && (<ProfileButton />)}
    </div>
  );
};

const WalletSection: React.FC = () => (
  <div className="flex items-center gap-1 sm:gap-2 bg-gray-700 pl-2 rounded-lg">
    <div className="flex items-center gap-1 sm:gap-2">
      <img
        src="/icons/coin-icon/USDT.svg"
        alt="USDT"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      <p className="text-white text-[12px] sm:text-[14px] font-bold">0.15</p>
    </div>
    <Button variant="Wallet" className="!w-[33px] !h-[33px] sm:!w-[120px]  md:!w-[146px]">
      <div className="flex items-center gap-1 sm:gap-2">
        <img
          src="/icons/wallet.svg"
          alt="wallet"
          className="w-3 h-3 sm:w-4 sm:h-4"
        />
        <span className="hidden sm:inline text-[10px] sm:text-[12px]">Wallet</span>
      </div>
    </Button>
  </div>
);

const NotificationButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="relative">
    <BlackButton className="lg:block hidden" onClick={onClick}>
      <NotificationIcon className="w-4 h-4" />
    </BlackButton>
  </div>
);

const ProfileButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { isProfileOpen, setIsProfileOpen } = useProfile();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        // Only close on click outside for desktop (lg and above)
        if (window.innerWidth >= 1024) {
          setIsProfileOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [setIsProfileOpen]);

  const handleButtonClick = () => {
    setIsProfileOpen(!isProfileOpen);
    if (onClick) onClick();
  };

  return (
    <div className="relative" ref={containerRef}>
      <BlackButton onClick={handleButtonClick}>
        <img
          src="/images/frame.png"
          className="w-[35px] h-[30px]"
          alt="frame"
        />
      </BlackButton>
      <NotificationBadge />
      {isProfileOpen && (
        <div className="absolute right-0 -right-4 top-full mt-2 z-[1000] w-[98vw] lg:w-auto">
          <UserProfileDropdown onClose={() => setIsProfileOpen(false)} />
        </div>
      )}
    </div>
  );
};

// Mobile Game Navigation Component
interface MobileGameNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const MobileGameNav: React.FC<MobileGameNavProps> = ({ activeTab, onTabChange }) => {
	const swiperRef = useRef<SwiperType | null>(null);

	useEffect(() => {
		const index = gameNavTabs.findIndex((t) => t.id === activeTab);
		if (swiperRef.current && index >= 0) {
			swiperRef.current.slideTo(index, 300);
		}
	}, [activeTab]);

	return (
    <div className="lg:hidden px-2 py-1">
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={6}
        onSwiper={(inst) => { swiperRef.current = inst; }}
      >
        {gameNavTabs.map((tab, idx) => (
          <SwiperSlide key={tab.id} className="!w-auto">
            <UnifiedButton
              onClick={() => { onTabChange(tab.id); swiperRef.current?.slideTo(idx, 250); }}
              variant={activeTab === tab.id ? "primary" : "secondary"}
              className="px-2 py-1 whitespace-nowrap min-w-fit"
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className="w-5 h-5"
              />
              <span className="text-[12px] font-bold">{tab.label}</span>
            </UnifiedButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSidebar, toggleAuthModal, setActiveGameCategory, isCollapsed } = useSidebar();
  const [showModal, setShowModal] = useState(true);
  const [activeGameTab, setActiveGameTab] = useState("home");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateLoginState = () => setIsLoggedIn(getIsLoggedIn());
    updateLoginState();
    window.addEventListener(AUTH_CHANGED_EVENT, updateLoginState);
    return () => {
      window.removeEventListener(AUTH_CHANGED_EVENT, updateLoginState);
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveGameTab(tabId);
    setActiveGameCategory(tabId);
  };

  const handleMobileSearchClick = () => {
    setShowMobileSearch(true);
  };

  const handleMobileSearchClose = () => {
    setShowMobileSearch(false);
  };

  const LoginForm = () => {
    return <AuthModal />;
  };

  const toggleNotification = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
    const notificationPanel = document.getElementById("notification-panel");
    if (notificationPanel) {
      notificationPanel.style.display = isOpen ? "block" : "none";
    }
  };

  return (
    <>
      <header id="app-header" className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700 flex flex-col" style={{
        backdropFilter: "blur(32px)",
        background: "rgba(17, 25, 35, 0.54)",
      }}>
        {/* Main Header Row */}
        <div className="h-14 flex items-center justify-between gap-2 px-4 py-2.5">
          {/* Left side */}
          <LeftSection 
            toggleSidebar={toggleSidebar}
            isCollapsed={isCollapsed}
            showMobileSearch={showMobileSearch}
            onMobileSearchClick={handleMobileSearchClick}
            onMobileSearchClose={handleMobileSearchClose}
          />

          {/* Center - empty space */}
          <div className="flex-1"></div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <AuthSection toggleAuthModal={toggleAuthModal} isLoggedIn={isLoggedIn} />
            <UtilitySection isLoggedIn={isLoggedIn} />
          </div>
        </div>
        
        {/* Mobile Game Navigation */}
        <MobileGameNav activeTab={activeGameTab} onTabChange={handleTabChange} />
      </header>
    </>
  );
};

export default Header;
