"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Icons

// Web Hizmetleri
import EcommerceIcon from "../icons/EcommerceIcon";
import EcommerceManagementIcon from "../icons/EcommerceManagementIcon";
import LandingpageIcon from "../icons/LandingpageIcon";
import BlogWebsiteIcon from "../icons/BlogWebsiteIcon";
import NewsWebsiteIcon from "../icons/NewsWebsiteIcon";
import EducationWebsiteIcon from "../icons/EducationWebsiteIcon";
import WebDesignIcon from "../icons/WebDesignIcon";

// Dijital Pazarlama
import DigitalConsultingIcon from "../icons/DigitalConsultingIcon";
import SocialMediaManagementIcon from "../icons/SocialMediaManagementIcon";
import GoogleAdsIcon from "../icons/GoogleAdsIcon";
import SocialMediaAdsIcon from "../icons/SocialMediaAdsIcon";
import SearchEngineOptIcon from "../icons/SearchEngineOptIcon";

// Diğer Hizmetler
import AppointmentSystemIcon from "../icons/AppointmentSystemIcon";
import QrMenuSystemIcon from "../icons/QrMenuSystemIcon";
import BrandIdentityIcon from "../icons/BrandIdentityIcon";
import Link from "next/link";

const ServiceHeader = ({ isDropdown = false }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!isDropdown) return; // Only animate when used as dropdown

    const cards = cardsRef.current;

    // Staggered entrance animation for cards
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.04,
        ease: "power2.out",
        delay: 0.1,
      }
    );
  }, [isDropdown]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Hover animations for all cards
    cards.forEach((card) => {
      if (!card) return;

      const icon = card.querySelector(".service-icon");
      const title = card.querySelector(".service-title");
      const description = card.querySelector(".service-description");

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -4,
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(icon, {
          scale: 1.1,
          rotate: 5,
          duration: 0.3,
          ease: "back.out(1.7)",
        });

        gsap.to([title, description], {
          x: 3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to([title, description], {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const services = {
    webServices: [
      {
        title: "E-Ticaret Sitesi Kurulumu",
        description: "Online satış için e-ticaret altyapısı",
        icon: <EcommerceIcon />,
        link: "/e-ticaret-web-sitesi-kurulumu/",
      },
      {
        title: "E-Ticaret Sitesi Yönetimi",
        description: "Stok, sipariş ve müşteri yönetimi hizmeti",
        icon: <EcommerceManagementIcon />,
        link: "/e-ticaret-web-sitesi-yonetimi/",
      },
      {
        title: "Kurumsal Web Sitesi",
        description: "Profesyonel şirket tanıtımı için web sitesi",
        icon: <LandingpageIcon />,
        link: "/kurumsal-web-sitesi/",
      },
      {
        title: "Blog Web Sitesi",
        description: "İçerik paylaşımı için optimize blog platformu",
        icon: <BlogWebsiteIcon />,
        link: "/blog-web-sitesi/",
      },
      {
        title: "Haber Web Sitesi",
        description: "Hızlı yayın için haber portal altyapısı",
        icon: <NewsWebsiteIcon />,
        link: "/haber-web-sitesi/",
      },
      {
        title: "Eğitim Web Sitesi",
        description: "Online kurs ve eğitim yönetim sistemi",
        icon: <EducationWebsiteIcon />,
        link: "/egitim-web-sitesi/",
      },
      {
        title: "Web Tasarımı",
        description: "Modern, kullanıcı dostu ve mobil uyumlu tasarım",
        icon: <WebDesignIcon />,
        link: "/web-sitesi-tasarimi/",
      },
    ],
    digitalMarketing: [
      {
        title: "Dijital Pazarlama Danışmanlığı",
        description: "Hedef odaklı dijital büyüme stratejisi danışmanlığı",
        icon: <DigitalConsultingIcon />,
        link: "/dijital-pazarlama-danismanligi/",
      },
      {
        title: "Sosyal Medya Yönetimi",
        description: "İçerik üretimi ve sosyal medya planlaması",
        icon: <SocialMediaManagementIcon />,
        link: "/sosyal-medya-yonetimi/",
      },
      {
        title: "Google Reklam Yönetimi",
        description: "Google Ads ile hedefli reklam kampanyası",
        icon: <GoogleAdsIcon />,
        link: "/google-reklam-yonetimi/",
      },
      {
        title: "Sosyal Medya Reklamları",
        description: "Facebook, Instagram'da etkili reklam yönetimi",
        icon: <SocialMediaAdsIcon />,
        link: "/sosyal-medya-reklamlari/",
      },
      {
        title: "Arama Motoru Optimizasyonu",
        description: "Google'da üst sıra için SEO hizmeti",
        icon: <SearchEngineOptIcon />,
        link: "/arama-motoru-optimizasyonu-seo/",
      },
    ],
    otherServices: [
      {
        title: "Randevu Sistemi",
        description: "Otomatik randevu alma ve yönetim sistemi",
        icon: <AppointmentSystemIcon />,
        link: "/randevu-ve-rezervasyon-sistemi/",
      },
      {
        title: "QR Menü",
        description: "Restoranlar için temassız dijital menü çözümü",
        icon: <QrMenuSystemIcon />,
        link: "/qr-menu/",
      },
      {
        title: "Kurumsal Kimlik",
        description: "Logo ve kurumsal tasarım kimlik paketi",
        icon: <BrandIdentityIcon />,
        link: "/kurumsal-kimlik/",
      },
    ],
  };

  return (
    <div ref={containerRef} className={`w-full mx-auto px-4 font-inter ${isDropdown ? "py-4" : "py-6"}`}>
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Web Hizmetleri */}
          <div className={`bg-white rounded-2xl p-4 ${!isDropdown ? "shadow-lg border border-gray-100" : ""}`}>
            <h2 className="text-lg shadow-sm rounded-2xl p-1 px-5 w-fit border border-gray-100  font-bold mb-4 text-gray-900">Web Hizmetleri</h2>
            <div className="space-y-2">
              {services.webServices.map((service, index) => (
                <Link href={service.link} key={index} ref={addToRefs} className="flex items-start gap-3 py-2 px-2 rounded-lg cursor-pointer transition-all duration-300">
                  <div className="fill-none service-icon flex-shrink-0 w-11 h-11 p-2.5 bg-softPink rounded-xl flex items-center justify-center shadow-sm">{service.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="service-title text-[15px] font-semibold text-gray-900 leading-tight">{service.title}</h3>
                    <p className="service-description text-[13px] text-gray-600 leading-relaxed mt-0.5">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dijital Pazarlama */}
          <div className={`bg-white rounded-2xl p-4 ${!isDropdown ? "shadow-lg border border-gray-100" : ""}`}>
            <h2 className="text-lg shadow-sm rounded-2xl p-1 px-5 w-fit border border-gray-100  font-bold mb-4 text-gray-900">Dijital Pazarlama</h2>
            <div className="space-y-2">
              {services.digitalMarketing.map((service, index) => (
                <Link href={service.link} key={index} ref={addToRefs} className="flex items-start gap-3 py-2 px-2 rounded-lg cursor-pointer transition-all duration-300">
                  <div className="fill-none service-icon flex-shrink-0 w-11 h-11 p-2.5 bg-softPink rounded-xl flex items-center justify-center shadow-sm">{service.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="service-title text-[15px] font-semibold text-gray-900 leading-tight">{service.title}</h3>
                    <p className="service-description text-[13px] text-gray-600 leading-relaxed mt-0.5">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Diğer Hizmetler */}
          <div className={`bg-white rounded-2xl p-4 ${!isDropdown ? "shadow-lg border border-gray-100" : ""}`}>
            <h2 className="text-lg shadow-sm rounded-2xl p-1 px-5 w-fit border border-gray-100  font-bold mb-4 text-gray-900">Diğer Hizmetler</h2>
            <div className="space-y-2">
              {services.otherServices.map((service, index) => (
                <Link href={service.link} key={index} ref={addToRefs} className="flex items-start gap-3 py-2 px-2 rounded-lg cursor-pointer transition-all duration-300">
                  <div className="fill-none service-icon flex-shrink-0 w-11 h-11 p-2.5 bg-softPink rounded-xl flex items-center justify-center shadow-sm">{service.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="service-title text-[15px] font-semibold text-gray-900 leading-tight">{service.title}</h3>
                    <p className="service-description text-[13px] text-gray-600 leading-relaxed mt-0.5">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
