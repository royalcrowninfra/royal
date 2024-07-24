'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Users, DollarSign, TrendingUp, Send } from 'lucide-react';
import Image from 'next/image';

const CareerPage = () => {
  const [hoveredJob, setHoveredJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const jobs = [
    { title: 'Real Estate Agent', icon: Building, description: 'Help clients buy, sell, and rent properties' },
    { title: 'Property Manager', icon: Users, description: 'Oversee the operation of residential or commercial properties' },
    { title: 'Real Estate Appraiser', icon: DollarSign, description: 'Estimate the value of real property before it is sold, mortgaged, taxed, insured, or developed' },
    { title: 'Real Estate Analyst', icon: TrendingUp, description: 'Analyze real estate investment opportunities and market trends' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-indigo-800 mb-6">
          Join Our Royal Crown Team
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Embark on an exciting career in real estate. We offer opportunities for growth,
          competitive compensation, and the chance to make a real difference in people's lives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredJob(job.title)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-4">
                  <job.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{job.title}</h2>
                <p className="text-gray-600 text-center">{job.description}</p>
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: hoveredJob === job.title ? 'auto' : 0 }}
                className="bg-indigo-600 text-white overflow-hidden"
              >
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <Image
              src="/images/career.jpg"
              alt="Career at Royal Crown"
              width={800}
              height={800}
              className="rounded-xl shadow-lg mt-20 "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 bg-white rounded-xl shadow-lg p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position Applied For
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a position</option>
                  <option value="Real Estate Agent">Real Estate Agent</option>
                  <option value="Property Manager">Property Manager</option>
                  <option value="Real Estate Appraiser">Real Estate Appraiser</option>
                  <option value="Real Estate Analyst">Real Estate Analyst</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerPage;