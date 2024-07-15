'use client'
import Image from 'next/image';
import { Button } from './ui/button';
import { TbArrowUpRight } from 'react-icons/tb';
import { titleVariants, desVariants, tagVariants } from '@/utils/animation'
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
            {/* Left Section */}
            <div className='lg:w-1/2 xl:py-14 lg:py-8'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='tracking-widest uppercase'>
                    Grab your Best deals
                </motion.p>
                <motion.h1
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='h1'>
                    Royal Crown Infra
                </motion.h1>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='pb-6 text-muted-foreground xl:pb-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae mollitia ex dicta ipsum, autem numquam! Deleniti dolor aliquid similique dignissimos quis deserunt dicta iste incidunt, enim eos minus, mollitia earum.
                    Iste ullam, necessitatibus a soluta esse dolore incidunt tenetur? Nobis laudantium itaque repellat consequuntur voluptate ipsa assumenda animi esse error fuga aperiam omnis culpa, qui perspiciatis deserunt quos molestias excepturi.
                    Voluptatem sapiente placeat voluptatum eos vel earum molestiae soluta ex qui quam eum rerum culpa, asperiores enim! Aut temporibus enim deserunt consequuntur, ea natus harum veritatis! Ratione tenetur praesentium officia!
                </motion.p>
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <Button className='inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
                        Book now <TbArrowUpRight className='w-5 h-5 ml-2' />
                    </Button>
                </motion.div>

            </div>

            {/* Right Section */}
            <div className='w-1/2'>
                <Image src="/images/img.jpg" width={800} height={500} alt=''
                    className='absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block' />
            </div>

        </div>
    )
}

export default HeroSection
