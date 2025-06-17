'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFEEF] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[861px] w-full">
        {/* Left text section */}
        <div className="w-full lg:w-[50%] flex items-center px-6 sm:px-12 md:px-16 bg-[#FFFEEF]">
          <div className="max-w-xl">
            {/* Line 1: Northern Colorado’s */}
            <h1 
            style={{ fontFamily: '"rotunda-variable", Poppins, Helvetica, sans-serif' }}
            className="text-[#0E3521] font-rotunda font-black leading-none text-[clamp(2rem,6vw,3.5rem)] whitespace-nowrap"
            >
              Northern Colorado’s
            </h1>

            {/* Line 2: quickest water heater */}
            <h1 className="flex flex-wrap items-center gap-2 leading-none mt-2">
              <span
                style={{
                  fontFamily: '"redondo-ave", sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  lineHeight: '1',
                  color: '#0E3521',
                }}
              >
                quickest
              </span>
              <span className="text-[#0E3521] font-rotunda font-black text-[clamp(2rem,5vw,3rem)] leading-none">
                water heater
              </span>
            </h1>

            {/* Line 3: replacements! */}
            <h1 className="text-[#0E3521] font-rotunda font-black leading-none text-[clamp(2rem,5vw,3rem)] mt-2">
              replacements!
            </h1>

            {/* Call Now Button */}
            <button className="mt-6 flex items-center gap-3 bg-[#E24217] text-[#FFFEEF] font-rotunda text-[clamp(1rem,2vw,1.5rem)] font-extrabold px-6 py-3 rounded-md transition hover:brightness-110 w-fit">
              <Image
                src="/phone-white.svg"
                alt="Phone Icon"
                width={20}
                height={20}
                className="w-5 h-5"
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
