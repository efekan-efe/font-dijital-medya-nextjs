const RuleRow = ({ index = 0, title, description }) => {
  // Varsayılan değer: 0
  return (
    <div className="w-full flex justify-start items-start gap-3 max-w-[500px]">
      <div className="bg-softPink border-2 border-primaryColor rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0">
        {/* Eğer index sayı değilse 0 kabul edip 1 ekler */}
        <span className="text-primaryColor text-lg font-bold">{(Number(index) || 0) + 1}</span>
      </div>

      <div className="text-left flex flex-col gap-1">
        <h4 className="font-bold text-lg text-primaryBlack">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default RuleRow;
