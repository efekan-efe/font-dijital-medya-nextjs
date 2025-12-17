import { twMerge } from "tailwind-merge";

const RuleRow = ({ icon: Icon, title, description, iconClassName }) => {
  return (
    <div className="w-full flex justify-start items-start gap-3 max-w-[400px]">
      <div className="bg-softPink p-3 rounded-full">
        <Icon className={twMerge(`w-7 h-7 stroke-primaryColor stroke-[1.5px]`, iconClassName)} />
      </div>
      <div className="text-left">
        <p className="text-[19px] font-bold border-b-[2px] border-primaryColor/30 mr-9">{title}</p>
        <p className="text-[#12141D]/70 pt-0.5">{description}</p>
      </div>
    </div>
  );
};

export default RuleRow;
