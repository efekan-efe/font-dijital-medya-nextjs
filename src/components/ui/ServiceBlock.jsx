import Image from "next/image";

const ServiceBlock = ({ badgeContent, title, children, imageSrc, imageAlt, imagePosition = "right" }) => {
  return (
    <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 max-md:gap-4 font-inter ${imagePosition === "left" ? "lg:flex-row-reverse" : ""} `}>
      <div className="flex-1 flex flex-col items-start gap-y-6 max-md:gap-4">
        {badgeContent}
        <h2 className="text-4xl font-bold text-primaryBlack">{title}</h2>
        <div className="text-lg text-gray-600 space-y-4">{children}</div>
      </div>
      <div className="flex-1">
        <Image src={imageSrc} alt={imageAlt} width={600} height={500} className="rounded-2xl w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServiceBlock;
