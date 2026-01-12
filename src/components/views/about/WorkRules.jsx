"use client";

import { useRef, useLayoutEffect } from "react";
import RuleRow from "@/components/ui/RuleRow";
import TitleBadge from "@/components/ui/TitleBadge";
import { FileText, Code, Sparkle } from "lucide-react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkRules = () => {
  const container = useRef(null);

  const workData = [
    {
      title: "Profesyonel Şeffaf ve Planlı Süreç Yönetimi",
      description: "Dijital yolculuğumuzun her adımını kurguluyor, kısa, orta ve uzun vadeli harita oluşturuyor, tüm operasyonel süreci bu plana göre onayınız dahilinde yönetiyoruz.",
    },
    {
      title: "Veri Odaklı ve Sonuç Bazlı Stratejiler",
      description: "Verileri analiz ederek, dijital görünürlüğünüzü sadece tıklamaya değil, satışa dönüştürüyoruz. Tahmini değil, somut ve ölçülebilir sonuçlar üretiyoruz.",
    },
    {
      title: "İş Ortağı Bilinciyle Sürekli Destek",
      description: `Sizi uzun vadeli iş ortağımız olarak görüyoruz. Her an ulaşılabilir ekibimiz ve proaktif çözümlerimizle, büyüme sürecinizi kesintisiz destekliyoruz.`,
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%", // Biraz daha erken başlasın
          toggleActions: "play none none reverse",
        },
      });

      // 1. Başlık Alanı
      tl.from(".rules-header", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
        // 2. Kartların Sırayla Gelişi
        .from(
          ".rule-card-wrapper",
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // Kartlar arası 0.2sn bekleme
            ease: "back.out(1.7)", // Yaylanma efekti
          },
          "-=0.4"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex flex-col gap-12 px-2 max-w-7xl mx-auto font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="rules-header">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor px-1">Dijital Dünya</span>
              Trendlerini Kaçırmayın
            </p>
          </TitleBadge>
        </div>
        <h1 className="rules-header w-full text-4xl font-bold text-primaryBlack text-center max-w-xl">
          <span className="text-primaryColor mx-1">100% Müşteri Memnuniyeti</span> Sağlayan <span className="text-primaryColor mx-1">İlkelerimiz</span>
        </h1>
      </div>

      <div className="flex justify-center items-start flex-wrap gap-8">
        {workData.map((work, index) => (
          // GSAP için wrapper div: 'rule-card-wrapper'
          <div key={index} className="rule-card-wrapper">
            <RuleRow index={index} title={work.title} description={work.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkRules;
