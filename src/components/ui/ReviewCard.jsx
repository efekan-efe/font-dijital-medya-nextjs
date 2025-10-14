import Image from "next/image";
import { Star } from "lucide-react";
import googleLogo from "@/assets/icons/google_logo.svg";

const ReviewCard = ({ name, image, rating, date, comment }) => {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-x-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className={`h-6 w-6 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between gap-3 min-h-[220px] py-6 px-4 bg-white relative border border-secondaryColor/20 rounded-xl">
      <div className="absolute right-0 bottom-0 max-w-32 w-full opacity-25">
        <Image className="w-full h-full" src={googleLogo} alt="Google İkonu" />
      </div>
      <div className="flex flex-col gap-2">
        <StarRating rating={rating} />
        <p className="leading-[25.6px]">{comment}</p>
      </div>

      <div className="flex justify-start items-center gap-2">
        <div className="max-w-12 max-h-12 w-full h-full rounded-full">
          <Image className="w-full h-full" src={image} alt={name} />
        </div>
        <div className="flex flex-col ">
          <p className="font-medium text-primaryBlack">{name}</p>
          <p className="text-[#697586]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
