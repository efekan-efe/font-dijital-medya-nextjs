import { Rocket } from "lucide-react";

const Badge = ({ icon: Icon, children, className }) => {
  return (
    <div className={`w-fit flex items-center gap-x-2 rounded-full border-2 border-secondaryColor bg-white px-3 py-1 ${className}`}>
      {Icon && <Icon className="w-5 h-5 stroke-[1.5px] text-secondaryColor" />}
      <span className="text-secondaryColor text-base font-medium">{children}</span>
    </div>
  );
};

export default Badge;
