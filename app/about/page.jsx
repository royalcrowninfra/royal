'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion, useScroll, useTransform } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })


  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/images/header/whoweare.jpg')] bg-center bg-cover alt-whoarewe">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='container py-32 text-6xl font-semibold text-black reacking-widest text-center lg:py-64'>
          Who are we?
        </motion.h1>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>
            We have the best Flats
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='text-2xl text-center font-medium pb-10 mt-5'>Our Royal Crown Infra Company is a Company that provides best services,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis quidem vero consequuntur, eos non ex facilis quia esse provident, aut minima accusantium enim soluta ipsum architecto fuga maxime nihil?
            Temporibus, ipsum omnis rerum cumque aperiam sint, quaerat fugit officia dolor pariatur harum assumenda voluptates ullam. Sunt est deleniti tempora libero velit rem, quis corporis ducimus aliquid aspernatur unde quam.
          </motion.p>
        </div>

        <div className='items-center lg:flex gap-x-8'>
          {/* Left Image Section  */}
          <motion.div
            style={{ scale }}
            ref={ref}
            className='w-full'>
            <Image src='/images/img.jpg' width={700} height={700} alt='leftImage' />
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            alt='rightImage'
            className='pb-8 tracking-wide mt-6'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quibusdam itaque! Ad aut maiores unde commodi voluptatum itaque totam, assumenda explicabo quo. Nihil tenetur sit iure saepe quaerat rerum similique.
              Fuga rerum perferendis ipsa a nesciunt unde iure iusto magni assumenda, quod dolor ullam ad iste, quas explicabo? Iure error harum quae sapiente molestiae sint recusandae velit! Dicta, nemo totam.
              Rem inventore fugiat architecto dicta reprehenderit aliquam vel non eaque velit unde perspiciatis nobis natus, atque tempore sed magni voluptatem maiores? Inventore nisi nam ipsam debitis fugit atque sint sequi.
            </p>
            <span className='text-xl font-extrabold tracking-tight'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad labore, saepe in voluptate nostrum aperiam. Consectetur delectus nemo voluptates! Aliquam ullam ducimus quia minima in iste et nobis itaque quod?
            </span>
            <Button className='inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-gray-950 rinf-pffset-2'>Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
          </motion.div>
        </div>
        {/* Team Section */}
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='text-4xl font-bold tracking-wider text-center uppercase'>
              Team
            </motion.h1>
          </div>


          <div className='grid py-8 gap-20 lg:grid-cols-3'>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 '>
                <Image src="/images/img.jpg" width={200} height={200} className='mx-auto rounded-full' alt='' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 '>
                <Image src="/images/img.jpg" width={200} height={200} className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 '>
                <Image src="/images/img.jpg" width={200} height={200} className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page










// import IFrameComponent from "@/components/IFrameComponent";
// import { projects, getProjectBySlug } from "../../../../data/ongoingProjects";
// import Image from "next/image";
// import Link from "next/link";
// import Calculator from "@/components/Calculator";

// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export default function ProjectPage({ params }) {
//   const project = getProjectBySlug(params.slug);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="min-h-screen w-5/6 ">
//       <section className='bg-white py-8'>
//         <div className='flex flex-col lg:flex-row items-start px-4'>
//           <div className='lg:w-3/3 pr-6'>
//             <h1 className='text-2xl md:text-3xl font-bold mb-4 text-black text-center'>
//               {project.title}
//             </h1>
//             <p className='mb-4 text-sm md:text-base text-black'>
//               {project.fullDescription}
//             </p>
//             <p className='mb-4 text-sm md:text-base font-semibold text-black'>
//               Maha Rera Registration No : {project.reraNumber || "N/A"}
//             </p>
//           </div>
//           <div className='lg:w-2/3'>
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={600}
//               height={400}
//               className='w-full h-auto object-cover'
//             />
//           </div>
//         </div>
//         <div className="px-8 mt-4 flex gap-2">
//           <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
//             <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out flex items-center justify-center w-full sm:w-auto">
//               Download Brochure
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </Link>

//         </div>
//       </section>

//       {project.amenities && (
//         <section className='bg-gray-100 py-8'>
//           <div className='px-4'>
//             <h2 className='text-xl md:text-2xl font-bold mb-4 text-black text-center'>Amenities</h2>
//             <p className='mb-4 text-sm md:text-base text-black text-center'>
//               {project.amenitiesDescription}
//             </p>
//             <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
//               {project.amenities.map((amenity, index) => (
//                 <div key={index} className='relative'>
//                   <Image
//                     src={amenity.image}
//                     alt={amenity.name}
//                     width={200}
//                     height={200}
//                     className='rounded-lg w-full h-64'
//                   />
//                   <div className='absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 text-white p-2 rounded-b-lg'>
//                     <p className='text-center text-xs sm:text-sm'>
//                       {amenity.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       <section className='bg-white py-8'>
//         <div className='px-4'>
//           <h1 className="text-3xl font-bold text-center mb-8">Configuration</h1>

//           <div className="overflow-x-auto mb-12">
//             <table className="w-full border-collapse bg-white shadow-md rounded-lg border border-gray-300">
//               <thead>
//                 <tr className="bg-navy-700 text-white border-b border-gray-300 transition duration-300 ease-in-out hover:bg-navy-800">
//                   <th className="py-3 px-4 text-left border-r border-gray-300">Configuration</th>
//                   <th className="py-3 px-4 text-left border-r border-gray-300">SBA / Carpet (sq.ft.)</th>
//                   <th className="py-3 px-4 text-left">Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="transition duration-300 ease-in-out hover:bg-gray-100 border-b border-gray-300">
//                   <td className="py-3 px-4 border-r border-gray-300">1 BHK</td>
//                   <td className="py-3 px-4 border-r border-gray-300">396-425 sq.ft</td>
//                   <td className="py-3 px-4">
//                     <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out">
//                       Get Quote
//                     </button>
//                   </td>
//                 </tr>
//                 {/* Add more rows here as needed */}
//               </tbody>
//             </table>
//           </div>


//           <h2 className="text-3xl font-bold text-center mb-8">Floor Plans</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {project.floorplans.map((plan, index) => (
//               <div key={index}>
//                 <div className="relative w-full h-64">
//                   <Image
//                     src={plan.src}
//                     alt={plan.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <p className="text-center font-semibold mt-4">{plan.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className='grid grid-cols-1 md:grid-cols-2'>
//         {project.connectivity && (
//           <section className='bg-gray-100 py-8'>
//             <div className='px-4'>
//               <h2 className='text-xl md:text-2xl font-bold mb-4 text-black text-center'>
//                 Connected To Everything
//               </h2>
//               <ul className='list-disc pl-5 mb-4 text-sm md:text-base text-black'>
//                 {project.connectivity.map((item, index) => (
//                   <li key={index} className='mb-2'>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//         )}
//         {project.map && (
//           <section className='bg-gray-100 py-8'>
//             <div className='px-4'>
//               <h2 className='text-xl md:text-2xl font-bold mb-4 text-black text-center'>Project Location</h2>
//               <div className='w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden'>
//                 <IFrameComponent iframeSrc={project.map.iframeSrc} />
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }