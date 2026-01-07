import Breadcrumb from "@/components/shared/Breadcrumb";
import ReferenceCards from "@/components/views/references/ReferenceCards";

export default function Referanslar() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      İlk Adımınız
    </p>
  );
  const titleContent = (
    <>
      Birlikte Büyüdüğümüz <br />
      <span className="text-primaryColor px-1">Markalar</span>
    </>
  );
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <ReferenceCards />
    </div>
  );
}
