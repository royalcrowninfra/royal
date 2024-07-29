'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "../utils/animation"

const posts = [
    {
        id: 1,
        title: 'boost your conversion rate',
        href: '#',
        description: "I am thrilled with my new flat from Royal Crown Infra! The attention to detail is impeccable, and the layout perfectly suits my family's needs. The entire process, from viewing to possession, was smooth and professional. Highly recommend!",
        date: 'March 16 , 2024',
        dateTime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'harsh',
            role: 'Co-founder / CTO',
            href: '#',
            imageUrl: '/images/header/img.jpg'
        }

    },
    {
        id: 2,
        title: 'boost your conversion rate',
        href: '#',
        description: "Royal Crown Infra exceeded my expectations. The quality of construction and the amenities provided in our flat are top-notch. The team was responsive to our queries and ensured all our concerns were addressed promptly. A truly satisfying home-buying experience!",
        date: 'March 16 , 2024',
        dateTime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'sam',
            role: 'Co-founder / CEO',
            href: '#',
            imageUrl: '/images/header/img.jpg'
        }

    },
    {
        id: 3,
        title: 'boost your conversion rate',
        href: '#',
        description: "Choosing Royal Crown Infra was the best decision we made for our new home. The craftsmanship is evident in every corner, and the community atmosphere they've created is wonderful. We feel like we're part of something special here. Thank you for making our dream home a reality!",
        date: 'March 16 , 2024',
        dateTime: '2024-03-16',
        category: { title: '4.9', href: '#' },
        author: {
            name: 'sara',
            role: 'Co-founder / CEO',
            href: '#',
            imageUrl: '/images/header/img.jpg'
        }

    },
]
export default function ContactSection() {
    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="text-3xl font-bold tracking-tighy sm:text-4xl">
                    Customer Reviews
                </motion.h2>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="mt-2 text-lg leading-8 text-muted-foreground">
                    Learn how to grow your business with our expert advice
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none
                 lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                    {
                        posts.map((post) => (
                            <article
                                key={post.id}
                                className="flex max-w-cl flex-col items-start justify-between"
                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.dateTime}>
                                        <Image src='/header/stars.jpg' width={80} height={5} />
                                    </time>
                                    <Link
                                        href="{post.category.href}"
                                        className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium
                                      hover:bg-gray-100 hover:text-black transition-all"
                                    >
                                        {post.category.title}
                                    </Link>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                                        <Link href={post.href}>
                                            <span>{post.title}</span>
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                        {post.description}
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-500" />
                                    <div className="text-sm leading-6 ">
                                        <p className="font-semibold">
                                            <a href={post.author.href}>
                                                <span />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-muted-foreground">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}