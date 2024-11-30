'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ComingSoonGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.5
      }
    }
  };

  const ComingSoonWord = ({ word }) => {
    return (
      <motion.span
        className='inline-block mx-2'
        variants={wordVariants}
      >
        {word}
      </motion.span>
    );
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-50 p-4'>
      <motion.div
        className='text-center'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className='text-6xl md:text-8xl font-bold text-blue-800 mb-8'
          variants={textVariants}
        >
          {"COMING SOON".split('').map((letter, index) => (
            <ComingSoonWord key={index} word={letter} />
          ))}
        </motion.h1>

        <motion.p
          className='text-2xl md:text-3xl text-blue-600 mb-12'
          variants={textVariants}
        >
          We're preparing something amazing for our gallery
        </motion.p>

        <motion.div
          className='flex justify-center space-x-4'
          variants={textVariants}
        >
          <Link
            href='/'
            className='bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Stay Tuned
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoonGallery;