'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
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
          {/* Updated Contact Form Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Contact Us</h2>
            <AnimatePresence>
              {!isSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 pl-12"
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 pl-12"
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      type="tel"
                      name="contactNumber"
                      placeholder="Contact Number"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 pl-12"
                    />
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="relative">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 pl-12 min-h-[150px]"
                      rows={4}
                    />
                    <FaEnvelope className="absolute left-4 top-6 text-blue-500" />
                  </motion.div>
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg transition duration-300 text-lg font-semibold hover:from-blue-600 hover:to-purple-700 shadow-lg"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="text-green-500 text-6xl mb-4"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info and Map Section (unchanged) */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700 md:text-center">Our Location</h2>
            <motion.div variants={itemVariants} className="mb-8 space-y-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center space-x-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <p className="text-lg">
                  Villa No. 5, Mayuresh Chambers,<br />
                  Plot No. 60, Sector 11, CBD Belapur,<br />
                  Navi Mumbai 400614
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center space-x-2">
                <FaPhone className="text-blue-600" />
                <p className="text-lg">+91 98198 00022 / +91 98198 00044</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center space-x-2">
                <FaEnvelope className="text-blue-600" />
                <p className="text-lg">info@royalcrown.com</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {[
                  { icon: <FaFacebookF size={20} />, color: 'bg-blue-600' },
                  { icon: <FaTwitter size={20} />, color: 'bg-blue-400' },
                  { icon: <FaInstagram size={20} />, color: 'bg-pink-500' },
                  { icon: <FaLinkedinIn size={20} />, color: 'bg-blue-700' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`${social.color} text-white p-3 rounded-full`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
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