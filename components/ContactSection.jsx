'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "../utils/animation"

// Sample posts data
const posts = [
  {
    id: 1,
    dateTime: '2024-08-08T12:00:00Z',
    category: { href: '/reviews', title: 'Positive' },
    href: '/review/1',
    title: 'Amazing Service!',
    description: 'I had a great experience with this company. The service was top-notch, and I would highly recommend them to others.',
    author: {
      name: 'John Doe',
      role: 'Customer',
      href: '/profile/johndoe',
      imageUrl: '/images/authors/johndoe.jpg'
    }
  },
  {
    id: 2,
    dateTime: '2024-08-08T12:00:00Z',
    category: { href: '/reviews', title: 'Positive' },
    href: '/review/2',
    title: 'Excellent Support!',
    description: 'The support team was very helpful and resolved my issue promptly. Highly satisfied with the service.',
    author: {
      name: 'Jane Smith',
      role: 'Customer',
      href: '/profile/janesmith',
      imageUrl: '/images/authors/janesmith.jpg'
    }
  },
  {
    id: 3,
    dateTime: '2024-08-08T12:00:00Z',
    category: { href: '/reviews', title: 'Positive' },
    href: '/review/3',
    title: 'Great Experience!',
    description: 'Overall, a fantastic experience. The team was professional and delivered exactly what was promised.',
    author: {
      name: 'Emily Davis',
      role: 'Customer',
      href: '/profile/emilydavis',
      imageUrl: '/images/authors/emilydavis.jpg'
    }
  },
  // Add more posts as needed
]

export default function ContactSection() {
  return (
    <div className="relative py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: "url('/images/header/reviewsBackground.jpg')",
          zIndex: 0
        }}
        alt='contactSection'
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Customer Reviews
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Learn how to grow your business with our expert advice
        </p>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="flex max-w-cl flex-col items-start justify-between bg-gray-200 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -100 }} // Initial position off-screen to the left
              whileInView={{ opacity: 1, x: 0 }} // Move to the center position when in view
              transition={{ duration: 0.5 }}
              viewport={{ once: true }} // Animation triggers only once when scrolled into view
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.dateTime}>
                  <Image src='/images/header/stars.jpg' width={80} height={5} alt="Stars" />
                </time>
                <Link
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                  {post.category.title}
                </Link>
              </div>
              <div className="group relative mt-4">
                <h3 className="text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <Link href={post.href}>
                    <span>{post.title}</span>
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-6 flex items-center gap-x-4">
                <img src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-500" alt={post.author.name} />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
