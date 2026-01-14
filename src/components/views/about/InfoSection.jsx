"use client";

import { useRef, useLayoutEffect } from "react";
import hakkimizdaGorseli from "@/assets/aboutUs/images/hakkimizda_gorseli.webp";
import TitleBadge from "@/components/ui/TitleBadge";
import Image from "next/image";
import RocketIcon from "@/components/icons/RocketIcon";
import WebIcon from "@/components/icons/WebIcon";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InfoSection = ({ data }) => {
  const hakkimizda_kucuk_baslik = data?.hakkimizda_kucuk_baslik;
  const hakkimizda_buyuk_baslik = data?.hakkimizda_buyuk_baslik;
  const hakkimizda_aciklama = data?.hakkimizda_aciklama;
  const wpResim = data?.hakkimizda_gorseli;
  const hakkimizdaGorsel = wpResim && isNaN(wpResim) ? wpResim : hakkimizdaGorseli;
  const vizyonumuz_baslik = data?.vizyonumuz_baslik;
  const vizyonumuz_aciklama = data?.vizyonumuz_aciklama;
  const misyonumuz_baslik = data?.misyonumuz_baslik;
  const misyonumuz_aciklama = data?.misyonumuz_aciklama;

  const container = useRef(null);

  const aboutData = [
    {
      icon: RocketIcon,
      title: vizyonumuz_baslik,
      description: vizyonumuz_aciklama,
    },
    {
      icon: WebIcon,
      title: misyonumuz_baslik,
      description: misyonumuz_aciklama,
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Sol Görsel Animasyonu (Soldan giriş)
      tl.from(".info-img", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        // 2. Başlık ve Açıklamalar (Sağ taraf)
        .from(
          ".info-text-content",
          {
            x: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // 3. Vizyon/Misyon Maddeleri (Stagger ile sırayla)
        .from(
          ".mission-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex justify-between items-center gap-6 px-2 max-w-7xl mx-auto font-inter max-[960px]:flex-col">
      <div className="w-full max-w-lg max-[960px]:order-2">
        <Image className="info-img w-full h-full" src={hakkimizdaGorsel} alt="Hakkımızda" />
      </div>
      <div className="w-full flex flex-col gap-4">
        {/* Metin Grubu Wrapper */}
        <div className="info-text-content w-full flex flex-col justify-center items-start gap-1 max-[960px]:items-center">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium" dangerouslySetInnerHTML={{ __html: hakkimizda_kucuk_baslik }}></p>
          </TitleBadge>
          <h1 className="w-full text-4xl font-bold text-primaryBlack max-md:text-center" dangerouslySetInnerHTML={{ __html: hakkimizda_buyuk_baslik }}></h1>
        </div>

        <p className="info-text-content text-[#12141D]/70" dangerouslySetInnerHTML={{ __html: hakkimizda_aciklama }}></p>

        {aboutData.map((about, index) => (
          <div key={index} className="mission-item flex justify-start items-start gap-2">
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
