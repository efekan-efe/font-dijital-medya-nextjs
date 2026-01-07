"use client";

import TitleBadge from "@/components/ui/TitleBadge";
import chatGorseli from "@/assets/homepage/images/chat_gorseli.png";
import tasarimGorseli from "@/assets/homepage/images/tasarim_gorseli.png";
import kodlamaGorseli from "@/assets/homepage/images/kodlama_gorseli.png";
import ProcessCard from "@/components/ui/ProcessCard";
// Splide importları
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    <section className="max-w-7xl mx-auto flex flex-col justify-center gap-8 px-2 font-inter w-full h-full">
      {/* Başlık Alanı */}
      <div className="w-full flex flex-col justify-center items-center gap-1 shrink-0">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            Sizi
            <span className="text-primaryColor px-1">Nasıl</span>
            Başarıya Ulaştırıyoruz?
          </p>
        </TitleBadge>
        <h1 className="text-3xl md:text-4xl font-bold text-primaryBlack text-center">
          4 Adımda <span className="text-primaryColor">Dijital Başarıya</span> Ulaşın
        </h1>
      </div>

      {/* --- MOBİL VE TABLET GÖRÜNÜMÜ (SLIDER) --- */}
      <div className="block lg:hidden w-full">
        <Splide
          options={{
            perPage: 1, // Ekranda 1 kart görünsün
            gap: "1rem", // Kartlar arası boşluk
            arrows: false, // Okları gizle (mobilde swipe yeterli)
            pagination: true, // Alttaki noktalar açık olsun
            padding: "1rem", // Kenarlardan hafif boşluk
          }}
        >
          {processData.map((item, index) => (
            <SplideSlide key={index} className="flex justify-center pb-10">
              {/* pb-10: Pagination noktaları için alttan yer açtık */}
              <ProcessCard title={item.title} description={item.description} image={item.image} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* --- DESKTOP GÖRÜNÜMÜ (ESKİ HALİ) --- */}
      <div className="hidden lg:flex justify-center gap-2 flex-wrap">
        {processData.map((item, index) => (
          <ProcessCard title={item.title} description={item.description} image={item.image} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
