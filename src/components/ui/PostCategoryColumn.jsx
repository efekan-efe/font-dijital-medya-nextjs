import dijitalPazarlamaImg from "@/assets/blog/images/dijital_pazarlama_kategori_gorseli.webp";
import webTasarimImg from "@/assets/blog/images/web_tasarim_kategori_gorseli.webp";
import seoImg from "@/assets/blog/images/seo_kategori_gorseli.webp";
import { PanelsTopLeft, SearchCheck } from "lucide-react";
import NewIdeaIcon from "../icons/NewIdeaIcon";

const PostCategoryColumn = () => {
  const categoryData = [
    {
      icon: <PanelsTopLeft className="stroke-white fill-none w-5" />,
      title: "Web Tasarım",
      backgroundImg: webTasarimImg,
    },
    {
      icon: <NewIdeaIcon className="stroke-white fill-none w-5" />,
      title: "Dijital Pazarlama",
      backgroundImg: dijitalPazarlamaImg,
    },
    {
      icon: <SearchCheck className="stroke-white fill-none w-5" />,
      title: "Arama Motoru Opt.",
      backgroundImg: seoImg,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 font-inter">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap">Kategoriler</h2>
        <div className="w-full h-px bg-primaryColor"></div>
      </div>

      <div className="flex flex-col gap-3">
        {categoryData.map((category, index) => (
          <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${category.backgroundImg.src})` }} key={index} className="flex justify-start items-center gap-2 px-3 py-5 rounded-xl">
            <div className="border-2 border-white bg-black/50 rounded-full flex justify-center items-center w-10 h-10">{category.icon}</div>
            <p className="text-white font-medium text-2xl leading-8">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCategoryColumn;
