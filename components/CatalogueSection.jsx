import Image from 'next/image';
import { TbArrowNarrowRight } from 'react-icons/tb';

export default function CatalogueSection() {
  const items = [
    {
      id: '01',
      catagory: 'Cossy Bedroom Setup',
      title: 'cossy bedroom setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
    {
      id: '02',
      catagory: 'Kitchen Setup',
      title: 'cossy bedroom setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
    {
      id: '03',
      catagory: 'Drawing Setup',
      title: 'cossy bedroom setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
    {
      id: '04',
      catagory: 'Living Setup Setup',
      title: 'cossy bedroom setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
  ];
  return (
    <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x'>
      {items.map((item) => (
        <div key={item.id} className='relative overflow-hidden group'>
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt=''
              className='w-full'
            />
          </div>

          <div className='absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12'>
            <div className='flex justify-between pb-4 '>
              <p className='text-sm'>{item.catagory}</p>
              <span className='text-sm'>{item.id}</span>
            </div>
            <a className='block text-xl font-semibold' href=''>{item.title}</a>
            <p className='py-4 '>{item.description}</p>
            <a className='inline-flex items-center font-medium ' href=''>see details
              <TbArrowNarrowRight className='ml-2' /></a>
          </div>
          <div className='inset-0 bg-pink-50 flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition
            duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden'>
            <p className='tracking-wider -rotate-90'>{item.catagory}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
