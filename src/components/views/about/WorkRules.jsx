"use client";

import { useRef, useLayoutEffect } from "react";
import RuleRow from "@/components/ui/RuleRow";
import TitleBadge from "@/components/ui/TitleBadge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkRules = ({ data }) => {
  const ilkelerimiz_kucuk_baslik = data?.ilkelerimiz_kucuk_baslik;
  const ilkelerimiz_buyuk_baslik = data?.ilkelerimiz_buyuk_baslik;

  const ilkelerimiz_baslik_1 = data?.ilkelerimiz_baslik_1;
  const ilkelerimiz_baslik_2 = data?.ilkelerimiz_baslik_2;
  const ilkelerimiz_baslik_3 = data?.ilkelerimiz_baslik_3;

  const ilkelerimiz_aciklama_1 = data?.ilkelerimiz_aciklama_1;
  const ilkelerimiz_aciklama_2 = data?.ilkelerimiz_aciklama_2;
  const ilkelerimiz_aciklama_3 = data?.ilkelerimiz_aciklama_3;

  const container = useRef(null);

  const workData = [
    {
      title: ilkelerimiz_baslik_1,
      description: ilkelerimiz_aciklama_1,
    },
    {
      title: ilkelerimiz_baslik_2,
      description: ilkelerimiz_aciklama_2,
    },
    {
      title: ilkelerimiz_baslik_3,
      description: ilkelerimiz_aciklama_3,
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
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
      }).from(
        ".rule-card-wrapper",
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex flex-col gap-12 px-2 max-w-7xl mx-auto font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="rules-header">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium" dangerouslySetInnerHTML={{ __html: ilkelerimiz_kucuk_baslik }}></p>
          </TitleBadge>
        </div>
        <h2 className="rules-header w-full text-4xl font-bold text-primaryBlack text-center max-w-xl" dangerouslySetInnerHTML={{ __html: ilkelerimiz_buyuk_baslik }}></h2>
      </div>

      <div className="flex justify-center items-start flex-wrap gap-8">
        {workData.map((work, index) => (
          <div key={index} className="rule-card-wrapper">
            <RuleRow index={index} title={work.title} description={work.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkRules;
