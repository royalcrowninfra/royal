'use client'
import React from 'react';
import { Settings, ScrollText, YinYang } from 'lucide-react';
import { motion } from 'framer-motion';


const features = [
  { icon: 'Settings', title: 'OWNERSHIP', description: 'Our shared ownership fuels our commitment to client success.' },
  { icon: 'ScrollText', title: 'HISTORY', description: 'Over 40 years of driving brand innovations for clients and customers.' },
  { icon: 'YinYang', title: 'PHILOSOPHY', description: 'Helping brands translate insights, ideas and experiences into value.' },
];

const IconComponent = ({ name }) => {
  const icons = { Settings, ScrollText, YinYang };
  const Icon = icons[name];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

export default function AboutOurCompany() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/header/whoweare.jpg')" }}
      >
        <div className="container mx-auto py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Philosophy</h2>
            <p className="text-gray-600 mb-6">
              For us, branding never ends, it just mutates and evolves.
              It's a cycle of ideation, practice, assessment and adaptation.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <IconComponent name={feature.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/images/img.jpg"
              alt="Team collaboration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}