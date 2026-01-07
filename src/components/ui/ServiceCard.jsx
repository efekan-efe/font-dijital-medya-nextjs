import Link from "next/link";

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="max-w-3xs w-full flex flex-col justify-center items-start gap-3 font-inter">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="bg-softPink w-16 h-16 rounded-2xl flex justify-center items-center">
          <Icon className="text-primaryColor w-8 h-8 fill-none" />
        </div>

        <div className="flex flex-col justify-start items-start gap-2 text-left">
          <h3 className="text-lg text-primaryBlack font-bold leading-7">{title}</h3>
          <p className="text-[13px] text-[#797979] leading-6">{description}</p>
        </div>
      </div>

      <Link href={link} className="text-primaryColor text-sm leading-7 font-medium text-left">
        Detayları İncele
      </Link>
    </div>
  );
};

export default ServiceCard;
