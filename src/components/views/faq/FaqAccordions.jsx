"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { CircleQuestionMark, ChevronLeft, ChevronRight } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FaqAccordions = ({ filteredFaqs }) => {
  const container = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredFaqs]);

  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const faqsToDisplay = filteredFaqs.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // GSAP: Liste her değiştiğinde (sayfa veya filtre) animasyon çalışsın
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Accordion itemları
      gsap.fromTo(
        ".faq-item-anim",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1, // Sırayla gelme efekti
          ease: "power2.out",
          overwrite: "auto", // Önceki animasyonu ezerek yenisini başlatır
        }
      );
    }, container);

    return () => ctx.revert();
  }, [faqsToDisplay]); // Bağımlılık: Gösterilen SSS'ler değiştiğinde çalışır

  return (
    <div ref={container} className="w-full border border-primaryColor rounded-t-2xl p-5 bg-[#DBD4F5]/25 flex flex-col gap-5">
      <div className="flex justify-start items-center gap-2">
        <CircleQuestionMark className="stroke-primaryColor" />
        <h3 className="font-semibold text-2xl leading-7 text-primaryColor">Sorular ve Cevaplar</h3>
      </div>

      <div className="flex flex-col gap-5">
        {faqsToDisplay.length > 0 ? (
          faqsToDisplay.map((faq, index) => (
            // Animasyon için wrapper div ekledik
            <div key={index} className="faq-item-anim">
              <FaqAccordion faq={faq} />
            </div>
          ))
        ) : (
          <p className="text-primaryColor text-center animate-in fade-in">Arama kriterlerinize uygun sonuç bulunamadı.</p>
        )}

        {totalPages > 1 && (
          <nav aria-label="pagination" className="flex justify-start pt-2">
            <ul className="flex items-center gap-2">
              <li>
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="inline-flex items-center justify-center rounded-full h-9 w-9 border border-primaryColor/50 bg-white text-primaryColor transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Önceki sayfa</span>
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`inline-flex items-center justify-center rounded-full h-9 w-9 border border-primaryColor/50 text-sm font-medium transition-colors ${
                    currentPage === 1 ? "bg-primaryColor text-white" : "bg-white text-primaryColor hover:bg-gray-100"
                  }`}
                >
                  1
                </button>
              </li>

              {totalPages > 2 && (
                <li>
                  <span className="flex h-9 w-9 items-center justify-center text-primaryColor/50">...</span>
                </li>
              )}

              {totalPages > 1 && (
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(totalPages)}
                    className={`inline-flex items-center justify-center rounded-full h-9 w-9 border border-primaryColor/50 text-sm font-medium transition-colors ${
                      currentPage === totalPages ? "bg-primaryColor text-white" : "bg-white text-primaryColor hover:bg-gray-100"
                    }`}
                  >
                    {totalPages}
                  </button>
                </li>
              )}

              <li>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center justify-center rounded-full h-9 w-9 border border-primaryColor/50 bg-white text-primaryColor transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Sonraki sayfa</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default FaqAccordions;
