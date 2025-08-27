"use client";

import { useEffect, useState } from "react";
import { setAuthUser } from "@/lib/auth";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";
import { useSidebar } from "../../context/SidebarProvider";
import { Button } from "@/ui";
import AuthButton from "../ui/AuthButton";
import { useModalScrollPrevention } from "@/hooks/useModalScrollPrevention";
import './style.css';
interface SocialButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}
const SocialButton = ({ icon, onClick }: SocialButtonProps) => (
  <button
    onClick={onClick}
    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/4 backdrop-blur-[32px] transition-colors hover:bg-white/8"
    style={{
      boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
    }}
  >
    {icon}
  </button>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8.04785 0.0263672C10.8197 0.0263672 12.6087 1.44531 13.2812 2.0332L11.0811 4.22168C10.6644 3.85082 9.59876 3.07812 8.12012 3.07812C6.81088 3.07819 5.49265 3.56836 4.61914 4.44727C3.74665 5.32518 3.1475 6.65962 3.14746 7.99414C3.1519 8.65544 3.28648 9.30981 3.54395 9.91895C3.76937 10.4522 4.08529 10.9421 4.47656 11.3672L4.64844 11.5449C5.54216 12.411 6.89156 12.9492 8.17188 12.9492C9.93118 12.9492 12.0876 11.7894 12.5527 9.58105L12.5596 9.54883H8.10547V6.45117H15.502L15.5771 6.77051V6.77148C15.5809 6.79312 15.6699 7.31504 15.6699 8.19434C15.6699 10.2813 14.9635 12.2708 13.5996 13.708C12.212 15.1681 10.2648 15.9736 8.20996 15.9736C5.95033 15.9736 3.75731 15.1366 2.20898 13.5381C0.759984 12.0393 0.0263672 9.99623 0.0263672 8C0.0263672 6.00378 0.801786 3.85312 2.29688 2.36621C3.81229 0.855786 5.88515 0.02646 8.04785 0.0263672Z"
      fill="#A7B5CA"
      stroke="#A7B5CA"
      strokeWidth="0.0535714"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M14.5889 2.01172C14.6438 2.01075 14.7335 2.01721 14.8291 2.04004C14.9246 2.06286 15.0256 2.1021 15.1045 2.16602C15.2374 2.2739 15.2751 2.42008 15.293 2.52441C15.3108 2.62884 15.3331 2.86798 15.3154 3.05371C15.1122 5.18874 14.2326 10.3699 13.7852 12.7617C13.5961 13.7726 13.2253 14.1043 12.873 14.1367C12.4845 14.1725 12.1416 14.044 11.8008 13.8438C11.6305 13.7437 11.4608 13.626 11.2861 13.502C11.1114 13.3778 10.9314 13.2467 10.7412 13.1221C10.1472 12.7327 9.68219 12.4171 9.22168 12.1035C8.76101 11.7898 8.30451 11.4779 7.72754 11.0977C7.39491 10.8785 7.20064 10.6853 7.10742 10.5068C7.01472 10.3293 7.02099 10.1655 7.0918 10.0039C7.16305 9.84145 7.29983 9.68064 7.4668 9.51074C7.55005 9.42603 7.64073 9.33937 7.73438 9.24902C7.8281 9.15859 7.92539 9.06461 8.02051 8.96582C8.11969 8.86281 9.03215 8.02538 9.92969 7.17773C10.3783 6.7541 10.8236 6.32836 11.1602 5.99023C11.3284 5.82122 11.4698 5.67344 11.5713 5.55957C11.6219 5.50279 11.6631 5.45409 11.6924 5.41504C11.707 5.39558 11.7188 5.37804 11.7275 5.36328C11.7361 5.34885 11.7416 5.33583 11.7441 5.3252C11.7487 5.3058 11.7532 5.26174 11.7461 5.21387C11.739 5.16607 11.7201 5.11188 11.6777 5.07422C11.6354 5.03679 11.5833 5.02481 11.5322 5.02441C11.4812 5.02403 11.4297 5.0354 11.3877 5.04492C11.3784 5.04707 11.3627 5.05438 11.3418 5.06543C11.3202 5.07685 11.2912 5.09334 11.2559 5.11426C11.1852 5.1561 11.0868 5.21689 10.9609 5.29688C10.7086 5.4572 10.3448 5.69403 9.87012 6.00781C9.39536 6.32161 8.80952 6.71238 8.1123 7.17969L5.6875 8.81152C5.14962 9.18088 4.66342 9.35996 4.22949 9.35059C3.98992 9.3454 3.63886 9.27742 3.26074 9.18262C2.88276 9.08784 2.47838 8.9665 2.13379 8.85449C1.70997 8.71673 1.33187 8.61199 1.06641 8.4834C0.934087 8.4193 0.831045 8.34994 0.764648 8.26855C0.698693 8.18749 0.668479 8.09373 0.682617 7.98047C0.697246 7.86378 0.785586 7.74284 0.952148 7.61914C1.11836 7.49579 1.36078 7.37097 1.67969 7.24414V7.24316C5.61647 5.52796 8.2421 4.39793 9.55566 3.85156C11.4309 3.07158 12.5632 2.61337 13.29 2.34961C14.0167 2.0859 14.3371 2.01621 14.5889 2.01172Z"
      fill="#A7B5CA"
      stroke="#A7B5CA"
      strokeWidth="0.024"
    />
  </svg>
);

const MetamaskIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M16 4.64258L14.9902 7.80957L16 11.5723L14.8818 15.3174L11.4092 14.2852L8.94629 15.749H7.04688L4.58008 14.2852L1.10938 15.3174L0 11.5576L1.00781 7.82227L0.00390625 4.64062L1.12695 0.251953L6.56641 3.48145H9.44629L14.873 0.25L16 4.64258ZM6.57617 13.2188L6.90137 14.4043H9.08691L9.41211 13.2188L8.76172 12.5039H7.22656L6.57617 13.2188ZM9.34766 10.1816L9.27246 10.6719L9.6123 10.8018L11.5078 10.3369H11.5176V9.7373L11.0127 9.24219H9.71289L9.34766 10.1816ZM4.49707 9.73242H4.49219V10.3271H4.50195L6.39746 10.7979L6.7373 10.667L6.66309 10.1777L6.29785 9.2373H5.00195L4.49707 9.73242ZM10.1582 5.84668L12.6084 7.52246H14.4834L15.4043 4.62695L14.5439 1.27051L10.1582 5.84668ZM0.595703 4.62207L1.51562 7.51758H3.38672L3.38086 7.5127L5.83203 5.83691L1.45605 1.26562L0.595703 4.62207Z"
      fill="#A7B5CA"
    />
  </svg>
);

const TonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3.04785 1.36914H12.9541C14.4502 1.36935 15.3354 2.91049 14.6191 4.11035L8.50488 14.3525C8.2975 14.7 7.7854 14.722 7.54004 14.418L7.49512 14.3525L1.38184 4.11035C0.664295 2.90813 1.55011 1.36914 3.04785 1.36914ZM3.0459 2.20215C2.27522 2.20245 1.75531 3.01817 2.15625 3.7002V3.70117L5.36133 9.24316L6.63672 11.627V12.623L7.41992 11.8398L7.66113 11.5996L7.55371 11.3984V2.20215H3.0459ZM8.44434 11.5156L9.30664 11.7324L10.6309 9.25586L13.8408 3.69922C14.2423 3.01694 13.7222 2.20117 12.9512 2.20117H8.44434V11.5156Z"
      fill="#A7B5CA"
      stroke="#A7B5CA"
      strokeWidth="0.916667"
    />
  </svg>
);

const TrustWalletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.5 14.5554C3.51622 12.6038 1.9815 9.29679 1.98145 7.51141V3.14716L7.5 1.35419V14.5554Z"
      fill="#A7B5CA"
      stroke="#A7B5CA"
    />
    <g style={{ mixBlendMode: "luminosity" }}>
      <path
        d="M14.5184 2.78533L8 0.666687V15.3334C12.656 13.3776 14.5184 9.6295 14.5184 7.51131V2.78533Z"
        fill="url(#paint0_linear_trust)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_trust"
        x1="12.7869"
        y1="-0.360368"
        x2="7.86282"
        y2="15.133"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B1B9C3" />
        <stop offset="1" stopColor="#171F29" />
      </linearGradient>
    </defs>
  </svg>
);



export default function AuthModal() {
  const { isAuthModalOpen, toggleAuthModal } = useSidebar();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password123");
  const [referralCode, setReferralCode] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [agreedToNotifications, setAgreedToNotifications] = useState(true);
  const [showReferral, setShowReferral] = useState(true);

  const login = () => {
    if(email === "dev.com@gmail.com" && password === "123") {
      setAuthUser(email);
    }
    toggleAuthModal();
  }

  const register = () => {
    console.log("register");
    toggleAuthModal();
  }

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isAuthModalOpen);

  if (!isAuthModalOpen) return null;

  return (
    <>
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#0D131C]/73" />

          {/* Modal */}
          <div className="relative w-full max-w-[740px] h-full flex justify-center items-center modal-content-scroll">
            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full h-[670px] rounded-[14px] bg-[#111923]/54 backdrop-blur-[32px] modal-content-scroll">
              {/* Left Side - Branding */}
              <div className="flex-1 relative">
                {/* Background Image with Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111923]"
                  style={{
                    backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/1966099a1a2c23b6a4509e98b3ec5376765f2b13?width=740')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111923]/90" />



                {/* Bull Character and Text */}
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 pt-16">
                  {/* Logo/3D Character placeholder */}
                  <div className="w-[115px] h-14  rounded-lg flex items-center justify-center">
                  </div>

                  {/* Welcome Text */}
                  <div className="text-center">
                    <h1 className="font-black text-[32px] text-[#EDEDED] leading-none mb-2">
                      WELCOME
                    </h1>
                    <h2 className="font-black text-[32px] text-[#EDEDED] leading-none mb-2">
                      BONUS
                    </h2>
                    <h3 className="font-black text-[32px] text-[#EDEDED] leading-none mb-4">
                      UP TO 590%
                    </h3>
                    <p className="text-[#A7B5CA] text-base font-medium">
                      + 225 Free Spins
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 flex flex-col p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={toggleAuthModal}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/4 bg-white/4 backdrop-blur-[32px] hover:bg-white/8 transition-colors"
                    style={{
                      boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
                    }}
                  >
                    <X size={16} className="text-[#A7B5CA]" />
                  </button>
                </div>

                {/* Tab Switcher */}
                <div className="flex rounded-xl p-1 mb-6">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${isLogin
                        ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                        : "text-[#A7B5CA]"
                      }`}
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${!isLogin
                        ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                        : "text-[#A7B5CA]"
                      }`}
                  >
                    Registration
                  </button>
                </div>

                {/* Form */}
                <div className="flex-1 flex flex-col">
                  {/* Email Input */}
                  <div className="mb-4">
                    <div className="relative">
                      <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                        <span className="text-xs text-[#93ACD3]">Username / email</span>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your username or email"
                        className="w-full h-12 px-4 pt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <div className="relative">
                      <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                        <span className="text-xs text-[#93ACD3]">Password</span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={!isLogin && password ? "✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" : "Enter your password"}
                        className={`w-full h-12 px-4 pt-2 pr-12 bg-[#0D131C] rounded-xl text-sm focus:outline-none ${!isLogin && password
                            ? "border-2 border-[#2283F6] text-white"
                            : "border border-[#55657E] text-white placeholder-[#55657E]"
                          }`}
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <Eye size={20} className="text-[#55657E]" />
                        ) : (
                          <EyeOff size={20} className="text-[#55657E]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password / Referral Code */}
                  {isLogin ? (
                    <div className="mb-6">
                      <button className="text-[#2283F6] text-sm font-bold">
                        Forget the password
                      </button>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <button
                        onClick={() => setShowReferral(!showReferral)}
                        className="flex items-center text-[#2283F6] text-sm font-bold"
                      >
                        Referral code/discount code
                        <ChevronDown size={20} className="ml-1" />
                      </button>
                      {showReferral && (
                        <input
                          type="text"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value)}
                          placeholder="Enter referral code"
                          className="w-full h-12 px-4 mt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                        />
                      )}
                    </div>
                  )}

                  {/* Registration Checkboxes */}
                  {!isLogin && (
                    <div className="mb-6 space-y-2">
                      <label className="flex items-start gap-3">
                        <div className="relative mt-0.5">
                          <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToTerms
                              ? "bg-[#2283F6] border-[#2283F6]"
                              : "border-[#55657E] bg-transparent"
                            }`}>
                            {agreedToTerms && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-[#A7B5CA]">
                          I agree to the{" "}
                          <span className="text-[#2283F6]">"User Agreement"</span>{" "}
                          and confirm that I am over 18 years old
                        </span>
                      </label>

                      <label className="flex items-start gap-3">
                        <div className="relative mt-0.5">
                          <input
                            type="checkbox"
                            checked={agreedToNotifications}
                            onChange={(e) => setAgreedToNotifications(e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToNotifications
                              ? "bg-[#2283F6] border-[#2283F6]"
                              : "border-[#55657E] bg-transparent"
                            }`}>
                            {agreedToNotifications && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-[#A7B5CA]">
                          I agree to receive promotional notifications from{" "}
                          <span className="text-[#2283F6]">ok777.casino</span>
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Submit Button */}
                  
                  <AuthButton type= {isLogin ? "login" : "register"} onClick={isLogin ? login: register}  />

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Social Login */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-[#3C485C]" />
                      <span className="text-sm text-[#A7B5CA]">Log in using</span>
                      <div className="flex-1 h-px bg-[#3C485C]" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      <SocialButton icon={<GoogleIcon />} />
                      <SocialButton icon={<TelegramIcon />} />
                      <SocialButton icon={<MetamaskIcon />} />
                      <SocialButton icon={<TonIcon />} />
                      <SocialButton icon={<TrustWalletIcon />} />
                      <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/4 backdrop-blur-[32px] text-[#A7B5CA] text-xs font-bold">
                        +3
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden animation-fade-in absolute top-0 h-full w-full max-w-md mx-auto bg-[#111923]" style={{ WebkitOverflowScrolling: "touch" }}>


              {/* Blue Gradient Background */}
              <div className="relative">
                <div
                  className="w-full h-80 bg-gradient-to-b from-[#003A81] to-[#111923]"
                  style={{
                    filter: "blur(175px)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "scale(1.5)",
                  }}
                />

                {/* Hero Image */}
                <div className="relative h-[312.32px] overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e46eb9b989312e0dd83d423e4baeabe941ec23dd?width=804"
                    alt="Casino"
                    className="w-full h-full object-fill"
                  />

                  {/* Close Button */}
                  <button
                    onClick={toggleAuthModal}
                    className="absolute top-4 right-4 flex h-9 w-9 items-center  justify-center rounded-lg border border-white/4 bg-white/4 backdrop-blur-[32px] hover:bg-white/8 transition-colors"
                    style={{
                      boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
                    }}
                  >
                    <X size={16} className="text-[#A7B5CA]" />
                  </button>
                </div>
              </div>

              {/* Form Section */}
              <div className="px-4 pb-8 space-y-6 relative flex flex-col justify-between bg-[#111923]">
                <div className="flex flex-col gap-[24px]">
                  {/* Tab Switcher */}
                  <div className="flex rounded-xl p-1">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${isLogin
                          ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                          : "text-[#A7B5CA]"
                        }`}
                    >
                      Log In
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${!isLogin
                          ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                          : "text-[#A7B5CA]"
                        }`}
                    >
                      Registration
                    </button>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                      <span className="text-xs text-[#93ACD3]">Username / email</span>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your username or email."
                      className="w-full h-12 px-4 pt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                      <span className="text-xs text-[#93ACD3]">Password</span>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={!isLogin && password ? "✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" : "Enter your password"}
                      className={`w-full h-12 px-4 pt-2 pr-12 bg-[#0D131C] rounded-xl text-sm focus:outline-none ${!isLogin && password
                          ? "border-2 border-[#2283F6] text-white"
                          : "border border-[#55657E] text-white placeholder-[#55657E]"
                        }`}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <EyeOff size={20} className="text-white" />
                    </button>
                  </div>

                  {/* Registration specific fields */}
                  {!isLogin && (
                    <div className="space-y-4">
                      {/* Referral Code */}
                      {!showReferral && (<button
                        onClick={() => setShowReferral(!showReferral)}
                        className="flex items-center justify-between w-full text-[#2283F6] text-sm font-bold py-2"
                      >
                        Referral code/discount code
                        <ChevronDown size={20} />
                      </button>)}
                      {showReferral && (
                        <input
                          type="text"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value)}
                          placeholder="Enter referral code"
                          className="w-full h-12 px-4 mt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                        />
                      )}


                      {/* Submit Button */}
                      <AuthButton type="register" />

                      {/* Checkboxes */}
                      <div className="space-y-2">
                        <label className="flex items-start gap-3">
                          <div className="relative mt-0.5">
                            <input
                              type="checkbox"
                              checked={agreedToTerms}
                              onChange={(e) => setAgreedToTerms(e.target.checked)}
                              className="sr-only"
                            />
                            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToTerms
                                ? "bg-[#2283F6] border-[#2283F6]"
                                : "border-[#55657E] bg-transparent"
                              }`}>
                              {agreedToTerms && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-xs text-[#A7B5CA]">
                            I agree to the{" "}
                            <span className="text-[#2283F6]">"User Agreement"</span>{" "}
                            and confirm that I am over 18 years old
                          </span>
                        </label>

                        <label className="flex items-start gap-3">
                          <div className="relative mt-0.5">
                            <input
                              type="checkbox"
                              checked={agreedToNotifications}
                              onChange={(e) => setAgreedToNotifications(e.target.checked)}
                              className="sr-only"
                            />
                            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToNotifications
                                ? "bg-[#2283F6] border-[#2283F6]"
                                : "border-[#55657E] bg-transparent"
                              }`}>
                              {agreedToNotifications && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-xs text-[#A7B5CA]">
                            I agree to receive promotional notifications from{" "}
                            <span className="text-[#2283F6]">ok777.casino</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Login Submit Button */}
                  {isLogin && (
                    <>
                      <AuthButton onClick={login} type="login" />
                    </>
                  )}
                </div>

                {/* Social Login */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-[#3C485C]" />
                    <span className="text-sm text-[#A7B5CA]">Log in using</span>
                    <div className="flex-1 h-px bg-[#3C485C]" />
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <SocialButton icon={<GoogleIcon />} />
                    <SocialButton icon={<TelegramIcon />} />
                    <SocialButton icon={<MetamaskIcon />} />
                    <SocialButton icon={<TonIcon />} />
                    <SocialButton icon={<TrustWalletIcon />} />
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/4 backdrop-blur-[32px] text-[#A7B5CA] text-xs font-bold">
                      98
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
