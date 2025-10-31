// FaqAccordions.jsx

// 1. Adım: 'lucide-react' ikonlarını (ChevronLeft, ChevronRight) import edin
import { CircleQuestionMark, ChevronLeft, ChevronRight } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
// 2. Adım: shadcn/ui pagination import'unu SİLİN
// import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState, useEffect } from "react";

const FaqAccordions = ({ filteredFaqs }) => {
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

  return (
    <div className="w-full border border-primaryColor rounded-t-2xl p-5 bg-[#DBD4F5]/25 flex flex-col gap-5">
      <div className="flex justify-start items-center gap-2">
        <CircleQuestionMark className="stroke-primaryColor" />
        <h3 className="font-semibold text-2xl leading-7 text-primaryColor">Sorular ve Cevaplar</h3>
      </div>

      <div className="flex flex-col gap-5">
        {faqsToDisplay.length > 0 ? faqsToDisplay.map((faq, index) => <FaqAccordion faq={faq} key={index} />) : <p className="text-primaryColor text-center">Arama kriterlerinize uygun sonuç bulunamadı.</p>}

        {/* 3. Adım: shadcn/ui bileşenlerini HTML ve Tailwind ile değiştirin */}
        {totalPages > 1 && (
          <nav aria-label="pagination" className="flex justify-start">
            <ul className="flex items-center gap-2">
              {/* Önceki Butonu */}
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

              {/* Sayfa 1 */}
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`inline-flex items-center justify-center rounded-full h-9 w-9 border border-primaryColor/50 text-sm font-medium transition-colors ${
                    currentPage === 1
                      ? "bg-primaryColor text-white" // Aktif stil
                      : "bg-white text-primaryColor hover:bg-gray-100" // Aktif olmayan stil
                  }`}
                >
                  1
                </button>
              </li>

              {/* Üç nokta (...) */}
              {totalPages > 2 && (
                <li>
                  <span className="flex h-9 w-9 items-center justify-center text-primaryColor/50">...</span>
                </li>
              )}

              {/* Son Sayfa */}
              {totalPages > 1 && (
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(totalPages)}
                    className={`inline-flex items-center justify-center rounded-full h-9 w-9 border border-primaryColor/50 text-sm font-medium transition-colors ${
                      currentPage === totalPages
                        ? "bg-primaryColor text-white" // Aktif stil
                        : "bg-white text-primaryColor hover:bg-gray-100" // Aktif olmayan stil
                    }`}
                  >
                    {totalPages}
                  </button>
                </li>
              )}

              {/* Sonraki Butonu */}
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
