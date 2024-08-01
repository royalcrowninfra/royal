import IFrameComponent from "@/components/IFrameComponent";
import Calculator from "../../../../components/Calculator";
import { projects, getProjectBySlug } from "../../../../data/ongoingProjects";
import Image from "next/image";

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