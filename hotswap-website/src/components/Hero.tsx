'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFEEF] overflow-hidden">
      {/* Two-column flex layout */}
      <div className="flex flex-col lg:flex-row items-stretch min-h-[861px] w-full">
        {/* Left text section */}
        <div className="w-full lg:w-[50%] flex items-center px-6 sm:px-12 md:px-16 bg-[#FFFEEF]">
          <div className="max-w-lg">
            <h1 className="text-[#0E3521] font-rotunda font-black leading-tight text-[clamp(2rem,5vw,3.5rem)]">
              Northern Colorado’s <br />
              <em className="italic not-italic font-light">quickest</em>{' '}
              water heater <br />
              replacements!
            </h1>

            {/* Call Button */}
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

        {/* Right fixed-width van image */}
        <div className="w-full lg:w-[50%] h-[861px] relative">
          <Image
            src="/mockup-van.svg"
            alt="HotSwap Van"
            fill
            style={{ objectFit: 'cover', objectPosition: 'left' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
