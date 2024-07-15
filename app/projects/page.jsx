import Image from "next/image"


const projects=[
  {
    id:1,
    name:'building name',
    Description:'building description',
    image:'/images/img.jpg',
    link:'',
  },
  {
    id:2,
    name:'building name 2',
    Description:'building description 2',
    image:'/images/img.jpg',
    link:'',
  },
  {
    id:3,
    name:'building name 3',
    Description:'building description 3',
    image:'/images/img.jpg',
    link:'',
  },
]

const page = () => {
  return (
    <div>
      <div className="bg-[url('/images/img.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8 ">
        {
          projects.map((project)=>(
            <div key={project.id} className="relative overflow-hidden rounded-xl group">
              <div>
                <Image src={project.image} width={480} height={380} alt="" className="w-full"/>
              </div>
              <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end
              w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from transparent to-black
              group-hover:translate-y-0 ">
                <h1 className="text-2xl font-semibold">{project.name}</h1>
                <p className="py-4">{project.Description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page
