'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButton = () => {
  const [isCallInitiated, setIsCallInitiated] = useState(false);

  const initiateCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your actual phone number
    setIsCallInitiated(true);
    setTimeout(() => setIsCallInitiated(false), 3000); // Reset after 3 seconds
  };

  const phoneIconAnimation = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.9
    },
    moveLeftRight: {
      x: [0, 10, 0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const radioWaveAnimation = (index) => ({
    scale: [1, 1.2, 1.4, 1.6, 1.8, 2],
    opacity: [0.1, 0.2, 0.4, 0.3, 0.2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "easeInOut",
      delay: index * 0.2
    }
  });

  return (
    <>
      <motion.div
        className="fixed left-4 sm:left-8 md:left-16 lg:left-24 bottom-4 z-50"
        initial="initial"
        animate="moveLeftRight"
        whileHover="hover"
        whileTap="tap"
        variants={phoneIconAnimation}
      >
        <motion.div className="relative">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-full bg-blue-300"
              animate={radioWaveAnimation(index)}
            />
          ))}
          <motion.button
            className="relative bg-blue-500 text-white p-3 rounded-full shadow-lg"
            onClick={initiateCall}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isCallInitiated && (
          <motion.div
            className="fixed bottom-16 left-4 sm:left-8 md:left-16 lg:left-24 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            Initiating call...
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;