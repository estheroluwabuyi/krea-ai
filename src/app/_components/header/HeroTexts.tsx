type HeroTextsProps = {
  centerTexts: string;
  bottomTextsHeader: string;
  bottomTextsTexts: string;
  textClass: string;
  transformClass: string;
};

function HeroTexts({
  centerTexts,
  bottomTextsHeader,
  textClass,
  bottomTextsTexts,
  transformClass,
}: HeroTextsProps) {
  return (
    <div className="absolute top-0 left-0 h-full w-full text-background z-100">
      <h3 className="uppercase absolute top-12 left-12 text-[1.2rem] tracking-wide">
        New Image Model
      </h3>
      <h1
        className={`absolute text-[3rem] lg:text-[7rem] font-bold  font-monda ${transformClass}`}
      >
        {centerTexts}
        {/* top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
      </h1>

      <div className="absolute bottom-12 left-12">
        <h2 className="text-[1.5rem] lg:text-[2.5rem] font-semibold pb-2 font-monda">
          {bottomTextsHeader}
        </h2>
        <p
          className={`text-[1.25rem] text-background/90 ${textClass} tracking-wide `}
        >
          {bottomTextsTexts}
        </p>
      </div>
    </div>
  );
}

export default HeroTexts;
