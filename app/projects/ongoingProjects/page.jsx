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
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, x: 100 }
    }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    className="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col h-full border-2 border-red-800"
  >
    <div className="relative h-48 sm:h-56 md:h-64">
      <Image
        src={project.image}
        layout="fill"
        objectFit="cover"
        alt={project.title}
      />
    </div>
    <div className="p-4 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      </div>
      <Link href={`/projects/ongoingProjects/${project.slug}`}>
        <span className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-md hover:from-red-700 hover:to-red-900 transition duration-300 text-sm sm:text-base inline-block text-center">
          Read More
        </span>
      </Link>
    </div>
  </motion.div>
);

const OngoingProjects = () => {
  return (
    <div>
      <div className="bg-[url('/images/projectBackground.jpg')] bg-center bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
        <motion.h1
          initial='offscreen'
          whileInView={"onscreen"}
          variants={titleVariants}
          className='container py-32 text-6xl font-semibold text-white tracking-widest text-center lg:py-32'
        >
          Ongoing Projects
        </motion.h1>
      </div>

      <div className='container mx-auto px-4'>
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className='text-4xl font-bold tracking-wider text-center uppercase'
            >
            </motion.h1>
          </div>

          <div className='grid py-8 gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
