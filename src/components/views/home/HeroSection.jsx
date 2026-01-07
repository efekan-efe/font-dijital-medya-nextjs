"use client"; // GSAP için zorunlu

import { useLayoutEffect, useRef } from "react"; // Hook'ları ekledik
import Image from "next/image";
import { CustomButton } from "@/components/ui/CustomButton";
import Badge from "@/components/ui/Badge";
import hero_gorseli from "@/assets/homepage/images/hero_gorseli.png";
import { Search, Phone, Rocket, Users, TrendingUp } from "lucide-react";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const container = useRef(null); // Kapsayıcı ref'i

  useLayoutEffect(() => {
    // Plugin'i kaydediyoruz
    gsap.registerPlugin(ScrollTrigger);

    // Context oluşturuyoruz (React Strict Mode uyumu ve temizlik için)
    const ctx = gsap.context(() => {
      // Timeline Oluşturma
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current, // Tetikleyici bu section
          start: "top 60%", // Section ekranın %60'ına geldiğinde başla
          toggleActions: "play none none reverse", // Aşağı inerken oynat, yukarı çıkarken geri sar (tekrar oynasın diye)
        },
      });

      // Animasyon Adımları
      tl.from(".hero-badge", {
        y: -20, // Yukarıdan gelsin
        opacity: 0, // Görünmezden başlasın
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        ) // Bir önceki bitmeden 0.4sn önce başla (Akıcılık için)
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".hero-btns",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)", // Hafif yaylanma efekti
          },
          "-=0.4"
        )
        .from(
          ".hero-image",
          {
            x: 100, // Sağdan gelsin
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        ); // Butonlarla neredeyse aynı anda başlasın
    }, container);

    // Temizlik (Component unmount olduğunda animasyonları sil)
    return () => ctx.revert();
  }, []);

  return (
    // Ref'i en dış katmana veriyoruz
    <section ref={container} className="max-w-7xl mx-auto px-2 py-8 pt-32 font-inter max-md:pb-0 max-md:pt-10 h-full flex items-center">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center w-full max-md:gap-4">
        {/* Sol Sütun */}
        <div className="flex flex-col gap-y-2 max-md:items-center">
          {/* Class isimlerini 'hero-...' olarak ekledik ki GSAP yakalayabilsin */}
          <div className="hero-badge">
            <Badge icon={Rocket}>500+ KOBİ Bizi Tercih Etti</Badge>
          </div>

          <h1 className="hero-title text-6xl max-w-xl leading-[120%] font-bold tracking-tighter text-primaryBlack max-lg:text-5xl max-md:text-center max-md:text-2xl">
            Dijitalde <span className="text-primaryColor">Müşteri Kazanmaya</span> Bugün Başlayın
          </h1>

          <p className="hero-desc text-primaryBlack max-md:text-center">
            Bisasoft Dijital Reklam Ajansı olarak, <strong>KOBİ'nizin</strong> dijitalde <strong>görünür olmasını</strong> ve <strong>doğru müşterilere</strong> ulaşmasını sağlıyoruz.
          </p>

          <div className="hero-btns flex items-center gap-4 mt-4 max-sm:flex-col">
            <CustomButton size="lg" variant="filledButton" iconLeft={Search}>
              Ücretsiz Analiz
            </CustomButton>
            <CustomButton size="lg" variant="emptyButton" iconLeft={Phone}>
              Hemen Görüş
            </CustomButton>
          </div>
        </div>

        {/* Sağ Sütun */}
        <div className="hero-image relative">
          <Image src={hero_gorseli} alt="Dijital pazarlama uzmanı" width={640} height={600} className="rounded-3xl w-full h-auto" priority />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
