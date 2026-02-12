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
import hizmetYanGorsel from "@/assets/images/hizmet_detay_yan_gorsel.webp";

// Bu bileşen 'data' adında bir prop alır (WordPress'ten gelen page verisi)
const ServiceTemplate = ({ data }) => {
  // 1. ACF Verilerine Erişim (Hata önleyici boş obje ile)
  const acf = data?.acf || {};
  // 2. Başlık Yönetimi
  const pageTitle = data?.title?.rendered || "Hizmetlerimiz";
  // ACF'den gelen özel başlık varsa onu kullan, yoksa sayfa adını al.
  const displayTitle = acf.hizmet_basligi || pageTitle;

  // Görsel ve Alt Metni Ayrıştır
  let heroImage = hizmetYanGorsel; // Varsayılan resim
  let heroAlt = displayTitle; // Varsayılan alt etiketi

  if (acf.hizmet_gorseli) {
    if (typeof acf.hizmet_gorseli === "string") {
      // Eğer string gelirse (eski yapı veya patch çalışmazsa)
      heroImage = acf.hizmet_gorseli;
    } else if (acf.hizmet_gorseli.url) {
      // Yeni obje yapısı gelirse
      heroImage = acf.hizmet_gorseli.url;
      heroAlt = acf.hizmet_gorseli.alt || displayTitle;
    }
  }

  // Breadcrumb için Badge İçeriği (Sabit veya ACF ile dinamik yapılabilir)
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Profesyonel</span>
      Çözümler
    </p>
  );

  // Başlığı ACF'den alıyoruz
  const titleContent = <span dangerouslySetInnerHTML={{ __html: pageTitle }} className="text-primaryBlack" />;

  // --- ÇÖZÜM KARTLARI (Yeni "Ayıraçlı" Yöntem) ---
  // Format: Başlık | Açıklama
  const solutionData = acf.cozum_listesi
    ? acf.cozum_listesi
        .split(/\r\n|\r|\n/) // Satırlara böl
        .filter((row) => row.includes("|")) // İçinde "|" işareti olmayan satırları atla
        .map((row) => {
          const [title, desc] = row.split("|"); // "|" işaretinden ikiye ayır
          return {
            icon: SingleSparkle, // Şimdilik hepsine aynı ikon (veya rastgele atanabilir)
            title: title.trim(), // Boşlukları temizle
            description: desc ? desc.trim() : "",
          };
        })
    : [];

  // 3. Liste Yönetimi (TEXT AREA ÇÖZÜMÜ)
  // ACF'den gelen metni "yeni satır" karakterine (\n) göre bölüp diziye çeviriyoruz.
  // filter(item => item.trim() !== "") ile boş satırları temizliyoruz.
  const serviceListItems = acf.hizmet_maddeleri ? acf.hizmet_maddeleri.split(/\r\n|\r|\n/).filter((item) => item.trim() !== "") : [];

  // --- FİYAT PAKETLERİ (Sabit Alan Yöntemi) ---
  // Tasarımındaki renk ve ikon setleri (Sırasıyla 1., 2., 3., 4. pakete atanır)
  const packageStyles = [
    { icon: RocketIcon, colors: ["#448AFF", "#0947A5"] }, // Mavi
    { icon: GrowthIcon, colors: ["#43A047", "#29A71A"] }, // Yeşil
    { icon: MuscleIcon, colors: ["#F44336", "#B42E2A"] }, // Kırmızı
    { icon: CrownIcon, colors: ["#FFC107", "#E1A325"] }, // Sarı
  ];

  const priceCardData = [];

  // 4 Adet potansiyel paketi kontrol edelim
  for (let i = 1; i <= 4; i++) {
    const baslik = acf[`paket_${i}_baslik`]; // Örn: acf.paket_1_baslik

    // Eğer başlık girilmişse bu paketi listeye ekle
    if (baslik) {
      const style = packageStyles[i - 1] || packageStyles[0]; // Stil seçimi

      priceCardData.push({
        icon: style.icon,
        colors: style.colors,
        title: baslik,
        description: acf[`paket_${i}_aciklama`] || "",
        // Özellikler Text Area'sını satırlara böl
        features: acf[`paket_${i}_ozellikler`] ? acf[`paket_${i}_ozellikler`].split(/\r\n|\r|\n/).filter((f) => f.trim() !== "") : [],
        bestSeller: acf[`paket_${i}_oneri`] ? true : false, // True/False kontrolü
      });
    }
  }

  return (
    <main className="flex flex-col items-center justify-center gap-10 w-full font-inter">
      {/* Breadcrumb başlığı artık WordPress'ten geliyor */}
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />

      <ServiceInfo title={displayTitle} description={acf.hizmet_aciklamasi} image={heroImage} altText={heroAlt} listItems={serviceListItems} />

      {/* Eğer çözüm listesi girilmişse göster, girilmemişse bileşeni gizle */}
      {solutionData.length > 0 && <ServiceSolutions solutionData={solutionData} />}
      {/* Eğer en az 1 paket girilmişse bileşeni göster */}
      {priceCardData.length > 0 && <PriceCards priceCardData={priceCardData} />}
      <ReferenceSlider />
    </main>
  );
};

export default ServiceTemplate;
