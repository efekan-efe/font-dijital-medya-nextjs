"use client"; // GSAP için zorunlu

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import TitleBadge from "@/components/ui/TitleBadge";
import videoFallbackImage from "@/assets/homepage/images/video_fallback_image.png";
import { FileText, Code, Sparkle } from "lucide-react";
import FeatureItem from "@/components/ui/FeatureItem";
import { CustomButton } from "@/components/ui/CustomButton";
import SparkleIcon from "@/components/icons/SparkleIcon";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturesSection = () => {
  const container = useRef(null);

  const featureItemData = [
    {
      icon: FileText,
      title: "Simply Copy & Paste",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: Code,
      title: "Easy to Customize",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: Sparkle,
      title: "Made with TailwindCSS",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: FileText,
      title: "Simply Copy & Paste",
      description: "Many desktop publishing packages and web page editors now use for them.",
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
          "-=0.6"
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
          "-=0.4"
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
          "-=0.4"
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
          "-=0.2"
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
          "-=0.2"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // Ref'i ekledik
    <section ref={container} className="max-w-7xl w-full mx-auto flex justify-center items-center gap-2 md:gap-8 font-inter px-2 max-[900px]:flex-col h-full">
      {/* Sol Resim Alanı */}
      <div className="feature-image flex justify-center items-center w-full max-w-xl h-full max-[1024px]:hidden max-[900px]:max-w-md max-[900px]:order-2">
        <Image className="w-full h-fit max-[1024px]:hidden" src={videoFallbackImage} alt="Video" />
      </div>

      {/* Sağ İçerik Alanı */}
      <div className="w-full flex flex-col gap-2 md:gap-3">
        <div className="w-full flex flex-col gap-1">
          <div className="feature-badge">
            <TitleBadge>
              <p className="text-primaryBlack w-full font-medium text-sm md:text-base">
                <span className="text-primaryColor pr-1">Neden</span>
                Bizi Tercih Etmelisiniz
              </p>
            </TitleBadge>
          </div>

          <h1 className="feature-title text-2xl md:text-4xl font-bold text-primaryBlack">
            Dijitalde <span className="text-primaryColor">Müşteri Kazanmaya</span> Bugün Başlayın
          </h1>
        </div>

        <p className="feature-desc text-primaryBlack text-sm md:text-base">
          Bisasoft Dijital Reklam Ajansı olarak, <strong>KOBİ'nizin</strong> dijitalde <strong>görünür olmasını</strong> ve <strong>doğru müşterilere</strong> ulaşmasını sağlıyoruz.
        </p>

        {/* Liste Elemanları */}
        <div className="flex flex-col gap-2 md:gap-4">
          {featureItemData.map((item, index) => (
            // FeatureItem'ı bir div ile sarmalayıp sınıfı ona verdik ki GSAP yakalayabilsin
            <div key={index} className="feature-item">
              <FeatureItem icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </div>

        {/* Buton */}
        <div className="feature-btn mt-2 md:mt-4 w-full md:w-auto">
          <CustomButton className="w-full md:w-auto" variant="filledButton" rightComponent={<SparkleIcon className="fill-white" />} leftComponent={<SparkleIcon className="fill-white" />}>
            Bizimle Yükselenler
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
