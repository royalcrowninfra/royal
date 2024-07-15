'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"

const posts = [
    {
        id: 1,
        title: 'boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme with tons of design and layout options,and the customer service is simply outstanding. they respond immideately and solve any inconvenience no matter how small.',
        date: 'March 16 , 2024',
        datetime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'Natasha',
            role: 'Co-founder / CTO',
            href: '#',
            imageUrl: '/images/img.jpg'
        }

    },
    {
        id: 2,
        title: 'boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme with tons of design and layout options,and the customer service is simply outstanding. they respond immideately and solve any inconvenience no matter how small.',
        date: 'March 16 , 2024',
        datetime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'sam',
            role: 'Co-founder / CEO',
            href: '#',
            imageUrl: '/images/img.jpg'
        }

    },
    {
        id: 3,
        title: 'boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme with tons of design and layout options,and the customer service is simply outstanding. they respond immideately and solve any inconvenience no matter how small.',
        date: 'March 16 , 2024',
        datetime: '2024-03-16',
        category: { title: '4.9', href: '#' },
        author: {
            name: 'jos',
            role: 'Co-founder / CEO',
            href: '#',
            imageUrl: '/images/img.jpg'
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
                                    <time datetime={post.datetime}>
                                        <Image src='/stars.jpg' width={80} height={5} />
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