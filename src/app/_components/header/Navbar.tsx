"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import {
  FaBell,
  FaChevronDown,
  FaFolder,
  FaMoon,
  FaRegImage,
  FaVideo,
} from "react-icons/fa";
import { FaHouse, FaPenToSquare } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { MdAutoFixHigh, MdWbSunny } from "react-icons/md";

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();

  return (
    <nav className="px-8 lg:px-12 flex overflow-x-auto w-full justify-between items-center text-text pt-8 pb-5 mb:pb-10 font-semibold">
      {/* First container */}
      <div className="flex justify-between items-center  gap-[2.5rem]">
        <Image
          src={!isDark ? "/images/logo.svg" : "/images/logo-light.svg"}
          alt="logo"
          width={30}
          height={30}
          priority
          className="w-[25px] h-[25px] "
        />
        <div className="flex justify-between items-center ">
          <div className="w-[18px] h-[18px] rounded-full bg-[radial-gradient(circle_at_center,#2563eb,pink)]"></div>

          <button className="text-text/80 sm:flex justify-between items-center gap-3 hidden ">
            <span className="ml-3 text-[1.15rem] ">benevolentcodegal</span>
            <FaChevronDown size={15} />
          </button>
        </div>
      </div>

      {/* Second container */}
      <div className="hidden lg:flex  bg-gray/15 dark:bg-gray/30 gap-[2rem] py-3 pr-4 pl-1.5 rounded-xl justify-center items-center">
        <button className="bg-background p-1.5 px-2 rounded-xl shadow-md backdrop-blur-md transition-all duration-500 ease-in-out">
          <FaHouse size={18} />
        </button>

        <button className="btn-icon">
          <FaRegImage size={18} />
        </button>
        <button className="btn-icon">
          <FaVideo size={18} />
        </button>
        <button className="btn-icon">
          <MdAutoFixHigh size={18} />
        </button>

        <button className="btn-icon">
          <Image
            src={isDark ? "/images/pen-white.svg" : "/images/pen.svg"}
            alt="pen"
            width={18}
            height={18}
            className="rotate-80  w-[18px] h-[18px] "
          />
        </button>

        <button className="btn-icon">
          <FaPenToSquare size={18} />
        </button>

        <button className="btn-icon">
          <FaFolder size={18} />
        </button>
      </div>

      {/* Third Container */}
      <div className="flex justify-between items-center gap-[2rem]">
        <button className="flex  bg-gray/15 justify-between items-center gap-2 p-1.5 rounded-2xl dark:bg-gray/30 hover:bg-gray/40 transition-all duration-500 ease-in-out">
          <IoMdPhotos size={18} />
          <span className="hidden md:inline text-[1.25rem]">Gallery</span>
        </button>

        <button className="flex  bg-gray/15 justify-between items-center gap-2 p-1.5 rounded-2xl dark:bg-gray/30 hover:bg-gray/40 hover:bg-gray/40 transition-all duration-500 ease-in-out">
          <BiSupport size={18} />
          <span className="hidden md:inline text-[1.25rem]">Support</span>
        </button>

        <button className="p-1.5 bg-gray/15 dark:bg-gray/30 rounded-xl">
          <FaBell size={18} />
        </button>

        <button
          className="p-1.5 bg-gray/15 dark:bg-gray/30 rounded-xl"
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? <FaMoon size={18} /> : <MdWbSunny size={18} />}
        </button>

        <div className="w-[18px] h-[18px] rounded-full bg-[radial-gradient(circle_at_center,#2563eb,pink)]"></div>
      </div>
    </nav>
  );
}
