import Image from "next/image";
import HeroTexts from "./HeroTexts";

function Hero() {
  return (
    // 1st Hero Section
    <div className="flex justify-center lg:pr-1 gap-12 lg:pl-20">
      <div className=" w-[58%] h-[500px]  rounded-3xl">
        <div className="relative w-full h-[500px] flex overflow-hidden rounded-3xl">
          <Image
            src="/images/model4.jpg"
            alt="Model"
            className="object-cover w-1/3 h-full"
            width={500}
            height={500}
            priority
          />
          <Image
            src="/images/landscape4.jpg"
            alt="Landscape"
            className="object-cover w-1/3 h-full"
            width={500}
            height={500}
            priority
          />
          <Image
            src="/images/naruto3.jpg"
            alt="Naruto"
            className="object-cover w-1/3 h-full"
            width={500}
            height={500}
            priority
          />
          <HeroTexts
            centerTexts="WAN 2.2"
            bottomTextsHeader="WAN 2.2 Image generation"
            bottomTextsTexts="Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures."
            textClass="max-w-lg"
            transformClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <button className="absolute bottom-12 right-12 text-text bg-background  py-4 px-10 rounded-[2rem] font-semibold tracking-wide">
            Try WAN 2.2
          </button>
        </div>
      </div>

      {/*2nd Hero Section */}
      <div className="relative bg-gradient-to-b w-[42%] h-[500px] from-bg-gray/20 to-gray-muted/90 rounded-l-3xl overflow-hidden">
        <HeroTexts
          centerTexts="Open Sour"
          bottomTextsHeader="FLUX.1 Krea"
          bottomTextsTexts="We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea image."
          textClass="max-w-2xl"
          transformClass="top-1/2 right-0 -translate-y-1/2"
        />

        {/* Overlay Sections */}
        <div>
          <div className="bg-accent-blue w-[85%] h-[700px] absolute top-0 -right-6 rotate-7"></div>

          <div className="absolute bg-background w-[85%] -rotate-3 origin-top h-[700px] -top-10 right-0">
            <div className="bg-gradient-to-b w-full h-full from-accent-blue to-accent-blue/5"></div>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] h-[70%]  bg-gradient-to-b  from-black to-black/85"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
