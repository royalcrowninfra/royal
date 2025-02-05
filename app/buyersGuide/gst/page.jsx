'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const GSTRealEstate = () => {
  const sections = [
    {
      title: "GST Impact on Real Estate",
      content: "The Goods and Services Tax (GST) is a progressive tax change replacing the previous complex tax structure. It significantly impacts the real estate sector, which accounts for about 5% of India's GDP and is the second-largest employer in the country."
    },
    {
      title: "Key Points",
      items: [
        "Under-construction properties taxed at 18% (9% SGST + 9% CGST)",
        "Effective tax rate of 12% after land value deduction",
        "Stamp Duty and Registration charges are outside GST",
        "Simplified taxation process for buyers",
        "No GST on completed properties with Completion/Occupation Certificate"
      ]
    },
    {
      title: "Important Things to Know",
      items: [
        "GST aims to bring efficiency into the tax system",
        "12% GST levy, but buyers should understand Input Tax Credit (ITC)",
        "No GST on renting residential property",
        "GST applicable on commercial property rent exceeding Rs 20 lakh annually",
        "No change in stamp duty and registration costs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{ backgroundImage: "url('/images/buyersGuide/gst.jpg')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            GST
          </h1>
        </div>
      </motion.div>


      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="text-4xl font-bold text-center text-blue-800 mb-12">
            GST and Real Estate in India
          </motion.h1>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 p-4">
                  <h2 className="text-xl font-semibold text-white text-center">{section.title}</h2>
                </div>
                <div className="p-6">
                  {section.content && (
                    <p className="text-gray-700 mb-4">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Implications of GST on Real Estate</h2>
            <p className="text-gray-700">
              GST has simplified the taxation process for real estate transactions. It reduces ambiguity and replaces multiple taxes with a single tax. The impact varies depending on the property type and stage of construction. Buyers and developers should be aware of the new tax structure to make informed decisions.
            </p>
          </motion.div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More About GST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTRealEstate;