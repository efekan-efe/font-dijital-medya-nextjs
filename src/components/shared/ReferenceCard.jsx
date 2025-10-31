import Image from "next/image";
import customerReviewIcon from "@/assets/references/icons/customerReviewIcon.svg";
import { CustomButton } from "../ui/CustomButton";
import SparkleIcon from "../icons/SparkleIcon";

const ReferenceCard = ({ image, title, description, customerReview, link }) => {
  return (
    <div className="max-w-[400px] flex flex-col gap-4 border border-primaryColor/50 rounded-t-[20px] rounded-b-xl p-2 font-inter">
      <div style={{ scrollbarWidth: "none" }} className="border border-primaryColor/50 rounded-t-[18px] w-full max-h-[385px] overflow-auto">
        <Image src={image} alt={title} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primaryBlack text-xl text-left leading-[120%] font-semibold">{title}</h3>
        <p className="text-[#202220] text-sm leading-[130%] tracking-[-2%] min-h-14">{description}</p>
        <div className="flex flex-col gap-1.5 bg-[#43A047]/25 rounded-sm p-1.5">
          <div className="flex justify-start items-center gap-1">
            <Image src={customerReviewIcon} alt="Müşteri Yorumu" />
            <h4 className="text-sm font-medium leading-[120%] text-[#43A047]">Müşteri Yorumu</h4>
          </div>
          <p className="text-[#202220] text-sm leading-[130%] tracking-[-2%] italic">{customerReview}</p>
        </div>
      </div>

      <CustomButton rightComponent={<SparkleIcon className="stroke-white" />} leftComponent={<SparkleIcon className="stroke-white" />} size="lg" variant="filledButton" className={"py-2 px-3 text-sm text-center w-fit rounded-full"}>
        Web Sitesini Ziyaret Et
      </CustomButton>
    </div>
  );
};

export default ReferenceCard;
