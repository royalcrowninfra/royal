'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBuilding, FaCar, FaHandHoldingUsd, FaBalanceScale, FaHome } from 'react-icons/fa'

const ServiceCard = ({ icon: Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 2, backgroundColor: "#4299e1" }}
    whileTap={{ scale: 0.95 }}
    className="bg-cyan-500 p-6 rounded-lg text-white text-center cursor-pointer"
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="text-4xl mx-auto mb-2" />
      <p className="font-semibold">{title}</p>
    </motion.div>
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

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
  }

  return (
    <div className="container mx-auto py-2 px-4 relative overflow-hidden">
       {/* <motion.div 
        className="absolute inset-0 bg-contain bg-no-repeat bg-left-top opacity-10"
        style={{backgroundImage: "url('/images/header/bg-logo.png')"}}
        animate={{ rotate: 360 }}
        // transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      ></motion.div> */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 grid md:grid-cols-2 gap-12 items-center relative"
      >
        <motion.div 
        className="absolute inset-0 bg-[length:350px_400px] md:bg-[length:700px_700px] bg-no-repeat left-0 mr-0 opacity-20"
        style={{backgroundImage: "url('/images/header/bg-logo.png')"}}
        animate={{ rotate: 360 }}
        // transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      ></motion.div>
        <motion.div className="z-10" variants={itemVariants}>
          <motion.h2 
            className="text-5xl font-extrabold mb-6 text-center"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Welcome To <br/>
            Royal Crown Realty
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-4 text-center"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.lroem*1
          </motion.p>
          <motion.p 
            className="text-gray-600 mb-6 text-center"
            variants={itemVariants}
          >
            Incidunt, soluta, exercitationem recusandae reprehenderit cum totam consequatur quae dignissimos eos laboriosam illum tenetur voluptate veritatis excepturi enim iure distinctio.
          </motion.p>
          <Link href='/contact'>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59,130,246)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-600 text-white py-2 px-12 rounded-full font-semibold sm:ml-64"
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/images/header/about-us.png" alt="About Us" className="rounded-lg shadow-lg" />
        </motion.div>
      </motion.div>

       <motion.div 
        className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard icon={service.icon} title={service.title} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AboutComponent