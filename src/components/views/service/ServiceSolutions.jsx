import RuleRow from "@/components/ui/RuleRow";
import TitleBadge from "@/components/ui/TitleBadge";

const ServiceSolutions = ({ solutionData }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 px-2">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Neden</span>
            Bizi Tercih Etmelisiniz
          </p>
        </TitleBadge>
        <h1 className="w-full text-4xl font-bold text-primaryBlack text-center max-md:text-3xl">
          Dijitalde
          <span className="text-primaryColor mx-1">Müşteri Kazanmaya</span> Bugün Başlayın
        </h1>
      </div>

      <div className="w-full flex justify-start items-start flex-wrap gap-3 gap-y-4">
        {solutionData.map((solution, index) => (
          <RuleRow className="min-w-[400px] w-full max-[450px]:min-w-0" key={index} icon={solution.icon} title={solution.title} description={solution.description} iconClassName="stroke-0" />
        ))}
      </div>
    </div>
  );
};

export default ServiceSolutions;
