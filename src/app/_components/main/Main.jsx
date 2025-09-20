import { features } from "@/app/data/features";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

function Main() {
  return (
    <main className="lg:px-12 ">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[1.7rem] lg:text-[2rem] my-5">
          Generate
        </h2>
        <button className="text-accent-blue flex gap-3 items-center font-semibold">
          <FaChevronDown size={15} /> <span>Show all</span>
        </button>
      </div>

      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-7 ">
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
                      ? `rounded-full border-dashed border-2  bg-bg-gray/15 p-1 w-[30px] h-[30px] grid place-items-center`
                      : `${feature.bgColor} p-2.5 rounded-[7px] w-[30px]`
                  }
                >
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={15}
                    height={15}
                    className={feature.id === 3 ? "rotate-80" : "rotate-0"}
                  />
                </div>
              ) : (
                <div
                  className={`${feature.bgColor} p-2.5 rounded-[7px] text-[15px] text-background`}
                >
                  <feature.icon />
                </div>
              )}
            </div>

            <div className="leading-tight">
              <div className="flex gap-3 items-center font-semibold  text-[1.15rem]">
                <h2 className="">{feature.title}</h2>
                {feature.isNew && (
                  <button className="bg-accent-blue text-background py-1 px-2.5 rounded-2xl text-[1rem] ">
                    New
                  </button>
                )}
              </div>
              <p className="text-text/80 leading-[15px] w-[220px] text-[1.1rem]">
                {feature.description}
              </p>
            </div>

            <button className="bg-bg-gray/15 px-6 py-2 rounded-4xl font-semibold">
              Open
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
