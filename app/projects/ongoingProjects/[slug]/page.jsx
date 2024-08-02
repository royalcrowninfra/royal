import IFrameComponent from "@/components/IFrameComponent";
import Calculator from "../../../../components/Calculator";
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

  console.log(project.map);



  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${project.backgroundImage || '/images/header/reviewsBackground.jpg'})`,
    }}>
      <div className="min-h-screen bg-transparent">
        <div className='container mx-auto px-4 py-8'>
          <section className='mb-12'>
            <div className='flex flex-col lg:flex-row items-start bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md overflow-hidden'>
              <div className='lg:w-1/3 p-6'>
                <h1 className='text-2xl md:text-3xl font-bold mb-4 text-black'>
                  {project.title}
                </h1>
                <p className='mb-4 text-sm md:text-base text-black'>
                  {project.fullDescription}
                </p>
                <p className='mb-4 text-sm md:text-base font-semibold text-black'>
                  Maha Rera Registration No : {project.reraNumber || "N/A"}
                </p>
              </div>
              <div className='lg:w-2/3'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>
            <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out flex items-center justify-center w-full sm:w-auto">
                Download Brochure
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </section>

          {project.amenities && (
            <section className='mb-12 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-6'>
              <h2 className='text-xl md:text-2xl font-bold mb-4 text-black'>Amenities</h2>
              <p className='mb-4 text-sm md:text-base text-black'>
                {project.amenitiesDescription}
              </p>
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                {project.amenities.map((amenity, index) => (
                  <div key={index} className='relative'>
                    <Image
                      src={amenity.image}
                      alt={amenity.name}
                      width={200}
                      height={200}
                      className='rounded-lg w-full h-auto'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 text-white p-2 rounded-b-lg'>
                      <p className='text-center text-xs sm:text-sm'>
                        {amenity.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          <div className="bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Configuration</h1>

              <div className="overflow-x-auto mb-12">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy-700 text-white">
                      <th className="py-3 px-4 text-left">Configuration</th>
                      <th className="py-3 px-4 text-left">SBA / Carpet (sq.ft.)</th>
                      <th className="py-3 px-4 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b">1 BHK</td>
                      <td className="py-3 px-4 border-b">396-425 sq.ft</td>
                      <td className="py-3 px-4 border-b">
                        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded">
                          Get Quote
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-center mb-8">Floor Plans</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.floorplans.map((plan, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="relative w-full h-64">
                      <Image
                        src={plan.src}
                        alt={plan.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-center font-semibold mt-4">{plan.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {project.connectivity && (
              <section className='mb-12 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-6'>
                <h2 className='text-xl md:text-2xl font-bold mb-4 text-black'>
                  Connected To Everything
                </h2>
                <ul className='list-disc pl-5 mb-4 text-sm md:text-base text-black'>
                  {project.connectivity.map((item, index) => (
                    <li key={index} className='mb-2'>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {project.map && (
              <section className='mb-12 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-6'>
                <h2 className='text-xl md:text-2xl font-bold mb-4 text-black'>Project Location</h2>
                <div className='w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden'>
                  <IFrameComponent iframeSrc={project.map.iframeSrc} />
                </div>
              </section>
            )}
          </div>

          <section className='bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-6'>
            <Calculator />
          </section>
        </div>
      </div>
    </div>
  );
}