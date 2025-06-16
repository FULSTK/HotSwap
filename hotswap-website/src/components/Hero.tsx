'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[861px] bg-[#FFFEEF] overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="/mockup-van.svg"
        alt="HotSwap Van"
        fill
        className="object-cover object-right"
        priority
      />

      {/* Left overlay box */}
      <div className="relative z-10 h-full w-full md:w-[963px] bg-[#FFFEEF] flex flex-col justify-center px-6 sm:px-12 md:px-20">
        <h1 className="text-[#0E3521] text-4xl md:text-5xl leading-tight font-rotunda font-black max-w-xl">
          Northern Colorado’s <br />
          <em className="italic not-italic font-light">quickest</em>{' '}
          water heater <br />
          replacements!
        </h1>

        {/* Call Now Button */}
        <button className="mt-6 flex items-center gap-3 bg-[#E24217] text-[#FFFEEF] font-rotunda text-[24px] font-extrabold px-6 py-3 rounded-md transition hover:brightness-110 w-fit">
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
    </section>
  );
}
