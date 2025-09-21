import { features } from "@/app/data/features";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

function Features() {
  return (
    // <main className="lg:px-12 ">
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[1.5rem] lg:text-[1.8rem] my-5 dark:text-text">
          Generate
        </h2>
        <button className="text-accent-blue flex gap-3 items-center font-semibold">
          <FaChevronDown size={15} /> <span>Show all</span>
        </button>
      </div>

      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-7 pb-10">
        {features?.map((feature) => (
          <li
            key={feature.id}
            className="flex  justify-center gap-3 items-center"
          >
            <div>
              {feature.img ? (
                <div
                  className={
                    feature.rounded
                      ? `rounded-full border-dashed border-2  border-gray/70 p-0.5 w-[28px] h-[28px] grid place-items-center `
                      : `${feature.bgColor} p-2.5 rounded-[7px] w-[30px]`
                  }
                >
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={28}
                    height={28}
                    className={
                      feature.id === 3 ? "rotate-80 " : "rotate-0  p-0.5"
                    }
                  />
                </div>
              ) : (
                <div
                  className={`${
                    feature.bgColor
                  } p-2.5 rounded-[7px] text-[15px] text-background  ${
                    feature.id === 7 && "dark:bg-[#111111]"
                  } ${
                    feature.id === 4 || feature.id === 1 || feature.id === 6
                      ? " dark:from-gray dark:to-gray/20"
                      : ""
                  }
                  
                  `}
                >
                  {feature.icon && (
                    <feature.icon className="text-[18px] text-background dark:text-text" />
                  )}
                </div>
              )}
            </div>

            <div className="leading-tight">
              <div className="flex gap-3 items-center font-semibold  text-[1.17rem] ">
                <h2 className="dark:text-text">{feature.title}</h2>
                {feature.isNew && (
                  <div className="bg-accent-blue text-background py-1 px-2.5 rounded-2xl text-[1rem] dark:text-text">
                    New
                  </div>
                )}
              </div>
              <p className="text-text/80 leading-[15px] w-[200px] text-[1.14rem] ">
                {feature.description}
              </p>
            </div>

            <button className="bg-gray/15 dark:bg-gray/30 px-6 py-2 rounded-4xl font-semibold  text-[1.17rem] dark:text-text">
              Open
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Features;
