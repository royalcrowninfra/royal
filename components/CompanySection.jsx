'use client'
import Badge from "./Badge"
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../utils/animation'

const CompanySection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-400 dark:bg-tertiary py-24 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {/* Badge 1 */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Years Of Expertise
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge
                                endCountNum={20}
                                endCountText='+'
                            />
                        </dd>
                    </motion.div>

                    {/* Badge 2 */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Sucessful Projects
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge
                                endCountNum={5}
                                endCountText=' projects'
                            />
                        </dd>
                    </motion.div>

                    {/* Badge 3 */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Happy Families
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge
                                endCountNum={500}
                                endCountText='+'
                            />
                        </dd>
                    </motion.div>
                </dl>
            </div>
        </div>
    )
}

export default CompanySection
