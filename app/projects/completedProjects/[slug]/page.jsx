import EMICalculator from "../../../buyersGuide/emiCalculator";
import { getProjectBySlug } from "../../../../data/completedProjects";
import Image from "next/image";

export async function generateStaticParams() {
  const projects = await import("../../../../data/completedProjects").then(
    (module) => module.projects
  );
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
    <div>
      <div className='container mx-auto py-8'>
        <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>
        <div className='relative h-64 mb-4'>
          <Image
            src={project.image}
            layout='fill'
            objectFit='cover'
            alt={project.title}
          />
        </div>
        <p className='text-lg'>{project.fullDescription}</p>
        <EMICalculator/>
      </div>
    </div>
  );
}
