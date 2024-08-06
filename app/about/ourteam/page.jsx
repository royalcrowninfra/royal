'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
import { TbDeviceMobile, TbSettings, TbHeadphones } from 'react-icons/tb'

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Turn your ideas to live web experiences
          </motion.h1>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-gray-600 mb-6"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </motion.p>
          <p className="text-sm text-gray-500 mb-4">Images from Freepik</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            learn more
          </motion.button>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-300 rounded-full overflow-hidden">
            <Image src="/images/header/women.png" width={500} height={500} alt="Woman in yellow shirt" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="text-3xl font-bold mb-4"
            >
              About
            </motion.h2>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="text-gray-600 mb-4"
            >
              Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="text-gray-600"
            >
              He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
            </motion.p>
          </div>
          <div className="md:w-1/2 space-y-8">
            <Feature 
              icon={<TbDeviceMobile className="w-8 h-8" />}
              title="RESEARCH"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <Feature 
              icon={<TbSettings className="w-8 h-8" />}
              title="STRATEGY"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <Feature 
              icon={<TbHeadphones className="w-8 h-8" />}
              title="DESIGN"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Feature = ({ icon, title, description }) => (
  <motion.div 
    initial="offscreen"
    whileInView="onscreen"
    variants={tagVariants}
    className="flex items-start"
  >
    <div className="bg-green-500 p-3 rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

export default Page