import Image from "next/image";
import React from "react";
import {
  FaBell,
  FaChevronDown,
  FaFolder,
  FaRegImage,
  FaVideo,
} from "react-icons/fa";
import { FaHouse, FaPenToSquare } from "react-icons/fa6";
import { MdAutoFixHigh, MdWbSunny } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className=" lg:px-12 flex w-full justify-between items-center text-text pt-8 pb-10 font-semibold">
      {/* First container */}
      <div className="flex justify-between items-center  gap-[2.5rem]">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={25}
          height={25}
          priority
          className="w-[25px] h-[25px]"
        />

        <div className="flex justify-between items-center ">
          <div className="w-[18px] h-[18px] rounded-full bg-[radial-gradient(circle_at_center,#2563eb,pink)]"></div>

          <button className="text-text/80 flex justify-between items-center gap-3">
            <span className="ml-3 text-[1.15rem]">benevolentcodegal</span>
            <FaChevronDown size={15} />
          </button>
        </div>
      </div>

      {/* Second container */}
      <div className=" flex bg-bg-gray/15 gap-[2rem] py-3 pr-4 pl-1.5 rounded-xl justify-center items-center">
        <button className="bg-background p-1.5 px-2 rounded-xl shadow-md backdrop-blur-md ">
          <FaHouse size={18} />
        </button>
        {/* <FaImage size={18} /> */}

        <button className="p-1.5">
          <FaRegImage size={18} />
        </button>
        <button className="p-1.5">
          <FaVideo size={18} />
        </button>
        <button className="-rotate-90 p-1.5 ">
          <MdAutoFixHigh size={18} />
        </button>

        <button className=" p-1.5">
          <Image
            src="/images/pen.svg"
            alt="pen"
            width={18}
            height={18}
            className="rotate-80  w-[18px] h-[18px] "
          />
        </button>

        <button className="p-1.5 ">
          <FaPenToSquare size={18} />
        </button>

        <button className="p-1.5 ">
          <FaFolder size={18} />
        </button>
      </div>

      {/* Third Container */}
      <div className="flex justify-between items-center gap-[2rem]">
        <button className="flex  bg-bg-gray/15 justify-between items-center gap-2 p-1.5 rounded-2xl">
          <Image
            src="/images/gallery.svg"
            alt="gallery"
            width={18}
            height={18}
            className="w-[18px] h-[18px] "
          />
          <span className=" text-[1.25rem]">Gallery</span>
        </button>

        <button className="flex  bg-bg-gray/15 justify-between items-center gap-2 p-1.5 rounded-2xl">
          <Image
            src="/images/support.svg"
            alt="gallery"
            width={18}
            height={18}
            className="w-[18px] h-[18px] "
          />

          <span className=" text-[1.25rem]">Support</span>
        </button>

        <button className="p-1.5 bg-bg-gray/15 rounded-xl">
          <FaBell size={18} />
        </button>

        <button className="p-1.5 bg-bg-gray/15 rounded-xl">
          <MdWbSunny size={18} className=" " />
        </button>

        <div className="w-[18px] h-[18px] rounded-full bg-[radial-gradient(circle_at_center,#2563eb,pink)]"></div>
      </div>
    </nav>
  );
}
