'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

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

  const inputVariants = {
    focus: { scale: 1.05, transition: { duration: 0.3 } },
    blur: { scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center rounded-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{ backgroundImage: "url('/images/contact/contactBackground.jpg')" }}
      >
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-blue-400 tracking-wider sm:tracking-widest text-center">
            Contact Us
          </h1>
        </motion.div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Address:</h2>
            <p className="mb-2">Villa No. 5, Mayuresh Chambers, Plot No. 60, Sector 11, CBD Belapur,</p>
            <p className="mb-4">Navi Mumbai 400614</p>
            <p className="mb-2">+91 98198 00022 / +91 98198 00044</p>
            <p className="mb-4">info@royalcrown.com</p>

            <div className="flex space-x-2 mb-6">
              <motion.a
                href="#"
                className="bg-blue-600 text-white p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                className="bg-blue-400 text-white p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  />
                </motion.div>
              </div>
              <div className="mb-4">
                <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  />
                </motion.div>
              </div>
              <div className="mb-4">
                <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                  <Input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number *"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  />
                </motion.div>
              </div>
              <div className="mb-4">
                <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                    rows={4}
                  />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  Submit
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Preview Map Section */}
          <motion.div
            className="w-full h-[300px] md:h-full rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
        </div>
      </div>
    </div>
  );
}