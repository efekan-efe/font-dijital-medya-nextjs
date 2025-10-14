import TitleBadge from "@/components/ui/TitleBadge";
import chatGorseli from "@/assets/homepage/images/chat_gorseli.png";
import tasarimGorseli from "@/assets/homepage/images/tasarim_gorseli.png";
import kodlamaGorseli from "@/assets/homepage/images/kodlama_gorseli.png";
import ProcessCard from "@/components/ui/ProcessCard";

const ProcessSection = () => {
  const processData = [
    {
      title: "İletişim Süreci",
      description: "Projenin hayalinizdeki halini hayata birebir taşımak için sürekli iletişim sağlana iletişim kanalları oluşturuyoruz.",
      image: chatGorseli,
    },
    {
      title: "Tasarım Süreci",
      description: "Projenin hayalinizdeki halini hayata birebir taşımak için sürekli iletişim sağlana iletişim kanalları oluşturuyoruz.",
      image: tasarimGorseli,
    },
    {
      title: "Geliştirme Süreci",
      description: "Projenin hayalinizdeki halini hayata birebir taşımak için sürekli iletişim sağlana iletişim kanalları oluşturuyoruz.",
      image: kodlamaGorseli,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 px-2">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            Sizi
            <span className="text-primaryColor px-1">Nasıl</span>
            Başarıya Ulaştırıyoruz?
          </p>
        </TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack">
          4 Adımda <span className="text-primaryColor">Dijital Başarıya</span> Ulaşın
        </h1>
      </div>

      <div className="flex justify-center items-start gap-2">
        {processData.map((item, index) => (
          <ProcessCard title={item.title} description={item.description} image={item.image} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
