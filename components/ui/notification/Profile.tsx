"use client"

import { useState } from "react";
import { UnifiedButton } from "@/components/ui";
import { setAuthUser } from "@/lib/auth";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

interface UserProfileDropdownProps {
  onClose?: () => void;
}

const UserProfileDropdown = ({ onClose }: UserProfileDropdownProps) => {
  const [bonusCode, setBonusCode] = useState("");
  const { currentLanguage } = useLanguage();

  // SVG Icons from Figma design
  const EditIcon = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33252 3H8.1665V3.33301H2.83252V13.667H13.1665V8.33301H13.4995V13.167C13.4993 13.6239 13.1234 13.9998 12.6665 14H3.33252C2.87558 13.9998 2.49969 13.6239 2.49951 13.167V3.83301C2.49969 3.37607 2.87558 3.00018 3.33252 3Z" fill="white" stroke="#A7B5CA"/>
      <path d="M4.66602 9.83335V11.1667C4.66602 11.5333 4.96602 11.8333 5.33268 11.8333H6.66602C6.84602 11.8333 7.01268 11.76 7.13935 11.64L12.2393 6.54001L9.96602 4.26668L4.86602 9.36668C4.80423 9.42897 4.75534 9.50285 4.72217 9.58408C4.68899 9.6653 4.67218 9.75228 4.67268 9.84001L4.66602 9.83335ZM13.806 4.97335C13.8678 4.91167 13.9168 4.83841 13.9503 4.75776C13.9838 4.67711 14.001 4.59066 14.001 4.50335C14.001 4.41603 13.9838 4.32958 13.9503 4.24893C13.9168 4.16828 13.8678 4.09502 13.806 4.03335L12.4727 2.70001C12.411 2.63821 12.3377 2.58918 12.2571 2.55572C12.1764 2.52227 12.09 2.50505 12.0027 2.50505C11.9154 2.50505 11.8289 2.52227 11.7483 2.55572C11.6676 2.58918 11.5944 2.63821 11.5327 2.70001L10.4327 3.80001L12.706 6.07335L13.806 4.97335Z" fill="#A7B5CA"/>
    </svg>
  );

  const PriceTagIcon = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.14 2.69334C9.07771 2.63156 9.00383 2.58267 8.9226 2.5495C8.84138 2.51632 8.7544 2.4995 8.66667 2.50001H2.66667C2.3 2.50001 2 2.80001 2 3.16668V9.16668C2 9.34668 2.07333 9.51335 2.19333 9.64001L7.52667 14.9733C7.66 15.1067 7.82667 15.1667 8 15.1667C8.17333 15.1667 8.34 15.1 8.47333 14.9733L14.4733 8.97334C14.5351 8.91167 14.5842 8.83841 14.6176 8.75776C14.6511 8.67711 14.6683 8.59066 14.6683 8.50335C14.6683 8.41603 14.6511 8.32958 14.6176 8.24893C14.5842 8.16828 14.5351 8.09502 14.4733 8.03335L9.14 2.69334ZM6 7.83334C5.26 7.83334 4.66667 7.23334 4.66667 6.50001C4.66667 5.76668 5.26667 5.16668 6 5.16668C6.73333 5.16668 7.33333 5.76668 7.33333 6.50001C7.33333 7.23334 6.73333 7.83334 6 7.83334Z" fill="#A7B5CA"/>
    </svg>
  );

  const WalletIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 10H22V14H14V10Z" fill="#55657E"/>
      <path d="M14 16C12.9 16 12 15.1 12 14V10C12 8.9 12.9 8 14 8H22V5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V16H14Z" fill="#55657E"/>
    </svg>
  );

  const NotificationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6C15 6.79565 15.3161 7.55871 15.8787 8.12132C16.4413 8.68393 17.2044 9 18 9C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z" fill="#55657E"/>
      <path d="M5 4C3.9 4 3 4.9 3 6V19C3 20.1 3.9 21 5 21H18C19.1 21 20 20.1 20 19V10.01C19.39 10.31 18.72 10.5 18 10.5C15.52 10.5 13.5 8.48 13.5 6C13.5 5.28 13.69 4.61 13.99 4H5Z" fill="#55657E"/>
    </svg>
  );

  const MedalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.58 19C8.01 19 7.47 18.83 7 18.54V21C7 21.35 7.18 21.67 7.47 21.85C7.76 22.03 8.13 22.05 8.44 21.89L11.99 20.11L15.54 21.89C15.68 21.96 15.83 22 15.99 22C16.17 22 16.36 21.95 16.52 21.85C16.81 21.67 16.99 21.35 16.99 21V18.54C16.52 18.83 15.98 19 15.41 19H8.57H8.58Z" fill="#55657E"/>
      <path d="M6.83996 16.99C7.18996 17.61 7.85996 18 8.57996 18H15.42C16.13 18 16.8 17.61 17.16 16.99L20.59 10.99C20.94 10.38 20.94 9.61997 20.59 9.00997L17.16 3.00997C16.8 2.38997 16.14 1.99997 15.42 1.99997H8.57996C7.85996 1.99997 7.19996 2.38997 6.83996 3.00997L3.40996 9.00997C3.05996 9.61997 3.05996 10.38 3.40996 10.99L6.83996 16.99ZM10.91 8.62997L11.99 6.43997L13.07 8.62997L15.49 8.97997L13.74 10.69L14.15 13.1L11.99 11.96L9.82996 13.1L10.24 10.69L8.48996 8.97997L10.91 8.62997Z" fill="#55657E"/>
    </svg>
  );

  const ChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7.09999C14.96 7.49999 16.5 9.03999 16.9 11H21.95C21.48 6.27999 17.72 2.51999 13 2.04999V7.09999Z" fill="#55657E"/>
      <path d="M16.9 13C16.44 15.28 14.42 17 12 17C9.24 17 7 14.76 7 12C7 9.57999 8.72 7.55999 11 7.09999V2.04999C5.95 2.54999 2 6.80999 2 12C2 17.52 6.48 22 12 22C17.19 22 21.45 18.05 21.95 13H16.9Z" fill="#55657E"/>
    </svg>
  );

  const SlidersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 11C7.86 11 9.41 9.72 9.86 8H22V6H9.86C9.41 4.28 7.86 3 6 3C3.79 3 2 4.79 2 7C2 9.21 3.79 11 6 11Z" fill="#55657E"/>
      <path d="M18 21C20.21 21 22 19.21 22 17C22 14.79 20.21 13 18 13C16.14 13 14.59 14.28 14.14 16H2V18H14.14C14.59 19.72 16.14 21 18 21Z" fill="#55657E"/>
    </svg>
  );

  const LogOutIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H14V19H5Z" fill="#55657E"/>
      <path d="M6.54004 9.20998L9.34004 12L6.54004 14.79L7.96004 16.21L12.16 12L7.96004 7.78998L6.54004 9.20998Z" fill="#55657E"/>
    </svg>
  );

  const LanguageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.45 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" fill="#55657E"/>
    </svg>
  );

  const menuItems = [
    { icon: WalletIcon, label: "Wallet", count: null },
    { icon: NotificationIcon, label: "Notifications", count: 4 },
    { icon: MedalIcon, label: "VIP Club", count: null },
    { icon: ChartIcon, label: "Alliance Plan", count: null, isActive: true },
    { icon: MedalIcon, label: "Game records", count: null },
    { icon: ChartIcon, label: "Data Statistics", count: null },
    { icon: SlidersIcon, label: "Settings", count: null },
    { icon: LanguageIcon, label: `Default Lang: ${currentLanguage.name}`, count: null, flag: currentLanguage.code },
  ];

  return (
    <div className="lg:w-[282px] md:w-[282px] w-full h-full lg:h-auto lg:rounded-[14px] glass-bg p-0 text-white font-montserrat backdrop-blur-[32px] overflow-y-auto">
      <button
        onClick={onClose}
        className="flex absolute right-4 top-4 h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 backdrop-blur-[32px] hover:bg-white-8 transition-colors lg:hidden z-10"
        style={{
          boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
        }}
      >
        <X size={16} className="text-[#A7B5CA]" />
      </button>
      {/* User Profile Section */}
      <div className="p-4 lg:p-4 pt-5 lg:pt-4 flex flex-col items-center lg:justify-start lg:min-h-0">
        <div className="flex flex-col items-center gap-2 w-[88%] ">
          {/* Avatar with VIP Badge */}
          <div className="relative flex flex-col items-center gap-[-10px]">
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
                alt="User avatar"
                className="w-16 h-16 rounded-2xl border border-white shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]"
              />
              {/* VIP Badge - positioned to overlap the bottom of the avatar */}
              <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className="h-5 px-2 flex items-center justify-center rounded-2xl border border-white shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]"
                  style={{ backgroundColor: '#1BB83D' }}
                >
                  <span className="text-white text-xs font-bold whitespace-nowrap">VIP 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Username */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-white text-sm font-bold">User8527681</span>
            <EditIcon />
          </div>

          {/* VIP Progress */}
          <div className="w-full flex flex-col gap-0.5">
            <div className="flex justify-between items-center">
              <span className="text-white text-[10px] font-bold">VIP 1</span>
              <span className="text-white text-[10px] font-bold">VIP 1</span>
            </div>
            
            {/* Progress Bar */}
            <div className="glass-input rounded-lg p-0.5">
              <div className="relative w-full h-2 rounded-lg">
                <div 
                  className="w-[116px] h-full border border-white rounded-lg"
                  style={{ backgroundColor: '#ED1D49' }}
                ></div>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b06c41ce5f767b8fe02cc82d8bf934e68565f90a?width=24" 
                    alt="Chest"
                    className="w-3 h-3"
                  />
                  <span className="text-white text-[10px]">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Code Section */}
      <div className="px-4 pb-4 lg:pb-2">
        <div className="p-4 rounded-xl">
          {/* Bonus Code Header */}
          <div className="flex items-center gap-2 mb-4">
            <PriceTagIcon />
            <span className="text-sm font-bold" style={{ color: '#A7B5CA' }}>Bonus code</span>
          </div>

          {/* Input Field */}
          <div className="flex glass-input rounded-xl p-1.5 gap-1">
            <input
              type="text"
              value={bonusCode}
              onChange={(e) => setBonusCode(e.target.value)}
              placeholder="Enter bonus code"
              className="flex-1 bg-transparent text-xs border-none outline-none px-3 w-[30px] placeholder:text-blue-bayoux"
              style={{ color: '#55657E' }}
            />
            <UnifiedButton variant="primary" className="h-9 px-4">
              <span className="text-xs font-bold">Send</span>
            </UnifiedButton>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pb-4 lg:pb-2">
        <div className="flex flex-col gap-0.5">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = (item as any).isActive;
            return (
              <button
                key={index}
                className={`flex items-center gap-2 h-12 px-4 rounded-lg transition-colors group backdrop-blur-[32px] ${
                  isActive 
                    ? 'bg-[#8B5CF6]/20 border border-[#8B5CF6]/30' 
                    : 'hover:bg-white/5'
                }`}
              >
                 {/* Flag icon for language item */}
                 {(item as any).flag && (
                   <img 
                     src={`/icons/flag-icon/${(item as any).flag}.svg`} 
                     className="w-5 h-5" 
                     alt="language flag" 
                   />
                 )}
                 <span className={`flex-1 text-left text-sm font-bold transition-colors ${
                   isActive ? 'text-white' : 'text-[#A7B5CA] group-hover:text-white'
                 }`}>
                   {item.label}
                 </span>
                 
                {item.count && (
                  <div 
                    className="border border-white rounded-md px-1.5 py-0.5 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]"
                    style={{ backgroundColor: '#1BB83D' }}
                  >
                    <span className="text-white text-xs font-bold">{item.count}</span>
                  </div>
                )}
                {/* Red dot indicator for some items */}
                {!item.count && !isActive && ['Wallet', 'Notifications', 'Game records', 'Data Statistics', 'Settings'].includes(item.label) && (
                  <div className="w-2 h-2 bg-[#ED1D49] rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Log Out */}
      <div className="px-4 pb-8 lg:pb-2">
        <button onClick={() => setAuthUser(null)} className="flex items-center gap-2 h-12 px-4 rounded-lg hover:bg-white/5 transition-colors group w-full backdrop-blur-[32px]">
          <LogOutIcon />
          <span className="flex-1 text-left text-sm font-bold group-hover:text-white transition-colors" style={{ color: '#A7B5CA' }}>
            Log out
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
