'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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
        className="fixed left-48 bottom-4 z-50"
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
            onClick={togglePopup}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
            >
              <motion.form
                variants={formAnimation}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                <motion.h2 variants={itemAnimation} className="text-2xl font-bold mb-4 text-center text-gray-800">Contact Us</motion.h2>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Full Name"
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Enter email"
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Phone"
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemAnimation}
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Submit
                </motion.button>
              </motion.form>

              <motion.button
                onClick={togglePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 bg-white bg-opacity-50 rounded-full p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;