'use client'
import { useState, useEffect } from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from './ui/button';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

export default function FeaturedProjects() {
  return (
    <div className='py-8 lg:pt-2'>
      <div className='container'>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='py-4 text-4xl font-medium text-center lg:text-6xl lg:py-0 '
        >
          Featured Projects
        </motion.h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="mt-12"
        >
          <SwiperSlide className="swiper-slide">
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <Image src='/images/projects/featuredProject1.jpg' width={400} height={300} alt='Space World' className='w-full h-60 object-cover' />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Space World</h3>
                <p className="text-sm text-gray-600">MAHARERA: P52000011751</p>
                <p className="text-sm"><i className="fas fa-map-marker-alt"></i> Neral</p>
                <p className="text-lg font-bold mt-2">11.5 LAKH ONWARDS*</p>
                <Button className='mt-4'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <Image src='/images/projects/featuredProject2.jpg' width={400} height={300} alt='Sarvam' className='w-full h-60 object-cover' />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Sarvam</h3>
                <p className="text-sm text-gray-600">MAHARERA: P52000023662</p>
                <p className="text-sm"><i className="fas fa-map-marker-alt"></i> Taloja, Navi Mumbai</p>
                <p className="text-lg font-bold mt-2">30 LAKH ONWARDS*</p>
                <Button className='mt-4'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <Image src='/images/projects/featuredProject2.jpg' width={400} height={300} alt='Prakriti Sparsh' className='w-full h-60 object-cover' />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Prakriti Sparsh</h3>
                <p className="text-sm text-gray-600">MAHARERA: P52000007309</p>
                <p className="text-sm"><i className="fas fa-map-marker-alt"></i> Panvel</p>
                <p className="text-lg font-bold mt-2">24.3 LAKH ONWARDS*</p>
                <Button className='mt-4'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
