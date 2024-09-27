import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResponsiveBanner = () => {
    return (
        <div className="w-full bg-cyan-700 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                    <div className="w-12 h-20 relative mr-4 md:w-24">
                        <Image
                            src="/images/header/logo.png"
                            alt="royalcrown Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-white text-xl font-semibold">Royal Crown</h1>
                </div>
                <p className="text-white text-lg mb-4 sm:mb-0">
                    Our doors are always open for you
                </p>
                <Link href="/contact" passHref>
                    <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out cursor-pointer">
                        Book A Site Visit
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ResponsiveBanner;