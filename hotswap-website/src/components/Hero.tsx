'use client';

import Image from 'next/image';

export default function Hero() {
  return (
<section className="relative w-full bg-[#FFFEEF] overflow-hidden">
  <div className="grid lg:grid-cols-2 min-h-[861px] w-full max-w-[1440px] mx-auto">
    {/* Left: Text */}
    <div className="flex items-center justify-center px-6 sm:px-12 md:px-16 bg-[#FFFEEF]">
      <div className="max-w-xl">
        <h1 className="text-[#0E3521] font-rotunda font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight space-y-1">
          <div>Northern Colorado’s</div>
          <div className="flex flex-wrap items-end gap-x-2">
            <span
              style={{
                fontFamily: '"redondo-ave", sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(2.5rem, 6vw, 80px)',
                lineHeight: '1',
                display: 'inline-block',
              }}
            >
              quickest
            </span>
            <span className="text-[#0E3521]">water heater</span>
          </div>
          <div>replacements!</div>
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

    {/* Right: Van Image */}
    <div className="relative h-full min-h-[861px] w-full">
      <Image
        src="/van-hero.svg"
        alt="HotSwap Van Cropped"
        fill
        className="object-cover object-right"
        priority
      />
    </div>
  </div>
</section>

  );
}
