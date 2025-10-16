import Breadcrumb from "@/components/shared/Breadcrumb";
import ServiceInfo from "@/components/ui/ServiceInfo";

export default function Hizmetler() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      İlk Adımınız
    </p>
  );
  const titleContent = (
    <h1 className="text-4xl font-bold text-primaryBlack max-w-2xl mx-auto text-center leading-tight">
      <span className="text-primaryColor px-1">Dijital Başarınız</span> için <br /> Performans Odaklı
      <span className="text-primaryColor px-1">Web Çözümleri</span>
    </h1>
  );

  return (
    <main className="flex flex-col items-center justify-center gap-10 w-full">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <ServiceInfo />
    </main>
  );
}
