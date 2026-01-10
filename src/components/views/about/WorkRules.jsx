import RuleRow from "@/components/ui/RuleRow";
import TitleBadge from "@/components/ui/TitleBadge";
import { FileText, Code, Sparkle } from "lucide-react";

const WorkRules = () => {
  const workData = [
    {
      title: "Profesyonel Şeffaf ve Planlı Süreç Yönetimi",
      description: "Dijital yolculuğumuzun her adımını kurguluyor, kısa, orta ve uzun vadeli harita oluşturuyor, tüm operasyonel süreci bu plana göre onayınız dahilinde  yönetiyoruz.",
    },
    {
      title: "Veri Odaklı ve Sonuç Bazlı Stratejiler",
      description: "Verileri analiz ederek, dijital görünürlüğünüzü sadece tıklamaya değil, satışa dönüştürüyoruz. Tahmini değil, somut ve ölçülebilir sonuçlar üretiyoruz.",
    },
    {
      title: "İş Ortağı Bilinciyle Sürekli Destek",
      description: `Sizi uzun vadeli iş ortağımız olarak görüyoruz. Her an ulaşılabilir ekibimiz ve proaktif çözümlerimizle, büyüme sürecinizi kesintisiz destekliyoruz.`,
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-2 max-w-7xl mx-auto font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="w-full text-4xl font-bold text-primaryBlack text-center max-w-xl">
          <span className="text-primaryColor mx-1">100% Müşteri Memnuniyeti</span> Sağlayan <span className="text-primaryColor mx-1">İlkelerimiz</span>
        </h1>
      </div>

      <div className="flex justify-center items-start flex-wrap gap-8">
        {workData.map((work, index) => (
          <RuleRow key={index} index={index} title={work.title} description={work.description} />
        ))}
      </div>
    </div>
  );
};

export default WorkRules;
