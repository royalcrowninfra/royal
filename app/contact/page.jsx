'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px]"
        style={{ backgroundImage: "url('/images/contact/contactBackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex items-center justify-center px-4">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider sm:tracking-widest text-center"
          >
            Get in Touch
          </motion.h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-2xl rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700 md:text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number *"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  rows={4}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg transition duration-300 text-lg font-semibold">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info and Map Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-2xl rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700 md:text-center">Our Location</h2>
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg mb-2 md:text-center"><strong>Address:</strong></p>
              <p className="mb-1 md:text-center">Villa No. 5, Mayuresh Chambers,</p>
              <p className="mb-1 md:text-center">Plot No. 60, Sector 11, CBD Belapur,</p>
              <p className="mb-4 md:text-center">Navi Mumbai 400614</p>
              <p className="mb-2 md:text-center"><strong>Phone:</strong> +91 98198 00022 / +91 98198 00044</p>
              <p className="mb-4 md:text-center"><strong>Email:</strong> info@royalcrown.com</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 md:text-center">Follow Us</h3>
              <div className="flex space-x-4 ">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className={`bg-${social === 'facebook' ? 'blue-600' : social === 'twitter' ? 'blue-400' : social === 'instagram' ? 'pink-500' : 'blue-700'} text-white p-3 rounded-full md:text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social === 'facebook' && <FaFacebookF size={20} />}
                    {social === 'twitter' && <FaTwitter size={20} />}
                    {social === 'instagram' && <FaInstagram size={20} />}
                    {social === 'linkedin' && <FaLinkedinIn size={20} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.0436367577286!2d73.10175123873755!3d19.008817314587663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e911b8186ff7%3A0x8637ac85995699fd!2sCrown%20Housing!5e1!3m2!1sen!2sin!4v1722842804286!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}