import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Dots() {
  const dots: number[] = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="flex items-center justify-between w-full lg:pr-12 mt-4">
      <div className="flex gap-4 justify-center flex-1">
        {dots.map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot === 0 ? "bg-text" : "bg-gray/30 dark:bg-gray/30"
            }`}
          ></div>
        ))}
      </div>

      <div className="hidden lg:flex gap-2 dark:text-text">
        <button className="bg-gray/15 dark:bg-gray/30 p-1.5 rounded-full">
          <FaChevronLeft size={18} />
        </button>
        <button className="bg-gray/15 dark:bg-gray/30 p-1.5 rounded-full">
          <FaChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
