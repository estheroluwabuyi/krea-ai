import Image from "next/image";
import HeroTexts from "./HeroTexts";
import Dots from "./Dots";

function Hero() {
  return (
    // 1st Hero Section
    <div className="px-8 lg:pl-12 lg:pr-1 pt-15 lg:pt-25 pb-5">
      <div className="flex flex-col lg:flex-row justify-center  gap-15  ">
        <div className="w-full lg:w-3/5  lg:h-[400px]  rounded-4xl shadow-md">
          <div className="relative w-full h-[400px] flex overflow-hidden rounded-xl lg:rounded-4xl">
            <Image
              src="/images/model4.jpg"
              alt="Model"
              className="object-cover w-1/3 h-full"
              width={400}
              height={400}
              priority
            />
            <Image
              src="/images/landscape4.jpg"
              alt="Landscape"
              className="object-cover w-1/3 h-full"
              width={400}
              height={400}
              priority
            />
            <Image
              src="/images/naruto3.jpg"
              alt="Naruto"
              className="object-cover w-1/3 h-full"
              width={400}
              height={400}
              priority
            />
            <HeroTexts
              centerTexts="WAN 2.2"
              bottomTextsHeader="WAN 2.2 Image generation"
              bottomTextsTexts="Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures."
              textClass="max-w-lg"
              transformClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <button className=" absolute bottom-12 right-12 text-text bg-background  py-4 px-10 rounded-[2rem] font-semibold tracking-wide hidden sm:block z-200 hover:bg-[#1e293b] hover:text-[#f8f9fa] dark:hover:text-[#1e293b]  dark:hover:bg-[#f8f9fa] transition duration-500 ease-in-out">
              Try WAN 2.2
            </button>
          </div>
        </div>

        {/*2nd Hero Section */}
        <div className="hidden lg:block relative bg-gradient-to-b lg:w-2/5 h-[400px] from-bg-gray/20 to-gray-muted/90 rounded-l-4xl overflow-hidden shadow-md dark:bg-gradient-to-b">
          {/* Overlay Sections */}
          <div>
            <div className="bg-accent-blue w-[85%] h-[700px] absolute top-0 -right-6 rotate-7 transition duration-500 ease-in-out"></div>

            <div className="absolute bg-background w-[85%] -rotate-3 origin-top h-[700px] -top-10 right-0 transition duration-500 ease-in-out">
              <div className="bg-gradient-to-br w-full h-full from-accent-blue to-accent-blue/20 transition duration-500 ease-in-out"></div>
            </div>

            <div className="bg-gray-700 absolute top-1/2 -right-15 -translate-y-1/2 w-[80%] h-[70%]  -rotate-5 transition duration-500 ease-in-out">
              <div className="w-full h-full  bg-gradient-to-b  from-text to-text/50 transition duration-500 ease-in-out"></div>
            </div>

            <div className=" absolute top-1/2 -right-15 -translate-y-1/2 w-[80%] h-[70%]   bg-background rotate-3">
              <div className="w-full h-full  bg-gradient-to-bl  from-accent-brown to-accent-brown/70 grid place-items-center transition duration-500 ease-in-out">
                <Image
                  src="/images/bottle2.png"
                  alt="bottle"
                  width={150}
                  height={300}
                  className="w-[140px] h-auto -rotate-27 object-contain"
                />
              </div>
            </div>
          </div>
          <HeroTexts
            centerTexts="Open Sour"
            bottomTextsHeader="FLUX.1 Krea"
            bottomTextsTexts="We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea image."
            textClass="max-w-2xl"
            transformClass="top-1/2 right-0 -translate-y-1/2"
          />
        </div>
      </div>

      <Dots />
    </div>
  );
}

export default Hero;
