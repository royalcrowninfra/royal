'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/images/homepage/bann-one.png', text: 'Unlocking Doors, Finding Homes' },
  { src: '/images/homepage/bann-two.png', text: 'Your Dream Home Awaits' },
  { src: '/images/homepage/bann-three.png', text: 'Building Futures, One Home at a Time' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const statistics = [
    { startValue: 0, endValue: 5, label: "Under Construction Projects" },
    { startValue: 0, endValue: 15, label: "Years Of Expertise" },
    { startValue: 0, endValue: 605, label: "Happy Families" },
    { startValue: 0, endValue: 504, label: "Available Units" }
  ];

  const [counts, setCounts] = useState(statistics.map(stat => stat.startValue));

  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;

    const intervalIds = statistics.map((stat, index) => {
      const increment = (stat.endValue - stat.startValue) / totalFrames;
      let frame = 0;

      return setInterval(() => {
        frame++;
        if (frame <= totalFrames) {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.round(stat.startValue + increment * frame);
            return newCounts;
          });
        } else {
          clearInterval(intervalIds[index]);
        }
      }, frameRate);
    });

    return () => intervalIds.forEach(id => clearInterval(id));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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
    <div className="relative">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[535px] overflow-hidden">
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
              fill
              quality={100}
              priority
              onLoad={() => setIsLoading(false)}
              className="object-cover object-center"
            />
            {!isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
              >
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
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
      <div className="relative bottom-14 left-1/2 transform -translate-x-1/2 w-8/12 bg-gradient-to-r from-cyan-400  to-cyan-700 py-4 sm:py-6 md:py-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-white">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/4 text-center px-2 sm:px-4 mb-4 sm:mb-0"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                {counts[index]}+
              </div>
              <div className="text-xs sm:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
