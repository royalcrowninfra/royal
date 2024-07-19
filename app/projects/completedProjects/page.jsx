'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion, useScroll, useTransform } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
import Link from 'next/link'


const CompletedProjects = () => {
  return (
    <div>
      <div className="bg-[url('/images/projects/projectBackground.jpeg')] bg-center bg-cover">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='container py-32 text-6xl font-semibold text-white reacking-widest text-center lg:py-32'>
          Completed Project
        </motion.h1>
      </div>

      {/* Team Section */}
      <div className='container'>
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='text-4xl font-bold tracking-wider text-center uppercase'>
              Team
            </motion.h1>
          </div>


          <div className='grid py-8 gap-20 lg:grid-cols-3'>
          <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='relative'>
                <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                  <div className='relative h-48'>
                    <Image src="/images/img.jpg" layout="fill" objectFit="cover" className='full' />
                  </div>
                  <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                  </p>
                  <a href="/path/to/full-article">
                    <a className="text-primary font-semibold mt-4 inline-block hover:underline">
                      Read More
                    </a>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='relative'>
                <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                  <div className='relative h-48'>
                    <Image src="/images/img.jpg" layout="fill" objectFit="cover" className='full' />
                  </div>
                  <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                  </p>
                  <a href="/path/to/full-article">
                    <a className="text-primary font-semibold mt-4 inline-block hover:underline">
                      Read More
                    </a>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='relative'>
                <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                  <div className='relative h-48'>
                    <Image src="/images/img.jpg" layout="fill" objectFit="cover" className='full' />
                  </div>
                  <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                  </p>
                  <a href="/path/to/full-article">
                    <a className="text-primary font-semibold mt-4 inline-block hover:underline">
                      Read More
                    </a>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='relative'>
                <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                  <div className='relative h-48'>
                    <Image src="/images/img.jpg" layout="fill" objectFit="cover" className='full' />
                  </div>
                  <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                  </p>
                  <a href="/path/to/full-article">
                    <a className="text-primary font-semibold mt-4 inline-block hover:underline">
                      Read More
                    </a>
                  </a>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='relative'>
                <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                  <div className='relative h-48'>
                    <Image src="/images/img.jpg" layout="fill" objectFit="cover" className='full' />
                  </div>
                  <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                  </p>
                  <a href="/path/to/full-article">
                    <a className="text-primary font-semibold mt-4 inline-block hover:underline">
                      Read More
                    </a>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='relative'>
                <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                  <div className='relative h-48'>
                    <Image src="/images/img.jpg" layout="fill" objectFit="cover" className='full' />
                  </div>
                  <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                  </p>
                  <a href="/path/to/full-article">
                    <a className="text-primary font-semibold mt-4 inline-block hover:underline">
                      Read More
                    </a>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletedProjects
