'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCity, FaProjectDiagram, FaUsers, FaTrophy } from 'react-icons/fa';
import Link from 'next/link';

const SectionCard = ({ icon: Icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <div className="bg-cyan-500 p-4">
      <Icon className="text-white text-4xl mb-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-cyan-500 p-4 text-white text-center">
    <Icon className="text-4xl mb-2 mx-auto" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

const NumberedSection = ({ number, title, content }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <div className="text-4xl font-bold text-cyan-500 mr-4">{number}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default function Home() {
  const sections = [
    {
      icon: FaClipboardList,
      title: "Planning",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque accusamus tempore fuga pariatur expedita eius officiis laudantium obcaecati earum? Iure iste dicta earum nisi non aliquid totam vel architecto!"
    },
    {
      icon: FaCity,
      title: "Buildings",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo quod repudiandae inventore doloremque corrupti, commodi distinctio? Beatae, animi at reprehenderit nemo voluptatem magnam eveniet ad et, blanditiis tenetur error."
    },
    {
      icon: FaProjectDiagram,
      title: "Our Projects",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint dicta, cum quia delectus optio explicabo temporibus molestias saepe commodi unde, pariatur numquam quisquam laudantium quae cupiditate. Vel, eum culpa."
    }
  ];

  const stats = [
    { icon: FaProjectDiagram, title: "Under Construction Projects", value: 5 },
    { icon: FaUsers, title: "Years Of Expertise", value: 15 },
    { icon: FaUsers, title: "Happy Families", value: 600 },
    { icon: FaTrophy, title: "Available Units", value: 500 },
  ];

  const numberedSections = [
    {
      number: "01",
      title: "Our Philosophy ",
      content: "Our work philosophy that gives priority to everlasting emotional bonds over material gains,translates into ever smiling faces! We constantly strive to satisfy ever changing needs of our customers which are at par with the latest market trends of Real Estate. The result of which we see in our more than 1000 satisfied customers! This is our investment for the future!"
    },
    {
      number: "02",
      title: "VISION",
      content: "To be the most trusted and dependable provider of real estate solutions. To set new standards of excellence in the service of providing top quality living, working and business spaces."
    },
    {
      number: "03",
      title: "New materials",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{ backgroundImage: "url('/images/header/aboutgroup.jpg')" }}
      >
        <div className="container mx-auto py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          {/* Who are we? */}
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl md:text-4xl font-bold my-8 text-center"
      >
        About Us
      </motion.h1>

      {/* About Us Section */}
      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4">Royal Crown always thinks about the needs and wants of their customer base before taking any decisions. At Royal Crown everything revolves around customer happiness. Which is why everything that it builds comes with the promise of “Housing for all”.
              Royal Crown doesn’t just build; it transforms, nurturing a future where business integrity and client satisfaction are as natural as breathing.
            </p>
            <p className="mb-6">
              At Royal Crown every home is a labour of love, a pursuit of perfection, a space meticulously curated with handpicked elements to offer an unparalleled living experience; in a word, a masterpiece.
              !</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-500 border-2 border-orange-500 py-2 px-4 rounded-md inline-block transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                Book a Call
              </motion.button></Link>
          </div>
          <div className="md:w-1/2">
            <Image src="/images/header/about-us2.jpg" alt="Construction Worker" width={600} height={800} layout="responsive" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Numbered Sections */}
      <div className="container mx-auto px-4 my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {numberedSections.map((section, index) => (
            <NumberedSection key={index} {...section} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 my-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

    </div>
  );
}