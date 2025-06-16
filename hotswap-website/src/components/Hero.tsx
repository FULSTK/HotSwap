'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFEEF] overflow-hidden">
      {/* Background image, full width, right-aligned */}
      <Image
        src="/mockup-van.svg"
        alt="HotSwap Van"
        fill
        className="object-cover object-right z-0"
        priority
      />

      {/* Text overlay on left side */}
      <div className="relative z-10 flex items-center justify-start min-h-[600px] md:min-h-[700px] lg:min-h-[861px] px-6 sm:px-12 md:px-16 bg-[#FFFEEF] bg-opacity-90 w-full md:w-[50%] lg:w-[45%]">
        <div className="max-w-lg">
          <h1 className="text-[#0E3521] text-3xl sm:text-4xl md:text-5xl font-rotunda font-black leading-tight">
            Northern Colorado’s <br />
            <em className="italic not-italic font-light">quickest</em>{' '}
            water heater <br />
            replacements!
          </h1>

          {/* Call Button */}
          <button className="mt-6 flex items-center gap-3 bg-[#E24217] text-[#FFFEEF] font-rotunda text-[20px] sm:text-[22px] md:text-[24px] font-extrabold px-6 py-3 rounded-md transition hover:brightness-110 w-fit">
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
    </section>
  );
}
