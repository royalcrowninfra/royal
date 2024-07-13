import Image from 'next/image'
import Link from 'next/link'
import {TbArrowNarrowRight} from 'react-icons/tb'

export default function CatalogueSection(){
    const items=[
        {
            id:'01',
            catagory:'Cossy Bedroom Setup',
            image:"/images/img.jpg",
            description:'family drawing room with a clean and comfortable design for your family'
        },
        {
            id:'02',
            catagory:'Kitchen Setup',
            image:"/images/img.jpg",
            description:'family drawing room with a clean and comfortable design for your family'
        },
        {
            id:'03',
            catagory:'Drawing Setup',
            image:"/images/img.jpg",
            description:'family drawing room with a clean and comfortable design for your family'
        },
        {
            id:'04',
            catagory:'Living Setup Setup',
            image:"/images/img.jpg",
            description:'family drawing room with a clean and comfortable design for your family'
        }
    ]
    return(
        <div className='grid gap-8 lg:grid-cols-4 lg:gap-0 divide-gray-300 lg:divide-x'>
            {
                items.map((items)=>(
                    <div key={items.id}
                    className='relative overflow-hidden group'
                    >
                        <div>
                            <Image
                            src={items.image}
                            width={380}
                            height={100}
                            alt=''
                            className='w-full'
                             />
                        </div>

                        <div>
                            <div>
                                <p>{items.catagory}</p>
                                <span>{items.id}</span>
                            </div>
                            <Link href=''>{items.title}</Link>
                            <p>{items.description}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
