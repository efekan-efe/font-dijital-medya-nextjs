"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FaqCategories from "@/components/views/faq/FaqCategories";
import FaqSearch from "@/components/views/faq/FaqSearch";
import NewIdeaIcon from "@/components/icons/NewIdeaIcon";
import RocketIcon from "@/components/icons/RocketIcon";
import { Megaphone, MousePointerClick, PanelsTopLeft, SearchCheck } from "lucide-react";
import FaqAccordions from "@/components/views/faq/FaqAccordions";
import FaqCallUs from "@/components/ui/FaqCallUs";
import { faqData } from "../../../../data/dummy-faq";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Faq() {
  const container = useRef(null);

  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      Dostunuz
    </p>
  );
  const titleContent = (
    <>
      <span className="text-primaryColor px-1">Dijital Dönüşüm</span> Hakkında <br />
      Merak Ettikleriniz
    </>
  );

  const faqCategoryData = [
    { title: "Tümü", icon: "" },
    { title: "Dijital Pazarlama", icon: <RocketIcon className="fill-none w-5" /> },
    { title: "Web Tasarım", icon: <PanelsTopLeft className="fill-none w-5" /> },
    { title: "Kurumsal Kimlik", icon: <NewIdeaIcon className="fill-none w-5" /> },
    { title: "Arama Motoru Optimizasyonu", icon: <SearchCheck className="fill-none w-5" /> },
    { title: "Sosyal Medya Yönetimi", icon: <Megaphone className="fill-none w-5" /> },
    { title: "Reklam Yönetimi", icon: <MousePointerClick className="fill-none w-5" /> },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === "Tümü" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // GSAP: Ana blokların girişi
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

      // 1. Arama Çubuğu
      tl.from(".faq-search-wrapper", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        // 2. Alt Grid (Kategoriler ve Accordion)
        .from(
          ".faq-grid-wrapper",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="font-inter pb-10">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />

      <div className="flex flex-col gap-10 mt-10 px-2 max-md:gap-4">
        {/* GSAP Wrapper: faq-search-wrapper */}
        <div className="faq-search-wrapper">
          <FaqSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* GSAP Wrapper: faq-grid-wrapper */}
        <div className="faq-grid-wrapper w-full max-w-7xl mx-auto grid grid-cols-[350px_1fr] gap-2.5 max-md:flex max-md:flex-col">
          <FaqCategories faqCategoryData={faqCategoryData} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <FaqAccordions filteredFaqs={filteredFaqs} />
        </div>

        <FaqCallUs />
      </div>
    </div>
  );
}
