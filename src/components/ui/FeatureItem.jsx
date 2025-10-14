const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex justify-start items-center gap-3 font-inter">
      <div className="bg-primaryColor/20 w-12 h-12 rounded-full flex justify-center items-center p-2">
        <Icon className="text-primaryColor w-auto h-auto" />
      </div>
      <div className="flex flex-col text-left">
        <h5 className="text-primaryBlack font-bold text-xl">{title}</h5>
        <p className="text-[#12141d]/70">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
