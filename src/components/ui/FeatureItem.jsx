const FeatureItem = ({ icon: Icon, title, description, index }) => {
  return (
    <div className="flex justify-start items-center gap-3 font-inter">
      <div className="bg-primaryColor/20 border-3 border-primaryColor w-11 h-11 min-w-11 min-h-11 rounded-full flex justify-center items-center p-2">
        <p className="text-xl text-primaryColor font-bold">{index + 1}</p>
      </div>
      <div className="flex flex-col text-left">
        <h5 className="text-primaryColor font-bold text-lg max-[1040px]:text-lg">{title}</h5>
        <p className="text-[#12141d]/70 max-[1040px]:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
