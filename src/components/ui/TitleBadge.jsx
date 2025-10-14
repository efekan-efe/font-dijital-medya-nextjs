import SparkleIcon from "../icons/SparkleIcon";

const TitleBadge = ({ children }) => {
  return (
    <div className="w-fit flex items-center gap-x-2 rounded-full border-1 border-black/25 bg-white px-3 py-1 font-inter">
      <SparkleIcon className="w-4 h-4 fill-primaryColor" />
      {children}
      <SparkleIcon className="w-4 h-4 fill-primaryColor" />
    </div>
  );
};

export default TitleBadge;
