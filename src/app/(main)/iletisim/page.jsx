"use client";

import { useRef, useLayoutEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/views/contact/ContactForm";
import SocialMediaPanel from "@/components/views/contact/SocialMediaPanel";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Iletisim() {
  const container = useRef(null);

  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      Dostunuz
    </p>
  );
  const titleContent = (
    <>
      Dijital Dönüşümüzün İlk Adımı için <br />
      <span className="text-primaryColor px-1">Bize Ulaşın</span>
    </>
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Sol Sütun (Form + Sosyal Medya) - Soldan gelir
      tl.from(".contact-left-col", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        // 2. Harita - Sağdan gelir
        .from(
          ".contact-map-col",
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        ); // Sol sütun bitmeden başlasın
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="font-inter pb-10 px-2">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <div className="max-w-7xl mx-auto flex justify-center items-start gap-8 mt-10 max-[1130px]:flex-col">
        {/* Sol Sütun Wrapper */}
        <div className="contact-left-col w-full flex flex-col gap-8">
          <ContactForm />
          <SocialMediaPanel />
        </div>

        {/* Harita Wrapper */}
        <div className="contact-map-col w-full h-full">
          <iframe
            className="w-full min-h-[1220px] max-[1130px]:min-h-96 rounded-2xl shadow-lg border border-primaryColor/20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.969632836262!2d34.6293319!3d36.9144795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3110287413d%3A0x6336336336336336!2sMersin!5e0!3m2!1str!2str!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Not: iframe src kısmını senin verdiğin kod bozuk olduğu için (googleusercontent...) örnek bir Mersin haritası ile değiştirdim veya düzelttim. Kendi embed kodunu buraya koyabilirsin. */}
        </div>
      </div>
    </div>
  );
}
