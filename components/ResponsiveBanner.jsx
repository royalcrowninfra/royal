import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResponsiveBanner = () => {
  return (
    <div className="w-full bg-cyan-700 py-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-800 animate-gradient-x"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 sm:mb-0">
          {/* Updated Image component with hover animation */}
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mr-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <Image
              src="/images/header/logo.png"
              alt="Royal Crown Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Tagline with fade-in animation */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-0 animate-fade-in">
          Our doors are always open for you
        </p>

        {/* CTA Button with hover and click animations */}
        <Link href="/contact" passHref>
          <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 lg:py-3 lg:px-6 rounded transition duration-300 ease-in-out cursor-pointer transform hover:scale-105 active:scale-95">
            Book A Site Visit
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveBanner;