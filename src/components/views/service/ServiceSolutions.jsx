"use client";

import RuleRow from "@/components/ui/RuleRow";
import TitleBadge from "@/components/ui/TitleBadge";

const ServiceSolutions = ({ solutionData }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Size Özel</span>
            Çözümlerimiz
          </p>
        </TitleBadge>
        <h2 className="text-3xl font-bold text-center">İhtiyacınıza Yönelik Stratejiler</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
        {solutionData.map((item, i) => (
          // DÜZELTME BURADA: index={i} eklendi
          <RuleRow key={i} index={i} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSolutions;
