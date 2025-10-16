import breadcrumbImg from "@/assets/images/breadcrumb_background.webp";
import TitleBadge from "../ui/TitleBadge";
import { Button } from "../ui/Button";
import { Phone, Search } from "lucide-react";

const Breadcrumb = ({ badgeContent, titleContent }) => {
  return (
    <div style={{ backgroundImage: `url(${breadcrumbImg.src})` }} className="w-full font-inter bg-cover bg-center bg-no-repeat py-20">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>{badgeContent}</TitleBadge>
        {titleContent}
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 max-sm:flex-col ">
        <Button size="lg" variant="filledButton" iconLeft={Search}>
          Ücretsiz Analiz
        </Button>
        <Button size="lg" variant="emptyButton" iconLeft={Phone} className="bg-white">
          Hemen Görüş
        </Button>
      </div>
    </div>
  );
};

export default Breadcrumb;
