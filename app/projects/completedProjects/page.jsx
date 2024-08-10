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
  // Add more projects as needed
];

const CompletedProjects = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[url('/images/completed.jpg')] bg-center bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] relative flex justify-center items-center">
        <motion.h1
          initial='offscreen'
          whileInView={"onscreen"}
          variants={titleVariants}
          className='text-5xl sm:text-6xl font-semibold text-black tracking-widest text-center drop-shadow-lg'
        >
          Completed Projects
        </motion.h1>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="md:flex">
                <div className="md:w-1/2 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
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
