'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnquiryButton = () => {
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

  return (
    <>
      {/* Animated Enquiry Button */}
      <motion.button
        className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rotate-90 origin-right z-50 rounded-lg shadow-lg"
        onClick={togglePopup}
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
      >
        ENQUIRY
      </motion.button>

      {/* Animated Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  background: [
                    "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
                    "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              />

              <motion.form
                variants={formAnimation}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                <motion.h2 variants={itemAnimation} className="text-2xl font-bold mb-4 text-center text-gray-800">Contact Us</motion.h2>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 transition-all duration-300"
                    placeholder="Your email"
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemAnimation}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
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

export default EnquiryButton;