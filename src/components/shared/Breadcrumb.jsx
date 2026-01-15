"use client";

import { useLayoutEffect, useRef } from "react";
import breadcrumbImg from "@/assets/images/breadcrumb_background.webp";
import TitleBadge from "../ui/TitleBadge";
import { CustomButton } from "../ui/CustomButton";
import { Phone, Search } from "lucide-react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Breadcrumb = ({ badgeContent, titleContent, search, searchTerm, onSearchChange }) => {
  const container = useRef(null);

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

      tl.from(".crumb-badge", { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".crumb-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".crumb-search", { scale: 0.9, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
        .from(".crumb-btns", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} style={{ backgroundImage: `url(${breadcrumbImg.src})` }} className="w-full font-inter bg-cover bg-center bg-no-repeat py-20 px-4 max-md:py-12">
      <div className="w-full flex flex-col justify-center items-center gap-1 max-md:text-sm">
        <div className="crumb-badge">
          <TitleBadge>{badgeContent}</TitleBadge>
        </div>
        <h1 className="crumb-title text-4xl font-bold text-primaryBlack max-w-2xl mx-auto text-center leading-tight max-md:text-3xl max-sm:text-2xl">{titleContent}</h1>
      </div>

      {search && (
        <div className="crumb-search pt-3 pb-1 w-full max-w-[400px] mx-auto relative bg-white rounded-full flex justify-center items-center mt-4">
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-6 translate-y-[-50%] translate-x-[-50%] stroke-primaryColor" />
            <input value={searchTerm} onChange={onSearchChange} className="w-full border-2 border-primaryColor rounded-full h-12 py-3 px-4 pl-12 outline-primaryColor" type="text" name="blogArama" placeholder="Ara..." id="blogArama" />
          </div>
        </div>
      )}

      <div className="crumb-btns flex justify-center items-center gap-4 mt-8 max-sm:flex-col max-sm:gap-2">
        <CustomButton href="/#analysisForm" size="lg" variant="filledButton" iconLeft={Search} className={"max-md:text-sm py-2"}>
          Ücretsiz Analiz
        </CustomButton>
        <CustomButton href="https://wa.me/+905323891658" size="lg" variant="emptyButton" iconLeft={Phone} className="bg-white max-md:text-sm py-2">
          Hemen Görüş
        </CustomButton>
      </div>
    </div>
  );
};

export default Breadcrumb;
