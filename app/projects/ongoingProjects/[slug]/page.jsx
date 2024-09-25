import IFrameComponent from "@/components/IFrameComponent";
import { projects, getProjectBySlug } from "../../../../data/ongoingProjects";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }



  return (
    <div className="bg-gradient-to-b from-white-100 to-white min-h-screen">
      <div className="w-full">
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-start max-w-7xl mx-auto'>
            <div className='lg:w-1/2 lg:pr-6 text-center'>
              <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mb-6 text-center lg:text-left text-black leading-tight font-poppins">
                {project.title}
              </h1>

              <p className='mb-4 text-sm md:text-base text-black lg:text-left'>
                {project.fullDescription}
              </p>
              <p className='mb-4 text-sm md:text-lg font-semibold text-cyan-700 text-center lg:text-left md:mt-8'>
                {project.tagLine}
              </p>
              <p className='mb-4 text-sm md:text-base font-semibold text-black text-center lg:text-left md:mt-8'>
                Maha Rera Registration No : {project.reraNumber || "N/A"}
              </p>
            </div>
            <div className='lg:w-1/2 mt-4 lg:mt-0'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start lg:ml-20 2xl:ml-72">
            <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out flex items-center justify-center">
                Download Brochure
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </section>

        {project.amenities && (
          <div className="w-full bg-gray-200">
            <section className='bg-white-100 py-12 px-4 sm:px-6 lg:px-8'>
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center relative inline-blockr">
                  <span className="bg-gray-200 px-2 text-cyan-800 md:text-cente">Amenities</span>
                </h2>

                <p className='mb-8 text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto'>
                  {project.amenitiesDescription}
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                  {project.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className='relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl'
                      style={{ backgroundColor: '#f0f4f8' }}
                    >
                      <Image
                        src={amenity.image}
                        alt={amenity.name}
                        width={200}
                        height={200}
                        className='rounded-lg w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110'
                      />
                      <div className='absolute bottom-0 left-0 right-0 p-1'>
                        <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-lg'>
                          <div className='bg-gray-800 p-2 rounded-b-lg'>
                            <p className='text-center text-sm sm:text-base font-semibold text-white'>
                              {amenity.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {project.galleryImages && (
          <section className='bg-white-200 py-8 mt-8 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center relative inline-blockr">
                <span className="bg-gray-200 px-2 text-cyan-800 md:text-cente">Gallery</span>
              </h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
                {project.galleryImages.map((galleryImage, index) => (
                  <div
                    key={index}
                    className='relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105'
                  >
                    <Image
                      src={galleryImage.image}
                      alt={galleryImage.name}
                      width={200}
                      height={200}
                      className='rounded-lg w-full h-68 object-fill transition duration-500 ease-in-out transform hover:scale-110'
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className='bg-gray-200 py-8 px-4 sm:px-6 lg:px-8'>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center relative inline-blockr">
              <span className="bg-gray-200 px-2 text-cyan-800 md:text-cente">Configuration</span>
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-navy-700 text-white border-b border-gray-300 transition duration-300 ease-in-out hover:bg-navy-800">
                    <th className="py-3 px-4 text-left border-r border-gray-300">Configuration</th>
                    <th className="py-3 px-4 text-left border-r border-gray-300">SBA / Carpet (sq.ft.)</th>
                    <th className="py-3 px-4 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="transition duration-300 ease-in-out hover:bg-gray-100 border-b border-gray-300">
                    <td className="py-3 px-4 border-r border-gray-300">1 BHK</td>
                    <td className="py-3 px-4 border-r border-gray-300">421 SQ FT</td>
                    <td className="py-3 px-4">
                      <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out">
                        Get Quote
                      </button>
                    </td>
                  </tr>
                  <tr className="transition duration-300 ease-in-out hover:bg-gray-100 border-b border-gray-300">
                    <td className="py-3 px-4 border-r border-gray-300">2 BHK</td>
                    <td className="py-3 px-4 border-r border-gray-300">535 SQ FT</td>
                    <td className="py-3 px-4">
                      <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out">
                        Get Quote
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows here as needed */}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center relative inline-blockr">
                <span className="bg-gray-200 px-2 text-cyan-800 md:text-cente">Floor Plans</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.floorplans.map((plan, index) => (
                  <div key={index}>
                    <div className="relative w-full h-64">
                      <Image
                        src={plan.src}
                        alt={plan.title}
                        layout="fill"
                        objectFit="fill"
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-center font-semibold mt-4">{plan.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          {project.connectivity && (
            <section className='bg-white-100 py-8 rounded-lg'>
              <h2 className='text-xl md:text-2xl font-bold mb-4 text-black text-center'>
                Connected To Everything
              </h2>
              <ul className='list-disc pl-8 mb-4 text-sm md:text-base text-black md:text-start'>
                {project.connectivity.map((item, index) => (
                  <li key={index} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {project.map && (
            <section className='bg-white-100 py-8 rounded-lg'>
              <h2 className='text-xl md:text-2xl font-bold mb-4 text-black text-center'>Project Location</h2>
              <div className='w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden'>
                <IFrameComponent iframeSrc={project.map.iframeSrc} />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}