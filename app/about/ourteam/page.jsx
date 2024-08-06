'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion, useScroll, useTransform } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })


  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/images/header/about-us2.jpg')] bg-center bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='container py-32 text-6xl font-extrabold text-red-500 reacking-widest text-center lg:py-64'>
          Who are we?
        </motion.h1>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>
            We have the best Flats
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='text-2xl text-center font-medium pb-10 mt-5'>Our Royal Crown Infra Company is a Company that provides best services,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis quidem vero consequuntur, eos non ex facilis quia esse provident, aut minima accusantium enim soluta ipsum architecto fuga maxime nihil?
            Temporibus, ipsum omnis rerum cumque aperiam sint, quaerat fugit officia dolor pariatur harum assumenda voluptates ullam. Sunt est deleniti tempora libero velit rem, quis corporis ducimus aliquid aspernatur unde quam.
          </motion.p>
        </div>

        <div className='items-center lg:flex gap-x-8'>
          {/* Left Image Section  */}
          <motion.div
            style={{ scale }}
            ref={ref}
            className='w-full'>
            <Image src='/images/header/logoPng.png' width={700} height={700} />
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='pb-8 tracking-wide mt-6'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quibusdam itaque! Ad aut maiores unde commodi voluptatum itaque totam, assumenda explicabo quo. Nihil tenetur sit iure saepe quaerat rerum similique.
              Fuga rerum perferendis ipsa a nesciunt unde iure iusto magni assumenda, quod dolor ullam ad iste, quas explicabo? Iure error harum quae sapiente molestiae sint recusandae velit! Dicta, nemo totam.
              Rem inventore fugiat architecto dicta reprehenderit aliquam vel non eaque velit unde perspiciatis nobis natus, atque tempore sed magni voluptatem maiores? Inventore nisi nam ipsam debitis fugit atque sint sequi.
            </p>
            <span className='text-xl font-extrabold tracking-tight'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad labore, saepe in voluptate nostrum aperiam. Consectetur delectus nemo voluptates! Aliquam ullam ducimus quia minima in iste et nobis itaque quod?
            </span>
            {/* <Button className='inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-gray-950 rinf-pffset-2'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button> */}
          </motion.div>
        </div>
        {/* Team Section */}
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
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 '>
                <Image src="/images/header/men.png" width={200} height={200} className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Name</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 '>
                <Image src="/images/header/women.png" width={200} height={200} className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Name</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 '>
                <Image src="/images/header/men.png" width={200} height={200} className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Name</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
