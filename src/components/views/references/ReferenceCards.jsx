"use client";

import { useRef, useLayoutEffect } from "react";
import TitleBadge from "@/components/ui/TitleBadge";
import ReferenceCard from "@/components/shared/ReferenceCard";
import { referenceData } from "../../../../data/reference-data";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ReferenceCards = () => {
  const container = useRef(null);

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

      tl.from(".ref-header", { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" }).from(".ref-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

      tl.from(
        ".ref-card-item",
        {
          y: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.4",
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="w-full h-full flex flex-col justify-center items-stretch gap-8 max-w-7xl mx-auto pb-5 font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <div className="ref-header">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor px-1">Neden</span>
              Bizi Tercih Etmelisiniz
            </p>
          </TitleBadge>
        </div>
        <h2 className="ref-title w-full text-4xl font-bold text-primaryBlack text-center max-md:text-3xl">
          Dijitalde
          <span className="text-primaryColor mx-1">Müşteri Kazanmaya</span> Bugün Başlayın
        </h2>
      </div>

      <div className="flex justify-center items-stretch flex-wrap gap-4">
        {referenceData.map((card, index) => (
          <div key={index} className="ref-card-item flex">
            <ReferenceCard image={card.image} title={card.title} description={card.description} customerReview={card.customerReview} link={card.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferenceCards;
