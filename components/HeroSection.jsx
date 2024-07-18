'use client'
// import Image from 'next/image';
// import { Button } from './ui/button';
// import { TbArrowUpRight } from 'react-icons/tb';
// import { titleVariants, desVariants, tagVariants } from '@/utils/animation'
// import { motion } from "framer-motion"
// import Link from 'next/link';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/img.jpg',
  '/images/whoweare.jpg',
  '/images/projectBackground.jpg',
  // Add more image paths as needed
];


const HeroSection = () => {
    // return (
    //     <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
    //         {/* Left Section */}
    //         <div className='lg:w-1/2 xl:py-14 lg:py-8'>
    //             <motion.p
    //                 initial="offscreen"
    //                 whileInView={"onscreen"}
    //                 variants={titleVariants}
    //                 className='tracking-widest uppercase'>
    //                 Grab your Best deals
    //             </motion.p>
    //             <motion.h1
    //                 initial="offscreen"
    //                 whileInView={"onscreen"}
    //                 variants={desVariants}
    //                 className='h1'>
    //                 Royal Crown Infra
    //             </motion.h1>
    //             <motion.p
    //                 initial="offscreen"
    //                 whileInView={"onscreen"}
    //                 variants={tagVariants}
    //                 className='pb-6 text-muted-foreground xl:pb-10'>
    //                 Royal Crown Infra stands at the forefront of real estate excellence, specializing in crafting exceptional flats that redefine modern living. Our commitment to quality, innovation, and customer satisfaction sets us apart as a trusted builder in the industry. Discover meticulously designed flats that blend luxury with practicality, ensuring every home reflects our dedication to superior craftsmanship and attention to detail. Whether you seek a cozy studio or a spacious family residence, Royal Crown Infra promises a living experience that exceeds expectations.
    //             </motion.p>
    //             <motion.div
    //                 initial="offscreen"
    //                 whileInView={"onscreen"}
    //                 variants={tagVariants}
    //             >
    //                 <Link href='/contact'>  <Button className='inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
    //                     Book now <TbArrowUpRight className='w-5 h-5 ml-2' />
    //                 </Button></Link>
    //             </motion.div>

    //         </div>

    //         {/* Right Section */}
    //         <div className='w-1/2'>
    //             <Image src="/images/img.jpg" width={800} height={500} alt=''
    //                 className='absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block' />
    //         </div>

    //     </div>
    // )


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="relative w-full h-[500px]">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
        />
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    );
}

export default HeroSection
