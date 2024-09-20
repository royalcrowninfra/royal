'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { TbDeviceMobile, TbSettings, TbHeadphones } from 'react-icons/tb'

const fadeInUp = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  offscreen: {},
  onscreen: { transition: { staggerChildren: 0.2 } }
};

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial="offscreen"
          animate="onscreen"
          variants={staggerContainer}
        >
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Turn Your Ideas Into Live Web Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We bring your visions to life with cutting-edge web development and design solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] md:h-[500px]"
            >
              <Image
                src="/images/header/women.png"
                layout="fill"
                objectFit="cover"
                alt="Woman in yellow shirt"
                className="rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="offscreen"
            animate="onscreen"
            variants={staggerContainer}
            className="flex flex-col md:flex-row"
          >
            <motion.div
              className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                About Our Approach
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We believe in the power of innovative design and cutting-edge technology to transform ideas into impactful digital experiences.
              </p>
              <p className="text-xl text-gray-600">
                Our team of experts is dedicated to crafting bespoke solutions that not only meet but exceed your expectations, ensuring your digital presence stands out in today's competitive landscape.
              </p>
            </motion.div>
            <div className="md:w-1/2 space-y-10">
              <Feature
                icon={<TbDeviceMobile className="w-10 h-10 text-white" />}
                title="RESEARCH"
                description="We delve deep into your industry and target audience to create data-driven strategies that resonate with your users and drive results."
              />
              <Feature
                icon={<TbSettings className="w-10 h-10 text-white" />}
                title="STRATEGY"
                description="Our comprehensive approach ensures that every aspect of your project is carefully planned and executed for maximum impact and efficiency."
              />
              <Feature
                icon={<TbHeadphones className="w-10 h-10 text-white" />}
                title="DESIGN"
                description="We create visually stunning and user-friendly designs that captivate your audience and enhance their digital experience."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold mb-12 text-center text-gray-800"
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="offscreen"
            whileInView="onscreen"
            variants={staggerContainer}
          >
            <TeamMember
              name="Rajesh Chavan"
              // role="Lead Designer"
              image="/images/header/men.png"
              description="Rajesh Chavan He has an uncanny skill of convincing people and handles the corporate sales at Royal Crown Infra. He holds a bachelor degree in commerce from University of Mumbai. Backed with immense positivity and a go-getter attitude, Mr. Rajesh Chavan is soft spoken and polite in his demeanour. He works with precision and is professional in his approach. Passionate about his role at Raviraj Realty, you will see him talking patiently and calmly with clients, colleagues and his team. His focus on developing a long term relationship with clients is our biggest asset."
            />
            <TeamMember
              name="Roshan Jadhav"
              // role="Senior Developer"
              image="/images/header/men.png"
              description="Roshan Jadhav is a multi-talented person and looks after all the functional areas like Marketing and Administration. He holds a Masters degree in Computers Applications from Mumbai University. He is a social man and believes in living life to the fullest. He is a man filled with positive energy and has a winning attitude that doesn’t let him give up until a task is completed well. He is a result oriented person and believes in working hard to accomplish the given tasks.
Under the rousing leadership of  Mr. Roshan Jadhav we feel inspired to keep experimenting with unconventional and creative ideas in Marketing. Currently, it is a small team but we are ambitious about expanding it shortly."/>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const Feature = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex items-start"
  >
    <div className="bg-purple-600 p-4 rounded-lg mr-6 shadow-lg">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const TeamMember = ({ name, role, image, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-white rounded-xl shadow-xl overflow-hidden"
  >
    <div className="relative h-80 w-full">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt={name}
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-lg font-medium text-purple-600 mb-4">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

export default Page
