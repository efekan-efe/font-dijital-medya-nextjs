"use client"; // GSAP için zorunlu

import { useLayoutEffect, useRef } from "react";
import TitleBadge from "@/components/ui/TitleBadge";
import chatGorseli from "@/assets/homepage/images/chat_gorseli.png";
import tasarimGorseli from "@/assets/homepage/images/tasarim_gorseli.png";
import kodlamaGorseli from "@/assets/homepage/images/kodlama_gorseli.png";
import ProcessCard from "@/components/ui/ProcessCard";
// Splide importları
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProcessSection = () => {
  const container = useRef(null);

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Başlık Alanı (Hafifçe yukarıdan iner)
      tl.from(".process-header", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        // 2. Masaüstü Kartları (Sırayla gelir - Stagger)
        .from(
          ".process-card-desktop",
          {
            y: 50, // Aşağıdan yukarı
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // Kartlar arası 0.2sn bekleme
            ease: "back.out(1.7)", // "Pop" efekti (hafif yaylanma)
          },
          "-=0.4"
        )
        // 3. Mobil Slider (Bütün olarak belirir)
        .from(
          ".process-slider-mobile",
          {
            scale: 0.9, // Hafif küçükten büyüyerek gelsin
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        ); // Masaüstü animasyonuyla aynı zaman diliminde başlasın (zaten biri gizli olacak)
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="max-w-7xl mx-auto flex flex-col justify-center gap-8 px-2 font-inter w-full h-full">
      {/* Başlık Alanı */}
      {/* GSAP için 'process-header' sınıfını ekledik */}
      <div className="process-header w-full flex flex-col justify-center items-center gap-1 shrink-0">
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
      {/* GSAP için 'process-slider-mobile' sınıfını ekledik */}
      <div className="process-slider-mobile block lg:hidden w-full">
        <Splide
          options={{
            perPage: 1,
            gap: "1rem",
            arrows: false,
            pagination: true,
            padding: "1rem",
          }}
        >
          {processData.map((item, index) => (
            <SplideSlide key={index} className="flex justify-center pb-10">
              <ProcessCard title={item.title} description={item.description} image={item.image} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* --- DESKTOP GÖRÜNÜMÜ --- */}
      <div className="hidden lg:flex justify-center gap-2 flex-wrap">
        {processData.map((item, index) => (
          // Her kartı bir div içine aldık ve 'process-card-desktop' sınıfını verdik
          // Böylece GSAP bu divleri yakalayıp tek tek animasyonlayacak
          <div key={index} className="process-card-desktop">
            <ProcessCard title={item.title} description={item.description} image={item.image} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
