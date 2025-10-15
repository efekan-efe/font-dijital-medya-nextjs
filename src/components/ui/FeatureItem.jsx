const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex justify-start items-center gap-3 font-inter">
      <div className="bg-primaryColor/20 w-12 h-12 min-w-12 min-h-12 rounded-full flex justify-center items-center p-2">
        <Icon className="text-primaryColor w-auto h-auto" />
      </div>
      <div className="flex flex-col text-left">
        <h5 className="text-primaryBlack font-bold text-xl max-[1040px]:text-lg">{title}</h5>
        <p className="text-[#12141d]/70 max-[1040px]:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
