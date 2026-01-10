import hakkimizdaGorseli from "@/assets/aboutUs/images/hakkimizda_gorseli.webp";
import TitleBadge from "@/components/ui/TitleBadge";
import Image from "next/image";
import RocketIcon from "@/components/icons/RocketIcon";
import WebIcon from "@/components/icons/WebIcon";

const aboutData = [
  {
    icon: RocketIcon,
    title: "Vizyonumuz",
    description: "Markaların dijital dünyada güvenilir, güçlü ve sürdürülebilir bir konuma ulaşmasını sağlamak; dijital çözümlerle uzun vadeli değer üretmek.",
  },
  {
    icon: WebIcon,
    title: "Misyonumuz",
    description: "Her markaya özel stratejiler geliştirerek, dijital kanalları ölçülebilir performans ve müşteri kazanımı sağlayan yapılara dönüştürmek.",
  },
];

const InfoSection = () => {
  return (
    <div className="flex justify-between items-center gap-6 px-2 max-w-7xl mx-auto font-inter max-[960px]:flex-col">
      <div className="w-full max-w-lg max-[960px]:order-2">
        <Image className="w-full h-full" src={hakkimizdaGorseli} alt="Hakkımızda" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col justify-center items-start gap-1 max-[960px]:items-center">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor px-1">Neden</span>
              Bizi Tercih Etmelisiniz
            </p>
          </TitleBadge>
          <h1 className="w-full text-4xl font-bold text-primaryBlack max-md:text-center">
            Dijitalde
            <span className="text-primaryColor mx-1">Müşteri Kazanmaya</span> Başlayın
          </h1>
        </div>

        <p className="text-[#12141D]/70">Dijital kanallarda kalıcı başarı, stratejik planlama ve profesyonel yönetim anlayışıyla mümkündür.</p>
        <p className="text-[#12141D]/70">Markaların dijital varlıklarını; kurumsal hedeflerle uyumlu, performansı ölçülebilir ve uzun vadede sürdürülebilir müşteri kazanımı sağlayan bütüncül dijital yapılara dönüştürüyoruz.</p>

        {aboutData.map((about, index) => (
          <div key={index} className="flex justify-start items-start gap-2">
            <div className="border border-black/20 rounded-full">
              <div className="bg-softPink p-3 rounded-full border-[6px] border-white shadow">
                <about.icon className="min-w-9 min-h-9 stroke-primaryColor fill-none" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl text-primaryColor font-bold border-b border-primaryColor/30">{about.title}</p>
              <p className="text-[#12141D]/70 leading-[120%] pt-0.5">{about.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
