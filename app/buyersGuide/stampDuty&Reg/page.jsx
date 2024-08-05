'use client'
import React from 'react';
import { FaStamp, FaFileSignature, FaBuilding, FaMoneyCheckAlt, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const PanvelPropertyRegistration = () => {
  const sections = [
    {
      title: "Stamp Duty",
      icon: <FaStamp className="w-8 h-8 text-white" />,
      items: [
        "5% in Greater Mumbai, 6% in TMC judiciary limits",
        "Calculated on agreement or market value, whichever is higher",
        "Pay-order in favor of 'SUPERINTENDENT OF STAMPS, Mumbai'",
        "5% for galas/office/shop premises and garages in Mumbai"
      ]
    },
    {
      title: "Registration Process",
      icon: <FaFileSignature className="w-8 h-8 text-white" />,
      items: [
        "Records ownership under the India Registration Act",
        "Submit original document and two photocopies",
        "Two witnesses required",
        "Pay appropriate registration fees"
      ]
    },
    {
      title: "Stamp Duty Office",
      icon: <FaBuilding className="w-8 h-8 text-white" />,
      items: [
        "M.T.N.L Building, Ground Floor, New Panvel",
        "District Raigad, Maharashtra",
        "Pin Code - 410206"
      ]
    },
    {
      title: "Registration Fee",
      icon: <FaMoneyCheckAlt className="w-8 h-8 text-white" />,
      items: [
        "Approximately 1% of market value or agreement value (whichever is higher)",
        "Maximum Rs.30,000/-",
        "Applies to: Conveyance, Exchange, Gift, Partition",
        "Transfer of lease, Sale, Power of attorney",
        "Authorization to sell property"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with Background Image */}
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{ backgroundImage: "url('/images/buyersGuide/stampdutyregistration.jpg')" }}
      >
        <div className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-wider sm:tracking-widest text-center">
            Stamp duty and registration
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Panvel Property Registration Guide
        </h1>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-4 flex items-center">
                {section.icon}
                <h2 className="text-xl font-semibold text-white ml-2">{section.title}</h2>
              </div>
              <ul className="p-6 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FaFileAlt className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold text-gray-800 ml-4">Important Notes</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-gray-700">Registration is mandatory for legal ownership</span>
            </li>
            <motion.li
              className="flex items-start">
              <svg className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-gray-700">Stamp duty is calculated on higher of agreement or market value</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div >
  );
};

export default PanvelPropertyRegistration;