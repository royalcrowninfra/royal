// ''use client'
// import { useState, useEffect } from 'react';
// import { TbArrowUpRight } from 'react-icons/tb';
// import { Button } from './ui/button';
// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation } from 'swiper/modules';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { desVariants, tagVariants, titleVariants } from '../utils/animation';

// export default function FeaturedProjects() {
//   return (
//     <div className='py-8 lg:pt-2 bg-gray-100 shadow-md'> {/* Added bg-gray-100 and shadow-md */}
//       <div className='container'>
//         <motion.h1
//           initial="offscreen"
//           whileInView={"onscreen"}
//           variants={titleVariants}
//           className='py-4 text-4xl font-medium text-center lg:text-6xl lg:py-0 '
//         >
//           Ongoing Projects
//         </motion.h1>

//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           modules={[Navigation]}
//           className="mt-12"
//         >
//           <SwiperSlide className="swiper-slide">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
//               <Image src='/images/projects/featuredProject1.jpg' width={400} height={300} alt='Space World' className='w-full h-60 object-cover' />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">Space World</h3>
//                 <p className="text-sm text-gray-600">MAHARERA: P52000011751</p>
//                 <p className="text-sm"><i className="fas fa-map-marker-alt"></i> Neral</p>
//                 <p className="text-lg font-bold mt-2">11.5 LAKH ONWARDS*</p>
//                 <Button className='mt-4'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="swiper-slide">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
//               <Image src='/images/projects/featuredProject2.jpg' width={400} height={300} alt='Sarvam' className='w-full h-60 object-cover' />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">Sarvam</h3>
//                 <p className="text-sm text-gray-600">MAHARERA: P52000023662</p>
//                 <p className="text-sm"><i className="fas fa-map-marker-alt"></i> Taloja, Navi Mumbai</p>
//                 <p className="text-lg font-bold mt-2">30 LAKH ONWARDS*</p>
//                 <Button className='mt-4'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="swiper-slide">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
//               <Image src='/images/projects/featuredProject2.jpg' width={400} height={300} alt='Prakriti Sparsh' className='w-full h-60 object-cover' />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">Prakriti Sparsh</h3>
//                 <p className="text-sm text-gray-600">MAHARERA: P52000007309</p>
//                 <p className="text-sm"><i className="fas fa-map-marker-alt"></i> Panvel</p>
//                 <p className="text-lg font-bold mt-2">24.3 LAKH ONWARDS*</p>
//                 <Button className='mt-4'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </div>
//     </div>
//   );
// }

'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    ]
  },
  {
    id: 2,
    name: 'Project One, Thane',
    image: '/images/projects/featuredProject1.jpg',
    details: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ]
  },
  {
    id: 3,
    name: 'Project Two, Kalyan',
    image: '/images/projects/featuredProject1.jpg',
    details: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ]
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
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.2 } },
        hidden: { opacity: 0, x: 100 }
      }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <ul className="list-disc pl-5 mb-4">
          {project.details.map((detail, idx) => (
            <li key={idx} className="text-sm text-gray-600">{detail}</li>
          ))}
        </ul>
        <button className="w-full py-2 px-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md hover:from-teal-500 hover:to-blue-600 transition duration-300">
          Read More
        </button>
      </div>
    </motion.div>
  );
};

const OngoingProjects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Ongoing Projects</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;