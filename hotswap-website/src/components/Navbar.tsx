// src/components/Navbar.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const scrollToEstimate = () => {
    const estimateSection = document.getElementById('estimate');
    if (estimateSection) {
      estimateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E24217] w-full shadow-md">
      <div className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/hotswap-logo.svg"
            alt="HotSwap Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Estimate Button */}
        <button
            onClick={scrollToEstimate}
            className="bg-[#F5F4DC] text-[#1E2B1A] font-rotunda font-extrabold text-[20px] px-6 py-3 rounded-md transition hover:brightness-90"
            >
            GET AN ESTIMATE
            </button>
      </div>
    </header>
  );
}
