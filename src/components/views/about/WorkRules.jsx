import RuleRow from "@/components/ui/RuleRow";
import TitleBadge from "@/components/ui/TitleBadge";
import { FileText, Code, Sparkle } from "lucide-react";

const WorkRules = () => {
  const workData = [
    {
      icon: FileText,
      title: "Simply Copy & Paste",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: Code,
      title: "Easy to Customize",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: Sparkle,
      title: "Made with TailwindCSS",
      description: "Many desktop publishing packages and web page editors now use for them.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-2 max-w-7xl mx-auto font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="w-full text-4xl font-bold text-primaryBlack text-center max-w-xl">
          <span className="text-primaryColor mx-1">100% Müşteri Memnuniyeti</span> Sağlayan <span className="text-primaryColor mx-1">İlkelerimiz</span>
        </h1>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8">
        {workData.map((work, index) => (
          <RuleRow key={index} icon={work.icon} title={work.title} description={work.description} />
        ))}
      </div>
    </div>
  );
};

export default WorkRules;
