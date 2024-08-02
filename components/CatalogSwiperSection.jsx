'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'Project Four, Panvel',
    image: '/images/projects/featuredProject1.jpg',
    details: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
    href: '/projects/ongoingProjects/project-1'
  },
  {
    id: 2,
    name: 'Project One, Thane',
    image: '/images/projects/featuredProject2.jpg',
    details: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
    href: '/projects/ongoingProjects/project-2'
  },
  {
    id: 3,
    name: 'Project Two, Kalyan',
    image: '/images/projects/featuredProject3.jpg',
    details: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
    href: '/projects/ongoingProjects/project-3'
  },
];

const ProjectCard = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
    >
      <img src={project.image} alt={project.name} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.name}</h3>
          <ul className="list-disc pl-5 mb-4 text-xs sm:text-sm">
            {project.details.map((detail, idx) => (
              <li key={idx} className="text-gray-600">{detail}</li>
            ))}
          </ul>
        </div>
        <Link href={project.href} className="mt-auto">
          <button className="w-full py-2 px-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md hover:from-teal-500 hover:to-blue-600 transition duration-300 text-sm sm:text-base">
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const OngoingProjects = () => {
  return (
    <div
      className="bg-[url('/images/header/reviewsBackground.jpg')] bg-cover bg-center bg-fixed relative"
      alt='ongoingProjects'
    >
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-black">Ongoing Projects</h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;