'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/images/homepage/bann-one.png', text: 'Unlocking Doors, Finding Homes' },
  { src: '/images/homepage/bann-two.png', text: 'Your Dream Home Awaits' },
  { src: '/images/homepage/bann-three.png', text: 'Building Futures, One Home at a Time' },
  // Add more image objects with their respective texts
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
            >
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                {images[currentIndex].text}
              </h2>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {!isLoading && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full hover:bg-opacity-75 transition-all text-sm sm:text-base z-10"
            aria-label="Previous image"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full hover:bg-opacity-75 transition-all text-sm sm:text-base z-10"
            aria-label="Next image"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSection;