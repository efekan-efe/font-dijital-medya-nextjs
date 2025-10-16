import hizmetYanGorsel from "@/assets/images/hizmet_detay_yan_gorsel.webp";
import Image from "next/image";
import TitleBadge from "./TitleBadge";
import serviceTick from "@/assets/icons/service_tick.svg";
import { Button } from "./Button";
import SparkleIcon from "../icons/SparkleIcon";

const ServiceInfo = () => {
  const serviceList = [
    "Özel Tasarım Çözümler",
    "SEO ve Dijital Pazarlama Desteği",
    "Mobil Uyumluluk",
    "İçerik Yönetimi ve Güncellemeler",
    "Entegre Çözümler",
    "Güvenlik ve Veri Koruma",
    "Performans Analizleri ve Raporlama",
    "Hızlı Yüklenme Süreleri",
  ];

  return (
    <div className="w-full flex justify-center items-center gap-2 max-w-7xl mx-auto font-inter">
      <div className="w-full">
        <Image width={546} src={hizmetYanGorsel} alt="hizmet" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col justify-center items-start gap-1 max-[960px]:items-center">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor px-1">Neden</span>
              Bizi Tercih Etmelisiniz
            </p>
          </TitleBadge>
          <h1 className="w-full text-4xl font-bold text-primaryBlack max-md:text-center">
            Dijitalde
            <span className="text-primaryColor mx-1">Müşteri Kazanmaya</span> Bugün Başlayın
          </h1>
        </div>

        <p className="text-[#12141D]/70">Bilişim ve yazılım sektörünü her alanıyla tanımak ve sektöre yönelik Ticaret Bakanlığı desteklerinde uzmanlaşmak. Kamu ve şirketler arasında köprü olmayı başarabilmek.</p>

        <ul className="list-none grid grid-cols-2 gap-2">
          {serviceList.map((service, index) => (
            <li key={index} className="flex justify-start items-center gap-1">
              <Image src={serviceTick} />
              <p className="text-primaryBlack">{service}</p>
            </li>
          ))}
        </ul>

        <Button className={"text-lg border border-white/50"} leftComponent={<SparkleIcon className="fill-white" />} rightComponent={<SparkleIcon className="fill-white" />} variant="filledButton" sizes="lg">
          Bizimle Yükselenler
        </Button>
      </div>
    </div>
  );
};

export default ServiceInfo;
