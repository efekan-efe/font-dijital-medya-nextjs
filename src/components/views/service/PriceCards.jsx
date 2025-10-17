import PriceCard from "@/components/shared/PriceCard";
import TitleBadge from "@/components/ui/TitleBadge";

const PriceCards = ({ priceCardData }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 max-w-7xl mx-auto">
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

      <div className="w-full flex justify-center items-stretch flex-wrap gap-4">
        {priceCardData.map((card, index) => (
          <PriceCard key={index} icon={card.icon} colors={card.colors} title={card.title} description={card.description} features={card.features} bestSeller={card.bestSeller} />
        ))}
      </div>
    </div>
  );
};

export default PriceCards;
