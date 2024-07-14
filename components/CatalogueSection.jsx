import Image from 'next/image';
import { TbArrowNarrowRight } from 'react-icons/tb';

export default function CatalogueSection() {
  const items = [
    {
      id: '01',
      catagory: 'Cossy Bedroom Setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
    {
      id: '02',
      catagory: 'Kitchen Setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
    {
      id: '03',
      catagory: 'Drawing Setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
    {
      id: '04',
      catagory: 'Living Setup Setup',
      image: '/images/img.jpg',
      description:
        'family drawing room with a clean and comfortable design for your family',
    },
  ];
  return (
    <div className='grid gap-8 lg:grid-cols-4 lg:gap-0 divide-gray-300 lg:divide-x'>
      {items.map((items) => (
        <div key={items.id} className='relative overflow-hidden group'>
          <div>
            <Image
              src={items.image}
              width={380}
              height={100}
              alt=''
              className='w-full'
            />
          </div>

          <div className='absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12'>
            <div className='flex justify-between pb-4 '>
              <p className='text-sm'>{items.catagory}</p>
              <span className='text-sm'>{items.id}</span>
            </div>
            <a className='block text-xl font-semibold' href=''>{items.title}</a>
            <p className='py-4 '>{items.description}</p>
            <a className='inline-flex items-center font-medium ' href=''>see details
             <TbArrowNarrowRight className='ml-2'/></a>
          </div>
          <div>
            <p>{items.catagory}</p>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
}
