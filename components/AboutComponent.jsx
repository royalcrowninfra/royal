'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"


const AboutComponent = () => {
    return (
        <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                >
                    <Image src='/images/img.jpg' width={900} height={500} alt="About" className="max-md:hidden" />
                </motion.div>

                <div className="items-center">
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                        We are awards Winning Compnay
                    </motion.h2>
                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="px-12 tracking-wider uppercase text-gray-400 mt-3">
                        World Awards
                    </motion.p>
                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4 mt-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora neque accusamus facere. Ut amet odio neque in mollitia quia vel adipisci repudiandae, consectetur, quasi maxime veritatis nobis quis est minus.
                        Incidunt, soluta, exercitationem recusandae reprehenderit cum totam consequatur quae dignissimos eos laboriosam illum tenetur voluptate veritatis excepturi enim iure distinctio, ex minus velit quasi corporis culpa doloribus! Assumenda, quis provident.
                    </motion.p>
                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="px-12 pb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora neque accusamus facere. Ut amet odio neque in mollitia quia vel adipisci repudiandae, consectetur, quasi maxime veritatis nobis quis est minus.
                        Incidunt, soluta, exercitationem recusandae reprehenderit cum totam consequatur quae dignissimos eos laboriosam illum tenetur voluptate veritatis excepturi enim iure distinctio, ex minus velit quasi corporis culpa doloribus! Assumenda, quis provident.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
