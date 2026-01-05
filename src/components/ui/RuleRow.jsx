const RuleRow = ({ number, title, description }) => {
  return (
    <div className="w-full flex justify-start items-start gap-3 max-w-[400px]">
      <div className="bg-softPink border-3 border-[#5C45FD] rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0">
        <span className="text-primaryColor text-lg font-bold">{number}</span>
      </div>

      <div className="text-left">
        <p className="text-[19px] font-bold border-b-[2px] border-primaryColor/30 mr-9">{title}</p>
        <p className="text-[#12141D]/70 pt-0.5">{description}</p>
      </div>
    </div>
  );
};

export default RuleRow;
