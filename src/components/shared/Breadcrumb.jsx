import breadcrumbImg from "@/assets/images/breadcrumb_background.webp";
import TitleBadge from "../ui/TitleBadge";
import { CustomButton } from "../ui/CustomButton";
import { Phone, Search } from "lucide-react";

const Breadcrumb = ({ badgeContent, titleContent, search, searchTerm, onSearchChange }) => {
  return (
    <div style={{ backgroundImage: `url(${breadcrumbImg.src})` }} className="w-full font-inter bg-cover bg-center bg-no-repeat py-20 px-4 max-md:py-12">
      <div className="w-full flex flex-col justify-center items-center gap-1 max-md:text-sm">
        <TitleBadge>{badgeContent}</TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack max-w-2xl mx-auto text-center leading-tight max-md:text-3xl max-sm:text-2xl">{titleContent}</h1>
      </div>

      {search && (
        <div className="pt-3 pb-1 w-full max-w-[400px] mx-auto relative bg-white rounded-full flex justify-center items-center">
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-6 translate-y-[-50%]  translate-x-[-50%]  stroke-primaryColor" />
            <input value={searchTerm} onChange={onSearchChange} className="w-full border-2 border-primaryColor rounded-full h-12 py-3 px-4 pl-12 outline-primaryColor" type="text" name="blogArama" placeholder="Ara..." id="blogArama" />
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-4 max-sm:flex-col max-sm:gap-2">
        <CustomButton href="/ucretsiz-analiz" size="lg" variant="filledButton" iconLeft={Search} className={"max-md:text-sm py-2"}>
          Ücretsiz Analiz
        </CustomButton>
        <CustomButton href="https://wa.me/+905323891658" size="lg" variant="emptyButton" iconLeft={Phone} className="bg-white max-md:text-sm py-2">
          Hemen Görüş
        </CustomButton>
      </div>
    </div>
  );
};

export default Breadcrumb;
