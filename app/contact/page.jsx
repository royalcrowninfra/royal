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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/contactBackground.jpg')" }}
      >
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
          </h1>
        </motion.div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Address:</h2>
            <p className="mb-2">Villa No. 5, Mayuresh Chambers, Plot No. 60, Sector 11, CBD Belapur,</p>
            <p className="mb-4">Navi Mumbai 400614</p>
            <p className="mb-2">+91 98198 00022 / +91 98198 00044</p>
            <p className="mb-4">info@royalcrown.com</p>

            <div className="flex space-x-2 mb-6">
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full">
                <FaTwitter />
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input 
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <Input 
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number *"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <Textarea 
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                />
              </div>
              <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit
              </Button>
            </form>
          </div>

          {/* Preview Map Section */}
          <div className="w-full h-[300px] md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.0436367577286!2d73.10175123873755!3d19.008817314587663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e911b8186ff7%3A0x8637ac85995699fd!2sCrown%20Housing!5e1!3m2!1sen!2sin!4v1722842804286!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
        </div>

        {/* Full Width Google Map Section */}
        {/* <div className="w-full h-[400px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.0436367577286!2d73.10175123873755!3d19.008817314587663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e911b8186ff7%3A0x8637ac85995699fd!2sCrown%20Housing!5e1!3m2!1sen!2sin!4v1722842804286!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}