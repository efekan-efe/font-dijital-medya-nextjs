"use client"; // GSAP için zorunlu

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import fontLogo from "@/assets/icons/white_font_logo.svg";
import bizeUlasin from "@/assets/footerIcons/footer_bize_ulasin.svg";
import whatsapp from "@/assets/footerIcons/footer_whatsapp.svg";
import instagram from "@/assets/footerIcons/footer_instagram.svg";
import facebook from "@/assets/footerIcons/footer_facebook.svg";
import mail from "@/assets/footerIcons/footer_mail.svg";
import tiktok from "@/assets/footerIcons/footer_tiktok.svg";
import FooterLinkColumn from "../ui/FooterLinkColumn";
import { footerColumns } from "../../../data/footer-data";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const socialMediaData = [
  {
    icon: whatsapp,
    link: "/",
  },
  {
    icon: instagram,
    link: "/",
  },
  {
    icon: facebook,
    link: "/",
  },
  {
    icon: tiktok,
    link: "/",
  },
  {
    icon: mail,
    link: "/",
  },
];

const SocialLinks = () => (
  <div className="flex items-center gap-x-2 mt-3">
    {socialMediaData.map((social, index) => (
      <Link key={index} href={social.link} className="bg-primaryColor rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 transition-transform duration-300">
        {/* Ufak bir hover efekti de ekledim :) */}
        <Image src={social.icon} alt="sosyal medya ikonları" />
      </Link>
    ))}
  </div>
);

const Footer = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // Footer ekranın %85'ine girince başlasın (biraz daha erken)
          toggleActions: "play none none reverse",
        },
      });

      // 1. Sol Ana Sütun (Logo, açıklama, sosyal medya)
      tl.from(".footer-left-col", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        // 2. Link Sütunları (Sırayla gelir - Stagger)
        .from(
          ".footer-link-col",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15, // Sütunlar arası 0.15sn gecikme
            ease: "power2.out",
          },
          "-=0.4"
        ) // Sol sütun bitmeden başla
        // 3. En Alt Bar (Copyright kısmı)
        .from(
          ".footer-bottom-bar",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        ); // Linkler bitmek üzereyken başla
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={container} // Ref'i ana etikete verdik
      style={{
        background: "linear-gradient(108deg, #000, #2E2483)",
      }}
      className="text-white pt-16 pb-6 font-inter max-md:pt-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-12 max-[1150px]:grid-cols-3 max-[1150px]:gap-6 max-md:grid-cols-1">
          {/* Logo ve Hakkımızda (Sol Sütun) */}
          <div className="footer-left-col text-white flex flex-col gap-6 max-md:gap-3">
            <Image src={fontLogo} alt="Font Dijital Medya Logo" width={150} height={50} />
            <div>
              <p className="font-bold">Dijitalin Yeni Fontu</p>
              <p className="text-sm mt-2">Font Dijital Medya, markaların dijital dünyada güçlü bir varlık oluşturması için yenilikçi çözümler sunan, yaratıcı ve sonuç odaklı bir ajans.</p>
            </div>

            <div>
              <div className="flex justify-start items-center gap-2 max-md:hidden">
                <Image className="w-full h-full max-w-7" src={bizeUlasin} alt="Bize Ulaşın İkonu" />
                <h3 className="text-white font-bold text-2xl border-b-2 border-primaryColor">Bize Ulaşın</h3>
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Hizmetlerimiz, Hızlı Erişim ve İletişim (Link Sütunları) */}
          {footerColumns.map((column) => (
            // GSAP için 'footer-link-col' sınıfını ekledik. Mobilde gizlenme kuralı aynen duruyor.
            <div key={column.title} className={`footer-link-col ${column.title === "Hizmetlerimiz" ? "max-md:hidden" : ""}`}>
              <FooterLinkColumn icon={column.icon} color={column.color} title={column.title} items={column.items} />
            </div>
          ))}
        </div>

        {/* Copyright ve Hukuki Linkler (Alt Bar) */}
        {/* GSAP için 'footer-bottom-bar' sınıfını ekledik */}
        <div className="footer-bottom-bar mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-md:mt-4">
          <p>&copy; {new Date().getFullYear()} Font Dijital Medya. Tüm hakları saklıdır.</p>
          <div className="flex gap-x-4 mt-4 md:mt-0">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
