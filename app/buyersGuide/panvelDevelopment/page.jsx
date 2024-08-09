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
    {
      title: 'ATAL SETU',
      description:
        'The smart city spread across 600 square kilometres planned around the International Airport will be a residential, commercial, retail, entertainment and financial hub of the future. It will offer residents, a lifestyle rivalling that of Mumbai with a clear advantage of Space, Nature, Aesthetics and speed of Accessibility currently absent in the maximum city. It goes without saying that for these reasons alone, Qualcon Dreams properties will command the high appreciation levels guaranteeing the best value on their investment.',
      imagePath: '/images/buyersGuide/panveldevelopment/atalsetu.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{ backgroundImage: "url('/images/buyersGuide/panveldevelopment/futureDevelopment.jpg')" }}
      >
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
          </h1>
        </motion.div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className="space-y-8 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              <div className="bg-blue-600 p-4">
                <h2 className="text-xl font-semibold text-white text-center">{block.title}</h2>
              </div>
              <div className="flex flex-col md:flex-row">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 p-6">
                      <p className="text-sm text-gray-700">{block.description}</p>
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
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2">
                      <Image
                        src={block.imagePath}
                        alt={block.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <p className="text-sm text-gray-700">{block.description}</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PanvelDevelopment;