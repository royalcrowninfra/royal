"use client";

import { motion } from "framer-motion";
import { titleVariants } from "../../../utils/animation";
import { projects } from "../../../data/projects";
import Link from "next/link";
import Image from "next/image";

const CompletedProjects = () => {
  return (
    <div>
      <div className="bg-[url('/images/projects/projectBackground.jpeg')] bg-center bg-cover">
        <motion.h1
          initial='offscreen'
          whileInView={"onscreen"}
          variants={titleVariants}
          className='container py-32 text-6xl font-semibold text-white tracking-widest text-center lg:py-32'
        >
          Ongoing Projects
        </motion.h1>
      </div>

      <div className='container'>
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className='text-4xl font-bold tracking-wider text-center uppercase'
            >
              Team
            </motion.h1>
          </div>

          <div className='grid py-8 gap-20 lg:grid-cols-3'>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial='offscreen'
                whileInView={"onscreen"}
                variants={titleVariants}
                className='border-2 border-primary'
              >
                <div className='relative'>
                  <div className='p-6 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                    <div className='relative h-48'>
                      <Image
                        src={project.image}
                        layout='fill'
                        objectFit='cover'
                        alt={project.title}
                      />
                    </div>
                    <h2 className='py-4 text-2xl font-semibold uppercase'>
                      {project.title}
                    </h2>
                    <p className='text-base'>{project.description}</p>
                    <Link href={`/projects/ongoingProjects/${project.slug}`}>
                      <span className='text-primary font-semibold mt-4 inline-block hover:underline'>
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
