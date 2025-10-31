import { CircleQuestionMark } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
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

        {totalPages > 1 && (
          <Pagination className="justify-start">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={handlePrevious} disabled={currentPage === 1} style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive={currentPage === 1} onClick={() => setCurrentPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
              {totalPages > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {totalPages > 1 && (
                <PaginationItem>
                  <PaginationLink href="#" isActive={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext onClick={handleNext} disabled={currentPage === totalPages} style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default FaqAccordions;
