import Breadcrumb from "@/components/shared/Breadcrumb";
import ReferenceSlider from "@/components/shared/ReferenceSlider";
import OurServices from "@/components/views/home/OurServices";

export default function Hizmetler() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      İlk Adımınız
    </p>
  );
  const titleContent = (
    <>
      <span className="text-primaryColor px-1">Dijital Başarınız</span> için <br /> Performans Odaklı
      <span className="text-primaryColor px-1">Web Çözümleri</span>
    </>
  );

  return (
    <main className="flex flex-col items-center justify-center gap-10 w-full font-inter">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <OurServices />
      <ReferenceSlider />
    </main>
  );
}
