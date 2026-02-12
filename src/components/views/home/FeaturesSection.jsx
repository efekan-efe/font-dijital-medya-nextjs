"use client"; // GSAP için zorunlu

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import TitleBadge from "@/components/ui/TitleBadge";
import videoFallbackImage from "@/assets/homepage/images/video_fallback_image.png";
import FeatureItem from "@/components/ui/FeatureItem";
import { CustomButton } from "@/components/ui/CustomButton";
import SparkleIcon from "@/components/icons/SparkleIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturesSection = ({ data }) => {
  const neden_biz_kucuk_baslik = data?.neden_biz_kucuk_baslik;
  const neden_biz_buyuk_baslik = data?.neden_biz_buyuk_baslik;
  const neden_biz_aciklama = data?.neden_biz_aciklama;

  const neden_biz_madde_baslik_1 = data?.neden_biz_madde_baslik_1;
  const neden_biz_madde_baslik_2 = data?.neden_biz_madde_baslik_2;
  const neden_biz_madde_baslik_3 = data?.neden_biz_madde_baslik_3;
  const neden_biz_madde_baslik_4 = data?.neden_biz_madde_baslik_4;

  const neden_biz_madde_aciklama_1 = data?.neden_biz_madde_aciklama_1;
  const neden_biz_madde_aciklama_2 = data?.neden_biz_madde_aciklama_2;
  const neden_biz_madde_aciklama_3 = data?.neden_biz_madde_aciklama_3;
  const neden_biz_madde_aciklama_4 = data?.neden_biz_madde_aciklama_4;

  const container = useRef(null);

  const featureItemData = [
    {
      title: neden_biz_madde_baslik_1,
      description: neden_biz_madde_aciklama_1,
    },
    {
      title: neden_biz_madde_baslik_2,
      description: neden_biz_madde_aciklama_2,
    },
    {
      title: neden_biz_madde_baslik_3,
      description: neden_biz_madde_aciklama_3,
    },
    {
      title: neden_biz_madde_baslik_4,
      description: neden_biz_madde_aciklama_4,
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%", // Biraz daha erken veya geç tetiklenmesi için burayla oynayabilirsin
          toggleActions: "play none none reverse",
        },
      });

      // 1. Sol taraftaki Resim (Soldan kayarak gelir)
      tl.from(".feature-image", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        // 2. Badge (Hafif yukarıdan düşer)
        .from(
          ".feature-badge",
          {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.6",
        ) // Resim bitmeden başla
        // 3. Başlık (Aşağıdan yukarı)
        .from(
          ".feature-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        // 4. Açıklama Yazısı
        .from(
          ".feature-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4",
        )
        // 5. Liste Elemanları (STAGGER ÖZELLİĞİ)
        .from(
          ".feature-item",
          {
            x: 30, // Hafif sağdan gelsinler
            opacity: 0,
            duration: 0.5,
            stagger: 0.1, // Her bir eleman arasında 0.1sn gecikme bırak (tık-tık-tık etkisi)
            ease: "power2.out",
          },
          "-=0.2",
        )
        // 6. Buton (En son "ben buradayım" diye gelir)
        .from(
          ".feature-btn",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // Ref'i ekledik
    <section ref={container} className="max-w-7xl w-full mx-auto flex justify-center items-center gap-2 md:gap-8 font-inter px-2 max-lg:flex-col h-full">
      {/* Sol Resim Alanı */}
      <div className="feature-image flex justify-center items-center w-full max-w-xl h-full max-lg:items-start max-lg:max-w-[300px] max-lg:max-h-[300px] max-lg:mr-auto max-lg:overflow-hidden max-lg:rounded-full max-sm:hidden">
        <Image className="w-full h-fit" src={videoFallbackImage} alt="Video" />
      </div>

      {/* Sağ İçerik Alanı */}
      <div className="w-full flex flex-col gap-2 md:gap-3">
        <div className="w-full flex flex-col gap-1">
          <div className="feature-badge">
            <TitleBadge>
              <p className="text-primaryBlack w-full font-medium text-sm md:text-base" dangerouslySetInnerHTML={{ __html: neden_biz_kucuk_baslik }}></p>
            </TitleBadge>
          </div>

          <h2 className="feature-title text-2xl md:text-4xl font-bold text-primaryBlack" dangerouslySetInnerHTML={{ __html: neden_biz_buyuk_baslik }}></h2>
        </div>

        <p className="feature-desc text-primaryBlack text-sm md:text-base" dangerouslySetInnerHTML={{ __html: neden_biz_aciklama }}></p>

        {/* Liste Elemanları */}
        <div className="flex flex-col gap-2 md:gap-4">
          {featureItemData.map((item, index) => (
            // FeatureItem'ı bir div ile sarmalayıp sınıfı ona verdik ki GSAP yakalayabilsin
            <div key={index} className="feature-item">
              <FeatureItem title={item.title} description={item.description} index={index} />
            </div>
          ))}
        </div>

        {/* Buton */}
        <div className="feature-btn mt-2 md:mt-4 w-full md:w-auto">
          <CustomButton href="/referanslar" className="w-fit text-base" variant="filledButton" rightComponent={<SparkleIcon className="fill-white" />} leftComponent={<SparkleIcon className="fill-white" />}>
            Bizimle Yükselenler
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
