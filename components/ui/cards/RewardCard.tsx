"use client";

// this is the first carousel card

import React, { useState, useEffect, useRef } from "react";
import { Button } from "..";
import FlatButton from "../Button/FlatButton";

interface TypeOneProps {

  button: string;
  image: string; // image URL from /public
  link?: string;
}

const TypeOne: React.FC<TypeOneProps> = ({
  button,
  image,
  link = "#",
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-[14px] lg:h-[270px] h-[196px] px-8 py-16 flex items-end text-white shadow-md transition-all duration-300 "
      style={{ width: "100%" }}
    >
      {/* Background image layer with hover zoom */}
      <div
        className="absolute inset-0 bg-no-repeat transition-transform duration-500 "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />

      {/* subtle dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" /> */}

      {/* sheen sweep on hover */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:left-[140%]" /> */}

      
        <div>
          <a href={link}>
            
            <FlatButton className="w-[173px] h-[52px] font-bold rounded-[12.6px] bg-[linear-gradient(#0C60FF,#2C9FFA)]">
              {button}
            </FlatButton>
          </a>
        </div>
      </div>
  
  );
};

export default TypeOne;
