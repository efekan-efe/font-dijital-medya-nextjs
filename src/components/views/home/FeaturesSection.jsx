import Image from "next/image";
import TitleBadge from "@/components/ui/TitleBadge";
import videoFallbackImage from "@/assets/homepage/images/video_fallback_image.png";
import { FileText, Code, Sparkle } from "lucide-react";
import FeatureItem from "@/components/ui/FeatureItem";
import { CustomButton } from "@/components/ui/CustomButton";
import SparkleIcon from "@/components/icons/SparkleIcon";

const FeaturesSection = () => {
  const featureItemData = [
    {
      icon: FileText,
      title: "Simply Copy & Paste",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: Code,
      title: "Easy to Customize",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: Sparkle,
      title: "Made with TailwindCSS",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: FileText,
      title: "Simply Copy & Paste",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
  ];

  return (
    <section className="max-w-7xl w-full mx-auto flex justify-center items-center gap-8 font-inter px-2 max-[900px]:flex-col">
      <div className="flex justify-center items-center w-full max-w-xl h-full max-[1024px]:hidden max-[900px]:max-w-md max-[900px]:order-2">
        <Image className="w-full h-fit" src={videoFallbackImage} alt="Video" />
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor pr-1">Neden</span>
              Bizi Tercih Etmelisiniz
            </p>
          </TitleBadge>
          <h1 className="text-4xl font-bold text-primaryBlack max-[1040px]:text-3xl">
            Dijitalde <span className="text-primaryColor">Müşteri Kazanmaya</span> Bugün Başlayın
          </h1>
        </div>

        <p className="text-primaryBlack">
          Bisasoft Dijital Reklam Ajansı olarak, <strong>KOBİ'nizin</strong> dijitalde <strong>görünür olmasını</strong> ve <strong>doğru müşterilere</strong> ulaşmasını sağlıyoruz.
        </p>

        <div className="flex flex-col gap-4">
          {featureItemData.map((item, index) => (
            <FeatureItem icon={item.icon} title={item.title} description={item.description} key={index} />
          ))}
        </div>

        <CustomButton className="mt-4" variant="filledButton" rightComponent={<SparkleIcon className="fill-white" />} leftComponent={<SparkleIcon className="fill-white" />}>
          Bizimle Yükselenler
        </CustomButton>
      </div>
    </section>
  );
};

export default FeaturesSection;
