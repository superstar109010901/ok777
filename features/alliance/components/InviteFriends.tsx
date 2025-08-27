import React from "react";
import FAQ from "./FAQ";
import { UnifiedButton } from "@/components/ui";

const InviteFriends: React.FC = () => {
  const faqs = [
    {
      question: "How to activate a wallet address?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
    },
    {
      question: "Why do I need to activate the wallet address?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
    },
    {
      question: "Will not activating the wallet address affect withdrawals?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
    },
  ];

  return (
    <div className="flex-1 [@media(max-width:660px)]:p-0">
      {/* Header Section */}
      <div className="mb-8 [@media(max-width:660px)]:hidden">
        <h1 className="text-[18px] font-bold text-white mb-6">
          Invite Friends
        </h1>
        <div className="bg-[url('/images/banner/Banner12.jpg')] bg-cover bg-center bg-no-repeat rounded-lg p-10  text-left relative overflow-hidden">
          <span className="text-white text-[18px] font-bold relative z-10">
            Invite friends
          </span>{" "}
        </div>
      </div>

      {/* Referral Section */}
      <div className="grid grid-cols-2 gap-6 mb-8 [@media(max-width:1500px)]:grid-cols-1">
        <div className="bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
          <label className="block text-white text-[14px] font-bold mb-3 ">
            Referral link
          </label>
          <div className="flex items-center gap-3">
            <p className="flex-1 bg-[#FFFFFF14] flex justify-between text-white px-4 py-3 rounded-lg border-none text-bold outline-none">
              <span className="text-[14px] font-bold">
                https://ok777.casino/?Agent...
              </span>
              <button
                type="button"
                aria-label="Copy referral link"
                onClick={() => navigator.clipboard.writeText('https://ok777.casino/?Agent...')}
                className="p-1 rounded hover:bg-white/10 transition-colors"
              >
                <img src="/icons/copy.svg" alt="copy" />
              </button>
            </p>
          </div>
        </div>

        <div className="bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
          <label className="block text-white text-sm font-medium mb-3">
            Referral code
          </label>
          <div className="flex items-center gap-3">
            <p className="flex-1 bg-[#FFFFFF14] flex justify-between text-white px-4 py-3 rounded-lg border-none outline-none">
              <span className="text-[14px] font-bold">330395</span>
              <button
                type="button"
                aria-label="Copy referral code"
                onClick={() => navigator.clipboard.writeText('330395')}
                className="p-1 rounded hover:bg-white/10 transition-colors"
              >
                <img src="/icons/copy.svg" alt="copy" />
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Share via Social Media and Statistics Section */}
      <div className="grid grid-cols-2 gap-6 mb-8 [@media(max-width:1500px)]:grid-cols-1">
        {/* Left Card: Share via Social Media */}
        <div className="bg-[#2a3546] rounded-lg p-5 border border-[rgba(255,255,255,0.08)] [@media(max-width:375px)]:p-2">
          <h3 className="text-gray-300 text-[14px] font-bold mb-4">
            Share via social media
          </h3>
          <div className="grid grid-cols-6 gap-2 [@media(max-width:660px)]:grid-cols-7">
            {/* First Row */}
            <button className=" w-10 h-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/social-icon/telegram.svg"
                alt="telegram"
                className="w-4 h-4"
              />
            </button>
            <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/social-icon/facebook.svg"
                alt="facebook"
                className="w-4 h-4"
              />
            </button>
            <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/social-icon/x.svg"
                alt="X"
                className="w-4 h-4"
              />
            </button>
            <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/social-icon/instagram.svg"
                alt="instagram"
                className="w-4 h-4"
              />
            </button>
            <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/social-icon/youtube.svg"
                alt="youtube"
                className="w-4 h-4"
              />
            </button>
            <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/social-icon/discord.svg"
                alt="discord"
                className="w-4 h-4"
              />
            </button>
            {/* Second Row - TikTok */}
            <button className=" w-10 h-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)] border-t border-[#FFFFFF0A]">
              <img
                src="/icons/social-icon/tiktok.svg"
                alt="tiktok"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right Card: Statistics */}
        <div className="bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="text-center">
              <div className="text-[14px] font-bold text-white mb-1">0</div>
              <div className="text-gray-300 text-[10px]">
                New direct
                <br /> subordinates
              </div>
            </div>
            {/* Top Right */}
            <div className="text-center">
              <div className="text-[14px] font-bold text-white mb-1">0</div>
              <div className="text-gray-300 text-[10px]">
                Direct
                <br /> subordinates
              </div>
            </div>
            {/* Bottom Left */}
            <div className="text-center">
              <div className="text-[14px] font-bold text-[#0C60FF] mb-1">
                0
              </div>
              <div className="text-gray-300 text-[10px]">New team member</div>
            </div>
            {/* Bottom Right */}
            <div className="text-center">
              <div className="text-[14px] font-bold text-[#0C60FF] mb-1">
                0
              </div>
              <div className="text-gray-300 text-[10px]">
                Total team member
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commission Rewards Section */}
      <div className="mb-8 bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[14px] font-bold text-white">
            Commission Rewards
          </h3>
          <a
            href="#"
            className="text-[#2283F6] hover:underline font-bold text-[14px]"
          >
            Details
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-between w-full bg-[#FFFFFF14] rounded-lg p-2 pr-4 pl-4 border border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-3">
              <img src="/icons/coin-icon/USDT.svg" alt="coin w-6 h-6" />
              <span className="text-[12px] text-[#2283F6] font-bold">0</span>
            </div>
            <UnifiedButton variant="primary" className="px-6 py-3 text-[12px] font-bold">
              Claim
            </UnifiedButton>
          </div>
        </div>
              </div>

      {/* FAQs Section */}
      <FAQ faqs={faqs} />
    </div>
  );
};

export default InviteFriends;
