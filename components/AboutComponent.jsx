'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBuilding, FaCar, FaHandHoldingUsd, FaBalanceScale, FaHome } from 'react-icons/fa'

const ServiceCard = ({ icon: Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-blue-600 p-6 rounded-lg text-white text-center"
  >
    <Icon className="text-4xl mx-auto mb-2" />
    <p className="font-semibold">{title}</p>
  </motion.div>
)

const AboutComponent = () => {
  const services = [
    { icon: FaBuilding, title: "Search & Shortlisting" },
    { icon: FaCar, title: "Site Visit" },
    { icon: FaHandHoldingUsd, title: "Home Loan Assistance" },
    { icon: FaBalanceScale, title: "Legal Advise" },
    { icon: FaHome, title: "Unit Booking" },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        All our projects come with the <span className="underline">unfaded</span> guarantee of Royal Crown values
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">We are an award-winning company</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-gray-600 mb-6">
            Incidunt, soluta, exercitationem recusandae reprehenderit cum totam consequatur quae dignissimos eos laboriosam illum tenetur voluptate veritatis excepturi enim iure distinctio.
          </p>
          <Link href='/contact'><motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold"
          >
            Learn More
          </motion.button></Link>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src="/images/img.jpg" alt="About Us" className="rounded-lg shadow-lg" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutComponent