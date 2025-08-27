"use client";

import React from "react";
import { UnifiedButton } from "./ui";
import Link from "next/link";

const coins = [
  "USDT",
  "SOL",
  "BNB",
  "LTC",
  "ETC",
  "TRX",
  "BTC",
  "TON",
] as const;
const socials = [
  "Telegram",
  "Facebook",
  "X",
  "Instagram",
  "Youtube",
  "Discord",
  "Tiktok",
] as const;

const Footer: React.FC = () => {
  return (
    <footer className="lg:bg-[#1C2532] w-full text-gray-300 py-8 px-6 lg:mb-0       mb-[76px]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex hidden lg:flex gap-8">
          {/* Left Section - Company Info */}
          <div className="w-[50%] md:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img src="/images/logo.svg" alt="777 Gaming Logo" />
            </div>

            {/* Company Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Ok777 casino is owned and operated by Nextech NV, a company
              registered in Curaçao with company number 162054, registered
              address: Zuikertuin tower 2/ Kaya W.F.G. (Cito) Hellmund z/n
              Curaçao, licensed by the Curaçao Gaming Authority (CGB), license
              number 365/JAZ, issued by Antillephone. The license is approved
              and regulated by the Government of Curaçao, ensuring the legality
              and security of the platform.
            </p>

            {/* Supported Currencies */}
            <div className="lg:block mb-6 hidden">
              <h4 className="text-white font-medium mb-3">
                Supported currencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {coins.map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={"/icons/coin-icon/" + item + ".svg"}
                      className="w-8 h-8"
                      alt="coin"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - General Information */}
          <div className="w-[25%]">
            <h3 className="text-white font-semibold mb-4">
              General Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Common problem
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Responsible gambling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Honestly and fairly
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - About Us */}
          <div className="w-[25%]">
            <h3 className="text-white font-semibold mb-4">About us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Online service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Skype
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:hidden block">
          <h4 className="text-white font-medium mb-3">Support/Legal support</h4>
          <div className="rounded-[8px] flex gap-1 flex-col overflow-hidden">
            <div className=" flex items-center h-[48px] justify-between px-4 bg-[#2a3546]">
              <span className="text-[#A7B5CA] text-[14px] font-bold">
                Common Problem
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className=" flex items-center h-[48px] justify-between px-4 bg-[#2a3546]">
              <span className="text-[#A7B5CA] text-[14px] font-bold">
                Responsible gambling
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className=" flex items-center h-[48px] justify-between px-4 bg-[#2a3546]">
              <span className="text-[#A7B5CA] text-[14px] font-bold">
                Honestly and fairly
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className=" flex items-center h-[48px] justify-between px-4 bg-[#2a3546]">
              <span className="text-[#A7B5CA] text-[14px] font-bold">
                Terms of Service
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className=" flex items-center h-[48px] justify-between px-4 bg-[#2a3546]">
              <span className="text-[#A7B5CA] text-[14px] font-bold">
                Private Policy
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className=" flex items-center h-[48px] justify-between px-4 bg-[#2a3546]">
              <span className="text-[#A7B5CA] text-[14px] font-bold">
                About Us
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center p-4 ">
          {/* Partners and Industry Associations */}
          <div className="lg:w-[50%] w-full mb-4">
            <h4 className="text-white  font-medium mb-3">
              Partners and Industry Associations
            </h4>
            <div className="flex gap-3">
              <div>
                <img
                  className="h-8"
                  alt="brand"
                  src="/images/brand/brand.svg"
                />
              </div>
              <div>
                <img src="/images/brand/18.svg" className="h-8" alt="18+" />
              </div>
            </div>
          </div>
          <div className="lg:hidden w-full mb-6 block ">
            <h4 className="text-white w-full font-medium mb-3">
              Supported currencies
            </h4>
            <div className="flex justify-between items-center lg:gap-2 ">
              {coins.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={"/icons/coin-icon/" + item + ".svg"}
                    className="w-8 h-8"
                    alt="coin"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Social Media Links */}
          <div className="lg:w-[50%] w-full mb-4 md:mb-0">
            <h4 className="text-white font-medium mb-3 text-left">
              Public entrance
            </h4>
            <div className="flex justify-between md:justify-start lg:gap-4">
              {socials.map((social, index) => (
                <UnifiedButton variant="default" className="px-2.5" key={index}>
                  <img
                    className="h-4 w-4 "
                    src={"/icons/social-icon/" + social + ".svg"}
                    alt="social"
                  />
                </UnifiedButton>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full block lg:hidden md:col-span-2 ">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img src="/images/logo.svg" alt="777 Gaming Logo" />
          </div>

          {/* Company Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Ok777 casino is owned and operated by Nextech NV, a company
            registered in Curaçao with company number 162054, registered
            address: Zuikertuin tower 2/ Kaya W.F.G. (Cito) Hellmund z/n
            Curaçao, licensed by the Curaçao Gaming Authority (CGB), license
            number 365/JAZ, issued by Antillephone. The license is approved and
            regulated by the Government of Curaçao, ensuring the legality and
            security of the platform.
          </p>

          {/* Supported Currencies */}
          <div className="lg:block mb-6 hidden pl-[12px]">
            <h4 className="text-white font-medium mb-3">
              Supported currencies
            </h4>
            <div className="flex justify-between">
              {coins.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={"/icons/coin-icon/" + item + ".svg"}
                    className="w-8 h-8"
                    alt="coin"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media & Install App */}
        <div className="mt-8 hidden lg:block pt-6 border-t border-gray-800">
          {/* Install App Banner */}
          <div className=" px-4 py-2 flex items-center justify-center gap-3">
            <div className="text-2xl">
              <img src="/images/brand/cookie.svg" alt="cookie" />
            </div>
            <div>
              <div className="flex text-[#A7B5CA] text-sm font-medium">
                {" "}
                Install
                <img
                  src="/images/logo.svg"
                  className="h-[17px]"
                  alt="logo"
                />{" "}
                on the desktop
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
              Accept
            </button>
            <UnifiedButton variant="default">
              <div className="px-2.5">X</div>
            </UnifiedButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
