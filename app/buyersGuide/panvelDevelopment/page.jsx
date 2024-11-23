'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import Link from 'next/link';

const PanvelDevelopment = () => {
  const contentBlocks = [
    {
      title: 'Upcoming Navi Mumbai International Airport (NMIA)',
      description:
        'Allowing you the luxury of circumventing the Mumbai jams and take your flight directly from NMIA located within striking distance of your Royal Crown home. ',
      imagePath: '/images/buyersGuide/panveldevelopment/airport.jpg',
    },
    {
      title: 'Upcoming Mumbai Trans Harbour Link (MTNL)',
      description:
        'The Mumbai Trans Harbour Link (MTHL) is an ambitious infrastructure project designed to connect Mumbai with Navi Mumbai across the Arabian Sea. This 22 km-long bridge will significantly reduce travel time between the two cities, cutting it from about 90 minutes to just 30 minutes. The link will consist of a sea bridge, land viaducts, and tunnels, with a four-lane road for vehicles. It aims to ease traffic congestion, promote economic growth in Navi Mumbai, and provide better connectivity for both commercial and recreational purposes. The MTHL is expected to be completed in the near future, transforming Mumbai transport network.',
      imagePath: '/images/buyersGuide/panveldevelopment/local.jpg',
    },
    {
      title: 'Multimodal Corridor',
      description:
        'The 126 km long Alibag-Virar corridor is a crucial infrastructure project aimed at enhancing connectivity within the Mumbai Metropolitan Region (MMR). This ambitious corridor will link key areas like Alibag and Virar, providing improved access to the upcoming Navi Mumbai International Airport, as well as other significant nodes in MMR. It will serve as an important transportation route for both commuters and goods, reducing travel time between suburban and peripheral areas. This corridor is expected to boost regional development, ease traffic congestion, and support economic growth by improving connectivity to Mumbai’s airport and other key locations in Navi Mumbai.',
      imagePath: '/images/buyersGuide/panveldevelopment/highway.jpg',
    },
    {
      title: 'Panvel–Karjat Railway Line',
      description:
        'The Panvel–Karjat Railway Line is a vital railway project aimed at enhancing connectivity in the Mumbai Metropolitan Region. Spanning approximately 40 kilometers, this line connects Panvel in Navi Mumbai to Karjat in the Raigad district.The line is part of the broader efforts to improve suburban railway networks, reduce travel time, and decongest Mumbai main railway stations. It will provide better access to the rapidly developing areas of Navi Mumbai and its surroundings, improving transport for both commuters and freight.The Panvel-Karjat line will play a key role in promoting economic growth and easing congestion in the region.',
      imagePath: '/images/buyersGuide/panveldevelopment/karjatpanvel.jpg',
    },
    {
      title: 'CST–Panvel Fast Railway Corridor',
      description:
        'The CST–Panvel Fast Railway Corridor is a major railway project designed to enhance connectivity between Mumbai’s Chhatrapati Shivaji Maharaj Terminus (CST) and Panvel in Navi Mumbai. This 48 km fast-track corridor will reduce travel time by offering dedicated high-speed tracks, enabling quicker transit for commuters traveling between the city and Navi Mumbai. With more frequent and efficient trains, it aims to alleviate congestion on the existing routes, boost passenger capacity, and improve overall rail services. The corridor is part of the broader plan to modernize Mumbai’s suburban railway network and support regional economic growth and development. ',
      imagePath: '/images/buyersGuide/panveldevelopment/panvelcst.jpg',
    },
    {
      title: 'NAINA (NAVI MUMBAI AIRPORT INFLUENCE NOTIFIED AREA)',
      description:
        'NAINA (Navi Mumbai Airport Influence Notified Area) is a designated region around the upcoming Navi Mumbai International Airport, intended to facilitate planned urban development. Spanning approximately 250 square kilometers, NAINA encompasses areas in Navi Mumbai, Panvel, and surrounding regions. The project aims to create a well-planned urban ecosystem with residential, commercial, and industrial zones, offering modern infrastructure and connectivity. NAINAs development will promote economic growth, attract investments, and create thousands of job opportunities. With strategic planning and sustainable development, NAINA is expected to become a key growth hub, complementing the operations of the Navi Mumbai International Airport.',
      imagePath: '/images/buyersGuide/panveldevelopment/naina.jpg',
    },
    {
      title: 'ATAL SETU',
      description:
        'Atal Setu, also known as the Atal Bridge, is a vital infrastructure project located in Goa, India, connecting the islands of Goa’s River Mandovi. The bridge, named in honor of former Prime Minister Atal Bihari Vajpayee, is a modern cable-stayed structure designed to improve road connectivity and ease traffic flow in the region. It spans approximately 5.1 kilometers and serves as a crucial link between Panaji, the state capital, and the northern regions of Goa. The Atal Setu is expected to boost tourism, enhance regional development, and reduce congestion, providing a smoother transportation route for commuters.',
      imagePath: '/images/buyersGuide/panveldevelopment/atalsetu.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{ backgroundImage: "url('/images/buyersGuide/panveldevelopment/futureDevelopment.jpg')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4 relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
          </h1>
        </motion.div>
      </motion.div>


      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className="space-y-8 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              <div className="bg-blue-600 p-4">
                <h2 className="text-xl font-semibold text-white text-center">{block.title}</h2>
              </div>
              <div className="flex flex-col md:flex-row">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 p-6">
                      <p className="text-sm text-gray-700">{block.description}</p>
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src={block.imagePath}
                        alt={block.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2">
                      <Image
                        src={block.imagePath}
                        alt={block.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <p className="text-sm text-gray-700">{block.description}</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PanvelDevelopment;