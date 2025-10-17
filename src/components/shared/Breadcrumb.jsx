import breadcrumbImg from "@/assets/images/breadcrumb_background.webp";
import TitleBadge from "../ui/TitleBadge";
import { Button } from "../ui/Button";
import { Phone, Search } from "lucide-react";

const Breadcrumb = ({ badgeContent, titleContent }) => {
  return (
    <div style={{ backgroundImage: `url(${breadcrumbImg.src})` }} className="w-full font-inter bg-cover bg-center bg-no-repeat py-20 px-4 max-md:py-12">
      <div className="w-full flex flex-col justify-center items-center gap-1 max-md:text-sm">
        <TitleBadge>{badgeContent}</TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack max-w-2xl mx-auto text-center leading-tight max-md:text-3xl max-sm:text-2xl">{titleContent}</h1>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 max-sm:flex-col max-sm:gap-2">
        <Button size="lg" variant="filledButton" iconLeft={Search} className={"max-md:text-sm"}>
          Ücretsiz Analiz
        </Button>
        <Button size="lg" variant="emptyButton" iconLeft={Phone} className="bg-white max-md:text-sm">
          Hemen Görüş
        </Button>
      </div>
    </div>
  );
};

export default Breadcrumb;
