import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResponsiveBanner = () => {
  return (
    <div className="w-full bg-cyan-700 py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 sm:mb-0">
          {/* Updated Image component */}
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mr-4">
            <Image
              src="/images/header/logo.png" // Assuming this is the image you referenced
              alt="Royal Crown Logo"
              fill
              style={{ objectFit: 'contain' }} // Tailored to the new Image API
            />
          </div>
          {/* <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">Royal Crown</h1> */}
        </div>

        {/* Tagline */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-0">
          Our doors are always open for you
        </p>

        {/* CTA Button */}
        <Link href="/contact" passHref>
          <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 lg:py-3 lg:px-6 rounded transition duration-300 ease-in-out cursor-pointer">
            Book A Site Visit
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveBanner;
