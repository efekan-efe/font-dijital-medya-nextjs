"use client";

import { useRef, useLayoutEffect, useMemo } from "react";
import AppointmentSystemIcon from "@/components/icons/AppointmentSystemIcon";
import BrandIdentityIcon from "@/components/icons/BrandIdentityIcon";
import EcommerceIcon from "@/components/icons/EcommerceIcon";
import LandingpageIcon from "@/components/icons/LandingpageIcon";
import QrMenuSystemIcon from "@/components/icons/QrMenuSystemIcon";
import SearchEngineOptIcon from "@/components/icons/SearchEngineOptIcon";
import SocialMediaAdsIcon from "@/components/icons/SocialMediaAdsIcon";
import SocialMediaManagementIcon from "@/components/icons/SocialMediaManagementIcon";
import ServiceCard from "@/components/ui/ServiceCard";
import TitleBadge from "@/components/ui/TitleBadge";

// Splide Importları
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurServices = () => {
  const container = useRef(null);

  const serviceData = [
    {
      icon: EcommerceIcon,
      title: "E-Ticaret Sitesi Kurulumu",
      description: "7/24 açık bir mağazaya sahip olun. Hızlı, güvenli ve mobil uyumlu altyapılarla satışlarınızı katlayın.",
      link: "/e-ticaret-web-sitesi-kurulumu/",
    },
    {
      icon: LandingpageIcon,
      title: "Kurumsal Web Sitesi",
      description: "Markanızın dijitaldeki vitrini kusursuz olsun. Modern tasarım ve güçlü altyapı ile prestijinizi artırın.",
      link: "/kurumsal-web-sitesi/",
    },
    {
      icon: SocialMediaManagementIcon,
      title: "Sosyal Medya Yönetimi",
      description: "Doğru hedef kitleye, en düşük maliyetle ulaşın. Dönüşüm odaklı reklam stratejileriyle cironuzu artırın.",
      link: "/sosyal-medya-yonetimi/",
    },
    {
      icon: SocialMediaAdsIcon,
      title: "Sosyal Medya Reklamları",
      description: "Google aramalarında zirveye yerleşin. Organik trafiğinizi artırarak reklam maliyetlerine bağlı kalmadan müşteri kazanın.",
      link: "/sosyal-medya-reklamlari/",
    },
    {
      icon: SearchEngineOptIcon,
      title: "Arama Motoru Opt.",
      description: "Google’da zirveye yerleşin. Organik trafiğinizi artırarak reklam faliyetlerine bağlı kalmadan müşteri kazanın.",
      link: "/arama-motoru-optimizasyonu-seo/",
    },
    {
      icon: AppointmentSystemIcon,
      title: "Randevu Sistemi",
      description: "Telefon trafiğine son verin. Müşterileriniz 7/24 online randevu alabilsin, işlerinizi otomatize edin.",
      link: "/randevu-ve-rezervasyon-sistemi/",
    },
    {
      icon: QrMenuSystemIcon,
      title: "QR Menü",
      description: "Temassız, hijyenik ve pratik. Menünüzü dijitalleştirin, fiyat ve ürün güncellemelerini saniyeler içinde yapın.",
      link: "/qr-menu/",
    },
    {
      icon: BrandIdentityIcon,
      title: "Kurumsal Kimlik",
      description: "Akılda kalıcı bir marka olun. Logo, renk paleti ve tüm görsel materyallerinizle profesyonel bir imaj çizin.",
      link: "/kurumsal-kimlik/",
    },
  ];

  // Helper fonksiyon: Array'i belirtilen boyutta parçalara böler (Burada 2'şerli)
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Mobilde her slaytta 2 kart göstermek için veriyi işliyoruz
  const mobileServicePairs = useMemo(() => chunkArray(serviceData, 2), [serviceData]);

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

      tl.from(".services-header", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".service-card-desktop",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          ".services-slider-mobile",
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="flex flex-col gap-8 px-2 pb-5 font-inter relative max-sm:items-center justify-center h-full w-full">
      {/* Başlık Alanı */}
      <div className="services-header w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium pl-1.5">Neler Yapıyoruz?</p>
        </TitleBadge>
        <h1 className="text-3xl md:text-4xl font-bold text-primaryBlack max-md:text-center">
          İşinizi Büyüten <span className="text-primaryColor">Dijital Çözümler</span>
        </h1>
      </div>

      {/* --- MOBİL SLIDER (LG Altı - Splide - 2'li Gösterim) --- */}
      <div className="services-slider-mobile block lg:hidden w-full max-w-md mx-auto h-fit">
        <Splide
          options={{
            perPage: 1,
            gap: "1rem",
            arrows: false,
            pagination: true,
            padding: "0.5rem", // Kenarlardan hafif boşluk
            drag: true,
          }}
          className="h-full"
        >
          {mobileServicePairs.map((pair, index) => (
            <SplideSlide key={index} className="pb-10 h-full flex justify-center">
              {/* Flex Container: Kartları alt alta dizer */}
              <div className="flex flex-col gap-4 h-full justify-center">
                {pair.map((card, innerIndex) => (
                  <div key={innerIndex} className="w-full">
                    <ServiceCard icon={card.icon} title={card.title} description={card.description} link={card.link} />
                  </div>
                ))}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* --- DESKTOP GRID (LG ve Üstü - Flex/Grid) --- */}
      <div className="hidden lg:flex max-w-7xl mx-auto flex-wrap justify-center items-start gap-5">
        {serviceData.map((card, index) => (
          <div key={index} className="service-card-desktop">
            <ServiceCard icon={card.icon} title={card.title} description={card.description} link={card.link} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
