'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFEEF] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[861px] w-full">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] flex items-center justify-center px-6 sm:px-12 md:px-16 bg-[#FFFEEF]">
          <div className="max-w-[700px] w-full">
            <h1 className="text-[#0E3521] font-rotunda font-black text-[clamp(2rem,5vw,3.5rem)] leading-[1.15]">
              Northern Colorado’s<br />
              <span className="inline-block">
                <span
                  style={{
                    fontFamily: '"redondo-ave", sans-serif',
                    fontWeight: 400,
                    fontSize: '80px',
                    display: 'inline-block',
                    lineHeight: '1',
                    verticalAlign: 'middle',
                    marginRight: '0.25rem',
                  }}
                >
                  quickest
                </span>
                <span className="align-middle ml-1">water heater</span>
              </span>
              <br />
              replacements!
            </h1>

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

        {/* Right Section */}
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
