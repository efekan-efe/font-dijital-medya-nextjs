const FeatureItem = ({ title, description, index }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-0 font-inter">
      <div className="flex justify-start items-center gap-2">
        <div className="bg-primaryColor/20 border-2 border-primaryColor w-8 h-8 min-w-8 min-h-8 rounded-full flex justify-center items-center p-2">
          <p className="text-lg text-primaryColor font-semibold">{index + 1}</p>
        </div>
        <h5 className="text-primaryColor font-bold text-xl max-[1040px]:text-lg">{title}</h5>
      </div>
      <p className="text-[#12141d]/70 pl-10 max-[1040px]:text-sm">{description}</p>
    </div>
  );
};

export default FeatureItem;
