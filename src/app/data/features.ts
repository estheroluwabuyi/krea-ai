import { IconType } from "react-icons";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaRegEdit, FaRegImage, FaVideo } from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";
import { PiMicrophoneStageFill } from "react-icons/pi";

export type Feature = {
  id: number;
  title: string;
  description: string;
  icon?: IconType;
  img?: string;
  isNew: boolean;
  bgColor?: string;
  rounded: boolean;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom stles in Flux and ideogram",
    icon: FaRegImage,
    isNew: true,
    bgColor: "bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/30 ",
    rounded: false,
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Haluw, Pica, Runway, Luma, and more.",
    icon: FaVideo,
    isNew: false,
    bgColor: " bg-amber-400",
    rounded: false,
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    img: "/images/pen-white.svg",
    isNew: false,
    bgColor: "bg-gradient-to-b from-cyan-500 to-cyan-400/30 ",
    rounded: false,
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k.",
    icon: MdAutoFixHigh,
    isNew: true,
    bgColor: "bg-gradient-to-b from-text to-text/70 -rotate-90",
    rounded: false,
  },
  {
    id: 5,
    title: "Edit",
    description:
      "Add objects, change styles, or expand photos and generations. ",
    icon: FaRegEdit,
    isNew: true,
    bgColor: "bg-gradient-to-b from-purple-900 to-purple-900/30 ",
    rounded: false,
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync any video to audio.",
    icon: PiMicrophoneStageFill,
    isNew: true,
    bgColor: "bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/30  ",
    rounded: false,
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: BsPersonArmsUp,
    isNew: true,
    bgColor: "bg-text",
    rounded: false,
  },
  {
    id: 8,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    img: "/images/brain.svg",
    isNew: false,
    rounded: true,
  },
];
