'use client'
import React from 'react';
import { Rocket, Globe, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionStatement = () => {
  const features = [
    { icon: <Rocket className="w-12 h-12 text-blue-300" />, title: 'Optimal choice', description: 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.' },
    { icon: <Globe className="w-12 h-12 text-blue-300" />, title: 'Used worldwide', description: 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.' },
    { icon: <HeartHandshake className="w-12 h-12 text-blue-300" />, title: 'Instant support', description: 'Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.' },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/whoweare.jpg')" }}
      >
        <div className="container mx-auto py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;