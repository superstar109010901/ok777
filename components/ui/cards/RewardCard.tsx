"use client";

// this is the first carousel card

import React, { useState, useEffect, useRef } from "react";
import { Button } from "..";

interface TypeOneProps {
  title:
    | {
        line1: string;
        line2: string;
      }
    | React.ReactNode;
  button: string;
  image: string; // image URL from /public
  link?: string;
}

const TypeOne: React.FC<TypeOneProps> = ({
  title,
  button,
  image,
  link = "#",
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-[14px] lg:h-[270px] h-[196px] p-9 text-white shadow-md transition-all duration-300 "
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

      <div className="relative z-10 h-full flex flex-col justify-between">
        <h1
          className="text-3xl font-extrabold leading-tight drop-shadow-md"
          style={{ fontWeight: "900 !important" }}
        >
          {title && typeof title === "object" && "line1" in title ? (
            <>
              {title.line1}
              <br />
              {title.line2}
            </>
          ) : (
            title
          )}
        </h1>
        <div>
          <a href={link}>
            <Button variant="blueOne" className="px-0 h-8.5 rounded-[9.15px]" >
              {button}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TypeOne;
