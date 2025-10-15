import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import hero_gorseli from "@/assets/homepage/images/hero_gorseli.png";
import { Search, Phone, Rocket, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 py-8 font-inter max-md:py-4">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        {/* Sol Sütun: Metin ve Butonlar */}
        <div className="flex flex-col gap-y-2 max-md:items-center">
          <Badge icon={Rocket}>500+ KOBİ Bizi Tercih Etti</Badge>
          <h1 className="text-6xl max-w-xl leading-[120%] font-bold tracking-tighter text-primaryBlack max-lg:text-5xl max-md:text-center">
            Dijitalde <span className="text-primaryColor">Müşteri Kazanmaya</span> Bugün Başlayın
          </h1>
          <p className="text-primaryBlack max-md:text-center">
            Bisasoft Dijital Reklam Ajansı olarak, <strong>KOBİ'nizin</strong> dijitalde <strong>görünür olmasını</strong> ve <strong>doğru müşterilere</strong> ulaşmasını sağlıyoruz.
          </p>
          <div className="flex items-center gap-x-4 mt-4">
            <Button size="lg" variant="filledButton" iconLeft={Search}>
              Ücretsiz Analiz
            </Button>
            <Button size="lg" variant="emptyButton" iconLeft={Phone}>
              Hemen Görüş
            </Button>
          </div>
        </div>
        {/* Sağ Sütun: Görsel ve İstatistikler */}
        <div className="relative">
          <Image src={hero_gorseli} alt="Dijital pazarlama uzmanı" width={640} height={600} className="rounded-3xl w-full h-auto" priority />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
