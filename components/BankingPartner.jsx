'use client'
import { cn } from "../lib/utils";
import Marquee from "../components/magicui/marquee";

const reviews = [
  { img: '/images/banks/axisBank.jpg' },
  { img: '/images/banks/bankOfBaroda.jpg' },
  { img: '/images/banks/bankOfIndia.jpg' },
  { img: '/images/banks/canaraBank.jpg' },
  { img: '/images/banks/Hdfc.jpg' },
  { img: '/images/banks/icici.jpg' },
  { img: '/images/banks/idbi.jpg' },
  { img: '/images/banks/Kotak.jpg' },
  { img: '/images/banks/sbi.jpg' },
  { img: '/images/banks/southIndian.jpg' },
  { img: '/images/banks/unionBank.jpg' },
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-48 h-24 sm:w-56 sm:h-28 cursor-pointer overflow-hidden rounded-xl m-4",
        "border border-gray-200 bg-white hover:bg-gray-50",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <img className='w-full h-full object-contain p-2' alt='' src={img} />
    </figure>
  );
};

export default function BankingPartner() {
  return (
    <div className="w-full bg-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4">Banking Partner</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>

        <div className="relative border-4 border-red-600 rounded-lg overflow-hidden">
          <div className="bg-white dark:bg-gray-900 py-8">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review) => (
                <ReviewCard key={review.img} {...review} />
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-gray-900"></div>
        </div>
      </div>
    </div>
  );
}