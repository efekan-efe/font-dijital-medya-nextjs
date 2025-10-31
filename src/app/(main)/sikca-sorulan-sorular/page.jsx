"use client";

import { useState } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FaqCategories from "@/components/views/faq/FaqCategories";
import FaqSearch from "@/components/views/faq/FaqSearch";
import NewIdeaIcon from "@/components/icons/NewIdeaIcon";
import RocketIcon from "@/components/icons/RocketIcon";
import { Megaphone, MousePointerClick, PanelsTopLeft, SearchCheck } from "lucide-react";
import FaqAccordions from "@/components/views/faq/FaqAccordions";
import FaqCallUs from "@/components/ui/FaqCallUs";
import { faqData } from "../../../../data/dummy-faq";

export default function Faq() {
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
    {
      title: "Tümü",
      icon: "",
    },
    {
      title: "Dijital Pazarlama",
      icon: <RocketIcon className="fill-none w-5" />,
    },
    {
      title: "Web Tasarım",
      icon: <PanelsTopLeft className="fill-none w-5" />,
    },
    {
      title: "Kurumsal Kimlik",
      icon: <NewIdeaIcon className="fill-none w-5" />,
    },
    {
      title: "Arama Motoru Optimizasyonu",
      icon: <SearchCheck className="fill-none w-5" />,
    },
    {
      title: "Sosyal Medya Yönetimi",
      icon: <Megaphone className="fill-none w-5" />,
    },
    {
      title: "Reklam Yönetimi",
      icon: <MousePointerClick className="fill-none w-5" />,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === "Tümü" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-inter pb-10">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <div className="flex flex-col gap-10 mt-10 px-2 max-md:gap-4">
        <FaqSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="w-full max-w-7xl mx-auto grid grid-cols-[350px_1fr] gap-2.5 max-md:flex max-md:flex-col">
          <FaqCategories faqCategoryData={faqCategoryData} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <FaqAccordions filteredFaqs={filteredFaqs} />
        </div>
        <FaqCallUs />
      </div>
    </div>
  );
}
