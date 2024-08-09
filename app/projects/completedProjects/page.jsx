'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { titleVariants } from "../../../utils/animation";

const CompletedProjects = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-[url('/images/completed.jpg')] bg-center bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
        <motion.h1
          initial='offscreen'
          whileInView={"onscreen"}
          variants={titleVariants}
          className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-32'
        >
          Completed Projects
        </motion.h1>
      </div>

      <div className="container mx-auto py-12">
        <div className="space-y-12">
          {/* Project 1 */}
          <motion.div
            initial='offscreen'
            whileInView={"onscreen"}
            variants={titleVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/images/projects/completed/img-1.jpg"
                  alt="Project 1"
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Project One</h2>
                <p className="text-gray-600 mb-4">
                  This is a description of Project One. It was a residential complex
                  completed in 2022, featuring modern amenities and sustainable design.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial='offscreen'
            whileInView={"onscreen"}
            variants={titleVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/images/projects/completed/img-2.jpg"
                  alt="Project 2"
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Project Two</h2>
                <p className="text-gray-600 mb-4">
                  Project Two was a commercial building completed in 2023. It features
                  state-of-the-art office spaces and eco-friendly infrastructure.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;