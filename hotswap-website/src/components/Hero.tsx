'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFEEF] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[861px] w-full">
        {/* Left text section */}
        <div className="w-full lg:w-[50%] flex items-center px-6 sm:px-12 md:px-16 bg-[#FFFEEF]">
        <div className="max-w-[680px] w-full pt-[5vh] px-6 sm:px-12 md:px-16 flex flex-col gap-y-4">
        {/* Line 1 */}
        <h1 className="text-[#0E3521] font-rotunda font-black leading-[1.1] whitespace-nowrap text-[clamp(2rem, 5vw, 64px)]">
            Northern Colorado’s
        </h1>

        {/* Line 2: quickest + water heater */}
        <div className="flex flex-wrap items-baseline whitespace-nowrap">
            <span
            style={{
                fontFamily: '"redondo-ave", sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(3rem, 7vw, 96px)',
                lineHeight: '1',
                color: '#0E3521',
                marginRight: '0.5rem',
            }}
            >
            quickest
            </span>
            <span className="text-[#0E3521] font-rotunda font-black leading-[1.1] text-[clamp(2.5rem, 6vw, 64px)]">
            water heater
            </span>
        </div>

        {/* Line 3 */}
        <h1 className="text-[#0E3521] font-rotunda font-black leading-[1.1] text-[clamp(2.5rem, 6vw, 64px)]">
            replacements!
        </h1>

        {/* Call Button */}
        <button className="mt-8 flex items-center gap-3 bg-[#E24217] text-[#FFFEEF] font-rotunda text-[clamp(1rem, 2vw, 24px)] font-extrabold px-6 py-3 rounded-md transition hover:brightness-110 w-fit">
            <Image
            src="/phone-white.svg"
            alt="Phone Icon"
            width={24}
            height={24}
            className="w-6 h-6"
            />
            CALL NOW!
        </button>
        </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-[50%] h-[861px] relative">
          <Image
            src="/van-hero.svg"
            alt="HotSwap Van Cropped"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
