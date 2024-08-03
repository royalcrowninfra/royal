'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

const ProjectCard = ({ project }) => {
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
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: 100 }
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col h-full border-2 border-red-800"
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
          <button className="w-full py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-md hover:from-red-700 hover:to-red-900 transition duration-300 text-sm sm:text-base">
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
      className="bg-gray-100 bg-center bg-fixed relative py-12 sm:py-16 md:py-20"
      alt='ongoingProjects'
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-black">Ongoing Projects</h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 sm:mb-8"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OngoingProjects;