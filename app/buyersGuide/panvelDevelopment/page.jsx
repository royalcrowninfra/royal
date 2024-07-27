'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import Link from 'next/link';

const PanvelDevelopment = () => {
  const contentBlocks = [
    {
      title: 'Upcoming Navi Mumbai International Airport (NMIA)',
      description:
        'Allowing you the luxury of circumventing the Mumbai jams and take your flight directly from NMIA located within striking distance of your Royal Crown home. ',
      imagePath: '/images/buyersGuide/panveldevelopment/airport.jpg',
    },
    {
      title: 'Upcoming Mumbai Trans Harbour Link (MTNL)',
      description:
        'Asia longest the world second largest sea link allowing you convenient access Mumbai ',
      imagePath: '/images/buyersGuide/panveldevelopment/local.jpg',
    },
    {
      title: 'Multimodal Corridor',
      description:
        'The 126 km long Alibag–Virar corridor enables connectivity to the Airport and other nodes of MMR and Navi Mumbai.',
      imagePath: '/images/buyersGuide/panveldevelopment/highway.jpg',
    },
    {
      title: 'Panvel–Karjat Railway Line',
      description:
        'Allows connectivity to the central suburbs.',
      imagePath: '/images/buyersGuide/panveldevelopment/karjatpanvel.jpg',
    },
    {
      title: 'CST–Panvel Fast Railway Corridor',
      description:
        'Allows speedier access to Mumbai. ',
      imagePath: '/images/buyersGuide/panveldevelopment/panvelcst.jpg',
    },
    {
      title: 'NAINA (NAVI MUMBAI AIRPORT INFLUENCE NOTIFIED AREA)',
      description:
        'The smart city spread across 600 square kilometres planned around the International Airport will be a residential, commercial, retail, entertainment and financial hub of the future. It will offer residents, a lifestyle rivalling that of Mumbai with a clear advantage of Space, Nature, Aesthetics and speed of Accessibility currently absent in the maximum city. It goes without saying that for these reasons alone, Qualcon Dreams properties will command the high appreciation levels guaranteeing the best value on their investment.',
      imagePath: '/images/buyersGuide/panveldevelopment/naina.jpg',
    },
    // ... other content blocks
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/header/whoweare.jpg')" }}
      >
        <div className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
          </h1>
        </div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className="space-y-8 py-8">
        {contentBlocks.map((block, index) => (
          <div key={index} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className={`lg:w-1/2 flex flex-col items-center justify-center text-center p-6 sm:p-8 ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
                  <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="text-xl sm:text-2xl font-bold text-red-600 mb-4">{block.title}</motion.h2>
                  <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="text-sm sm:text-base text-gray-700 mb-6">{block.description}</motion.p>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src={block.imagePath}
                    alt={block.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PanvelDevelopment;