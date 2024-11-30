"use client";
import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // Correct import for Next.js app router

const EnquiryButton = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    enquiryFor: "Sai Prasad Garden",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendEnquiryEmail = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/emails/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // toast.success("Enquiry sent successfully");
        setIsOpen(false);
        router.push("/");
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send enquiry.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    await sendEnquiryEmail(formData);
  };

  // Animation configurations remain the same as in the original code
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const waveAnimation = (index) => ({
    scale: [1, 1.2, 1.4, 1.6, 1.8, 2],
    opacity: [0.1, 0.2, 0.4, 0.3, 0.2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "easeInOut",
      delay: index * 0.2,
    },
  });

  return (
    <>
      {/* Existing button code remains the same */}
      <motion.div
        className='fixed right-0 bottom-1/4 transform -translate-y-1/2 z-50'
        initial={{ rotate: 90 }}
        animate={{ rotate: 90 }}
      >
        <motion.div
          className='relative'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className='absolute inset-0 rounded-full bg-blue-300'
              animate={waveAnimation(index)}
            />
          ))}
          <motion.button
            className='relative bg-blue-500 text-white px-6 py-4 rounded-full shadow-lg'
            onClick={togglePopup}
          >
            ENQUIRY
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative'
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                variants={formAnimation}
                initial='hidden'
                animate='visible'
                className='relative z-10'
              >
                <motion.h2
                  variants={itemAnimation}
                  className='text-2xl font-bold mb-4 text-center text-gray-800'
                >
                  Enquiry Now
                </motion.h2>

                <motion.div variants={itemAnimation} className='mb-4'>
                  <label
                    htmlFor='enquiryFor'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Enquiry For
                  </label>
                  <select
                    id='enquiryFor'
                    value={formData.enquiryFor}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border rounded-lg bg-white'
                  >
                    <option value='Sai Prasad Garden'>Sai Prasad Garden</option>
                    <option value='Jayram Residency'>Jayram Residency</option>
                    <option value='New City Palace'>New City Palace</option>
                    <option value='Om Sai Sidhhivinayak'>
                      Om Sai Sidhhivinayak
                    </option>
                  </select>
                </motion.div>

                <motion.div variants={itemAnimation} className='mb-4'>
                  <label
                    htmlFor='fullName'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border rounded-lg'
                    placeholder='Full Name'
                    required
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className='mb-4'>
                  <label
                    htmlFor='email'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Email address
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border rounded-lg'
                    placeholder='Enter email'
                    required
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className='mb-4'>
                  <label
                    htmlFor='phone'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Phone
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border rounded-lg'
                    placeholder='Phone'
                    required
                  />
                </motion.div>

                <motion.div variants={itemAnimation} className='mb-4'>
                  <label
                    htmlFor='message'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className='w-full px-3 py-2 border rounded-lg'
                    placeholder='Your message'
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemAnimation}
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50'
                >
                  {isLoading ? "Sending..." : "Submit"}
                </motion.button>
              </motion.form>

              {/* Close button remains the same */}
              <motion.button
                onClick={togglePopup}
                className='absolute top-2 right-2 text-gray-600 hover:text-gray-800 bg-white bg-opacity-50 rounded-full p-1'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnquiryButton;
