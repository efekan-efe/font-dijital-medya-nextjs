// src/components/templates/ServiceTemplate.jsx
"use client"; // İkonlar ve sliderlar client-side çalışabilir

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

// Bu bileşen 'data' adında bir prop alır (WordPress'ten gelen page verisi)
const ServiceTemplate = ({ data }) => {
  // 1. ACF Verilerine Erişim (Hata önleyici boş obje ile)
  const acf = data?.acf || {};
  // 2. Başlık Yönetimi
  const pageTitle = data?.title?.rendered || "Hizmetlerimiz";
  // ACF'den gelen özel başlık varsa onu kullan, yoksa sayfa adını al.
  const displayTitle = acf.hizmet_basligi || pageTitle;

  // Breadcrumb için Badge İçeriği (Sabit veya ACF ile dinamik yapılabilir)
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Profesyonel</span>
      Çözümler
    </p>
  );

  // Başlığı ACF'den alıyoruz
  const titleContent = <span dangerouslySetInnerHTML={{ __html: displayTitle }} className="text-primaryBlack" />;

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
      description: "Dönüşüm oranlarınızı artırarak satışlarınızı maksimize ediyoruz.",
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
      title: "Başlangıç Paketi",
      description: "Dijital dünyaya ilk adımınızı güvenle atın.",
      features: ["Ücretsiz Domain", "Ücretsiz Hosting", "Mobil Uyumlu Tasarım", "7/24 Destek"],
      bestSeller: false,
    },
    {
      icon: GrowthIcon,
      colors: ["#43A047", "#29A71A"],
      title: "İşletme Paketi",
      description: "Organik büyüme ve içerik odaklı pazarlama.",
      features: ["2 Dil Desteği", "30 Sayfa", "SEO Eğitimi", "Google Business"],
      bestSeller: true,
    },
    {
      icon: MuscleIcon,
      colors: ["#F44336", "#B42E2A"],
      title: "Kurumsal Paket",
      description: "İleri teknoloji ile maksimum performans.",
      features: ["3 Dil Desteği", "Özel Tema", "50 E-posta", "Adwords Eğitimi"],
      bestSeller: false,
    },
    {
      icon: CrownIcon,
      colors: ["#FFC107", "#E1A325"],
      title: "Profesyonel Paket",
      description: "Tam kapsamlı e-ticaret ve dijital dönüşüm.",
      features: ["Sınırsız Dil", "Blog Modülü", "100 E-posta", "E-ticaret İndirimi"],
      bestSeller: false,
    },
  ];

  // 3. Liste Yönetimi (TEXT AREA ÇÖZÜMÜ)
  // ACF'den gelen metni "yeni satır" karakterine (\n) göre bölüp diziye çeviriyoruz.
  // filter(item => item.trim() !== "") ile boş satırları temizliyoruz.
  const serviceListItems = acf.hizmet_maddeleri ? acf.hizmet_maddeleri.split(/\r\n|\r|\n/).filter((item) => item.trim() !== "") : [];

  return (
    <main className="flex flex-col items-center justify-center gap-10 w-full font-inter">
      {/* Breadcrumb başlığı artık WordPress'ten geliyor */}
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />

      <ServiceInfo title={displayTitle} description={acf.hizmet_aciklamasi} image={acf.hizmet_gorseli} listItems={serviceListItems} />

      <ServiceSolutions solutionData={solutionData} />
      <PriceCards priceCardData={priceCardData} />
      <ReferenceSlider />
    </main>
  );
};

export default ServiceTemplate;
