'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#F5F4DC] w-full py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left side: Text + Button */}
      <div className="max-w-xl text-[#0E3521]">
        <h1 className="text-4xl md:text-5xl leading-tight font-rotunda font-black">
          Northern Colorado’s <br />
          <em className="italic not-italic font-light">quickest</em>{' '}
          water heater <br />
          replacements!
        </h1>

        {/* Call Now Button */}
        <button className="mt-6 flex items-center gap-3 bg-[#E24217] text-[#FFFEEF] font-rotunda text-[24px] font-extrabold px-6 py-3 rounded-md transition hover:brightness-110">
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

      {/* Right side: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/mockup-van.svg"
          alt="HotSwap Van"
          width={600}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
