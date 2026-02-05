// components/showcase/TemplateShowcase.jsx
"use client";

import { useState, useRef, useLayoutEffect } from "react";
import TemplateCard from "./TemplateCard";
import LivePreviewModal from "./LivePreviewModal"; // Yeni modalı import ettik
import { categories, templates } from "../../../../data/template-data";
// ... (diğer importlar aynı kalabilir: TitleBadge, gsap vs.)
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TemplateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Modal Yönetimi için State
  const [previewData, setPreviewData] = useState({ isOpen: false, url: "", title: "" });

  const container = useRef(null);
  const filteredTemplates = activeCategory === "all" ? templates : templates.filter((t) => t.categoryId === activeCategory);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  // Önizleme Fonksiyonu
  const handlePreview = (url, title) => {
    // Demo linki '#' ise uyarı verelim veya açmayalım
    if (!url || url === "#") {
      alert("Bu temanın demosu yakında eklenecektir.");
      return;
    }
    setPreviewData({ isOpen: true, url, title });
  };

  return (
    <div ref={container} className="w-full max-w-[1400px] mx-auto px-4 py-10 font-inter min-h-screen">
      {/* MODAL BİLEŞENİ - Eğer açıksa render et */}
      {previewData.isOpen && <LivePreviewModal url={previewData.url} title={previewData.title} onClose={() => setPreviewData({ ...previewData, isOpen: false })} />}

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* SOL SIDEBAR (Kategoriler) - Aynen kalıyor */}
        <aside className="w-full lg:w-[280px] lg:sticky lg:top-2 flex-shrink-0 z-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-[9px] rounded-xl transition-all duration-200 whitespace-nowrap text-sm font-medium
                                    ${isActive ? "bg-primaryColor text-white shadow-md shadow-primaryColor/20" : "bg-transparent text-gray-600 hover:bg-gray-50 hover:text-primaryColor"}`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                    {cat.name}
                    {isActive && <span className="ml-auto hidden lg:block">→</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* SAĞ TARAF (Kartlar Grid) */}
        <main className="flex-1 w-full">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTemplates.map((item) => (
                <div key={item.id} className="animate-fadeIn">
                  <TemplateCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    features={item.features}
                    link={item.demoLink}
                    price={item.price}
                    onPreview={handlePreview} // Fonksiyonu prop olarak geçtik
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-64 flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500 font-medium">Bu kategori için henüz tasarım eklenmedi.</p>
              <button onClick={() => setActiveCategory("all")} className="text-primaryColor text-sm mt-2 underline">
                Tüm tasarımları gör
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Style blocks... */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TemplateShowcase;
