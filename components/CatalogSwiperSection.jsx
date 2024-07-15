'use client';
import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from './ui/button';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

export default function CatalogSwiperSection() {
  return (
    <div className='py-8 lg:"py-28 '>
      <div className='container grid pb-8 lg:grid-cols-1'>
        <div className='text-left'>
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='py-4 text-4xl font-medium lg:text-6xl lg:py-0'>
            Morden Classic
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='pb-6 text-xl font-bold tracking-wider my-5'>
            luxury Decor To create comfort In our Home
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className='grid grid-cols-2 text-gray-500 gap-x-8'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut, excepturi, sunt itaque iste architecto aperiam odit, minima incidunt nemo iusto facilis eveniet! Iure ut quasi ipsam architecto aliquam officia.
            Illo, repellat ratione, consequuntur maiores animi perspiciatis totam expedita nihil labore est earum ex sapiente nulla eius. Vero sit id porro at. Error sequi tempore perferendis, iusto dolorum sapiente iste?
            Dicta quos eveniet laborum fugit! Vel architecto nobis quam illo, delectus, maxime ducimus adipisci reiciendis magnam esse fugit quo, incidunt modi officia fugiat quas optio accusamus quisquam perferendis tenetur. Quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut, excepturi, sunt itaque iste architecto aperiam odit, minima incidunt nemo iusto facilis eveniet! Iure ut quasi ipsam architecto aliquam officia.
            Illo, repellat ratione, consequuntur maiores animi perspiciatis totam expedita nihil labore est earum ex sapiente nulla eius. Vero sit id porro at. Error sequi tempore perferendis, iusto dolorum sapiente iste?
            Dicta quos eveniet laborum fugit! Vel architecto nobis quam illo, delectus, maxime ducimus adipisci reiciendis magnam esse fugit quo, incidunt modi officia fugiat quas optio accusamus quisquam perferendis tenetur. Quidem.
          </p>
        </motion.div>
        <Link href="/gallery">
          <Button className='inline-flex items-center px-8 py-3 mt-4 text-white rounded-full
        shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 '>View Gallery <TbArrowUpRight className='w-5 h-5 ml-2' /> </Button>
        </Link>
      </div>
      {/* SWiper Section */}
      <Swiper sliderPerView={1} breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image src='/images/img.jpg' width={520} height={220} className='w-full' alt='Swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/img.jpg' width={520} height={220} className='w-full' alt='Swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/img.jpg' width={520} height={220} className='w-full' alt='Swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/img.jpg' width={520} height={220} className='w-full' alt='Swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/img.jpg' width={520} height={220} className='w-full' alt='Swiper' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
