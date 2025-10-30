import GrowthIcon from "@/components/icons/GrowthIcon";
import MuscleIcon from "@/components/icons/MuscleIcon";
import RocketIcon from "@/components/icons/RocketIcon";
import CrownIcon from "@/components/icons/CrownIcon";
import SingleSparkle from "@/components/icons/SingleSparkle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ServiceInfo from "@/components/ui/ServiceInfo";
import ServiceSolutions from "@/components/views/service/ServiceSolutions";
import PriceCards from "@/components/views/service/PriceCards";
import ReferenceSlider from "@/components/shared/ReferenceSlider";

export default function Hizmetler() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      İlk Adımınız
    </p>
  );
  const titleContent = (
    <>
      <span className="text-primaryColor px-1">Dijital Başarınız</span> için <br /> Performans Odaklı
      <span className="text-primaryColor px-1">Web Çözümleri</span>
    </>
  );

  const solutionData = [
    {
      icon: SingleSparkle,
      title: "Daha Düşük Maliyetler",
      description: "Optimizasyon teknikleriyle tıklama başına maliyetlerinizi %30-50 düşürüyoruz.",
    },
    {
      icon: SingleSparkle,
      title: "Ölçülebilir Sonuçlar",
      description: "Her kuruşun hesabını verir, yatırımınızın geri dönüşünü net olarak gösteririz.",
    },
    {
      icon: SingleSparkle,
      title: "Uzman Destek",
      description: "Google ve Facebook sertifikalı uzmanlarımız kampanyalarınızı yönetir.",
    },
    {
      icon: SingleSparkle,
      title: "Daha Yüksek Dönüşüm Oranları",
      description: "Optimizasyon teknikleriyle tıklama başına maliyetlerinizi %30-50 düşürüyoruz.",
    },
    {
      icon: SingleSparkle,
      title: "Zaman Tasarrufu",
      description: "Siz işinize odaklanın, biz dijital pazarlama süreçlerinizi yönetelim.",
    },
    {
      icon: SingleSparkle,
      title: "Şeffaf Raporlama",
      description: "Aylık detaylı raporlarla neler yaptığımızı ve sonuçları paylaşırız.",
    },
  ];

  const priceCardData = [
    {
      icon: RocketIcon,
      colors: ["#448AFF", "#0947A5"],
      title: "Dijital Adım Paketi",
      description: "Dijital reklama ilk adımınızı güvenle atın.Dijital reklama ilk adımınızı güvenle atın.",
      features: ["Ücretsiz Domain", "Ücretsiz Hosting", "Mobil Uyumlu Tasarım", "7/24 Ücretsiz Destek"],
      bestSeller: false,
    },
    {
      icon: GrowthIcon,
      colors: ["#43A047", "#29A71A"],
      title: "İşletme Vitrini Paketi",
      description: "Organik büyüme ve içerik odaklı pazarlama. Dijital reklama ilk adımınızı güvenle atın",
      features: ["2 Dil Desteği", "30 Sayfa Ekleyebilme", "SEO Teknikleri Eğitimi", "Google Business Kurulumu"],
      bestSeller: true,
    },
    {
      icon: MuscleIcon,
      colors: ["#F44336", "#B42E2A"],
      title: "Prestij Plus Paketi",
      description: "İleri teknoloji ile maksimum performans. Dijital reklama ilk adımınızı güvenle atın",
      features: ["3 Dil Desteği", "Özel Tema Seçimi", "50 Adet Şirket E-postası", "Google Adwords Eğitimi"],
      bestSeller: false,
    },
    {
      icon: CrownIcon,
      colors: ["#FFC107", "#E1A325"],
      title: "Dijital Adım Paketi",
      description: "Dijital reklama ilk adımınızı güvenle atın.Dijital reklama ilk adımınızı güvenle atın",
      features: ["Sınırsız Dil Desteği", "10 Adet SEO Uyumlu Blog", "100 Adet Şirket E-postası", "E-ticaret Sitesine Geçişte 25% İndirim"],
      bestSeller: false,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-10 w-full font-inter">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <ServiceInfo />
      <ServiceSolutions solutionData={solutionData} />
      <PriceCards priceCardData={priceCardData} />
      <ReferenceSlider />
    </main>
  );
}
