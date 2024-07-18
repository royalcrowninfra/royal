import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    img: '/images/banks/axisBank.jpg',
  },
  {
    img:'/images/banks/bankOfBaroda.jpg' ,
  },
  {
    img: '/images/banks/bankOfIndia.jpg',
  },
  {
    img:'/images/banks/canaraBank.jpg' ,
  },
  {
    img:'/images/banks/Hdfc.jpg' ,
  },
  {
    img:'/images/banks/icici.jpg' ,
  },
  {
    img:'/images/banks/idbi.jpg' ,
  },
  {
    img:'/images/banks/indian.jpg' ,
  },
  {
    img:'/images/banks/induslandBank.jpg' ,
  },
  {
    img:'/images/banks/Kotak.jpg' ,
  },
  {
    img:'/images/banks/sbi.jpg' ,
  },
  {
    img:'/images/banks/southIndian.jpg' ,
  },
  {
    img:'/images/banks/unionBank.jpg' ,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({img}) => {
  return (
    <figure
    className={cn(
      "relative w-64 h-48 cursor-pointer overflow-hidden rounded-xl border p-4",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <img className='w-full h-full object-cover' alt='' src={img} />
  </figure>
  );
};

export default function BankingPartner() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
