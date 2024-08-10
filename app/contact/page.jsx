'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    blur: { scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px]"
        style={{ backgroundImage: "url('/images/contact/contactBackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="relative container mx-auto h-full flex items-center justify-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider sm:tracking-widest text-center">
            Get in Touch
          </h1>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
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
              <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
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
              <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
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
              <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  rows={4}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info and Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Location</h2>
            <div className="mb-8">
              <p className="text-lg mb-2"><strong>Address:</strong></p>
              <p className="mb-1">Villa No. 5, Mayuresh Chambers,</p>
              <p className="mb-1">Plot No. 60, Sector 11, CBD Belapur,</p>
              <p className="mb-4">Navi Mumbai 400614</p>
              <p className="mb-2"><strong>Phone:</strong> +91 98198 00022 / +91 98198 00044</p>
              <p className="mb-4"><strong>Email:</strong> info@royalcrown.com</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className={`bg-${social === 'facebook' ? 'blue-600' : social === 'twitter' ? 'blue-400' : social === 'instagram' ? 'pink-500' : 'blue-700'} text-white p-3 rounded-full`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social === 'facebook' && <FaFacebookF size={20} />}
                    {social === 'twitter' && <FaTwitter size={20} />}
                    {social === 'instagram' && <FaInstagram size={20} />}
                    {social === 'linkedin' && <FaLinkedinIn size={20} />}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.0436367577286!2d73.10175123873755!3d19.008817314587663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e911b8186ff7%3A0x8637ac85995699fd!2sCrown%20Housing!5e1!3m2!1sen!2sin!4v1722842804286!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}