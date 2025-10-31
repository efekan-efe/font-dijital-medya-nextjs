import { Shapes } from "lucide-react";

const FaqCategories = ({ faqCategoryData, selectedCategory, onCategoryChange }) => {
  return (
    <div className="border border-primaryColor rounded-t-2xl p-5 bg-[#DBD4F5]/25 flex flex-col gap-5 max-md:order-1">
      <div className="flex justify-start items-center gap-2">
        <Shapes className="stroke-primaryColor" />
        <h3 className="font-semibold text-2xl leading-7 text-primaryColor">Kategoriler</h3>
      </div>
      <ul className="flex flex-col gap-2.5">
        {faqCategoryData.map((category, index) => (
          <li
            key={index}
            onClick={() => onCategoryChange(category.title)}
            className={`flex justify-start items-center gap-1.5 rounded-full border border-primaryColor py-3 px-4 cursor-pointer transition-colors ${selectedCategory === category.title ? "bg-primaryColor text-white" : "bg-white text-primaryColor"}`}
          >
            {category.icon && <span className={selectedCategory === category.title ? "stroke-white" : "stroke-primaryColor"}>{category.icon}</span>}
            <p className={selectedCategory === category.title ? "text-white" : "text-primaryColor"}>{category.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqCategories;
