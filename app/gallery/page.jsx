import React from 'react';

const photos = [
  { src: '/images/womens-day.jpg', title: "International Women's Day celebration" },
  { src: '/images/holi.jpg', title: 'Holi Celebration' },
  { src: '/images/football.jpg', title: "Team Raigad Won State Football match it’s SPONSORED by QUALCON" },
  { src: '/images/cricket.jpg', title: 'Builders Cricket Championship (BCC-2020)' },
  { src: '/images/top-performing.jpg', title: 'Top Performing Channel Partner 2020' },
  { src: '/images/tree-plantation.jpg', title: '#TreePlantation_The Positive Initiative' },
  { src: '/images/womens-day-2022.jpg', title: "International Women's Day Celebration 2022" },
  { src: '/images/diwali.jpg', title: 'Diwali Celebration 2021' },
  { src: '/images/holi-2022.jpg', title: 'Holi Celebration 2022' },
];

const PhotoGallery = () => {
  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-2xl font-bold text-center mb-8'>Photo Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {photos.map((photo, index) => (
          <div key={index} className='bg-gray-900 text-white rounded-lg shadow-md overflow-hidden'>
            <div className='relative w-full h-48'>
              <img
                src={photo.src}
                alt={photo.title}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='p-4'>
              <h2 className='text-lg font-semibold'>{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
