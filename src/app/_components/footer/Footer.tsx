"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="px-8 bg-text/90 lg:px-12 py-5 flex justify-between dark:bg-[#334155] transition duration-500 ease-in-out">
      <div className="flex items-center gap-5">
        <div className="bg-text py-1 px-1.5 rounded-xl">
          <Image
            src={isDark ? "/images/logo.svg" : "/images/logo-light.svg"}
            alt="logo"
            width={30}
            height={30}
            priority
            className="w-[30px] h-[30px] "
          />
        </div>

        <h3 className="text-background/90  text-[1.3rem] lg:text-[2.3rem] dark:text-text font-bold md:text-[1.5rem]">
          Krea AI
        </h3>
      </div>

      <div className="flex justify-center items-center gap-7">
        <h3 className="text-background/90 dark:text-text text-[1.3rem] md:text-[1.5rem] lg:text-[2.3rem] font-bold">
          curated by
        </h3>

        <Image
          src="/images/mobbin.svg"
          alt="logo"
          width={100}
          height={100}
          priority
          className="w-[100px] md:w-[120px] lg:w-[150px] h-auto "
        />
      </div>
    </footer>
  );
}
