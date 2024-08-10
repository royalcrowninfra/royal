'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: '/images/gallery/womenDay.jpg', title: "International Women's Day celebration" },
  { src: '/images/gallery/holi.jpg', title: 'Holi Celebration' },
  { src: '/images/gallery/championship.jpg', title: "Team Raigad Won State Football match it's SPONSORED by QUALCON" },
  { src: '/images/gallery/championship.jpg', title: 'Builders Cricket Championship (BCC-2020)' },
  { src: '/images/gallery/topPerforming.jpg', title: 'Top Performing Channel Partner 2020' },
  { src: '/images/gallery/treePlantetion.jpg', title: '#TreePlantation_The Positive Initiative' },
  { src: '/images/gallery/womenDay.jpg', title: "International Women's Day Celebration 2022" },
  { src: '/images/gallery/holi.jpg', title: 'Diwali Celebration 2021' },
  { src: '/images/gallery/holi.jpg', title: 'Holi Celebration 2022' },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className='container mx-auto py-16 px-4'>
      <motion.h1 
        className='text-4xl font-bold text-center mb-12 text-gradient'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Memorable Moments
      </motion.h1>
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {photos.map((photo, index) => (
          <motion.div 
            key={index} 
            className='bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300'
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className='relative w-full h-64 overflow-hidden'>
              <motion.img
                src={photo.src}
                alt={photo.title}
                className='w-full h-full object-cover'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(photo)}
              />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='text-white text-lg font-semibold text-center px-4'>Click to enlarge</p>
              </div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>{photo.title}</h2>
              <p className='text-gray-600 text-sm'>Captured moments of joy and success</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <motion.div 
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.title}
            className='max-w-full max-h-full object-contain'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button
            className='absolute top-4 right-4 text-white text-2xl'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImage(null)}
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;