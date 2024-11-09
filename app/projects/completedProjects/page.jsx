'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { titleVariants } from "../../../utils/animation";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a description of Project One. It was a residential complex completed in 2022, featuring modern amenities and sustainable design.",
    image: "/images/projects/completed/img-1.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Project Two was a commercial building completed in 2023. It features state-of-the-art office spaces and eco-friendly infrastructure.",
    image: "/images/projects/img-2.jpg",
  },
  {
    id: 3,
    title: "Project three",
    description: "Project Two was a commercial building completed in 2023. It features state-of-the-art office spaces and eco-friendly infrastructure.",
    image: "/images/projects/img-3.jpg",
  },
];

const CompletedProjects = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Black overlay with 40% opacity */}
        <div className="bg-[url('/images/completed.jpg')] bg-center bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] flex justify-center items-center">
          <motion.h1
            initial='offscreen'
            whileInView={"onscreen"}
            variants={titleVariants}
            className='text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-widest text-center drop-shadow-lg z-20 relative px-4'
          >
            Completed Projects
          </motion.h1>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl"
            >
              <div className="md:flex flex-col md:flex-row">
                <div className="md:w-1/2 relative overflow-hidden group">
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 z-10" /> {/* Default overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" /> {/* Hover overlay */}
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between bg-white">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">{project.title}</h2>
                    <p className="text-gray-600 text-sm md:text-base mb-6">{project.description}</p>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm md:text-base font-medium shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;