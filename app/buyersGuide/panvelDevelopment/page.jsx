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
        'No job is too big or too small for our plumbing professionals. Each our plumber at our family-owned company has been professionally trained and background checked to ensure your safety. You can expect our technician to come to your door neatly dressed with a courteous smile. Customer service is our top priority!',
      imagePath: '/images/buyersGuide/panveldevelopment/local.jpg',
    },
    {
      title: 'Multimodal Corridor',
      description:
        'No job is too big or too small for our plumbing professionals. Each our plumber at our family-owned company has been professionally trained and background checked to ensure your safety. You can expect our technician to come to your door neatly dressed with a courteous smile. Customer service is our top priority!',
      imagePath: '/images/buyersGuide/panveldevelopment/highway.jpg',
    },
    {
      title: 'Panvel–Karjat Railway Line',
      description:
        'No job is too big or too small for our plumbing professionals. Each our plumber at our family-owned company has been professionally trained and background checked to ensure your safety. You can expect our technician to come to your door neatly dressed with a courteous smile. Customer service is our top priority!',
      imagePath: '/images/buyersGuide/panveldevelopment/karjatpanvel.jpg',
    },
    {
      title: 'CST–Panvel Fast Railway Corridor',
      description:
        'No job is too big or too small for our plumbing professionals. Each our plumber at our family-owned company has been professionally trained and background checked to ensure your safety. You can expect our technician to come to your door neatly dressed with a courteous smile. Customer service is our top priority!',
      imagePath: '/images/buyersGuide/panveldevelopment/panvelcst.jpg',
    },
    {
      title: 'NAINA (NAVI MUMBAI AIRPORT INFLUENCE NOTIFIED AREA)',
      description:
        'No job is too big or too small for our plumbing professionals. Each our plumber at our family-owned company has been professionally trained and background checked to ensure your safety. You can expect our technician to come to your door neatly dressed with a courteous smile. Customer service is our top priority!',
      imagePath: '/images/buyersGuide/panveldevelopment/naina.jpg',
    },
    // ... other content blocks
  ];

  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants}
      className="space-y-8 py-8">
      {contentBlocks.map((block, index) => (
        <div key={index} className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
            >
              <div className="md:w-1/2 flex flex-col items-center justify-center text-center p-8">
                <motion.h2
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={tagVariants}
                  className="text-2xl font-bold text-red-600 mb-4">{block.title}</motion.h2>
                <motion.p
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="text-gray-700 mb-6">{block.description}</motion.p>
                {/* <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  Learn More
                </Button> */}
              </div>
              <div className="md:w-1/2">
                <Image
                  src={block.imagePath}
                  alt={block.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default PanvelDevelopment;