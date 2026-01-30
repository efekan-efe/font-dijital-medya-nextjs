import Image from "next/image";
import ServiceTick from "@/assets/icons/service_tick.svg";
import { CustomButton } from "../ui/CustomButton";

const PriceCard = ({ icon: Icon, colors, title, description, features, bestSeller }) => {
  return (
    <div className={`max-w-[300px] min-h-[425px] w-full h-full flex flex-col justify-between p-3 gap-4 shadow relative ${bestSeller ? "border-[3px] border-primaryColor" : "border border-primaryColor/25"}  rounded-2xl `}>
      {bestSeller && (
        <CustomButton size="lg" variant="filledButton" className={"absolute -top-[17px] left-1/2 translate-x-[-50%] py-1.5 text-center text-sm rounded-lg w-fit"}>
          En Popüler
        </CustomButton>
      )}
      <div style={{ background: `linear-gradient(${colors[0]}, ${colors[1]})` }} className="p-2 rounded-full w-12 h-12 min-w-12 min-h-12">
        <Icon className="w-full h-full fill-none stroke-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-primaryBlack text-xl font-bold leading-6">{title}</h3>
        <p className="text-primaryBlack text-sm leading-[22px]">{description}</p>
      </div>
      <div className="bg-primaryColor/25 h-px w-full"></div>
      <ul className="list-none flex flex-col gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex justify-start items-center gap-2">
            <Image className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]" src={ServiceTick} alt="Hizmet İkonu" />
            <p className="text-primaryBlack text-sm">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
