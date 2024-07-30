'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BankingPartner from '@/components/BankingPartner';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const HomeLoans = () => {
  const sections = [
    {
      title: "Business Applicants",
      items: [
        "Updated pass book or statement of accounts (6 months)",
        "Xerox copy of ration card",
        "Business profile (nature, clients, suppliers, employees, etc.)",
        "For partnerships: Partnership deed, 3 years financials, CA certification",
        "For Pvt. Ltd: Remuneration details, board resolution, annual reports, IT returns"
      ]
    },
    {
      title: "Employed Persons",
      items: [
        "Latest salary certificate or slip",
        "Xerox of Form 16A (TDS Form)",
        "Certificate for additional allowances",
        "Updated bank statement (6 months)",
        "ID proof (voter ID, company ID, passport, or ration card)",
        "Passport size photographs (applicant & co-applicant)"
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
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/buyersGuide/homeLoans.jpg')" }}
      >
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-400 tracking-wider sm:tracking-widest text-center">
            Home Loans
          </h1>
        </motion.div>
      </motion.div>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Loan Application Document Requirements
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 p-4">
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                <ul className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
      
            
          </div>
        </div>
        <BankingPartner />
      </div>
    </div>
  );
};

export default HomeLoans;
