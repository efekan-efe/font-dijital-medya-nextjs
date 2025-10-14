import Image from "next/image";

const ProcessCard = ({ title, description, image, index = 1 }) => {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-br from-white to-[#9691C1] w-full border border-black/25 p-6 rounded-3xl font-inter">
      <div className="flex justify-start items-center gap-2">
        <div className="flex justify-center items-center text-center bg-primaryColor rounded-full w-9 h-9 border-4 border-[#ADA2FE]">
          <p className="text-white font-medium text-xl">{index + 1}</p>
        </div>
        <h4 className="text-2xl text-secondaryColor font-semibold tracking-tighter">{title}</h4>
      </div>

      <p className="text-secondaryColor font-medium">{description}</p>

      <div className="w-full h-full">
        <Image className="w-full h-full" src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProcessCard;
