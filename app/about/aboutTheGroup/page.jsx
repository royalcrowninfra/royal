'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCity, FaProjectDiagram } from 'react-icons/fa';

const SectionCard = ({ icon: Icon, title, content }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <div className="bg-purple-600 p-4">
      <Icon className="text-white text-4xl mb-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  </motion.div>
);

export default function Home() {
  const sections = [
    {
      icon: FaClipboardList,
      title: "Planning",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque accusamus tempore fuga pariatur expedita eius officiis laudantium obcaecati earum? Iure iste dicta earum nisi non aliquid totam vel architecto!"
    },
    {
      icon: FaCity,
      title: "Buildings",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo quod repudiandae inventore doloremque corrupti, commodi distinctio? Beatae, animi at reprehenderit nemo voluptatem magnam eveniet ad et, blanditiis tenetur error."
    },
    {
      icon: FaProjectDiagram,
      title: "Our Projects",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint dicta, cum quia delectus optio explicabo temporibus molestias saepe commodi unde, pariatur numquam quisquam laudantium quae cupiditate. Vel, eum culpa."
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/header/aboutgroup.jpg')" }}
      >
        <div className="container mx-auto py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          {/* Who are we? */}
        </div>
      </motion.div>
      
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl md:text-4xl font-bold my-8 text-center"
      >
        Architectural Agency
      </motion.h1>
      
      {/* Main Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <SectionCard key={index} {...section} />
          ))}
        </div>
      </div>

      {/* Secondary Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col md:flex-row bg-white text-black"
      >
        <div className="md:w-1/2 relative">
          <Image src="/images/header/aboutCompany.jpg" alt="Modern House" width={600} height={400} layout="responsive" objectFit="cover" />
          <div className="absolute top-0 bottom-0 -left-4 w-4 bg-purple-600"></div>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Company</h2>
          <p className="mb-6 text-gray-600">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white py-2 px-4 rounded-md inline-block transition duration-300 hover:bg-purple-700"
          >
            {/* VIEW MORE */}
          </motion.button>
        </div>
      </motion.div>
      
    </div>
  );
}