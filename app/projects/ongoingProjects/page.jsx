'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { titleVariants } from '../../../utils/animation';
import { projects } from '../../../data/ongoingProjects';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 50 }
    }}
    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    className="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col h-full border-2 border-red-800"
  >
    <div className="relative h-48 sm:h-56 md:h-64">
      {/* Adding overlay to project card images */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <Image
        src={project.image}
        layout="fill"
        objectFit="cover"
        alt={project.title}
        className="z-0"
      />
    </div>
    <div className="p-4 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
        <ul className="space-y-2 mb-4">
          {(project.details || []).map((detail, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm sm:text-base text-gray-600 before:content-['•'] before:mr-2 before:text-red-800"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <Link href={`/projects/ongoingProjects/${project.slug}`}>
        <span className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-md hover:from-red-700 hover:to-red-900 transition duration-300 text-xs sm:text-sm md:text-base inline-block text-center">
          Read More
        </span>
      </Link>
    </div>
  </motion.div>
);

const OngoingProjects = () => {
  return (
    <div>
      {/* Hero section with overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Black overlay with 50% opacity */}
        <div className="bg-[url('/images/ongoing.jpg')] bg-center bg-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center relative">
          <motion.h1
            initial='offscreen'
            whileInView={"onscreen"}
            variants={titleVariants}
            className='container text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 tracking-widest text-center z-20' // Added z-20 to keep text above overlay
          >
            Ongoing Projects
          </motion.h1>
        </div>
      </div>

      <div className='container mx-auto px-4'>
        <div className='py-8 lg:py-16'>
          <div className='pt-4 pb-2 sm:pt-6 sm:pb-4'>
            <motion.h1
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center uppercase'
            >
            </motion.h1>
          </div>

          <div className='grid py-4 sm:py-6 md:py-8 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;