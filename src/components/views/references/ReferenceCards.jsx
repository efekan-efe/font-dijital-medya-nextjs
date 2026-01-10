import TitleBadge from "@/components/ui/TitleBadge";
import ReferenceCard from "@/components/shared/ReferenceCard";
import { referenceData } from "../../../../data/reference-data";

const ReferenceCards = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-stretch gap-8 max-w-7xl mx-auto pb-5 font-inter">
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

      <div className="flex justify-center items-stretch flex-wrap gap-4">
        {referenceData.map((card, index) => (
          <ReferenceCard key={index} image={card.image} title={card.title} description={card.description} customerReview={card.customerReview} link={card.link} />
        ))}
      </div>
    </div>
  );
};

export default ReferenceCards;
